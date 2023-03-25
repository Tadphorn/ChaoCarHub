<template>
  <!-- Pick up car -->
  <div class="columns pb-6">
    <div class="column is-half is-8 is-offset-2 pt-6">
      <div class="card has-text-centered p-5">
        <div class="columns is-10">
          <div class="card-header-title columns is-7">
            <div class="column is-8 is-size-3">
              {{ store.brand }} {{ store.model }}
              <div class="card-image image is-4by3">
                <img :src="store.img" />
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
                  <span class="pl-2">{{ store.seat }} ที่นั้ง</span>
                </p>
              </div>
              <div class="column pt-5">
                <p class="subtitle is-size-7 column_number">
                  <img
                    src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607567540294/bag.png"
                    height="20"
                    width="20"
                  />
                  <span class="pl-2">{{ store.bag }} กระเป๋า</span>
                </p>
              </div>
              <div class="column pt-5">
                <p class="subtitle is-size-7 column_number">
                  <img
                    src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607286509598/car-gear.png"
                    height="20"
                    width="20"
                  />
                  <span class="pl-2">อัตโนมัติ</span>
                </p>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <p class="is-size-4" style="background-color: #ffb8f8">
              <b>รอรับรถ</b>
            </p>
            <div class="column p-5 is-size-6">
              <div class="column has-text-left">
                <p><b>การรับรถ</b></p>
                <p>{{ rstation.st1 }}</p>
                <p>{{ reversdate }} {{ rentdate.time }} น.</p>
              </div>
            </div>
          </div>
        </div>
        <footer class="columns">
          <div class="column is-size-6">
            ราคาสำหรับ {{ calday }} วัน {{ totalprice }} บาท
          </div>
          <div class="column is-size-6 pl-6">
            <p class="subtitle is-size-6 column_number">
              <img
                src="https://media.discordapp.net/attachments/1072181252964233328/1079444615184257074/success_1.png"
                height="20"
                width="20"
              /><span class="pl-2"> ชำระเงินสำเร็จแล้ว</span>
            </p>
          </div>
          <a href="me_returncar.html" class="column is-size-6">
            <button class="button btn has-text-white font" style="width: 100%">
              รับรถสำเร็จ
            </button>
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    store: {},
    myname: "",
    rentdate: {
      // dsent:
      // dreturn:
      // time:
    },
    // station1:'',
    // station2:'',
    rstation: {
      st1: "",
      st2: "",
    },
    returnCar: false,
    checkoutCar: false,
    name: "",
    numbercreditcard: "",
    expirationdate: "",
    cvc: "",
    errorbill: {
      name: "",
      numbercreditcard: "",
      expirationdate: "",
      cvc: "",
    },
    cancel: false,
    d1: 0,
    d2: 0,
  }),
  created() {
    // customer car
    const text = JSON.parse(localStorage.getItem("mycart"));
    this.store = text;

    const string = JSON.parse(localStorage.getItem("myname"));
    this.myname = string;

    const date = JSON.parse(localStorage.getItem("rentDate"));
    this.rentdate = date;

    const sta = JSON.parse(localStorage.getItem("rentStation"));
    this.rstation = sta;

    //checkbill
    const bool = JSON.parse(localStorage.getItem("mybill"));
    if (bool != null) {
      this.checkoutCar = bool;
    }
    localStorage.setItem("mybill", false);
  },
  methods: {
    tocheckout() {
      // this.rstation.st1 = this.station1
      // this.rstation.st2 = this.station2
      const sta = JSON.stringify(this.rstation);
      localStorage.setItem("rentStation", sta);
    },
  },
  computed: {
    reversdate() {
      let re = this.rentdate.dsend.split("-");
      console.log(re);
      this.d1 = re[2];
      return re[2] + "/" + re[1] + "/" + re[0];
    },
    reversdate2() {
      let re = this.rentdate.dreturn.split("-");
      console.log(re);
      this.d2 = re[2];
      return re[2] + "/" + re[1] + "/" + re[0];
    },
    calday() {
      return this.d2 - this.d1;
    },
    totalprice() {
      return this.calday * this.store.price;
    },
  },
};
</script>
