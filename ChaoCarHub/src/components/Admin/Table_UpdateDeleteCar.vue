<script setup>
import { UsecrudCarStore } from "@/stores/crud_Car";
import { computed, ref, reactive, onMounted } from "vue";

const CarStore = UsecrudCarStore();
onMounted(CarStore.FetchCar);
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
      <b>ขณะนี้มีรถอยู่ในระบบทั้งหมด
        <b class="has-text-danger is-size-2">{{ CarStore.carvalue.length }} </b>
        คัน</b
      >
    </h1>
    <table style="width: 100%">
      <tr class="has-background-danger-light">
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
          <div class="card-image px-2 pt-2">
            <figure class="image is-4by3">
              <img :src="`http://localhost:3000/${item.car_img}`" alt="">
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
        <td class="has-text-danger p-2">
          <div class="control">
            <div class="level-item">
            <button class="button is-warning">
                <span>Edit</span>
                  <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                 </span>
            </button>&nbsp
            <button class="button is-danger is-outlined">
              <span>Delete</span>
              <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
            </button>
          </div>
        </div>
        </td>
      </tr>
    </table>
  </div>
</template>
