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


  async function cancel(rentId) {
    console.log(rentId)
    const fetchingData = await axios.post("/myrent/remove", {
      rentId: parseInt(rentId)
    })
  }



  return {
    myrentCar,
    mycar,
    cancel,
    mycar,
    checkoutCar,
    pickupCar,
    returnCar,
    historyCar
  }
})