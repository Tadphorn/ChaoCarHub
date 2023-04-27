import { defineStore } from 'pinia'
import axios from 'axios';
import { computed, ref, reactive, onMounted } from "vue";
export const UserentCarStore = defineStore('rent', () => {

    const brandcar = ref(["Toyota", "Nissan", "Honda", "Mercedes Benz Sport", "Hyundai", "MG", "BMW",])
    const pricecar = ref(["500-999", "1000-1999", "2000-2999", "3000-3999", "4000-4999", "5000",])
    const seatcar = ref(["2", "4", "5", "6", "7", "9"])
      
      const rentInfo = reactive({
        timePickup: "",
        dayPickup: "",
        timeReturn: "",
        dayReturn: "",
        placePicup: "",
        placeReturn: ""
      })
      const error =  reactive({
        dayPickup: "",
        timePickup: "",
        timeReturn: "",
        dayReturn: "",
      })
      //v-model select option
      const filBrand = ref('')
      const filPrice = ref('')
      const filSeat = ref('')

      const CheckDaypickup = new Date(rentInfo.dayPickup);
      function validateRentDsend() {
        if (rentInfo.dayPickup === "" || rentInfo.timePickup === "") {
          error.dayPickup = "กรุณากรอกวันและเวลารับรถ";
          return;
        }
        const today = new Date();
        if (CheckDaypickup <= today) {
          error.dayPickup = "ห้ามเลือกวันในอดีต";
          return;
        }
        error.dayPickup = "";
      }
      
      function validateRentDreturn() {
        if (rentInfo.dayReturn === "" || rentInfo.timeReturn === "") {
          error.dayReturn = "กรุณากรอกวันและเวลาคืนรถ";
          return;
        }
        const CheckDayreturn = new Date(rentInfo.dayReturn);
        if (CheckDayreturn < CheckDaypickup) {
          error.dayReturn = "กรุณาเลือกวันหลังจากวันรับรถ";
          return;
        }
        error.dayReturn = "";
      }

      function search() {
        validateRentDsend();
        validateRentDreturn();
        if (error.dayPickup !== "" || error.dayReturn !== "") {
          alert("กรุณากรอกวันที่ และเวลารับรถ/คืนรถ");
          return;
        }
      }
    return {
        brandcar,
        pricecar,
        seatcar,
        rentInfo,
        error,
        filBrand,
        filPrice,
        filSeat,
        validateRentDsend,
        validateRentDreturn,
        search
    }
})