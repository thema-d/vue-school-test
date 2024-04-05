<template>
  <div class="range">
    <input
      ref="sliderEl"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      class="range-input"
      @input="handleSlide"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  min: {
    type: Number,
    default: 5,
  },
  max: {
    type: Number,
    default: 20,
  },
  step: {
    type: Number,
    default: 1,
  },
});

const sliderEl = ref(null);

const modelValue = defineModel();

const emit = defineEmits(["input"]);

const handleSlide = (event) => {
  if (!sliderEl.value) return;

  const sliderValue = event.target.value;
  const { min, max } = sliderEl.value;

  const progress = ((sliderValue - min) / (max - min)) * 100;

  sliderEl.value.style.background = `linear-gradient(to right, #0BD88F ${progress}%, #ccc ${progress}%)`;
  modelValue.value = sliderValue;
};

onMounted(() => {
  handleSlide({ target: { value: modelValue.value } });
});
</script>
<style>
.range-input {
  @apply bg-violet-50 rounded-full h-1 outline-none cursor-pointer w-full appearance-none;
}

.range-input::-webkit-slider-thumb {
  @apply appearance-none h-4 w-4 bg-vs-accent rounded-full border-none;
  transition: 0.2s ease-in-out;
}

.range-input::-moz-range-thumb {
  @apply bg-vs-accent w-4 h-4 rounded-full border-none;
  transition: 0.2s ease-in-out;
}

.value {
  font-size: 26px;
  width: 50px;
  text-align: center;
}
</style>
