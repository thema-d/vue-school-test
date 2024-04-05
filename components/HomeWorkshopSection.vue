<template>
  <div>
    <div class="flex justify-between md:mx-8 xl:mx-36">
      <div
        class="text-[40px] md:text-6xl font-bold text-white text-center md:text-left leading-tight md:leading-normal"
      >
        Available Workshops
      </div>
      <div>
        <button
          class="hidden xl:block justify-center px-10 py-5 text-base font-medium text-center text-gray-800 bg-emerald-500 rounded-xl font-rubik hover:shadow-[0px_0px_20px_-4px_#0BD88F] hover:bg-gradient-to-b from-vs-accent to-vs-blue"
        >
          See all the workshops
        </button>
      </div>
    </div>
    <div
      class="flex flex-col pl-5 md:pl-36 overflow-x-auto hide-scrollbar"
      ref="sliderEl"
    >
      <div class="flex gap-5 justify-between mt-20">
        <workshop-card class="items" v-for="i in 4" />
      </div>
    </div>
    <div class="xl:hidden md:mx-36 mt-14 flex justify-center">
      <button
        class="justify-center px-10 py-5 text-base font-medium text-center text-gray-800 bg-emerald-500 rounded-xl font-rubik hover:shadow-[0px_0px_20px_-4px_#0BD88F] hover:bg-gradient-to-b from-vs-accent to-vs-blue"
      >
        See all the workshops
      </button>
    </div>
  </div>
</template>
<script setup>
import { useEventListener } from "@vueuse/core";
const sliderEl = ref(null);

const registerDragListener = () => {
  const slider = sliderEl.value;
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  useEventListener(slider, "mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  useEventListener(slider, "mouseleave", () => {
    isDown = false;
  });

  useEventListener(slider, "mouseup", () => {
    isDown = false;
  });

  useEventListener(slider, "mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
};

onMounted(() => {
  registerDragListener();
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
