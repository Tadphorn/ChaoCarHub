<script setup>
import { UsecrudCarStore} from '../../stores/crud_Car'
import { computed, ref, reactive, onMounted } from "vue";
const CarStore =  UsecrudCarStore()
onMounted(CarStore.FetchCarToyota)
onMounted(CarStore.FetchCarNissan)
onMounted(CarStore.FetchCarHonda)
onMounted(CarStore.FetchCar)
import CardCar from '../CardCar.vue';
</script>

<template>
  <div class="container is-max-desktop">
    <div class="column">
      <b class="is-size-5"> รถเช่ายอดฮิต <router-link to="/showcar"><u class="ha3s-text-danger">(ต้องการดูรถทั้งหมด คลิ้ก!)</u></router-link><br /><br /> </b>
      <div class="columns is-half">
        <div class="column is-two-fifths px-6 is-vertical">
          <div class="card-image">
            <p>
              <b class="is-size-3"></b>
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
        <!-- <h1> {{  CarStore.toyotacar}}</h1> -->
        <div class="column">
          <div class="is-multiline is-variable columns is-1">
              <CardCar v-for="item in CarStore.toyotacar?.slice(0, 3)" :item="item"></CardCar>     
              <CardCar v-for="item in CarStore.nissancar?.slice(0, 3)" :item="item"></CardCar> 
              <CardCar v-for="item in CarStore.hondacar?.slice(0, 3)" :item="item"></CardCar>         
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