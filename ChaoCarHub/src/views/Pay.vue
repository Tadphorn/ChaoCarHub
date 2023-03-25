<template>
    <div id="vapp" class="columns pt-5">
        <div class="column is-8 is-offset-4">
            <div class="columns is-flex is-flex-direction-column card font " style="width: 52%;">
                <h1 class="card_bill">ช่องทางการชำระเงิน</h1>
                <div class="column px-6">
                    <div class="control is-size-5">
                        <label class="radio">
                            ชำระผ่านบัตรเครดิต
                        </label>
                    </div>
                </div>
                <div class="column px-6 ">
                    <label>ชื่อบนบัตรเครดิต *</label>
                    <input v-model="name" class="input input_username " type="text " placeholder="Name "
                        :class="{ 'is-danger': errorbill.name }" @input="validateName()">
                    <span class="has-text-danger ertext ml-3 ">{{ errorbill.name }}</span>
                </div>
                <div class="column px-6 ">
                    <label>หมายเลขบัตร *</label>
                    <input v-model="numbercreditcard" class=" input input_kd " type="text " placeholder="0123456789012345 "
                        :class="{ 'is-danger': errorbill.numbercreditcard }" @input="validateNumbercreditcard()">
                    <span class="has-text-danger ertext ml-3 ">{{ errorbill.numbercreditcard }}</span>
                </div>

                <div class=" columns px-6 pt-2 ">
                    <div class="column ">
                        <label>วันหมดอายุ *</label>
                        <input v-model="expirationdate" class="input input_calendar " type="text " placeholder="ddmmyyyy "
                            :class="{ 'is-danger': errorbill.numbercreditcard }" @input="validateExpirationDate()">
                        <span class="has-text-danger ertext ml-3 ">{{ errorbill.expirationdate }}</span>
                    </div>
                    <div class=" column ">
                        <label>CVC *</label>
                        <input v-model="cvc" class="input " type="text " placeholder="XXXX "
                            :class="{ 'is-danger': errorbill.cvc }" @input="validateCvc()">
                        <span class="has-text-danger ertext ml-3 ">{{ errorbill.cvc }}</span>
                    </div>

                </div>

                <div class="column px-6 ">
                    <a @click="submitbill()"><button class="button is-fullwidth color_sign_blue font "
                            type="submit ">ยืนยันการชำระเงิน</button></a>
                    <p class="is-size-7 has-text-danger has-text-centered ">หมายเหตุ : หากยืนยันการชำระเงินสำเร็จแล้ว
                        คุณจะไม่สามารถยกเลิกการจองได้</p>
                </div>
                <div class="column px-6 ">
                    <p class="line "></p>
                </div>
                <div class="column px-6 "> 
                    <router-link to="/myrent"><button class="button is-fullwidth color_sign_white font "
                        type="submit ">ยกเลิกการชำระเงิน</button></router-link>
                    
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    name: 'valid_pay',
    data() {
        return {
            fname: '',
            lname: '',
            username: '',
            passw: '',
            passw2: '',
            phone: '',
            email: '',
            error: {
                fname: '',
                lname: '',
                username: '',
                passw: '',
                passw2: '',
                phone: '',
                email: '',
            },
            name: '',
            numbercreditcard: '',
            expirationdate: '',
            cvc: '',
            errorbill: {
                name: '',
                numbercreditcard: '',
                expirationdate: '',
                cvc: '',
            },
            bill: false,
            showname: '',
        }
    },
    methods: {
        tocheckout() {
            const myjson = JSON.stringify(res)
            localStorage.setItem("mycart", myjson)
        },
        validatefname() {
            if (this.fname === '') {
                this.error.fname = 'กรุณากรอกชื่อ'
                return
            }
            this.error.fname = ''
        },
        validatelname() {
            if (this.lname === '') {
                this.error.lname = 'กรุณากรอกนามสกุล'
                return
            }
            this.error.lname = ''
        },
        validateUsername() {
            if (this.username === '') {
                this.error.username = 'กรุณากรอกชื่อผู้ใช้'
                return
            }
            this.error.username = ''
        },
        validatePassw() {
            if (this.passw === '') {
                this.error.passw = 'กรุณากรอกรหัสผ่าน'
                return
            }

            if (this.passw.length < 6) {
                this.error.passw = 'รหัสผ่านห้ามน้อยกว่า 6 ตัวอักษร'
                return
            }
            this.error.passw = ''
        },
        validatePassw2() {
            if (this.passw2 === '') {
                this.error.passw2 = 'กรุณากรอกยืนยันรหัสผ่าน'
                return
            }

            if (this.passw2 !== this.passw) {
                this.error.passw2 = 'รหัสผ่านไม่ตรงกัน'
                return
            }

            this.error.passw2 = ''
        },
        validateEmail() {
            if (this.email === '') {
                this.error.email = 'กรุณากรอกอีเมล'
                return
            }
            this.error.email = ''
        },
        validatePhone() {
            if (this.phone === '') {
                this.error.phone = 'กรุณากรอกหมายเลขโทรศัพท์'
                return
            }
            if (this.phone.length !== 10) {
                this.error.phone = 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง'
                return
            }
            this.error.phone = ''
        },
        validateName() {
            if (this.name === '') {
                this.errorbill.name = 'กรุณากรอกชื่อบนบัตรเคดิต'
                return
            }
            this.errorbill.name = ''
        },
        validateNumbercreditcard() {
            if (this.numbercreditcard === '') {
                this.errorbill.numbercreditcard = 'กรุณากรอกหมายเลขบัตร'
                return
            }
            this.errorbill.numbercreditcard = ''
        },
        validateExpirationDate() {
            if (this.expirationdate === '') {
                this.errorbill.expirationdate = 'กรุณากรอกวันหมดอายุ'
                return
            }
            this.errorbill.expirationdate = ''
        },
        validateCvc() {
            if (this.cvc === '') {
                this.errorbill.cvc = 'กรุณากรอก CVC '
                return
            }

            this.errorbill.cvc = ''
        },
        submit() {
            this.validatefname()
            this.validatelname()
            this.validateUsername()
            this.validatePassw()
            this.validatePassw2()
            this.validateEmail()
            this.validatePhone()

            if (this.error.fname !== '' || this.error.lname !== '' || this.error.username !== '' || this.error.passw !== '' || this.error.passw2 !== '' || this.error.email !== '' || this.error.phone !== '') {
                alert('กรุณากรอกข้อมูลให้ถูกต้อง')
                return
            }
            alert('ลงทะเบียนสำเร็จ')
            location.href = "./sign_in.html"
        },
        submitbill() {
            this.validateName()
            this.validateNumbercreditcard()
            this.validateExpirationDate()
            this.validateCvc()

            if (this.errorbill.name !== '' || this.errorbill.numbercreditcard !== '' || this.errorbill.expirationdate !== '' || this.errorbill.cvc != '') {
                alert('กรุณากรอกข้อมูลให้ถูกต้อง')
                return
            }
            alert('ชำระเงินสำเร็จ')
            this.bill = true
            const myjson = JSON.stringify(this.bill)
            localStorage.setItem("mybill", myjson)
            location.href = "./MyRent"
        },
        //page me
        cusname() {
            this.validateUsername()
            this.validatePassw()
            if (this.error.username !== '' || this.error.passw !== '') {
                alert('กรุณากรอกข้อมูลให้ถูกต้อง')
                return
            }
            const myjson = JSON.stringify(this.username)
            localStorage.setItem("myname", myjson)

            location.href = "./me_checkout.html"
        }

    },
    // for me_checkout
    created() {
        this.showname = JSON.parse(localStorage.getItem("myname"))
        console.log(this.showname)
    }
}
</script>
