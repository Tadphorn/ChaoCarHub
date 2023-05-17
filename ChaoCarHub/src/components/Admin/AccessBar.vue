<script setup>
import { inject } from "vue";
import { computed, ref, reactive, onMounted, provide } from "vue";
//send click status to myrent
const sharedValue = inject("sharedValue");

const sendValueToParent = (page) => {
  sharedValue.value = page;
};
</script>

<template>
    <section>
        <div class="columns p-5  has-background-primary-light border_td">
            
            <div class="column" id="ibar" @click="sendValueToParent('home')">
                  <div class="card-image has-text-centered" >
                            <img src="https://cdn-icons-png.flaticon.com/512/747/747589.png" alt="Placeholder image" width="50" height="50">
                            <br><b>HOME</b>
                  </div>
              </div>

                <div class="column" id="ibar" @click="sendValueToParent('create')">
                  <div class="card-image has-text-centered" >
                            <img src="https://cdn-icons-png.flaticon.com/512/3133/3133900.png" alt="Placeholder image" width="50" height="50">
                            <img src="https://cdn-icons-png.flaticon.com/512/871/871867.png" alt="Placeholder image" width="50" height="50">
                            <br><b>CREATE (C)</b>
                  </div>
              </div>

                <div class="column" id="ibar" >
                  <div class="card-image has-text-centered" @click="sendValueToParent('updatedelete')">
                            <img class="mr-5 mt-2" src="https://cdn-icons-png.flaticon.com/512/4737/4737247.png" alt="Placeholder image" width="40" height="40">
                            <img class="ml-5" src="https://cdn-icons-png.flaticon.com/512/6096/6096937.png" alt="Placeholder image" width="40" height="40">
                            <br><b>UPDATE (U) / DELETE (D)</b>
                  </div>
                </div>

                <div class="column" id="ibar">
                  <div class="card-image has-text-centered" @click="sendValueToParent('payment')">
                            <img src="https://cdn-icons-png.flaticon.com/512/5688/5688249.png" alt="Placeholder image" width="50" height="50">
                            <br><b>ตรวจสอบการชำระเงิน</b>
                  </div>
                </div>

                <div class="column" id="ibar">
                  <div class="card-image has-text-centered" @click="sendValueToParent('retruncar')">
                            <img class="" src="https://cdn-icons-png.flaticon.com/512/4422/4422557.png" alt="Placeholder image" width="50" height="50">
                            <br><b>ตรวจสอบการคืนรถ</b>
                  </div>
                </div>
            </div>
    </section>
</template>