import { defineStore } from "pinia";
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
export const UsecrudCarStore = defineStore("car", () => {
  const carvalue = ref([]);
  const FetchCar = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car");
    carvalue.value = fetchingData.data;
  };

  const toyotacar = ref([])
  const FetchCarToyota = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car/toyota");
    toyotacar.value = fetchingData.data;
  };

  const nissancar = ref([])
  const FetchCarNissan = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car/nissan");
    nissancar.value = fetchingData.data;
  };

  const hondacar = ref([])
  const FetchCarHonda = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car/honda");
    hondacar.value = fetchingData.data;
  };
  
  const othercar = ref([])
  const FetchCarOther = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car/other");
    othercar.value = fetchingData.data;
  };

  function deleteCar(carId) {
    // console.log(carId)
    const result = confirm(`Are you sure you want to delete this car ${carId}`);
    if (result) {
      axios
        .delete(`http://localhost:3000/car/${carId}`)
        .then((response) => {
          console.log(response);
          // this.$router.push({path: '/admin'})
        })
        .catch((error) => {
          error = error.message;
        });
    }
  }

  return {
    FetchCar,
    carvalue,
    FetchCarToyota,
    toyotacar,
    FetchCarNissan,
    nissancar,
    FetchCarHonda,
    hondacar,
    FetchCarOther,
    othercar,
    deleteCar
  };
});
