<script setup>
import { computed, ref, reactive, onMounted, provide } from "vue";
import HeroAdmin from "../components/HeroAdmin.vue";
import AccessBar from "../components/Admin/AccessBar.vue";
import Table_Car from "../components/Admin/Table_Car.vue";
import Table_AddCar from "../components/Admin/Table_AddCar.vue";
import Table_UpdateDeleteCar from "../components/Admin/Table_UpdateDeleteCar.vue";
import Table_Pay from "../components/Admin/Table_Pay.vue";

//value from status bar
const receivedValue = ref("home");
provide("sharedValue", receivedValue);
</script>

<template>
    <HeroAdmin></HeroAdmin>
    <AccessBar></AccessBar>
    <p>Received value from child: {{ receivedValue }}</p>
    <Table_Car v-if="receivedValue == 'home'"></Table_Car>
    <Table_AddCar v-if="receivedValue == 'create'"></Table_AddCar>
    <Table_UpdateDeleteCar v-if="receivedValue == 'updatedelete'"></Table_UpdateDeleteCar>
    <Table_Pay v-if="receivedValue == 'payment'"></Table_Pay>
</template> 
