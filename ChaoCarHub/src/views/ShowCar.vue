<script setup>
import {  UsecrudCarStore } from "../stores/crud_Car";
import { computed, ref, reactive, onMounted } from "vue";
const CarStore =  UsecrudCarStore();
onMounted(CarStore.FetchCar);
</script>

<template>
  <div class="container is-max-desktop">
    <div class="column">
      <div class="column pl-6">
        <div class="column">
          <P> <b class="is-size-3">รถยนต์ทั้งหมด</b> </P><br />
          <div class="is-multiline is-variable columns is-1 pl-6">
            <div
              v-for="item in CarStore.carvalue"
              id="card_product "
              class="column is-one-quarter"
            >
              <div class="card has-text-centered is-border-radius ">
                <div class="card-image p-2">
                  <figure class="image is-4by3">
                    <img :src="`http://localhost:3000/${item.car_img}`" alt="" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-size-6 limit_text">
                        {{ item.car_brand }} {{ item.car_model }}
                      </p>
                      <p class="subtitle is-size-7">
                        <img
                          src="https://media.discordapp.net/attachments/1072181252964233328/1077073362708332614/image_18.png "
                          alt=" "
                        />
                        <b
                          >{{ item.car_seat }} ที่นั้ง <br />
                          เริ่มต้น {{ item.car_rentprice }} บาท/วัน</b
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <footer class="card-footer">
                  <a
                    href="#"
                    rel="nofollow"
                    @click.prevent="$router.push('/detailcar')"
                    class="card-footer-item is-color-green3 is-size-6 is-color-green3 has-text-white"
                    >จองคันนี้</a
                  >
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
