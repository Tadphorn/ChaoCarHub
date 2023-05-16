<script setup>
import { UsecrudCarStore } from "@/stores/crud_Car";
import { computed, ref, reactive, onMounted } from "vue";

const CarStore = UsecrudCarStore();
onMounted(CarStore.FetchCar);
</script>

<script>
export default {
  data() {
    return {
      editCar: false
    };
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
    <!-- ==========popup=========== -->
    <div v-if="editCar === true">
      สวัสดีค่ะ
    </div>
    <!-- ========================== -->
  </div>
  <div class="p-5 has-text-centered is-size-5" v-bind:class="{ 'is-active': editCar }">
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
        <th>จำนวนใส่กระเป๋า</th>
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
            <div class="level-item" @click="editCar = !editCar">
              <button class="button is-warning">
                <span>Edit</span>
                <span class="icon is-small">
                  <img src="https://cdn-icons-png.flaticon.com/512/10516/10516200.png"/>
                </span>
              </button
              >&nbsp
              <!-- <a @click="myrentStore.showConfirmation(item.car_brand, item.car_model, item.r_id)">
              <img src="https://media.discordapp.net/attachments/1072181252964233328/1079348472068702238/delete_1.png"/>
            </a>
          <div v-if="myrentStore.showAlert">
            <div class="modal">
              <div class="modal-content">
                <p class="is-size-5">{{ myrentStore.alertMessage }}</p><br>
                  <div class="buttons">
                    <button class="button is-size-6 has-background-success has-text-white" @click="myrentStore.confirm(true)">Ok</button>
                    <button class="button is-size-6 has-background-danger has-text-white" @click="myrentStore.confirm(false)">Cancel</button>
                  </div>
              </div>
            </div>
          </div> -->
              <button class="button is-danger is-outlined" @click="CarStore.showConfirmation(item.car_brand, item.car_model, item.car_id)">
                <span>Delete</span>
                <span class="icon is-small">
                  <img src="https://cdn-icons-png.flaticon.com/512/8102/8102162.png"/>
                </span>
              </button>
              <div v-if="CarStore.showAlert">
                <div class="modal">
                  <div class="modal-content">
                    <p class="is-size-5 has-text-black">{{ CarStore.alertMessage }}</p><br>
                      <div class="buttons">
                        <button class="button is-size-6 has-background-success has-text-white" @click="CarStore.confirmdeleteCar(true)">Ok</button>
                        <button class="button is-size-6 has-background-danger has-text-white" @click="CarStore.confirmdeleteCar(false)">Cancel</button>
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
