import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const UseCarStore = defineStore('car', () => {
  const carvalue = ref([])
  const FetchCar = async () => {
    const fetchingData = await axios.get('http://localhost:3000/car')
    carvalue.value = fetchingData.data;
  }
  return {
    FetchCar,
    carvalue,
  }
})
