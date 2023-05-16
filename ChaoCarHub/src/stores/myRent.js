import { defineStore } from 'pinia'
import axios from "@/plugins/axios"
// import axios from 'axios';
import { computed, ref, reactive, onMounted } from "vue";
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

export const UsemyrentStore = defineStore('myrent', () => {
  const router = useRouter()

  const mycar = ref([])
  const checkoutCar = ref([])
  const pickupCar = ref([])
  const returnCar = ref([])
  const historyCar = ref([])
  // const checkout = ref([])
  async function myrentCar() {
    const token = localStorage.getItem('token')
    const fetchingData = await axios.get("myrent/car")
    mycar.value = fetchingData.data
    // console.log(mycar.value.length)
    //filter status
    checkoutCar.value = mycar.value.filter((car) => car.r_status === 'checkout')
    pickupCar.value = mycar.value.filter((car) => car.r_status === 'pickup')
    returnCar.value = mycar.value.filter((car) => car.r_status === 'return')
    historyCar.value = mycar.value.filter((car) => car.r_status === 'history')
  }

  const showAlert = ref(false);
  const alertMessage = ref('');
  const confirmResult = ref(null);

    async function showConfirmation(carBrand, carModel) {
      showAlert.value = true;
      alertMessage.value = `คุณต้องการยกเลิกการจองรถ ${carBrand} ${carModel}` ;
    };

    async function confirm(result, rentId) {
      confirmResult.value = result;
      showAlert.value = false;

      if (result) {
        // ถ้ากดตกลงก็จะลบ card
        const fetchingData = await axios.post("/myrent/remove", {
        rentId: parseInt(rentId) 
        })
        
        checkoutCar.value = checkoutCar.value.filter((car) => car.r_id !== rentId)
      } 
      console.log(rentId)
    }

  return {
    myrentCar,
    mycar,
    mycar,
    checkoutCar,
    pickupCar,
    returnCar,
    historyCar,
    showAlert,
    alertMessage,
    confirmResult,
    showConfirmation,
    confirm
  }
})