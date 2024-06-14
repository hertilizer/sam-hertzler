<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{ scrollPosition: number }>();
const appBar = ref<HTMLElement | null>(null);
const hertzler = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);

watch(props, () => handleScroll());

function handleScroll() {
  if (hertzler.value && appBar.value && wrapper.value) {
    const scrollHeight = hertzler.value.scrollHeight * 20;
    const scrollFraction = props.scrollPosition / scrollHeight;
    const animationTime = scrollFraction >= 1 ? 1 : scrollFraction;

    // App bar opacity
    const opacity = animationTime * 0.95;
    appBar.value.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;

    // Hertzler
    // key: calc(min + ((max - min) * animationTime))
    // reversed: (1 - animationTime)
    hertzler.value.style.marginTop = `calc(1rem + ((50vh - 1rem) * (1 - ${animationTime})))`;
    hertzler.value.style.fontSize = `calc(4rem + ((12vw - 4rem) * (1 - ${animationTime})))`;
    hertzler.value.style.lineHeight = `calc(70% + (30% * ${animationTime}))`;
  }
}
</script>

<template>
  <div ref="wrapper" class="relative hertzler">
    <div ref="appBar" class="z-10 fixed w-full h-[6rem]"></div>
    <h2
      ref="hertzler"
      class="font-display italic font-bold w-full text-center z-[11] fixed mt-[50vh] mb-4 text-orange"
    >
      HERTZLER
    </h2>
  </div>
</template>

<style scoped>
h2 {
  font-size: 12vw;
  line-height: 70%;
  letter-spacing: 0.25em;
}
</style>
