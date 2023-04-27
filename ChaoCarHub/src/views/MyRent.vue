<script setup>
import HeroUser from "../components/HeroUser.vue";
import mCheckout from "../components/MyRent/C_CheckOut.vue"
import mPickupcar from "../components/MyRent/C_PickUpCar.vue"
import mReturncar from "../components/MyRent/C_ReturnCar.vue"
import mHistory from "../components/MyRent/C_History.vue"
import StatusBar from "../components/MyRent/StatusBar.vue";

import { computed, ref, reactive, onMounted } from "vue";
import { UseregisterStore } from "@/stores/register";
const registerStore  = UseregisterStore()
// onMounted(registerStore.onAuthChange())
onMounted(async () => {
      const user =  registerStore.onAuthChange()
      
    });

</script>

<template>
  <HeroUser></HeroUser>
  <StatusBar></StatusBar>
  <div v-if="registerStore.userProfile">
    <h1> {{ registerStore.userProfile.u_fname }} {{ registerStore.userProfile.u_lname }}</h1>
  </div>
  
  <!-- <router-view :key="$route.fullPath" @auth-change="onAuthChange" /> -->
  <!-- <mCheckout></mCheckout>
  <mPickupcar></mPickupcar>
  <mReturncar></mReturncar>
  <mHistory></mHistory> -->

</template>



<style>

</style>