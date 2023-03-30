<script setup>
import {UseCarStore} from '../../stores/TableCar'
import { computed, ref, reactive, onMounted } from "vue";
    const CarStore = UseCarStore()
    onMounted(CarStore.FetchCar)
</script>

<script >
export default {
  data: () => ({ 
    hothit: [
      {
        hbrand: "Toyota",
        hid: [1, 2, 3],
        img: "https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png",
      },
      {
        hbrand: "Nisson",
        hid: [6, 7, 8],
        img: "https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png",
      },
      {
        hbrand: "Honda",
        hid: [12, 13, 14],
        img: "https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png",
      },
    ],
  }),
};
</script>

<template>
  <div class="container is-max-desktop">
    <div class="column">
      <b> รถเช่ายอดฮิต<br /><br /> </b>
      <div v-for="hitem in hothit" class="columns is-half">
        <div class="column is-two-fifths px-6 is-vertical">
          <div class="card-image">
            <p>
              <b class="is-size-3">{{ hitem.hbrand }}</b>
            </p>
            <br /><br />
            <figure class="image is-3by3">
              <img
                src="https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png "
                alt="Placeholder image "
              />
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="is-multiline is-variable columns is-1">
            <div id="card_product " class="column is-one-third" v-for="item in CarStore.carvalue" v-show="item.car_id == hitem.hid.find((g) => g == item.car_id)">
              <div class="card has-text-centered is-border-radius">
                <div class="card-image px-5 pt-2">
                  <figure class="image is-4by3">
                    <img :src="item.car_img" alt="Placeholder image " />
                  </figure>
                </div>
                <div class="card-content">
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
                <footer class="card-footer">
                  <a
                    href="#"
                    rel="nofollow"
                    @click="search()"
                    class="card-footer-item is-color-green3 is-size-6 is-color-green3 has-text-white"
                    >จองคันนี้</a
                  >
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- card other -->
      <div class="column pl-6">
        <div class="column">
          <P> <b class="is-size-3">Other</b> </P><br />
          <div class="is-multiline is-variable columns is-1 pl-6">
            <div v-for="item in CarStore.carvalue" id="card_product " class="column is-one-quarter" v-show="item.car_id >= 15">
              <div class="card has-text-centered is-border-radius">
                <div class="card-image">
                  <figure class="image is-4by4">
                    <img :src="item.car_img" alt="Placeholder image " />
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
                    @click="search()"
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