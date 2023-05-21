import { defineStore } from 'pinia'
import axios from "@/plugins/axios"
import { computed, ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useField } from 'vee-validate';
import { defineProps } from 'vue';


export const UsepaymentStore = defineStore('payment', () => {
    const router = useRouter()

    //all payment from user
    const paymentvalue = ref([]);
    const FetchPayment = async () => {
        const fetchingData = await axios.get("/userpayment");
        paymentvalue.value = fetchingData.data;
    };
    
    const name = ref("ทัตพร ต้นนารัตน์")
    const numbercreditcard = ref("0123456789123456")
    const expirationdate = ref("2026-01-12")
    const cvc = ref("999")
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
            errorbill.cvc = 'กรุณากรอก CVC'
            return
        }

        errorbill.cvc = ''
    }

    const rentId = ref(0)
    function getId(id) {
        rentId.value = id
        console.log("rentId", rentId.value)
        router.push('/pay')
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
        axios.post("/userpayment", {
            pay_cr_name: name.value,
            pay_cr_num: numbercreditcard.value,
            pay_cr_exp: expirationdate.value,
            pay_cr_cvc: cvc.value,
            r_id: rentId.value
        })
            .then((res) => {
                const sweet = Swal.fire({
                    icon: "success",
                    title: 'ชำระเงินสำเร็จ รอการตรวจสอบการชำระเงิน',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#41BEB1'
                })

                router.push('/myrent')
            })
            .catch((err) => {
                console.log(err)
                const sweet = Swal.fire({
                    icon: "warning",
                    title: 'กรุณากรอกข้อมูลที่ถูกต้อง',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#41BEB1'
                })
            });
    }

    const showAlertChecked = ref(false);
    const alertMessage = ref('');
    const confirmResult = ref(null);

    const pid = ref('')
    async function showConfirmation(name, payId) {
        showAlertChecked.value = true;
        pid.value = payId
        alertMessage.value = `คุณต้องการยืนยันการชำระเงินของคุณ ${name} หรือไม่?`;
    };

    async function confirmChecked(result) {
        confirmResult.value = result;
        showAlertChecked.value = false;
        if (result) {
          try {
            // console.log('payid', pid.value)
            const response = await axios.put(`/updatepayment/${pid.value}`);
            const sweet = Swal.fire({
              icon: "success",
              title: 'ยืนยันการชำระเงินสำเร็จแล้ว!', 
              confirmButtonText: 'OK',
              confirmButtonColor: '#41BEB1'
            })
            paymentvalue.value = paymentvalue.value.filter((pay) => pay.pay_id !== pid.value)
          } catch (error) {
            console.error(error);
          }
        }
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
        getId,
        rentId,
        showConfirmation,
        showAlertChecked,
        alertMessage,
        confirmResult,
        confirmChecked,
    }
})