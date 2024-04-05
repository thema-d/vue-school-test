<template>
  <div>
    <div class="flex gap-5 flex-col xl:flex-row px-5">
      <div
        class="flex-col items-center xl:items-start w-full md:w-[688px] xl:w-1/2 flex px-5 mt-1.5 self-center"
      >
        <icons-company-logo
          loading="lazy"
          class="max-w-full aspect-[3.03] w-[268px]"
        />
        <p
          class="mt-10 xl:mt-24 text-base text-center xl:text-left leading-6 text-white"
        >
          Thanks to fine people like you, Vue School can proudly sponsor Evan
          and the future of Vue.js by being a Platinum Patreon
        </p>
        <h2
          class="mt-16 text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
        >
          FOLLOW US IN SOCIAL MEDIA
        </h2>
        <nav class="flex gap-x-3 md:gap-x-10 justify-between mt-8 md:mt-12">
          <a
            href="#"
            class="flex justify-center items-center px-2.5 bg-slate-800 h-[60px] rounded-[100px] w-[60px]"
          >
            <img
              loading="lazy"
              src="/facebook.svg"
              class="w-7 aspect-square fill-gray-500"
            />
          </a>
          <a
            href="#"
            class="flex justify-center items-center px-2.5 bg-slate-800 h-[60px] rounded-[100px] w-[60px]"
          >
            <img
              loading="lazy"
              src="/twitter.svg"
              class="w-7 aspect-[1.27] fill-gray-500"
            />
          </a>
          <a
            href="#"
            class="flex justify-center items-center px-2.5 bg-slate-800 h-[60px] rounded-[100px] w-[60px]"
          >
            <img
              loading="lazy"
              src="/github.svg"
              class="w-7 aspect-square fill-gray-500"
            />
          </a>
          <a
            href="#"
            class="flex justify-center items-center px-2.5 bg-slate-800 h-[60px] rounded-[100px] w-[60px]"
          >
            <img
              loading="lazy"
              src="/linkedin.svg"
              class="w-7 aspect-square fill-gray-500"
            />
          </a>
          <a
            href="#"
            class="flex justify-center items-center px-2.5 bg-slate-800 h-[60px] rounded-[100px] w-[60px]"
          >
            <img
              loading="lazy"
              src="/youtube.svg"
              class="w-7 aspect-[1.41] fill-gray-500"
            />
          </a>
        </nav>
      </div>
      <div
        class="grid mx-auto w-full md:max-w-[688px] md:grid-cols-3 xl:grid-cols-2 xl:ml-5 xl:w-6/12 mt-16 xl:mt-0 gap-x-5 gap-y-12"
      >
        <div
          class="order-1 col-span-1 xl:col-span-2 flex xl:flex-row flex-col gap-y-12 items-center md:items-start"
        >
          <div
            class="flex w-1/2 flex-col xl:px-5 text-base leading-6 text-white text-center md:text-left"
          >
            <h2
              class="text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
            >
              PRODUCTS
            </h2>
            <a href="#" class="mt-5">Courses</a>
            <a href="#" class="mt-3.5">Workshops</a>
            <a href="#" class="mt-3.5">Vue Masterclass</a>
            <a href="#" class="mt-3.5">Mastering Nuxt</a>
          </div>
          <div
            class="flex w-1/2 flex-col xl:px-5 text-base leading-6 text-white text-center md:text-left"
          >
            <h2
              class="text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
            >
              EVENTS
            </h2>
            <a href="#" class="mt-5">Vue.js Nation</a>
            <a href="#" class="mt-3.5">Nuxt Nation</a>
            <a href="#" class="mt-3.5">Vue.js Forge</a>
          </div>
        </div>
        <div
          class="order-3 xl:order-2 col-span-1 flex flex-col gap-y-12 items-center md:items-start"
        >
          <div
            class="xl:order-1 order-2 flex flex-col xl:px-5 text-base leading-6 text-white text-center md:text-left"
          >
            <h2
              class="text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
            >
              PRICING
            </h2>
            <a href="#" class="mt-5">Plans</a>
          </div>
          <div
            class="xl:order-2 order-1 flex flex-col xl:px-5 text-base leading-6 text-white text-center md:text-left"
          >
            <h2
              class="text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
            >
              CONNECT WITH US
            </h2>
            <a href="#" class="mt-5">About Us</a>
            <a href="#" class="mt-3.5">Careers</a>
            <a href="#" class="mt-3.5">Contact Us</a>
          </div>
        </div>
        <div
          class="order-2 xl:order-3 col-span-1 flex flex-col gap-y-12 items-center md:items-start"
        >
          <div
            class="flex flex-col xl:px-5 text-base leading-6 text-white text-center md:text-left"
          >
            <h2
              class="text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
            >
              CORPORATE
            </h2>
            <a href="#" class="mt-5">Corporate Training</a>
            <a href="#" class="mt-3.5">Developer Recruitment</a>
            <a href="#" class="mt-3.5">Course Development</a>
            <a href="#" class="mt-3.5">On-site Workshops</a>
            <a href="#" class="mt-3.5">Consulting</a>
            <a href="#" class="mt-3.5">Affiliate Programs</a>
          </div>
          <div
            class="flex flex-col xl:px-5 text-base leading-6 text-white text-center md:text-left"
          >
            <h2
              class="text-[22px] md:text-2xl font-medium leading-7 text-slate-500"
            >
              RESOURCES
            </h2>
            <a href="#" class="mt-5">Articles</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
