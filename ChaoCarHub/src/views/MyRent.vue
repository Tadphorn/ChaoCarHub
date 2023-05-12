<script setup>
import HeroUser from "../components/HeroUser.vue";
import mCheckout from "../components/MyRent/C_CheckOut.vue"
import mPickupcar from "../components/MyRent/C_PickUpCar.vue"
import mReturncar from "../components/MyRent/C_ReturnCar.vue"
import mHistory from "../components/MyRent/C_History.vue"
import StatusBar from "../components/MyRent/StatusBar.vue";

import { useRoute } from "vue-router";
import { computed, ref, reactive, onMounted } from "vue";
import { UseregisterStore } from "@/stores/register";
const registerStore  = UseregisterStore()
// const route = useRoute();
// const { id } = route.params;
// onMounted(registerStore.onAuthChange())
onMounted(async () => {
       await registerStore.onAuthChange()
      
    });

</script>

<template>
  <HeroUser></HeroUser>
  <StatusBar></StatusBar>
  <mCheckout></mCheckout>
  <!-- <router-view :key="$route.fullPath" @auth-change="onAuthChange" /> -->
  <!-- <mCheckout></mCheckout>
  <mPickupcar></mPickupcar>
  <mReturncar></mReturncar>
  <mHistory></mHistory> -->

</template>



<style>

</style>