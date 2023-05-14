<script setup>
import { inject } from "vue";
//send click status to myrent
const sharedValue = inject("sharedValue");

const sendValueToParent = (page) => {
  sharedValue.value = page;
};
</script>

<template>
  <!-- status bar-->
  <section
    class="hero is-small border_td"
    style="background-color: var(--color-background)"
  >
    <div class="hero-body">
      <div class="columns is-5 has-text-centered">
        <div class="column is-color-transgreen">
          <a class="has-text-black" @click="sendValueToParent('checkout')">
            <img
              class="icon"
              src="https://media.discordapp.net/attachments/1072181252964233328/1076845329321824256/wallet.png"
              alt=""
            />
            <p>Check out</p>
          </a>
        </div>

        <div class="column" id="ibar">
          <!-- <router-link to="/pickup">                  -->
          <a class="has-text-black" @click="sendValueToParent('pickup')">
            <img
              class="icon"
              src="https://cdn.discordapp.com/attachments/1072181252964233328/1076845328743022653/car.png"
              alt=""
            />
            <p>Pick up car</p>
          </a>
          <!-- </router-link>   -->
        </div>

        <div class="column" id="ibar">
          <a class="has-text-black" @click="sendValueToParent('return')">
            <img
              class="icon"
              src="https://cdn.discordapp.com/attachments/1072181252964233328/1076845328537489458/garage.png"
              alt=""
            />
            <p>Return car</p>
          </a>
        </div>
        <div class="column" id="ibar">
          <a class="has-text-black" @click="sendValueToParent('history')">
            <img
              class="icon"
              src="https://cdn.discordapp.com/attachments/1072181252964233328/1076845401061195826/file-document.png"
              alt=""
            />
            <p>History</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
