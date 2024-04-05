<template>
  <div class="xl:max-w-[90rem] bg-dark-blue mx-auto">
    <navigation-bar />
    <home-section-one />
    <home-pricing-section class="mt-32 md:mt-52" />
    <home-workshop-section class="mt-40" />
    <home-footer-section class="mt-36 xl:mt-52 mb-20" />
  </div>
</template>
<script setup>
useHead({
  title: "Vue School Corporate Training",
  meta: [
    {
      name: "description",
      content: "Home page of the website",
    },
  ],
});
</script>
