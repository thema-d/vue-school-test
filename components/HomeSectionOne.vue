<template>
  <section class="w-full bg-dark-blue py-10 min-h-screen">
    <div
      class="flex flex-col justify-between items-center px-4 md:px-32 xl:flex-row"
    >
      <div
        class="flex flex-col w-full md:w-[602px] xl:max-w-[570px] xl:mr-20 my-8 md:my-20 2xl:max-w-[800px]"
      >
        <h1
          class="text-white md:flex xl:block flex-col items-center text-4xl md:text-[60px] font-extrabold leading-tight text-center lg:text-left font-rubik"
        >
          <span class="inline-block">
            Complete&nbsp;<span class="text-vs-accent">Vue.js</span>
          </span>
          <span class="inline-block">
            <span class="text-vs-accent">training</span>&nbsp;solutions
          </span>
          for companies
        </h1>
        <p
          class="mt-10 w-full text-base md:text-2xl leading-8 text-violet-50 font-rubik text-center xl:text-left"
        >
          Training solutions designed for companies, agencies and organisations
          with developers using or who are considering using the Vue.js
          framework
        </p>

        <div class="flex justify-center xl:block">
          <button
            class="px-10 py-5 text-base font-medium text-center text-gray-800 bg-emerald-500 rounded-xl w-44 mt-10 mx-auto lg:mt-16 font-rubik hover:shadow-[0px_0px_20px_-4px_#0BD88F] hover:bg-gradient-to-b from-vs-accent to-vs-blue"
          >
            Talk to Sales
          </button>
        </div>
      </div>
      <img
        lazy
        src="/g_854.svg"
        alt="Group 854"
        class="w-[602px] md:h-[616px] xl:w-[570px] xl:h-[570px] xl:mt-20 xl:-mr-16"
      />
    </div>
    <div class="flex flex-col relative px-5 md:px-32">
      <div
        class="px-3 py-5 md:p-10 mt-20 border border-gray-700 border-solid bg-[#2B2F44] bg-opacity-90 rounded-[30px] relative z-10"
      >
        <div
          class="flex flex-col md:flex-row gap-x-5 xl:items-center items-start"
        >
          <div
            class="w-[20%] items-center md:self-start xl:self-center self-center shrink-0"
          >
            <img
              lazy
              src="/logo.svg"
              class="grow xl:w-full xl:max-w-[140px] w-[157px]"
            />
          </div>
          <div class="flex flex-col xl:ml-5 xl:w-[73%] lg:items-center">
            <div class="flex flex-col my-auto">
              <div
                class="text-2xl md:text-[40px] font-bold text-white text-center md:text-left"
              >
                About Vue School corporate training
              </div>
              <div
                class="mt-8 text-sm md:text-[22px] leading-8 text-violet-50 text-center md:text-left font-normal"
              >
                School is the #1 training resource for Vue.js and has provided
                the most comprehensive Vue.js video library in the world to over
                140,000 developers. Private individuals and small to enterprise
                companies have used our services to develop their skills since
                2016.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden xl:flex gap-8 justify-between w-fit mx-auto mt-16 relative"
      >
        <img
          v-for="i in 6"
          :key="`client-${i}`"
          lazy
          src="/google.svg"
          class="w-full aspect-[2.94] max-w-[119px]"
        />
      </div>

      <img
        lazy
        src="/h_sec_v1.svg"
        class="absolute object-cover inset-0 top-[-4rem] w-full pointer-events-none"
      />
      <img
        lazy
        src="/h_sec_v2.svg"
        class="absolute object-cover inset-0 top-[-3rem] w-full pointer-events-none"
      />
    </div>
    <div class="justify-between h-fit xl:px-32 mt-[180px]">
      <div class="flex gap-5 flex-col xl:flex-row xl:items-center">
        <div class="grow items-center xl:items-start flex flex-col xl:w-1/2">
          <em class="text-base md:text-2xl text-center xl:text-left highlight"
            >YOUR #1 SOURCE OF VUE.JS COURSES</em
          >
          <div
            class="flex flex-col mt-3.5 text-[40px] md:text-6xl font-bold text-violet-50 md:gap-y-5 leading-tight"
          >
            <span class="text-center xl:text-left">
              <span>Full Stack</span>&nbsp;<em class="highlight">Vue</em>
            </span>
            <span class="text-center xl:text-left">
              <em class="inline highlight">Training</em>&nbsp;<span
                >Solutions</span
              >
            </span>
          </div>
        </div>
        <div
          class="flex mt-5 flex-row xl:ml-5 xl:w-6/12 w-full md:w-[516px] mx-auto"
        >
          <div class="grow flex flex-col items-center justify-center">
            <em
              class="highlight text-6xl md:text-[90px] font-medium leading-[100%]"
              >763</em
            >
            <div class="flex gap-2.5 self-center text-sm text-violet-50 mt-4">
              <icons-video-icon
                class="shrink-0 aspect-square text-white w-[18px]"
              />
              <div>Video lessons</div>
            </div>
          </div>
          <div class="grow flex flex-col items-center justify-center">
            <em
              class="highlight text-6xl md:text-[90px] font-medium leading-[100%]"
              >40</em
            >
            <div class="flex gap-2.5 self-center text-sm text-violet-50 mt-4">
              <icons-course-icon
                class="shrink-0 aspect-square text-white w-[18px]"
              />
              <div>Courses</div>
            </div>
          </div>
          <div class="grow flex flex-col items-center justify-center">
            <em
              class="highlight text-6xl md:text-[90px] font-medium leading-[100%]"
              >64</em
            >
            <div class="flex gap-2.5 self-center text-sm text-violet-50 mt-4">
              <icons-clock-icon
                class="shrink-0 aspect-square text-white w-[18px]"
              />
              <div>15 Hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
