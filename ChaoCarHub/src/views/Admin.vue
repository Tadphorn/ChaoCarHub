<script setup>
import HeroUser from "../components/HeroUser.vue";
import Table_Car from "../components/Admin/Table_Car.vue";
</script>

<template>
<HeroUser></HeroUser>
<router-link to="/tablecar"><div class="button has-background-primary is-size-5 has-text-white">ตารางสำหรับเพิ่ม/ลบ/แก้ไข/แสดงรายละเอียดข้อมูลรถ</div></router-link>

<!-- <Table_Car></Table_Car> -->
</template>


<style>

</style>