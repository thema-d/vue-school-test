<template>
  <div
    class="shrink-0 group flex flex-col rounded-[30px] bg-gradient-to-r from-[#4F08E6] to-[#FF4975] opacity-50 hover:opacity-100 w-full md:max-w-[570px] transition cursor-pointer"
  >
    <div class="flex gap-3 px-9 py-6 text-base font-medium text-violet-50">
      <icons-calendar-icon
        class="shrink-0 aspect-[0.9] fill-violet-50 w-[18px]"
      />
      <time class="max-w-full">December 14th - 11:00 AM (GMT-3)</time>
    </div>
    <div
      class="flex flex-col p-9 text-sm bg-slate-800 text-slate-500 relative rounded-b-[inherit] transform translate-y-px"
    >
      <div
        class="-z-10 absolute inset-0 hidden opacity-50 group-hover:block bg-gradient-to-r from-[#4F08E6] to-[#FF4975] pointer-events-none rounded-[inherit] transition"
      ></div>
      <div class="flex gap-5 justify-between self-start">
        <button class="flex gap-3">
          <icons-video-icon
            class="shrink-0 w-5 aspect-square text-slate-500 group-hover:text-emerald-500"
          />
          <div class="group-hover:text-white">LIVE Training</div>
        </button>
        <div class="flex gap-2 justify-center">
          <icons-clock-icon
            class="shrink-0 w-5 aspect-square text-slate-500 group-hover:text-white"
          />
          <div class="group-hover:text-white">15 Hours</div>
        </div>
      </div>
      <h2
        class="mt-5 text-2xl font-medium text-violet-50 group-hover:text-white"
      >
        Vue.js Fundamentals
      </h2>
      <p class="mt-3 leading-5 group-hover:text-white">
        A progressive framework for building user interfaces. Unlike other
        monolithic frameworks, Vue is designed from the ground up to be
        incrementally...
      </p>
      <button class="flex gap-3 self-start mt-5 leading-[143%]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7484a17e9790ab2ace10a33a0865fec83b80696c5fb83bee21764872bd9c8b?apiKey=3fd5f658a4334d8a8c4b8db35696ddb2&"
          alt="Steve Popoola avatar"
          class="shrink-0 w-6 aspect-square"
        />
        <div class="group-hover:text-white my-auto">Steve Popoola</div>
      </button>
    </div>
  </div>
</template>
