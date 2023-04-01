<script setup>
import { UseCarStore } from "../../stores/TableCar";
import { computed, ref, reactive, onMounted } from "vue";

const CarStore = UseCarStore();
onMounted(CarStore.FetchCar);

const carIdAdd = ref("62");
const carImgAdd = ref(
  "https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/yaris_2016-2019.png"
);
const carNameAdd = ref("Toyota Yaris");
const carBrandAdd = ref("Toyota");
const carModelAdd = ref("Yaris");
const carSeatAdd = ref("5");
const carBagAdd = ref("1");
const carRentPriceAdd = ref("1200");

// function add car
const onCreate = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    car_img: carImgAdd.value,
    car_name: carNameAdd.value,
    car_brand: carBrandAdd.value,
    car_model: carModelAdd.value,
    car_seat: carSeatAdd.value,
    car_bag: carBagAdd.value,
    car_rentprice: carRentPriceAdd.value,
  });

  if (
    (carIdAdd.value != "",
    carImgAdd.value != "" &&
      carNameAdd.value != "" &&
      carBrandAdd.value != "" &&
      carModelAdd.value &&
      carSeatAdd.value != "" &&
      carBagAdd.value != "" &&
      carRentPriceAdd.value != "")
  ) {
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    alert("เพิ่มรถสำเร็จแล้ว");
    document.location.reload();
  } else {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  fetch("http://localhost:3000/", requestOptions)
    .then((response) => response.json())
    .then((result) => {})
    .catch((error) => console.log("error", error));
};

// function delete car
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
      alert(result.message);
    })
    .catch((error) => console.log("error", error));

  document.location.reload();
};

const carIdUpdate = ref("43");
const carImgUpdate = ref(
  "https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/yaris_2016-2019.png"
);
const carNameUpdate = ref("update");
const carBrandUpdate = ref("update");
const carModelUpdate = ref("update");
const carSeatUpdate = ref("6");
const carBagUpdate = ref("10");
const carRentPriceUpdate = ref("12007");
// function update car
const onUpdate = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    car_id: carIdUpdate.value,
    car_img: carImgUpdate.value,
    car_name: carNameUpdate.value,
    car_brand: carBrandUpdate.value,
    car_model: carModelUpdate.value,
    car_seat: carSeatUpdate.value,
    car_bag: carBagUpdate.value,
    car_rentprice: carRentPriceUpdate.value,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
    })
    .catch((error) => console.log("error", error));

  document.location.reload();
};
</script>

<template>
  <div class="p-2 has-text-centered">
    <div class="" >
      <table style="width: 100%">
        <tr>
          <th colspan="2">
            ขณะนี้มีรถอยู่ในระบบทั้งหมด {{ CarStore.carvalue.length }} คัน
            {{ car_id }}
          </th>
          <!-- <th v-for="(item, index) in CarStore.carvalue" :index="index">
            <div v-if="item.car_brand === 'Toyota'">{{ item}}</div>
          </th> -->
          <th>
            <div v-for="(item, index) in CarStore.carvalue">
              <div v-if="item.car_brand == 'Toyota'">
                {{ item.car_brand.length }}
              </div>
              <!-- {{ item.car_brand }} -->
            </div>
          </th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>43</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>57</td>
        </tr>
      </table>
    </div>

    <!-- Add Car -->
    <h1 class="is-size-4 p-5"><b>เพิ่มรถ (เฉพาะรถที่ยังไม่มีในระบบ)</b></h1>
    <h5 class="has-text-left">
      <b
        >เงื่อนไขการเพิ่มรถการเพิ่มรถ <br />
        1. รุ่นรถ Toyota รหัสรถขึ้นต้นด้วย 00 ต่อด้วยลำดับรถ ตัวอย่าง T001
        <br />
        2. รุ่นรถ Nissan รหัสรถขึ้นต้นด้วย 01 ต่อด้วยลำดับรถ ตัวอย่าง N001
        <br />
        3. รุ่นรถ Honda รหัสรถขึ้นต้นด้วย 02 ต่อด้วยลำดับรถ ตัวอย่าง H001</b
      >
    </h5>
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
                v-model="carIdAdd"
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
                v-model="carImgAdd"
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
                v-model="carNameAdd"
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
                v-model="carBrandAdd"
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
                v-model="carModelAdd"
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
                v-model="carSeatAdd"
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
                v-model="carBagAdd"
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
                v-model="carRentPriceAdd"
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
  <!-- Update Car -->
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
                v-model="carIdUpdate"
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
                v-model="carImgUpdate"
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
                v-model="carNameUpdate"
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
                v-model="carBrandUpdate"
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
                v-model="carModelUpdate"
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
                v-model="carSeatUpdate"
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
                v-model="carBagUpdate"
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
                v-model="carRentPriceUpdate"
                type="text"
                style="border-radius: 0px; border: 1px solid wheat"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="control">
            <button class="button is-warning" @click="onUpdate">update</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <!-- Select Car -->
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
        <th>action</th>
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
        <td class="has-text-danger p-2">
          <div class="control">
            <button class="button is-danger" @click="onDelete(item.car_id)">
              delete
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
