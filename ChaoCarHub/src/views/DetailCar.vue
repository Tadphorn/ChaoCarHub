<script>
export default {
  data: () => ({
    locationcar: [
      "สนามบินดอนเมือง",
      "สนามบินสุวรรณภูมิ",
      "สถานีรถไฟดอนเมือง",
      "ไอทีสแควร์",
      "BTS อนุสาวรีย์",
      "BTS อโศก",
      "BTS ช่องนนทรี",
      "ธรรมศาสตร์ รังสิต",
      "ฟิวเจอร์ปาร์ค รังสิต",
      "เซ็นทรัล อีสต์วิลล์",
      "แอร์พอร์ตลิงค์ ลาดกระบัง",
      "เซ็นทรัล พระราม 2",
      "แฟชั่น ไอซ์แลนด์",
    ],
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

<template>
  <div class="container is-max-widescreen p-5">
    <!-- All other tile elements -->
    <div class="p-5">
      <div class="columns">
        <div class="column is-5 ml-5">
          <h1 class="is-size-2 ml-6">{{ store.brand }} {{ store.model }}</h1>
          <img :src="store.img" alt="" />
        </div>
        <!-- icon -->
        <div class="column ml-4 mt-4 is-2 is-size-5">
          <img
            class="icond tobottom"
            src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607802408990/user.png"
            alt=""
          />
          {{ store.seat }} ที่นั้ง<br />
          <img
            class="icond mt-3"
            src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607567540294/bag.png"
            alt=""
          />
          {{ store.bag }} กระเป๋า<br />
          <img
            class="icond mt-3"
            src="https://cdn.discordapp.com/attachments/1072181252964233328/1078900607286509598/car-gear.png"
            alt=""
          />
          Auto
        </div>
        <!-- sidecard -->
        <div class="column is-4 is-size-5 mt-2">
          <div class="box tobottom1">
            <h1>ราคานี้รวม</h1>
            <h2>
              - ประกันที่มีค่าเสียหายส่วนแรก (CDW) แบบมีค่าเสียหายส่วนแรก
              ฿21,400
            </h2>
            <h2>- ไม่จำกัดการจำกัดเลขไมล์</h2>
          </div>
        </div>
      </div>
    </div>
    <!--show price -->
    <div class="box box-radius">
      <div class="columns p-5 is-size-5">
        <div class="column is-6">
          <p><b>รายละเอียดราคารถ</b></p>
          <p>ค่าบริการรถยนต์เช่า {{ store.price }} บาท</p>
        </div>
        <div class="column is-6">
          <p>
            <b>ราคาสำหรับ {{ calday }} วัน {{ totalprice }} บาท</b>
          </p>
        </div>
      </div>
    </div>
    <div class="box box-radius">
      <div class="columns p-5 is-size-5">
        <div class="column is-6">
          <p><b>การรับรถ</b></p>
          <p>{{ reversdate }} เวลา {{ rentdate.time }} น.</p>
          <p class="is-size-6"><b>สถานที่รับรถ</b></p>
          <div class="select">
            <select v-model="rstation.st1" class="font">
              <option v-for="loca in locationcar" :key="loca.id" :value="loca">
                {{ loca }}
              </option>
            </select>
          </div>
        </div>
        <div class="column is-6">
          <p><b>การคืนรถ</b></p>
          <p>{{ reversdate2 }} เวลา {{ rentdate.time }} น.</p>
          <p class="is-size-6"><b>สถานที่คืนรถ</b></p>
          <div class="select">
            <select v-model="rstation.st2" class="font">
              <option v-for="loca in locationcar" :key="loca.id" :value="loca">
                {{ loca }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- rent button -->
    <div class="columns">
      <div class="column">
        <a href="view_car.html"
          ><button
            class="button is-fullwidth is-large has-text-white font btn"
            type="submit "
          >
            เลือกรถคันอื่น
          </button></a
        >
      </div>
      <div class="column">
        <div
          class="button is-fullwidth is-large has-text-white font btn"
          type="submit "
        >
          <router-link to="/myrent">
            <strong class="has-text-white">ทำการจอง</strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
