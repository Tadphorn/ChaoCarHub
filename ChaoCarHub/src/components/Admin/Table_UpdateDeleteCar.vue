<script setup>
import { UsecrudCarStore } from "@/stores/crud_Car";

import { computed, ref, reactive, onMounted } from "vue";

const CarStore = UsecrudCarStore();
const crudCarStore = UsecrudCarStore();
onMounted(CarStore.FetchCar);
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      car: {},
      carCode: "",
      carBrand: "",
      carModel: "",
      carSeat: "",
      carBag: "",
      carPrice: "",
      file: null,
      carImageURL: "",
      showAlertUpdate: false
    };
  },
  methods: {
    fetchCarEdit(carId) {
      axios
        .get(`http://localhost:3000/car/${carId}`)
        .then((response) => {
          console.log(response.data[0].car_img);
          this.carCode = response.data[0].car_code;
          this.carBrand = response.data[0].car_brand;
          this.carModel = response.data[0].car_model;
          this.carSeat = response.data[0].car_seat;
          this.carBag = response.data[0].car_bag;
          this.carPrice = response.data[0].car_rentprice;
          this.carImageURL = response.data[0].car_img;
        })
        .catch((error) => {
          console.log(error);
        });
        this.showAlertUpdate = true
    },
  },
};
</script>
<template>
  <div class="p-5 is-size-5">
    <router-link to="/admin"
      ><div class="button has-background-info is-size-5 has-text-white">
        <b>ย้อนกลับ ◀</b>
      </div></router-link
    >
  </div>
  <div class="p-5 has-text-centered is-size-5">
    <h1 class="is-size-3 pb-6">
      <b
        >ขณะนี้มีรถอยู่ในระบบทั้งหมด
        <b class="has-text-danger is-size-2">{{ CarStore.carvalue.length }} </b>
        คัน</b
      >
    </h1>
    <table style="width: 100%">
      <tr class="has-background-danger-ligh">
        <th>รหัสรถ</th>
        <th>รูปรถ.....</th>
        <th>ชื่อรถ</th>
        <th>ยี่ห้อรถ</th>
        <th>รุ่นรถ</th>
        <th>จำนวนที่นั่ง</th>
        <th>จำนวนที่วางกระเป๋า</th>
        <th>ราคา</th>
        <th>สถานะรถ</th>
        <th>Update && Delete</th>
      </tr>
      <tr v-for="item in CarStore.carvalue" :key="item.car_id">
        <td>{{ item.car_code }}</td>
        <td>
          <div class="card-image px-3">
            <figure class="image is-4by3">
              <img :src="`http://localhost:3000/${item.car_img}`" alt="" />
            </figure>
          </div>
        </td>
        <td>{{ item.car_brand }} {{ item.car_model }}</td>
        <td>{{ item.car_brand }}</td>
        <td>{{ item.car_model }}</td>
        <td>{{ item.car_seat }}</td>
        <td>{{ item.car_bag }}</td>
        <td>{{ item.car_rentprice }}</td>
        <td>ว่าง</td>
        <td class="has-text-danger">
          <div class="control">
            <div class="level-item">
              <button
                class="button is-warning"
                @click="
                  this.fetchCarEdit(item.car_id)"
              >
                <span>Edit</span>
                <span class="icon is-small">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10516/10516200.png"
                  />
                </span>
              </button>
              <div v-if="showAlertUpdate">
                <div class="modal has-text-left">
                  <div class="card has-background-white">
                        <div class="pb-6 px-5 has-text-info">
                          <p class="title pt-5 pb-5 has-text-centered">Update car</p>
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
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="column is-half">
                              <div class="field">
                                <label class="label">รูปรถ</label>
                                <div class="file is-info has-name is-normal">
                                  <label class="file-label">
                                    <!-- {{ carImageURL }} -->
                                    <input
                                      class="file-input"
                                      type="file"
                                      name="myImageCar"
                                      accept="image/png, image/jpeg, image/webp"
                                      multiple
                                      ref="file"
                                      id="file"
                                      @change="handleFileUpload()"
                                    />
                                    <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Image file…
                                      </span>
                                    </span>
                                    <span class="file-name"> .jpg .png </span>
                                  </label>
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
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="field is-grouped" style="float: right">
                            <div class="control">
                              <!-- <button class="button is-info" @click="addCar">Submit</button> -->
                            </div>
                            <div class="control">
                              <router-link to="/admin">
                                <button class="button is-info is-light">
                                  Cancel
                                </button>
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              &nbsp

              <button
                class="button is-danger is-outlined"
                @click="
                  CarStore.showConfirmation(
                    item.car_brand,
                    item.car_model,
                    item.car_id
                  )
                "
              >
                <span>Delete</span>
                <span class="icon is-small">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8102/8102162.png"
                  />
                </span>
              </button>
              <div v-if="CarStore.showAlertDelete">
                <div class="modal">
                  <div class="modal-content">
                    <p class="is-size-5 has-text-black">
                      {{ CarStore.alertMessage }}
                    </p>
                    <br />
                    <div class="buttons">
                      <button
                        class="button is-size-6 has-background-success has-text-white"
                        @click="CarStore.confirmdeleteCar(true)"
                      >
                        Ok
                      </button>
                      <button
                        class="button is-size-6 has-background-danger has-text-white"
                        @click="CarStore.confirmdeleteCar(false)"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
