<script setup>
import { UseCarStore } from "../../stores/TableCar";
import { computed, ref, reactive, onMounted } from "vue";
const CarStore = UseCarStore();
onMounted(CarStore.FetchCar);
</script>

<template>
  <div class="p-6 has-text-centered">
  <h1 class="is-size-3  p-5"><b>ตารางแสดงรายละเอียดรถทั้งหมด</b></h1>
  <table style="width: 100%">
    <tr class="">
      <th>รหัสรถ</th>
      <th>รูปรถ</th>
      <th>ชื่อรถ</th>
      <th>ยี่ห้อรถ</th>
      <th>รุ่นรถ</th>
      <th>จำนวนที่นั่ง</th>
      <th>จำนวนใส่กระเป๋า</th>
      <th>ราคา</th>
      <th>สถานะรถ</th>
      <th>อัตเดตข้อมูล</th>
    </tr>
    <tr v-for="item in CarStore.carvalue">
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
      <td class="has-text-danger"><router-link to="/updatecarcard"><u>update!!</u></router-link></td>
    </tr>
  </table>
</div>
</template>
