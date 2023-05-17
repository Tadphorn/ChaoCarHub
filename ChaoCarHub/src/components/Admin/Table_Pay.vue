<script setup>
import { UsepaymentStore } from "@/stores/payment";
import { computed, ref, reactive, onMounted } from "vue";

const PaymentStore = UsepaymentStore();
onMounted(PaymentStore.FetchPayment);
</script>

<template>
  <!-- <div class="p-5 is-size-5">
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
        </div>
      </div>
    </div>
  </div> -->
</template>
