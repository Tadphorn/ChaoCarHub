<script setup>
import { UserentCarStore } from "@/stores/rentCar";
import { computed, ref, reactive, onMounted } from "vue";
const rentCarStore = UserentCarStore();
import CardCar from "../CardCar.vue";
onMounted(rentCarStore.searchCar);
</script>

<template>
  <h1>{{ rentCarStore.filterCar }}</h1>
  <div class="container is-max-desktop">
    <div class="column pl-6">
        <div class="column">
          <div class="is-multiline is-variable columns is-1 pl-6">
            <CardCar v-for="item in rentCarStore.filterCar" :item="item"></CardCar>
          </div>
        </div>
    </div>
  </div>
</template>
