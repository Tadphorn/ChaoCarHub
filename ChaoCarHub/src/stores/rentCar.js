import { defineStore } from 'pinia'
import axios from 'axios';
import { computed, ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'

export const UserentCarStore = defineStore('rent', () => {
  const router = useRouter()

  const brandcar = ["All", "Toyota", "Nissan", "Honda", "Mercedes Benz Sport", "Hyundai", "MG", "BMW",]
  const seatcar = ["2", "4", "5", "6", "7", "9"]
  const  locationcar = ["สนามบินดอนเมือง", "สนามบินสุวรรณภูมิ", "สถานีรถไฟดอนเมือง", "ไอทีสแควร์", "BTS อนุสาวรีย์", "BTS อโศก", "BTS ช่องนนทรี", "ธรรมศาสตร์ รังสิต", "ฟิวเจอร์ปาร์ค รังสิต", "เซ็นทรัล อีสต์วิลล์", "แอร์พอร์ตลิงค์ ลาดกระบัง", "เซ็นทรัล พระราม 2", "แฟชั่น ไอซ์แลนด์"]

  const rentInfo = reactive({
    timePickup: "",
    dayPickup: "",
    timeReturn: "",
    dayReturn: "",
    placePickup: "",
    placeReturn: ""
  })
  const error = reactive({
    dayPickup: "",
    timePickup: "",
    timeReturn: "",
    dayReturn: "",
  })
  //v-model select option
  const filBrand = ref('Toyota')
  const filPrice = ref("0-20000")
  const filSeat = ref('4')

  //fetch single car  
  const carDetail = ref({})
  const fetchSingleCar = async (id) => {
    console.log(id)
    return (await axios.get(`http://localhost:3000/detailcar/${id}`)).data[0]
   }

  const CheckDaypickup = new Date(rentInfo.dayPickup);
  function validateRentDsend() {
    if (rentInfo.dayPickup === "" || rentInfo.timePickup === "") {
      error.dayPickup = "กรุณากรอกวันและเวลารับรถ";
      return;
    }
    const today = new Date();
    if (CheckDaypickup <= today) {
      error.dayPickup = "ห้ามเลือกวันในอดีต";
      return;
    }
    error.dayPickup = "";
  }

  function validateRentDreturn() {
    if (rentInfo.dayReturn === "" || rentInfo.timeReturn === "") {
      error.dayReturn = "กรุณากรอกวันและเวลาคืนรถ";
      return;
    }
    const CheckDayreturn = new Date(rentInfo.dayReturn);
    if (CheckDayreturn < CheckDaypickup) {
      error.dayReturn = "กรุณาเลือกวันหลังจากวันรับรถ";
      return;
    }
    error.dayReturn = "";
  }

  const filterCar = ref([])
  async function searchCar() {
    // validateRentDsend();
    // validateRentDreturn();
    // if (error.dayPickup !== "" || error.dayReturn !== "") {
    //   alert("กรุณากรอกวันที่ และเวลารับรถ/คืนรถ");
    //   return;
    // }
    const fetchingData = await axios.post("http://localhost:3000/search", {
      brand: filBrand.value,
      price: filPrice.value,
      seat: filSeat.value
    });
    filterCar.value = fetchingData.data;
    // console.log(filterCar.value)
    router.push('/showcar')
  }
  return {
    brandcar,
    seatcar,
    rentInfo,
    error,
    filBrand,
    filPrice,
    filSeat,
    validateRentDsend,
    validateRentDreturn,
    searchCar,
    filterCar,
    fetchSingleCar,
    locationcar
  }
})