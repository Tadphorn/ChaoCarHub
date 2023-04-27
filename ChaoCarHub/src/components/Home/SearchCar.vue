<script setup>
import { UserentCarStore} from '@/stores/rentCar'
import { computed, ref, reactive, onMounted } from "vue";
const rentCarStore =  UserentCarStore()

</script> 

<template>
    <div class="column">
        <div class="hero-body ">
            <div class="card  p-5 has-background-primary-light ">
                <p class="title is-size-6 ">
                    1. ระบุวันเดินทาง
                </p>
                <p class="subtitle is-size-6 ">
                    <div class="columns ">
                        <div class="column is-6 ">
                            วันและเวลารับรถ<br>
                            <input v-model="rentCarStore.rentInfo.dayPickup" class="cololr_input_card" type="date" data-start-date="10/24/2019" :class="{ 'is-danger': rentCarStore.error.dayPickup} " @input="rentCarStore.validateRentDsend()">
                            <input v-model="rentCarStore.rentInfo.timePickup" class="cololr_input_card" type="time" id="appt " name="appt" min="09:00" max="18:00" required @input="rentCarStore.validateRentDsend()"><br>
                            <span class="has-text-danger ertext ml-3 ">{{rentCarStore.error.timePickup}}</span>

                        </div>
                        <div class="column is-6 ">
                            วันและเวลาคืนรถ<br>
                            <input v-model="rentCarStore.rentInfo.dayReturn" class="cololr_input_card" type="date" data-start-date="10/24/2019" :class="{ 'is-danger': rentCarStore.error.dayReturn} " @input="rentCarStore.validateRentDreturn()">
                            <input v-model="rentCarStore.rentInfo.timeReturn" class="cololr_input_card" type="time" id="appt " name="appt" min="09:00" max="18:00" required @input="rentCarStore.validateRentDreturn()"><br>
                            <span class="has-text-danger ertext ml-3 ">{{rentCarStore.error.timeReturn}}</span>
                        </div>
                    </div>
                </p>
                <p class="title is-size-6 ">
                    2. ระบุรุ่นรถ/ช่วงราคา/จำนวนที่นั่งที่ต้องการ
                </p>
                <div class="columns ">
                    <div class="column ">
                        รุ่นรถที่ต้องการ<br>
                        <div class="select">
                            <select v-model="rentCarStore.filBrand" class="font ">
                        <option v-for="brandcar in rentCarStore.brandcar" :key="brandcar.id " :value="brandcar">
                            {{brandcar}}
                        </option>
                    </select>
                        </div>
                    </div>
                    <div class="column ">
                        ช่วงราคา<br>
                        <div class="select ">
                            <select v-model="rentCarStore.filPrice" class="font">
                        <option v-for="pricecar in rentCarStore.pricecar" :key="pricecar.id " :value="pricecar">
                            {{pricecar}} ฿
                        </option>
                    </select>
                        </div>
                    </div>
                    <div class="column ">
                        จำนวนที่นั่ง<br>
                        <div class="select ">
                            <select v-model="rentCarStore.filSeat" class="font ">
                        <option v-for="seatcar in rentCarStore.seatcar" :key="seatcar.id " :value="seatcar">
                            {{seatcar}} ที่นั่ง
                        </option>
                    </select>
                        </div>
                    </div>
                </div>
                <button @click="rentCarStore.search()" class="button color-card-search has-text-white font " style="width: 100%; " type="submit ">
                  ค้นหารถว่าง                  
                </button>
            </div>
        </div>
    </div>
</template>
