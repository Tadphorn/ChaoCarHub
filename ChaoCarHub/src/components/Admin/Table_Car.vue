<script setup>
import { UseCarStore } from "../../stores/TableCar";
import { computed, ref, reactive, onMounted } from "vue";

const CarStore = UseCarStore();
onMounted(CarStore.FetchCar);
</script>

<template>
  <!-- Select Car -->
  <div class="p-5 has-text-centered is-size-5">
    <h1 class="is-size-4 p-5">
      <b class="has-background-danger has-text-white"
        >ตารางแสดงรายละเอียดรถทั้งหมดที่มีอยู่ในระบบ</b
      ><br />
      <b
        >ขณะนี้มีรถอยู่ในระบบทั้งหมด
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
              <img :src="item.car_img" alt="Placeholder image " />
            </figure>
          </div>
        </td>
        <td>{{ item.car_brand }} {{ item.car_model }}</td>
        <td>{{ item.car_brand }}</td>
        <td>{{ item.car_model }}</td>
        <td>{{ item.car_seat }}</td>
        <td>{{ item.car_bag }}</td>
        <td>{{ item.car_rentprice }}</td>
        <td></td>
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
