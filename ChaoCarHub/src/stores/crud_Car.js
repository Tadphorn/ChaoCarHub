import { defineStore } from "pinia";
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
export const UsecrudCarStore = defineStore("car", () => {
  const carvalue = ref([]);
  const FetchCar = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car");
    carvalue.value = fetchingData.data;
  };

  const carCode = ref("TEST001");
  const carBrand = ref("Toyota");
  const carModel = ref("Yaris"); 
  const carSeat = ref("5");
  const carBag = ref("1");
  const carPrice = ref("1200");

  const addCar = async () => {
    console.log('hiiiiii')
    const fetchingData = await axios.post("http://localhost:3000/car", {
      car_code: carCode.value,
      car_brand: carBrand.value,
      car_model: carModel.value,
      car_seat: carSeat.value,
      car_bag: carBag.value,
      car_rentprice: carPrice.value,
    });
    if(fetchingData.data.message == 'success'){
      alert('New car added')
    }
  };

  return {
    FetchCar,
    carvalue,
    carCode,
    carBrand,
    carModel,
    carSeat,
    carBag,
    carPrice,
    addCar
  };
});
