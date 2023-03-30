<script setup>
import { UseCarStore } from "../../stores/TableCar";
import { computed, ref, reactive, onMounted } from "vue";
const CarStore = UseCarStore();
onMounted(CarStore.FetchCar);
</script>

<template>
  <div class="p-2 has-text-centered">
    <h1 class="is-size-4 p-5"><b>เพิ่มรถ (เฉพาะรถที่ยังไม่มีในระบบ)</b></h1>
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
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid green;" />
            </div>
          </div>
        </td>
        <td>
          <div class="control">
            <button class="button is-success">Add</button>
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
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
            </div>
          </div>
        </td>
        <td>
          <div class="field">
            <div class="control">
              <input class="input" type="text" style="border-radius: 0px; border: 1px solid wheat;" />
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
    <h1 class="is-size-4 p-5"><b>ตารางแสดงรายละเอียดรถทั้งหมดที่มีอยู่ในระบบ</b></h1>
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
        <td class="has-text-danger">
            <div class="control pt-1">
            <button class="button is-danger">delete</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
