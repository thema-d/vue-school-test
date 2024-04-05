<template>
  <div>
    <div
      class="flex flex-col px-6 py-10 border border-light-white border-opacity-30 bg-dark-blue bg-opacity-90 xl:max-w-[370px] w-full rounded-[30px]"
    >
      <header
        class="flex gap-4 text-2xl font-bold leading-7 text-violet-50 whitespace-nowrap"
      >
        <component :is="iconComponentName" class="shrink-0 w-8 aspect-square" />
        <h1 class="my-auto">{{ title }}</h1>
      </header>
      <p class="mt-10 text-base leading-6 text-emerald-500">
        {{ subtitle }}
      </p>
      <template
        v-for="({ label, enabled, bold }, idx) in features"
        :key="`feature-${idx}`"
      >
        <div
          class="flex gap-1.5 justify-between mt-6 text-sm leading-5 text-violet-50"
          :class="{
            'opacity-25': !enabled,
          }"
        >
          <div class="flex gap-4">
            <icons-check-icon
              :checked="enabled"
              class="shrink-0 self-start aspect-square text-emerald-500 w-[18px]"
              :class="{
                'font-bold': bold,
              }"
            />
            <p>{{ label }}</p>
          </div>
          <icons-info-icon
            class="shrink-0 my-auto w-3.5 aspect-square text-slate-500"
          />
        </div>
      </template>
      <div
        v-if="hasMiniCourse"
        class="flex gap-4 px-6 py-4 mt-6 text-base font-medium leading-6 text-white bg-emerald-500 bg-opacity-25 rounded-xl"
      >
        <img
          loading="lazy"
          src="/mini-course.png"
          alt="Clock icon"
          class="shrink-0 w-12 aspect-square"
        />
        <div class="my-auto">
          <p class="text-sm text-slate-400">Enough time to watch:</p>
          <p class="text-lg">The Vue 3 Masterclass</p>
        </div>
      </div>
      <div
        class="flex mt-6 flex-col p-6 w-full bg-[#0E0E10] bg-opacity-20 rounded-2xl"
      >
        <div class="flex gap-2.5">
          <p class="text-4xl font-bold text-white">$50</p>
          <p class="my-auto text-base text-slate-400">/ seat / month</p>
        </div>
        <p class="mt-7 text-base font-bold text-white">
          How many licenses do you need?
        </p>
        <div class="flex gap-0 py-0.5 mt-4">
          <input-range-slider class="w-full" v-model="numberOfSeats" />
        </div>
        <div
          class="flex gap-5 justify-between text-sm font-medium whitespace-nowrap text-slate-500"
        >
          <p>5</p>
          <p class="text-right">20</p>
        </div>
        <div class="flex gap-5 mt-4 justify-between">
          <div
            class="flex flex-col justify-center px-3.5 py-1 whitespace-nowrap rounded-lg bg-neutral-950 bg-opacity-20"
          >
            <div class="flex gap-2.5 items-center">
              <icons-people-icon
                class="shrink-0 self-stretch my-auto aspect-[1.19] w-[19px]"
              />
              <p
                class="self-stretch text-2xl font-bold text-center text-stone-200"
              >
                {{ numberOfSeats }}
              </p>
              <p class="self-stretch my-auto text-base text-gray-400">seats</p>
            </div>
          </div>
          <p class="my-auto text-base font-medium text-emerald-500">
            26% discount
          </p>
        </div>
      </div>
      <button
        class="justify-center items-center px-10 py-5 mt-10 text-base font-medium text-center text-gray-800 bg-emerald-500 rounded-xl"
      >
        Start Learning
      </button>
      <a
        href="#"
        class="self-center mt-6 text-base font-medium text-center text-emerald-500"
        >Refer your manager</a
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import LeafIcon from "~/components/icons/LeafIcon.vue";
import RocketLaunchIcon from "~/components/icons/RocketLaunchIcon.vue";
import BoltIcon from "~/components/icons/BoltIcon.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  icon: {
    type: String,
    default: "leaf",
  },
  title: {
    type: String,
    required: true,
  },
  hasMiniCourse: {
    type: Boolean,
    default: false,
  },
  subtitle: {
    type: String,
    default: "Includes 1 year access to:",
  },
});

const numberOfSeats = ref(12);

const iconComponentName = computed(() => {
  switch (props.icon) {
    case "leaf":
      return LeafIcon;
    case "rocket-launch":
      return RocketLaunchIcon;
    case "bolt":
      return BoltIcon;
    default:
      return LeafIcon;
  }
});

const defaultFeatures = [
  {
    label: "All Video Courses",
    enabled: true,
  },
  {
    label: "Vue.Js Master class",
    enabled: true,
  },
  {
    label: "Developer assist Slack channel",
    enabled: true,
  },
  {
    label: "Live Weekly QnA",
    enabled: false,
  },
  {
    label: "1 x ws ticket per license",
    enabled: false,
  },
];

const features = computed(() => props?.data?.features || defaultFeatures);
</script>
