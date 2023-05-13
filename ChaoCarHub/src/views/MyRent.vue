<script setup>
// import axios from "@/plugins/axios"
import HeroUser from "../components/HeroUser.vue";
import mCheckout from "../components/MyRent/C_CheckOut.vue"
import mPickupcar from "../components/MyRent/C_PickUpCar.vue"
import mReturncar from "../components/MyRent/C_ReturnCar.vue"
import mHistory from "../components/MyRent/C_History.vue"
import StatusBar from "../components/MyRent/StatusBar.vue";

import { computed, ref, reactive, onMounted } from "vue";
import { UseregisterStore } from "@/stores/register";
import { UsemyrentStore } from "@/stores/myRent";

const registerStore  = UseregisterStore()
const myrentStore  = UsemyrentStore()

onMounted(async () => {
      const user =  registerStore.onAuthChange()
      myrentStore.myrentCar()
    });

</script>

<template>
  
  <HeroUser></HeroUser>
  <StatusBar></StatusBar>
  <h1> {{ myrentStore.test }}</h1>
  <h1> {{ myrentStore.mycar }}</h1>
  <!-- <router-view :key="$route.fullPath" @auth-change="onAuthChange" /> -->
  <!-- <CardCar v-for="item in rentCarStore.filterCar" :item="item" id="card_prmCheckoutoduct " class="column is-one-quarter"></CardCar> -->
  <mCheckout v-for="item in myrentStore.mycar" :item="item"></mCheckout>
  <!-- <mPickupcar></mPickupcar>
  <mReturncar></mReturncar>
  <mHistory></mHistory> -->

</template>



<style>

</style>