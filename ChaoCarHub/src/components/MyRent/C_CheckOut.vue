<script setup>
import { UsemyrentCarStore } from "@/stores/myrent";
import { computed, ref, reactive, onMounted } from "vue";
import { UseregisterStore } from "@/stores/register";
const registerStore  = UseregisterStore()
const myrentStore = UsemyrentCarStore();

// onMounted(myrentStore.Fetchmyrent);
onMounted(async () => {
  await myrentStore.Fetchmyrent(registerStore.userProfile.u_id);
  console.log(registerStore.userProfile.u_id)
});
</script>

<template>
  <h1>{{ registerStore.userProfile.u_id }}</h1>
  <h1>test <br> {{ myrentStore.myCheckout}}</h1>
  <div class="columns pb-6">
    <div class="column is-half is-8 is-offset-2 pt-6">
      <div class="card has-text-centered p-5">
        <div class="columns is-10">
          <div class="card-header-title columns is-7">
            <div class="column is-8 is-size-3">
              <!-- {{ store.brand }} {{ store.model }} -->
              <div class="card-image image is-4by3">
                <!-- <img :src="store.img" /> -->
              </div>
            </div>
            <div class="column pl-6">
              <div class="column pt-6">
                <p class="subtitle is-size-7 column_number">
                  <img
                    src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607802408990/user.png"
                    height="20"
                    width="20"
                  />
                  <!-- <span class="pl-2">{{ store.seat }} ที่นั้ง</span> -->
                </p>
              </div>
              <div class="column pt-5">
                <p class="subtitle is-size-7 column_number">
                  <img
                    src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607567540294/bag.png"
                    height="20"
                    width="20"
                  />
                  <!-- <span class="pl-2">{{ store.bag }} กระเป๋า</span> -->
                </p>
              </div>
              <div class="column pt-5">
                <p class="subtitle is-size-7 column_number">
                  <img
                    src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607286509598/car-gear.png"
                    height="20"
                    width="20"
                  />
                  <!-- <span class="pl-2">อัตโนมัติ</span> -->
                </p>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <p
              v-if="checkoutCar === false"
              class="has-background-warning is-size-4"
            >
              <b>รอชำระเงิน</b>
            </p>
            <p v-else class="has-background-warning is-size-5">
              <b>กำลังตรวจสอบการชำระเงิน</b>
            </p>
            <div class="column p-5 is-size-6">
              <div class="column has-text-left">
                <p><b>การรับรถ</b></p>
                <!-- <p>{{ rstation.st1 }}</p>
                <p>{{ reversdate }} เวลา {{ rentdate.time }} น.</p> -->
              </div>
              <div class="column has-text-left">
                <p><b>การคืนรถ</b></p>
                <!-- <p>{{ rstation.st2 }}</p>
                <p>{{ reversdate2 }} เวลา {{ rentdate.time }} น.</p> -->
              </div>
            </div>
          </div>
          <div v-if="checkoutCar === false" class="column is-1">
            <a @click="cancel = true"
              ><img
                src="https://media.discordapp.net/attachments/1072181252964233328/1079348472068702238/delete_1.png"
            /></a>
          </div>
          <!-- confirm cancel -->
        </div>
        <footer class="columns">
          <p class="column is-size-6">
            <!-- ราคาสำหรับ {{ calday }} วัน {{ totalprice }} บาท -->
          </p>
          <p class="column is-size-6">รวมที่ต้องชำระ :  บาท</p>
          <div
            v-if="checkoutCar === false"
            class="column is-size-6"
          ><router-link to="/pay">
            <button class="button btn has-text-white font" style="width: 100%">
              ชำระเงิน
            </button></router-link>
          </div>
          <div v-if="checkoutCar === true" class="column is-size-6">
            <button
              class="button btn has-text-white font"
              style="width: 100%; opacity: 40%"
            >
              ชำระเงิน
            </button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
