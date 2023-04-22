<script>
export default {
  created() {
    this.showname = JSON.parse(localStorage.getItem("myname"));
    console.log(this.showname);
  },
};
</script>

<template>
  <section class="hero is-success is-halfheight is-gradient column">
    <div class="hero-body columns">
      <div class="column is-4">
        <p class="title">
          {{ showname }}
        </p>
        <p class="subtitle">Track your rental status here!</p>
      </div>
      <div class="column">
        <div class="columns">
            <div class="column is-4 has-text-centered">
                <router-link to="/tablecar">
                   <div class="card p-4">
                    <div class="card-image">
                            <img src="https://cdn-icons-png.flaticon.com/512/871/871867.png" alt="Placeholder image" width="150" height="150">
                    </div>
                    <b>CRUD รถในระบบ</b>
                </div> 
                </router-link>
            </div>
            <div class="column is-4 has-text-centered">
                <router-link to="">
                   <div class="card p-4">
                    <div class="card-image">
                            <img src="https://cdn-icons-png.flaticon.com/512/4906/4906266.png" alt="Placeholder image" width="150" height="150">
                    </div>
                    <b>รายละเอียดจองรถของลูกค้า</b>
                </div> 
                </router-link>
            </div>
            <div class="column is-4 has-text-centered">
                <router-link to="">
                   <div class="card p-4">
                    <div class="card-image">
                            <img src="https://cdn-icons-png.flaticon.com/512/4422/4422509.png" alt="Placeholder image" width="150" height="150">
                    </div>
                    <b>ตรวจสอบการคืนรถและซ่อมบำรุง</b>
                </div> 
                </router-link>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
