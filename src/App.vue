<script setup>
import navbar1 from './components/navbar.vue';
import { RouterView } from "vue-router";
// import { useCounterStore } from './stores/count';

// const store = useCounterStore()
</script>

<template>
  <!-- <h1>{{ store.count }}</h1> -->
  <navbar1></navbar1>
  <RouterView></RouterView>
</template>
