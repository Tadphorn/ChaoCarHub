import { defineStore } from "pinia";
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
export const UsecrudCarStore = defineStore("car", () => {
  const router = useRouter()

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

  //update delete
    const carIdd = ref('');
    const carCode = ref('');
    const carBrand = ref('');
    const carModel = ref('');
    const carSeat = ref('');
    const carBag = ref('');
    const carPrice = ref('');
    const carImageURL = ref('');
    const showAlertUpdate = ref(false);
    const fileImg = ref(null);
    const imageURL = ref(null);

   
    
      async function previewImage(event) {
        const file = event.target.files[0];
        fileImg.value = event.target.files[0];
        const maxFileSize = 1048576; // 1 MB file size limit
        if(file.size > maxFileSize){
            const sweet = await Swal.fire({
                icon: "error",
                title: "image size can not more than 1 MB",
                confirmButtonText: 'Close'
              })
              imageURL.value = null;

        } else if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
  
          reader.onload = () => {
            imageURL.value = reader.result;
          };
  
          reader.readAsDataURL(file);
        } else {
          imageURL.value = null;
          const sweet = await Swal.fire({
            icon: "error",
            title: "Invalid file. Please select an image.",
            confirmButtonText: 'Close'
          })
          
        }
      }

    const fetchCarEdit = async (cId) => {
        try {
            const response = await axios.get(`http://localhost:3000/car/${cId}`)
            .then((response) => {
            const carData = response.data[0];
            console.log(carData.car_id)
            carIdd.value = carData.car_id;
            carCode.value = carData.car_code;
            carBrand.value = carData.car_brand;
            carModel.value = carData.car_model;
            carSeat.value = carData.car_seat;
            carBag.value = carData.car_bag;
            carPrice.value = carData.car_rentprice;
            carImageURL.value = carData.car_img;

            showAlertUpdate.value = true;
            })

        } catch (error) {
            console.log(error);
        }
    };

    const confirmInsert = async (result) => {
        confirmResult.value = result;
        showAlertUpdate.value = false;

        if (result === true) {
            try {
                console.log('v',fileImg.value)
                let formData = new FormData();
                formData.append('car_code', carCode.value);
                formData.append('car_brand', carBrand.value);
                formData.append('car_model', carModel.value);
                formData.append('car_seat', carSeat.value);
                formData.append('car_bag', carBag.value);
                formData.append('car_rentprice', carPrice.value);
                formData.append('myImageCar', fileImg.value);

                const response = await axios.put(
                    `http://localhost:3000/updatecar/${carIdd.value}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                const sweet = Swal.fire({
                    icon: 'success',
                    title: 'อัพเดตรถสำเร็จแล้ว!',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#41BEB1',
                });

                router.push('/admin' );
            } catch (error) {
                console.log(error.message);
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
    showAlertDelete,
    alertMessage,
    confirmResult,
    showConfirmation,
    confirmdeleteCar,
    editCar,
    carupdate,
    carIdd,
    carCode,
    carBrand,
    carModel,
    carSeat,
    carBag,
    carPrice,
    carImageURL,
    showAlertUpdate,
    confirmResult,
    fetchCarEdit,
    confirmInsert,
    previewImage
  };
});
