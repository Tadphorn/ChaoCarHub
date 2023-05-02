import { defineStore } from 'pinia'
import axios from 'axios';
import { computed, ref, reactive, onMounted } from "vue";
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

export const UserentCarStore = defineStore('rent', () => {
  const router = useRouter()

  const brandcar = ["All", "Toyota", "Nissan", "Honda", "Mercedes Benz Sport", "Hyundai", "MG", "BMW",]
  const seatcar = ["2", "4", "5", "6", "7", "9"]
  const locationcar = ["สนามบินดอนเมือง", "สนามบินสุวรรณภูมิ", "สถานีรถไฟดอนเมือง", "ไอทีสแควร์", "BTS อนุสาวรีย์", "BTS อโศก", "BTS ช่องนนทรี", "ธรรมศาสตร์ รังสิต", "ฟิวเจอร์ปาร์ค รังสิต", "เซ็นทรัล อีสต์วิลล์", "แอร์พอร์ตลิงค์ ลาดกระบัง", "เซ็นทรัล พระราม 2", "แฟชั่น ไอซ์แลนด์"]

  //rent detail in localstorage
  const rentData = useLocalStorage('rentData', {})
  const rentInfo = reactive({
    timePickup: "",
    dayPickup: "",
    timeReturn: "",
    dayReturn: "",
    placePickup: "",
    placeReturn: "",
    amountDays: 0
  })
  
  const error = reactive({
    dayPickup: "",
    // timePickup: "",
    // timeReturn: "",
    incorrectDate: "",
    dayReturn: "",
  })
  //v-model select option
  const filBrand = ref('All')
  const filPrice = ref("0-20000")
  const filSeat = ref('4')



  //fetch single car 
  const carDetail = ref({})
  const fetchSingleCar = async(id) => {
    console.log(id)
    return (await axios.get(`http://localhost:3000/detailcar/${id}`)).data[0]
  }

  

  //search car
  const filterCar = ref([])
  async function searchCar() {
    requiredInputCheck()
    validateDateTime()
    console.log(!!error.dayPickup, 'or', !!error.dayReturn)
    if (!!error.dayPickup || !!error.dayReturn) {
      return
    }
    if (!!error.incorrectDate) {
      alert(error.incorrectDate)
      return
    }
    //store rentInfo in localstorage
    rentData.value = rentInfo
    const fetchingData = await axios.post("http://localhost:3000/search", {
      brand: filBrand.value,
      price: filPrice.value,
      seat: filSeat.value
    });
    filterCar.value = fetchingData.data;
    // console.log(filterCar.value)
    router.push('/showcar')
  }



  function requiredInputCheck() {
    if (rentInfo.dayPickup === "" || rentInfo.timePickup === "") {
      error.dayPickup = "กรุณากรอกวัน และเวลารับรถ";
      return;
    }
    if (rentInfo.dayReturn === "" || rentInfo.timeReturn === "") {
      error.dayReturn = "กรุณากรอกวัน และเวลาคืนรถ";
      return;
    }
    error.dayPickup = ""
    error.dayReturn = ""
  }

  function validateDateTime() {
    const currentDate = new Date()
    const rentDate = new Date(`${rentInfo.dayPickup}T${rentInfo.timePickup}`);
    //  console.log(rentDate)
    const returnDate = new Date(`${rentInfo.dayReturn}T${rentInfo.timeReturn}`);

    const diffCurrentRent = (rentDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
    //amount rent day
    rentInfo.amountDays = (returnDate.getTime() - rentDate.getTime()) / (1000 * 60 * 60 * 24);
    rentInfo.amountDays = rentInfo.amountDays.toFixed(0)
    // console.log(rentInfo.amountDays)
    if (rentDate < currentDate) {
      error.incorrectDate = "ห้ามเลือกวันในอดีต"
      return
    }
    if (diffCurrentRent < 1) {
      error.incorrectDate = "กรุณาจองล่วงหน้าอย่างน้อย 1-2 วัน"
      return
    }
    if (rentInfo.amountDays < 0) {
      error.incorrectDate = "กรุณาเลือกวันคืนรถ ที่ถัดจากวันรับรถ"
      return
    }
    if (rentInfo.amountDays < 1 && rentInfo.amountDays >= 0) {
      error.incorrectDate = "ระยะเวลาในการเช่าต้องมากกว่า 24 ชม."
      return
    }
    if (rentInfo.amountDays > 30) {
      error.incorrectDate = "ระยะเวลาในการเช่าห้ามเกิน 30 วัน"
      return
    }
    error.incorrectDate = ""
    //  console.log(`The difference between ${rentDate} and ${returnDate} is ${differenceInDays} days.`);
  }

  async function  rentThisCar(userId, carId){
    //update localStorage
    console.log("user_id", userId)
    const fetchingData =  await axios.post("http://localhost:3000/rent", {
      timePickup: rentData.value.timePickup,
      dayPickup: rentData.value.dayPickup,
      timeReturn: rentData.value.dayReturn,
      dayReturn: rentData.value.placePickup,
      placePickup: rentInfo.placePickup,
      placeReturn: rentInfo.placeReturn,
      amountDays: rentData.value.amountDays,
      carId: carId, 
      userId: userId
    });
    router.push('/myrent')
  }

  return {
    brandcar,
    seatcar,
    rentInfo,
    error,
    filBrand,
    filPrice,
    filSeat,
    searchCar,
    filterCar,
    fetchSingleCar,
    locationcar,
    rentData,
    validateDateTime,
    requiredInputCheck,
    carDetail,
    rentThisCar
  }
})