import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const UseCarStore = defineStore('car', () => {
  const signinData = ref([])
  const FetchSignin = async () => {
    const fetchingData = await axios.post('http://localhost:3000')
    carvalue.value = fetchingData.data;
  }

  const onCreate = (carData) => {
    console.log(carData)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

   
  };

  return {
    
  }
})
