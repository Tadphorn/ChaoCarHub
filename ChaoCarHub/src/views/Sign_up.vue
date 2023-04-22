<script setup>
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
const fname = ref("ดวงกมล");
const lname = ref("พบสูงเนิน");
const username = ref("Chompoo");
const passw = ref("123456");
const passw2 = ref("123456");
const phone = ref("0624965299");
const email = ref("abc@gmaill.com");
const error = reactive({
  fname: "",
  lname: "",
  username: "",
  passw: "",
  passw2: "",
  phone: "",
  email: "",
});
function validatefname() {
  console.log(fname);
  if (fname.value === "") {
    error.fname = "กรุณากรอกชื่อ";
    return;
  }
  error.fname = "";
}
function validatelname() {
  if (lname.value === "") {
    error.lname = "กรุณากรอกนามสกุล";
    return;
  }
  error.lname = "";
}
function validateUsername() {
  if (username.value === "") {
    error.username = "กรุณากรอกชื่อผู้ใช้";
    return;
  }
  error.username = "";
}
function validatePassw() {
  if (passw.value === "") {
    error.passw = "กรุณากรอกรหัสผ่าน";
    return;
  }
  if (passw.length < 6) {
    error.passw = "รหัสผ่านห้ามน้อยกว่า 6 ตัวอักษร";
    return;
  }
  error.passw = "";
}
function validatePassw2() {
  if (passw2.value === "") {
    error.passw2 = "กรุณากรอกยืนยันรหัสผ่าน";
    return;
  }
  if (passw2.value !== passw.value) {
    error.passw2 = "รหัสผ่านไม่ตรงกัน";
    return;
  }
  error.passw2 = "";
}
function validateEmail() {
  if (email.value === "") {
    error.email = "กรุณากรอกอีเมล";
    return;
  }
  error.email = "";
}
function validatePhone() {
  if (phone.value === "") {
    error.phone = "กรุณากรอกหมายเลขโทรศัพท์";
    return;
  }
  if (phone.value.length !== 10) {
    error.phone = "กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง";
    return;
  }
  error.phone = "";
}
async function submit() {
  validatefname();
  validatelname();
  validateUsername();
  validatePassw();
  validatePassw2();
  validateEmail();
  validatePhone();
  if (
    error.fname !== "" ||
    error.lname !== "" ||
    error.username !== "" ||
    error.passw !== "" ||
    error.passw2 !== "" ||
    error.email !== "" ||
    error.phone !== ""
  ) {
    alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    return;
  }

  axios
    .post("http://localhost:3000/user/signup", {
        u_fname: fname.value,
        u_lname: lname.value,
        u_username: username.value,
        u_pass: passw.value,
        u_phone: phone.value,
        u_email: email.value,
    })
  
    .then((res) => {
      console.log(res)
      if(res.data.check === false){
        alert("This username is already exist");
      }
        alert("Sign up Success");
        // router.push('/')
        window.location.href = '/sign_in'
    })
    .catch((err) => {
      alert("Sign up Not Success");
      console.log(err)
    });
}
</script>
<template>
  <div class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center pt-0">
      <div>
        <div ALIGN="MIDDLE">
          <img
            src="https://media.discordapp.net/attachments/1072181252964233328/1076054960774598676/image-removebg-preview.png"
            height="320"
            width="420"
          />
        </div>
        <div class="columns is-flex is-flex-direction-column card2">
          <h1 class="th1">SIGN UP</h1>
          <br />
          <div class="columns is-multiline px-5">
            <div class="column is-half">
              <input
                v-model="fname"
                class="input bg_input"
                type="text"
                placeholder="First name "
                :class="{ 'is-danger': error.fname }"
                @input="validatefname()"
              />
              <span class="has-text-danger ertext ml-3">{{ error.fname }}</span>
            </div>
            <div class="column is-half">
              <input
                v-model="lname"
                class="input bg_input"
                type="text"
                placeholder="Last name "
                :class="{ 'is-danger': error.lname }"
                @input="validatelname()"
              />
              <span class="has-text-danger ertext ml-3">{{ error.lname }}</span>
            </div>
          </div>
          <div class="columns px-5">
            <div class="column">
              <input
                v-model="username"
                class="input input_username"
                type="text"
                placeholder="Username "
                :class="{ 'is-danger': error.username }"
                @input="validateUsername()"
              />
              <span class="has-text-danger ertext ml-3">{{
                error.username
              }}</span>
            </div>
          </div>

          <div class="columns is-multiline px-5">
            <div class="column is-half">
              <input
                v-model="passw"
                class="input input_password"
                type="password"
                placeholder="Password "
                :class="{ 'is-danger': error.passw }"
                @input="validatePassw()"
              />
              <span class="has-text-danger ertext ml-3">{{ error.passw }}</span>
            </div>
            <div class="column is-half">
              <input
                v-model="passw2"
                class="input input_password"
                type="password"
                placeholder="Confrim password "
                :class="{ 'is-danger': error.passw2 }"
                @input="validatePassw2()"
              />
              <span class="has-text-danger ertext ml-3">{{
                error.passw2
              }}</span>
            </div>
          </div>
          <div class="columns is-multiline px-5">
            <div class="column is-half">
              <input
                v-model="email"
                class="input input_email"
                type="text"
                placeholder="Email"
                :class="{ 'is-danger': error.email }"
                @input="validateEmail()"
              />
              <span class="has-text-danger ertext ml-3">{{ error.email }}</span>
            </div>
            <div class="column is-half">
              <input
                v-model="phone"
                class="input input_phone"
                type="text"
                placeholder="Phone "
                :class="{ 'is-danger': error.phone }"
                @input="validatePhone()"
              />
              <span class="has-text-danger ertext ml-3">{{ error.phone }}</span>
            </div>
          </div>
          <div class="column px-5">
            <!-- <router-link to="/sign_in"> -->
            <button
              @click="submit()"
              class="button is-fullwidth color_sign_blue"
              type="submit "
            >
              Sign up
            </button>
            <!-- </router-link> -->
          </div>
          <div class="column px-5">
            <p class="line"></p>
          </div>
          <div class="column px-5">
            <router-link to="/sign_in">
              <button class="button is-fullwidth color_sign_white">
                Sign in
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
