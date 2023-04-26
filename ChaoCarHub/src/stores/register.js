import { defineStore } from 'pinia'
import axios from 'axios';
import { computed, ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'

export const UseregisterStore = defineStore('register', () => {

  const router = useRouter()

  const fname = ref("ดวงกมล");
  const lname = ref("พบสูงเนิน");
  const username = ref("chompoo");
  const passw = ref("");
  const passw2 = ref("");
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
  async function submitSignup() {
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

    axios.post("http://localhost:3000/user/signup", {
      u_fname: fname.value,
      u_lname: lname.value,
      u_username: username.value,
      u_pass: passw.value,
      u_phone: phone.value,
      u_email: email.value,
    })

      .then((res) => {
        // console.log(res)
        if (res.data.check === false) {
          alert("This username is already exist");
        }
        alert("Sign up Success");
        router.push('/')
        window.location.href = '/sign_in'
      })
      .catch((err) => {
        alert("Sign up Not Success");
        console.log(err.response.data)
      });
  }

  async function submitSignin() {
    console.log("5555");
    validateUsername()
    validatePassw()
    if (error.username !== '' || error.passw !== '') {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง')
      return
    }
    const fetchingData = await axios.post("http://localhost:3000/user/signin", {
      username: username.value,
      password: passw.value
    });
    const token = fetchingData.data.token
    // console.log(token)
    localStorage.setItem('token', token)

    if (fetchingData.status === 200) {
      console.log("login")
      router.push('/myrent');
    }
  }

  const userProfile = ref({})
  async function getUser() {
    const token = localStorage.getItem('token')
    const fetchingData = await axios.get('http://localhost:3000/user/me', { headers: { Authorization: 'Bearer ' + token } })
    const { data } = fetchingData;
    console.log(data)
    userProfile.value = data
  }
  
  // get user information
  function onAuthChange() {
    const token = localStorage.getItem('token')
    if (token) {
      getUser()
    }
  }

  function logout(){
    console.log('logout')
    localStorage.removeItem('token')
    userProfile.value = null
    router.push('/sign_in')
   }
  

  return {
    fname,
    lname,
    username,
    passw,
    passw2,
    phone,
    email,
    error,
    validatefname,
    validatefname,
    validatelname,
    validateUsername,
    validatePassw,
    validatePassw2,
    validateEmail,
    validatePhone,
    submitSignup,
    submitSignin,
    onAuthChange,
    getUser,
    userProfile,
    logout
  }
})
