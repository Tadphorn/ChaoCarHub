<script setup>
import { UsepaymentStore } from "@/stores/payment";
import { computed, ref, reactive, onMounted } from "vue";

const PaymentStore = UsepaymentStore();
onMounted(PaymentStore.FetchPayment);
</script>

<template>
  <div class="p-5 is-size-5">
    <router-link to="/admin"
      ><div class="button has-background-info is-size-5 has-text-white">
        <b>ย้อนกลับ ◀</b>
      </div></router-link
    >

    <div class="columns is-mobile" v-for="item in PaymentStore.paymentvalue" :key="item.pay_id">
      <div class="column is-half is-offset-one-quarter">
        <div class="card p-5" style="letter-spacing: 0.3px; line-height: 33px;">
            <div class="columns">
            <div class="column">
                <p><b>คุณ</b></p>
                <p><b>ชำระเงินผ่าน:</b>   บัตรเคดิต</p>
                <p><b>หมายเลขบัตร:</b>   {{ item.pay_cr_num }} </p>
            </div>
            <div class="column">
                <p><b>ชื่อรถที่จอง:</b> Toyota Alphard (T004)</p>
                <p><b>ชื่อบนบัตรเครดิต:</b>   {{ item.pay_cr_name }}</p>
                <p><b>วันเวลาที่ชำระ</b>   {{ item.pay_time }}</p>
            </div>
        </div>
        <p class="has-text-danger">
            **พอถึงขั้นตอนนี้แอดมินต้องไปเปลี่ยนสถานะรถให้ไม่ว่าง จริงๆก็ไปแก้ไขที่ update คิดว่าไม่ต้องมี r_status เปลี่ยนเป็น car_status แทน
            แล้วก็ if ถ้ารถไม่ว่างก็ไม่ต้องโชว์
            <br>
            แล้วพอตอนคืนรถ พอตรวจสอบเรียบร้อยแล้วแอดมินก็จะอัพเดต car_status เป็นว่างเหมือนเดิม รถก็จะโชว์
        </p>
        </div>
      </div>
    </div>
  </div>
</template>
