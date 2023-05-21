import { defineStore } from 'pinia'
import axios from "@/plugins/axios"
import { computed, ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'


export const UseregisterStore = defineStore('register', () => {

  const router = useRouter()

  const fname = ref("");
  const lname = ref("");
  const username = ref("chompoo");
  const passw = ref("123456");
  const passw2 = ref("");
  const phone = ref("");
  const email = ref("");
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
      return;
    }

    axios.post("/user/signup", {
      u_fname: fname.value,
      u_lname: lname.value,
      u_username: username.value,
      u_pass: passw.value,
      u_phone: phone.value,
      u_email: email.value,
      cf_password: passw2.value
    })

      .then((res) => {
        // console.log(res)
        if (res.data.check === false) {
          const sweet = Swal.fire({
            icon: 'error',
            title: 'Username is already exist',
            confirmButtonText: 'Close',
            confirmButtonColor: '#41BEB1'
          })
          return
        }
        const sweet = Swal.fire({
          icon: 'success',
          title: 'Sign up success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#41BEB1'
        })
        router.push('/')
        window.location.href = '/sign_in'
      })
      .catch((err) => {
        const sweet = Swal.fire({
          icon: 'error',
          title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
          confirmButtonText: 'Close',
          confirmButtonColor: '#41BEB1'
        })
        console.log(err.response.data)
      });
  }

  async function submitSignin() {
    validateUsername()
    validatePassw()
    if (error.username !== '' || error.passw !== '') {
      const sweet = Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        confirmButtonText: 'Close',
        confirmButtonColor: '#41BEB1'
      })
      return
    }
    axios.post("/user/signin", {
      username: username.value,
      password: passw.value
    })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        // this.$router.push({ path: "/" });
        console.log("ล็อกอินสำเร็จ")
        window.location.href = '/'
      })
      .catch(error => {
        console.log(error)
        const sweet = Swal.fire({
          icon: 'error',
          title: 'Incorrect username or password',
          confirmButtonText: 'Close',
          confirmButtonColor: '#41BEB1'
        })
      });
  }
  //get user from db
  const userProfile = ref({})
  async function getUser() {
    const token = localStorage.getItem('token')
    const fetchingData = await axios.get('/user/me')
    const { data } = fetchingData;
    // console.log(data)
    userProfile.value = data
    //check role
    if (userProfile.value.role === 'admin') {
      localStorage.setItem('isAdmin', true)
      console.log('hi admin')
    }
  }


  function onAuthChange() {
    const token = localStorage.getItem('token')
    if (token) {
      getUser()
    }
  }

  function logout() {
    console.log('logout')
    localStorage.removeItem('token')
    if (userProfile.value.role === 'admin') {
      localStorage.removeItem('isAdmin')
    } 3
    userProfile.value = null
    window.location.href = '/sign_in'
    // router.push('/sign_in')
  }

  const token = localStorage.getItem('token')
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
    logout,
    token
  }
})
