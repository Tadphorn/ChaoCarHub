<script setup>
// import axios from "@/plugins/axios"
import HeroUser from "../components/HeroUser.vue";
import mCheckout from "../components/MyRent/C_CheckOut.vue";
import mPickupcar from "../components/MyRent/C_PickUpCar.vue";
import mReturncar from "../components/MyRent/C_ReturnCar.vue";
import mHistory from "../components/MyRent/C_History.vue";
import StatusBar from "../components/MyRent/StatusBar.vue";

import { computed, ref, reactive, onMounted, provide } from "vue";
import { UseregisterStore } from "@/stores/register";
import { UsemyrentStore } from "@/stores/myRent";

const registerStore = UseregisterStore();
const myrentStore = UsemyrentStore();

onMounted(async () => {
  const user = registerStore.onAuthChange();
  myrentStore.myrentCar();
});
//value from status bar
const receivedValue = ref("checkout");
provide("sharedValue", receivedValue);
</script>

<template>
  <HeroUser></HeroUser>
  <StatusBar></StatusBar>
  <!-- <p>Received value from child: {{ receivedValue }}</p> -->
  <!-- <h1>{{ myrentStore.checkoutCar}}</h1> -->
  <!-- <div class="section is-large pt-0"> -->
  <mCheckout v-if="receivedValue == 'checkout'" v-for="item in myrentStore.checkoutCar" :item="item"></mCheckout>
  <mPickupcar v-if="receivedValue == 'pickup'" v-for="item in myrentStore.pickupCar" :item="item"></mPickupcar>
  <mReturncar v-if="receivedValue == 'return'" v-for="item in myrentStore.returnCar" :item="item"></mReturncar>
  <mHistory v-if="receivedValue == 'history'" v-for="item in myrentStore.historyCar" :item="item"></mHistory>
<!-- </div> -->
</template>

<style></style>
