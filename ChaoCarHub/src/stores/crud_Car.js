import { defineStore } from "pinia";
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
export const UsecrudCarStore = defineStore("car", () => {
  const carvalue = ref([]);
  const FetchCar = async () => {
    const fetchingData = await axios.get("http://localhost:3000/car");
    carvalue.value = fetchingData.data;
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
    deleteCar
  };
});
