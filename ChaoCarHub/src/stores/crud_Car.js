import { defineStore } from "pinia";
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
import router from "../router";
import Swal from 'sweetalert2'
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

  const showAlertDelete = ref(false);
  const alertMessage = ref('');
  const confirmResult = ref(null);
  const carId = ref(0)

  async function showConfirmation(carBrand, carModel, car_id) {
    showAlertDelete.value = true;
    alertMessage.value = `กรุณากดยืนยันการลบรถ ${carBrand} ${carModel} ออกจากระบบ`;
    carId.value = car_id
    // console.log("car id ", carId.value)
  };

  async function confirmdeleteCar(result) {
    confirmResult.value = result;
    showAlertDelete.value = false;

    if (result) {
      // ถ้ากดตกลงก็จะลบ card
      try {
        axios.delete(`http://localhost:3000/car/${carId.value}`, {
          carId: carId.value
        })
        carvalue.value = carvalue.value.filter((car) => car.car_id !== carId.value)
        const sweet = Swal.fire({
          icon: "success",
          title: 'ลบรถสำเร็จแล้ว!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#41BEB1'
        })
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการลบข้อมูล', error);
      }
    }
  }

  const carupdate = ref([]);
  async function editCar(carId) {
    const fetchingData = await axios.get(`http://localhost:3000/car/${carId}`);
    carupdate.value = fetchingData.data;
    console.log(carupdate.value)
    
    // router.push('/tableupdatecar')
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
    showAlertDelete,
    alertMessage,
    confirmResult,
    showConfirmation,
    confirmdeleteCar,
    editCar,
    carupdate
  };
});
