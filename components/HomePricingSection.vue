<template>
  <section
    class="w-full bg-dark-blue min-h-screen relative px-5 md:px-8 xl:px-0"
  >
    <img
      lazy
      src="/h_sec_v3.svg"
      class="absolute object-cover inset-0 w-full pointer-events-none transform translate-y-32"
    />
    <img
      lazy
      src="/h_sec_v4.svg"
      class="absolute object-cover inset-x-0 top-1/2 bottom-0 w-full pointer-events-none transform"
    />
    <div class="flex justify-center">
      <h2
        class="text-center font-bold font-rubik text-[40px] md:text-6xl leading-tight md:leading-snug md:flex flex-col items-center text-violet-50"
      >
        <span
          >Discounted <br class="md:hidden" />
          <em class="highlight">Corporate</em></span
        ><br class="md:hidden" />
        <span class="flex gap-x-2"
          ><em class="highlight">Training</em> Bundles</span
        >
      </h2>
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-3 lg:px-[8rem] gap-x-8 gap-y-6 relative z-10 mt-14 md:mt-40"
    >
      <pricing-card :data="pricingOne" title="Basic" icon="leaf" />
      <pricing-card
        :data="pricingTwo"
        title="Professional"
        icon="rocket-launch"
        has-mini-course
      />
      <pricing-card :data="pricingThree" title="Premium" icon="bolt" />
    </div>
  </section>
</template>
<script setup>
const pricings = useState("pricings");

const [pricingOne, pricingTwo, pricingThree] = pricings.value;
</script>
