<script>
export default {
  methods: {
    showSelectImage(image) {
      // for preview only
      return URL.createObjectURL(image);
    },
  },
};
</script>

<script setup>
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
const carCode = ref("TEST001");
const carBrand = ref("Toyota");
const carModel = ref("Yaris");
const carSeat = ref("5");
const carBag = ref("1");
const carPrice = ref("1200");

async function addCar() {
  let formData = new FormData();
  formData.append("car_code", carCode.value);
  formData.append("car_brand", carBrand.value);
  formData.append("car_model", carModel.value);
  formData.append("car_seat", carSeat.value);
  formData.append("car_bag", carBag.value);
  formData.append("car_price", carPrice.value);
  console.log('carcode',carCode.value, carBrand.value, carModel.value, carSeat.value, carBag.value,carPrice.value)
  //   this.car.forEach((image) => {
  //     formData.append("myImageCar", image);
  //   });

  axios
    .post("http://localhost:3000/car", formData)
    .then((res) =>{'>...<'})
    .catch((e) => console.log(e.response.data));
}
</script>
<template>
  <section class="hero p-5 is-size-5">
    <router-link to="/admin"
      ><div class="button has-background-info is-size-5 has-text-white">
        <b>ย้อนกลับ ◀</b>
      </div></router-link
    >
    <div>
      <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
          <div class="card pb-6 px-5 has-text-info">
            <p class="title pt-5">Create new car</p>
            <div class="columns">
              <div class="column is-half">
                <div class="field">
                  <label class="label">รหัสรถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carCode"
                      class="input"
                      type="text"
                      placeholder="T001"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">รูปรถ</label>
                  <div class="card-image">
                    <input
                      class="mb-5"
                      multiple
                      type="file"
                      name="myImageCar"
                      accept="image/png, image/jpeg, image/webp"
                      @change="selectImages"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="field">
                  <label class="label">ยี่ห้อรถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carBrand"
                      class="input"
                      type="text"
                      placeholder="Toyota"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">รุ่นรถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carModel"
                      class="input"
                      type="text"
                      placeholder="Yaris"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-4">
                <div class="field">
                  <label class="label">จำนวนที่นั่ง</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carSeat"
                      class="input"
                      type="text"
                      placeholder="4"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="field">
                  <label class="label">จำนวนที่ใส่กระเป๋า</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carBag"
                      class="input"
                      type="text"
                      placeholder="2"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="field">
                  <label class="label">ราคารถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carPrice"
                      class="input"
                      type="text"
                      placeholder="1190"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-grouped" style="float: right">
              <div class="control">
                <button class="button is-info" @click="addCar">Submit</button>
              </div>
              <div class="control">
                <button class="button is-info is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
