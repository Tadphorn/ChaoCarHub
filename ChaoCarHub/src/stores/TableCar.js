import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
export const UseCarStore = defineStore('car', () => {
  const carvalue = ref([])
  const FetchCar = async () => {
    const fetchingData = await axios.get('http://localhost:3000')
    carvalue.value = fetchingData.data;
  }

  const onCreate = (carData) => {
    console.log(carData)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(carData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message)
      })
      .catch((error) => console.log("error", error));
  
  };

  const onDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message)
      })
      .catch((error) => console.log("error", error));
  };

  return {
    FetchCar,
    carvalue,
    onCreate,
    onDelete
  }
})
