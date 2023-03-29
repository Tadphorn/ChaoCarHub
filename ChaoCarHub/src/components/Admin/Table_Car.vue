<script setup>
import { UseCarStore } from "../../stores/TableCar";
import { computed, ref, reactive, onMounted } from "vue";
const CarStore = UseCarStore();
onMounted(CarStore.FetchCar);
</script>

<template>
  <div v-for="item in CarStore.carvalue">
        {{ item.car_id }}
  </div>
</template>
