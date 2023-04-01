<script setup>
import { UseCarStore } from "../../stores/TableCar";
import { computed, ref, reactive, onMounted } from "vue";
import router from "../../router";
const CarStore = UseCarStore();
onMounted(CarStore.FetchCar);

const carId = ref('')
const carImg = ref(
  "https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/yaris_2016-2019.png"
);
const carName = ref("Toyota Yaris");
const carBrand = ref("Toyota");
const carModel = ref("Yaris");
const carSeat = ref("5");
const carBag = ref("1");
const carRentPrice = ref("1200");

const onCreate = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    car_img: carImg.value,
    car_name: carName.value,
    car_brand: carBrand.value,
    car_model: carModel.value,
    car_seat: carSeat.value,
    car_bag: carBag.value,
    car_rentprice: carRentPrice.value,
  });

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
</script>

<template>
  <div class="p-2 has-text-centered">
    <h1 class="is-size-4 p-5"><b>เพิ่มรถ (เฉพาะรถที่ยังไม่มีในระบบ)</b></h1>
    <table style="width: 100%">
      <tr>
        <th>รูปรถ</th>
        <th>ชื่อรถ</th>
        <th>ยี่ห้อรถ</th>
        <th>รุ่นรถ</th>
        <th>จำนวนที่นั่ง</th>
        <th>จำนวนใส่กระเป๋า</th>
        <th>ราคา</th>
        <th>เพิ่มรถ</th>
      </tr>
      <tr>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carImg"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carName"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carBrand"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carModel"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carSeat"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carBag"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                v-model="carRentPrice"
                type="text"
                style="border-radius: 0px; border: 1px solid green"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="control">
            <button class="button is-success" @click="onCreate">Add</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="p-2 has-text-centered">
    <h1 class="is-size-4 p-5"><b>แก้ไขรถ (เฉพาะรถที่มีอยู่แล้วในระบบ)</b></h1>
    <table style="width: 100%">
      <tr>
        <th>รหัสรถ</th>
        <th>รูปรถ</th>
        <th>ชื่อรถ</th>
        <th>ยี่ห้อรถ</th>
        <th>รุ่นรถ</th>
        <th>จำนวนที่นั่ง</th>
        <th>จำนวนใส่กระเป๋า</th>
        <th>ราคา</th>
        <th>เพิ่มรถ</th>
      </tr>
      <tr>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="control">
            <button class="button is-warning">update</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="p-2 has-text-centered">
    <h1 class="is-size-4 p-5">
      <b>ตารางแสดงรายละเอียดรถทั้งหมดที่มีอยู่ในระบบ</b>
    </h1>
    <table style="width: 100%">
      <tr>
        <th>รหัสรถ</th>
        <th>รูปรถ</th>
        <th>ชื่อรถ</th>
        <th>ยี่ห้อรถ</th>
        <th>รุ่นรถ</th>
        <th>จำนวนที่นั่ง</th>
        <th>จำนวนใส่กระเป๋า</th>
        <th>ราคา</th>
        <th>สถานะรถ</th>
        <th>ลบรถ</th>
      </tr>
      <tr v-for="item in CarStore.carvalue" :key="item.car_id">
        
        <td>{{ item.car_id }}</td>
        <td>
          <div class="card-image px-2 pt-2">
            <figure class="image is-4by3">
              <img :src="item.car_img" alt="Placeholder image " />
            </figure>
          </div>
        </td>
        <td>{{ item.car_name }}</td>
        <td>{{ item.car_brand }}</td>
        <td>{{ item.car_model }}</td>
        <td>{{ item.car_seat }}</td>
        <td>{{ item.car_bag }}</td>
        <td>{{ item.car_rentprice }}</td>
        <td></td>
        <td class="has-text-danger">
          <div class="control pt-1">
            <button class="button is-danger" @click="onDelete(item.car_id)">delete</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
