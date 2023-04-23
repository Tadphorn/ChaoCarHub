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
          <div class="column is-3 has-text-centered">
            <div class="card p-4">
              <div class="columns">
                <div class="card column has-background-primary-light">
                  <router-link to="/crudcar">
                  <div class="card-image has-text-centered" >
                            <img src="https://cdn-icons-png.flaticon.com/512/3133/3133900.png" alt="Placeholder image" width="50" height="50">
                            <img src="https://cdn-icons-png.flaticon.com/512/871/871867.png" alt="Placeholder image" width="50" height="50">
                            <br><b>CREATE (C)</b>
                  </div>
                </router-link>
                </div>
              </div>
              <div class="columns">
                <div class="card column mt-1 has-background-primary-light">
                  <router-link to="/tableud">
                  <div class="card-image has-text-centered" >
                            <img class="mr-5 mt-2" src="https://cdn-icons-png.flaticon.com/512/4737/4737247.png" alt="Placeholder image" width="40" height="40">
                            <img class="ml-5" src="https://cdn-icons-png.flaticon.com/512/6096/6096937.png" alt="Placeholder image" width="40" height="40">
                            <br><b>UPDATE (U) / DELETE (D)</b>
                  </div>
                </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-3 has-text-centered">
            <div class="card p-4">
              <div class="columns">
                <div class="card column has-background-primary-light">
                  <router-link to="/tablepayment">
                  <div class="card-image has-text-centered" >
                            <img src="https://cdn-icons-png.flaticon.com/512/5688/5688249.png" alt="Placeholder image" width="50" height="50">
                            <br><b>ตรวจสอบการชำระเงิน</b>
                  </div>
                </router-link>
                </div>
              </div>
              <div class="columns">
                <div class="card column mt-1 has-background-primary-light">
                  <router-link to="">
                  <div class="card-image has-text-centered" >
                            <img class="" src="https://cdn-icons-png.flaticon.com/512/4422/4422557.png" alt="Placeholder image" width="50" height="50">
                            <br><b>ตรวจสอบการคืนรถ</b>
                  </div>
                </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
