<template>
  <nav
    class="flex gap-5 md:justify-between items-center px-5 2xl:px-12 py-5 w-full text-base backdrop-blur-[10px] bg-dark-blue"
  >
    <div class="flex gap-x-4">
      <button @click="toggleMenu" class="xl:hidden">
        <icons-menu-icon v-if="!isMenuOpen" class="w-6 text-white" />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-6 text-white font-bold"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <icons-company-logo class="h-[3.5rem] shrink-0" />
    </div>
    <ul
      class="xl:flex gap-x-5 my-auto leading-[150%] font-rubik"
      :class="{
        hidden: !isMenuOpen,
        'mobile-menu': isMenuOpen,
      }"
    >
      <li class="flex gap-1 justify-between pr-1.5 group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent"
          >Courses</a
        >
        <icons-caret-down
          class="group-hover:text-vs-accent w-2 aspect-[1.59] text-violet-50"
        />
      </li>
      <li class="group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent">Plans</a>
      </li>
      <li class="flex gap-1 justify-between pr-1.5 group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent"
          >Business Service</a
        >
        <icons-caret-down
          class="group-hover:text-vs-accent w-2 aspect-[1.59] text-violet-50"
        />
      </li>
      <li class="group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent"
          >Learning Paths</a
        >
      </li>
      <li class="group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent">Hiring</a>
      </li>
      <li class="group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent"
          >Articles</a
        >
      </li>
      <li class="flex gap-1 justify-between pr-1.5 group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent">Events</a>
        <icons-caret-down
          class="group-hover:text-vs-accent w-2 aspect-[1.59] text-violet-50"
        />
      </li>
      <li class="group">
        <a href="#" class="text-violet-50 group-hover:text-vs-accent"
          >Get Certified</a
        >
      </li>
    </ul>
    <div class="hidden md:flex gap-x-6 justify-between text-center">
      <a href="#" class="text-violet-50 hover:text-vs-accent my-auto">Log in</a>
      <a
        href="#"
        class="relative px-10 py-5 gradient-box group bg-dark-blue bg-clip-padding rounded-xl hover:bg-transparent border-2 border-solid border-transparent text-vs-accent font-medium hover:text-dark-blue active:bg-vs-accent active:border-vs-accent"
      >
        Sign up
      </a>
    </div>
  </nav>
</template>
<style lang="scss">
.gradient-box {
  &:before {
    content: "";
    @apply absolute inset-0 bg-gradient-to-b from-vs-accent to-vs-blue;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(to right, #0bd88f, #075ebf);
  }
  &:hover:before {
    background: linear-gradient(to bottom, #0bd88f, #075ebf);
  }
}
</style>
<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style>
.mobile-menu {
  @media (max-width: 1280px) {
    @apply absolute top-full left-0 w-full px-5 py-5 space-y-5 text-xl bg-dark-blue drop-shadow-lg z-[999999];
  }
}
</style>
