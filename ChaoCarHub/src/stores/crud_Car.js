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

  const showAlert = ref(false);
  const alertMessage = ref('');
  const confirmResult = ref(null);
  const carId = ref(0)

  async function showConfirmation(carBrand, carModel, car_id) {
    showAlert.value = true;
    alertMessage.value = `กรุณากดยืนยันการลบรถ ${carBrand} ${carModel} ออกจากระบบ`;
    carId.value = car_id
    // console.log("car id ", carId.value)
  };

  async function confirmdeleteCar(result) {
    confirmResult.value = result;
    showAlert.value = false;
    if (result) {
      // ถ้ากดตกลงก็จะลบ card
      try {
        axios.delete(`http://localhost:3000/car/${carId.value}`, {
          carId: carId.value
        })
        carvalue.value = carvalue.value.filter((car) => car.car_id !== carId.value)
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการลบข้อมูล', error);
      }
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
    showAlert,
    alertMessage,
    confirmResult,
    showConfirmation,
    confirmdeleteCar
  };
});
