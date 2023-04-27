import { defineStore } from 'pinia'
import axios from 'axios';
import { computed, ref, reactive, onMounted } from "vue";
export const UsepaymentStore = defineStore('payment', () => {

    const paymentvalue = ref([]);
    const FetchPayment = async () => {
        const fetchingData = await axios.get("http://localhost:3000/userpayment");
        paymentvalue.value = fetchingData.data;
    };

    const name = ref("ทัตพร ต้นนารัตน์")
    const numbercreditcard = ref("0123456789123")
    const expirationdate = ref("2026-01-12")
    const cvc = ref("9999")
    const errorbill = reactive({
        name: '',
        numbercreditcard: '',
        expirationdate: '',
        cvc: '',
    });

    function validateName() {
        if (name === '') {
            errorbill.name = 'กรุณากรอกชื่อบนบัตรเคดิต'
            return
        }
        errorbill.name = ''
    }

    function validateNumbercreditcard() {
        if (numbercreditcard === '') {
            errorbill.numbercreditcard = 'กรุณากรอกหมายเลขบัตร'
            return
        }
        errorbill.numbercreditcard = ''
    }

    function validateExpirationDate() {
        if (expirationdate === '') {
            errorbill.expirationdate = 'กรุณากรอกวันหมดอายุ'
            return
        }
        errorbill.expirationdate = ''
    }

    function validateCvc() {
        if (cvc === '') {
            errorbill.cvc = 'กรุณากรอก CVC '
            return
        }

        errorbill.cvc = ''
    }

    async function submitbill() {
        validateName()
        validateNumbercreditcard()
        validateExpirationDate()
        validateCvc()

        if (errorbill.name !== '' || errorbill.numbercreditcard !== '' || errorbill.expirationdate !== '' || errorbill.cvc != '') {
            alert('กรุณากรอกข้อมูลให้ถูกต้อง')
            return
        }

        axios.post("http://localhost:3000/userpayment", {
            pay_cr_name: name.value,
            pay_cr_num: numbercreditcard.value,
            pay_cr_exp: expirationdate.value,
            pay_cr_cvc: cvc.value,
            pay_amount: "ต้องดึงราคารวมมาใส่",
            pay_status: "In the midst of verification",
        })
            .then((res) => {
                // console.log(res)
                alert("ชำระเงินสำเร็จ");
                // router.push('/')
                window.location.href = '/myrent'
            })
            .catch((err) => {
                alert("ชำระเงินไม่สำเร็จ");
            });
    }

    return {
        paymentvalue,
        FetchPayment,
        name,
        numbercreditcard,
        expirationdate,
        cvc,
        errorbill,
        validateName,
        validateNumbercreditcard,
        validateExpirationDate,
        validateCvc,
        submitbill,
    }
})