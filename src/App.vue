<script setup lang="ts">
import Gutters from "./components/Gutters.vue";
import Sam from "./components/Sam.vue";
import Hertzler from "./components/Hertzler.vue";
import { ref } from "vue";

const scrollPosition = ref(0);
window.addEventListener(
  "scroll",
  () => (scrollPosition.value = window.scrollY)
);
</script>

<template>
  <div class="relative">
    <Sam />
    <Hertzler :scroll-position="scrollPosition" />
    <Gutters>
      <div class="h-screen"></div>
      <div class="h-screen"></div>
      <div class="h-screen"></div>
      <div class="h-screen"></div>
      <div class="h-screen"></div>
      <div class="h-screen"></div>
    </Gutters>
  </div>
  <!-- <Gutters> </Gutters> -->
</template>

<style scoped></style>
