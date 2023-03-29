<script setup>
import HeroUser from "../components/HeroUser.vue";
import mCheckout from "../components/MyRent/C_CheckOut.vue"
import mPickupcar from "../components/MyRent/C_PickUpCar.vue"
import mReturncar from "../components/MyRent/C_ReturnCar.vue"
import mHistory from "../components/MyRent/C_History.vue"
import StatusBar from "../components/MyRent/StatusBar.vue";


</script>

<template>
  <HeroUser></HeroUser>
  <StatusBar></StatusBar>
  <mCheckout></mCheckout>
  <mPickupcar></mPickupcar>
  <mReturncar></mReturncar>
  <mHistory></mHistory>
</template>



<style>

</style>