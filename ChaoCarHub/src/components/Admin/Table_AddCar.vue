<script>
export default {
  data() {
    return {
      carCode: "TEST001",
      carBrand: "Toyota",
      carModel: "Yaris",
      carSeat: 5,
      carBag: 1,
      carPrice: 1200,
      file: null,
      error: {
        carCode: "",
        carBrand: "",
        carModel: "",
        carSeat: "",
        carBag: "",
        carPrice: "",
        file: "",
      }
    };
  },
  methods: {
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    addCar() {
      this.validateCarCode()
      this.validateCarBrand()
      this.validateCarModel()
      this.validateCarSeat()
      this.validateCarBag()
      this.validateuploadFile()

      let formData = new FormData();
      formData.append("car_code", this.carCode);
      formData.append("car_brand", this.carBrand);
      formData.append("car_model", this.carModel);
      formData.append("car_seat", this.carSeat);
      formData.append("car_bag", this.carBag);
      formData.append("car_rentprice", this.carPrice);
      formData.append("myImageCar", this.file);

      axios.post('http://localhost:3000/car', formData, {
              headers: {
              'Content-Type': 'multipart/form-data'
              }
          }).then(response => {
              this.$router.push({path: '/admin'}) // Success! -> redirect to home page
          })
          .catch(error => {
              console.log(error.message);
          });
    },
    selectImages(event) {
      this.images = event.target.files;
    },

    validateCarCode() {
      if(this.carCode === '') {
        this.error.carCode = "กรุณากรอกรหัสรถ";
        return;
      }
        this.error.carCode = "";
    },

    validateuploadFile() {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (file) {
      // ดำเนินการอัปโหลดไฟล์ที่ถูกเลือก
      console.log('อัปโหลดไฟล์: ' + file.name);
    } else {
      this.error.file = "กรุณาเลือกไฟล์รูป";
      return;
    }
    this.error.file = "";
    },
    validateCarBrand() {
      if(this.carBrand === '') {
        this.error.carBrand = "กรุณากรอกยี่ห้อรถ";
        return;
      }
        this.error.carBrand = "";
    },

    validateCarModel() {
      if(this.carModel === '') {
        this.error.carModel = "กรุณากรอกรุ่นรถ";
        return;
      }
        this.error.carModel = "";
    },
    
    validateCarSeat() {
      if(this.carSeat === '') {
        this.error.carSeat = "กรุณากรอกจำนวนที่นั่งรถ";
        return;
      }
      if(isNaN(this.carSeat)) {
        this.error.carSeat = "กรุณากรอกจำนวนที่นั่งรถเป็นตัวเลข";
        return;
      }
        this.error.carSeat = "";
    },

    validateCarBag() {
      if(this.carBag === '') {
        this.error.carBag = "กรุณากรอกจำนวนที่วางกระเป๋า";
        return;
      }
      if(isNaN(this.carBag)) {
        this.error.carBag = "กรุณากรอกจำนวนที่วางกระเป๋าเป็นตัวเลข";
        return;
      }
        this.error.carBag = "";
    },

    validateCarPrice() {
      if(this.carPrice === '') {
        this.error.carPrice = "กรุณากรอกราคารถ";
        return;
      }
      if(isNaN(this.carPrice)) {
        this.error.carPrice = "กรุณากรอกราคารถเป็นตัวเลข";
        return;
      }
        this.error.carPrice = "";
    },

    // showSelectImage(image) {
    //   // for preview only
    //   return URL.createObjectURL(image);
    // },
  },
};
</script>

<script setup>
import { computed, ref, reactive, onMounted } from "vue";
import axios from "axios";
// import { UsecrudCarStore } from "@/stores/crud_Car";
// const crudCarStore = UsecrudCarStore();
</script>
<template>
  <section class="hero p-5 is-size-5">
    <router-link to="/admin"
      ><div class="button has-background-info is-size-5 has-text-white">
        <b>ย้อนกลับ ◀</b>
      </div></router-link>
    <div>
      <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
          <div class="card pb-6 px-5 has-text-info">
            <p class="title pt-5">Create new car</p>
            <div class="columns">
              <div class="column is-half">
                <div class="field">
                  <label class="label">รหัสรถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carCode"
                      class="input"
                      type="text"
                      placeholder="T001"
                      :class="{'is-danger': error.carCode}" @input="validateCarCode()"
                    />
                    <span class="has-text-danger ertext ml-3">{{error.carCode}}</span>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">รูปรถ</label>
                  <div class="file is-info has-name is-normal">
                    <label class="file-label">
                      <input
                        class="file-input"
                        type="file"
                        name="myImageCar"
                        accept="image/png, image/jpeg, image/webp"
                        multiple
                        ref="file"
                        id="file"
                        @change="handleFileUpload()"
                        :class="{'is-danger': error.carCode}"
                        @click="validateuploadFile()"
                      />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label"> Image file… </span>
                      </span>
                      <span class="file-name"> .jpg .png </span>
                    </label>
                    <span class="has-text-danger ertext ml-3">{{error.file}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="field">
                  <label class="label">ยี่ห้อรถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carBrand"
                      class="input"
                      type="text"
                      placeholder="Toyota"
                      :class="{'is-danger': error.carBrand}" @input="validateCarBrand()"
                    />
                    <span class="has-text-danger ertext ml-3">{{error.carBrand}}</span>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="field">
                  <label class="label">รุ่นรถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carModel"
                      class="input"
                      type="text"
                      placeholder="Yaris"
                      :class="{'is-danger': error.carModel}" @input="validateCarModel()"
                    />
                    <span class="has-text-danger ertext ml-3">{{error.carModel}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-4">
                <div class="field">
                  <label class="label">จำนวนที่นั่ง</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carSeat"
                      class="input"
                      type="text"
                      placeholder="4"
                      :class="{'is-danger': error.carSeat}" @input="validateCarSeat()"
                    />
                    <span class="has-text-danger ertext ml-3">{{error.carSeat}}</span>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="field">
                  <label class="label">จำนวนที่วางกระเป๋า</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carBag"
                      class="input"
                      type="text"
                      placeholder="2"
                      :class="{'is-danger': error.carBag}" @input="validateCarBag()"
                    />
                    <span class="has-text-danger ertext ml-3">{{error.carBag}}</span>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="field">
                  <label class="label">ราคารถ</label>
                  <div class="control">
                    <input
                      style="border-radius: 5px"
                      v-model="carPrice"
                      class="input"
                      type="text"
                      placeholder="1190"
                      :class="{'is-danger': error.carPrice}" @input="validateCarPrice()"
                    />
                    <span class="has-text-danger ertext ml-3">{{error.carPrice}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-grouped" style="float: right">
              <div class="control">
                <button class="button is-info" @click="addCar">Submit</button>
              </div>
              <div class="control">
                <router-link to="/admin">
                  <button class="button is-info is-light">
                    Cancel
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
