<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->
<script setup>
import navbar1 from './components/navbar.vue';
// import { RouterView } from "vue-router";
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <navbar1></navbar1>
  <RouterView></RouterView>
</template>
