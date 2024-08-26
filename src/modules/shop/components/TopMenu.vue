<template>
  <nav
    class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 dark:border-blue-500 bg-white py-2.5 px-6 sm:px-4"
  >
    <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
      <a href="#" class="flex items-center">
        <svg
          height="80px"
          width="80px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <polygon
                style="fill: #00d2ff"
                points="368.552,150.069 406.069,44.138 256,44.138 105.931,44.138 143.448,150.069 "
              ></polygon>
              <polygon
                style="fill: #00d2ff"
                points="256,150.069 512,150.069 256,467.862 "
              ></polygon>
            </g>
            <g>
              <polygon
                style="fill: #18bdf6"
                points="256,44.138 256,150.069 0,150.069 105.931,44.138 "
              ></polygon>
              <polygon style="fill: #18bdf6" points="256,150.069 0,150.069 256,467.862 "></polygon>
              <polygon
                style="fill: #18bdf6"
                points="256,44.138 256,150.069 512,150.069 406.069,44.138 "
              ></polygon>
            </g>
            <polygon
              style="fill: #00d2ff"
              points="256,44.138 143.473,150.069 256,150.069 368.527,150.069 "
            ></polygon>
            <polygon
              style="fill: #28aff0"
              points="143.448,150.069 256,467.862 368.552,150.069 "
            ></polygon>
            <polygon
              style="fill: #59e2ff"
              points="406.069,44.138 368.552,150.069 512,150.069 "
            ></polygon>
            <polygon
              style="fill: #28aff0"
              points="105.931,44.138 143.448,150.069 0,150.069 "
            ></polygon>
            <g>
              <path
                style="fill: #ffffff"
                d="M426.244,93.358c-15.236-3.474-27.231-15.468-30.705-30.706c-0.262-1.148-1.781-1.148-2.042,0 c-3.474,15.236-15.468,27.231-30.705,30.706c-1.148,0.262-1.148,1.781,0,2.042c15.236,3.474,27.231,15.467,30.705,30.705 c0.262,1.148,1.781,1.148,2.042,0c3.474-15.238,15.468-27.231,30.705-30.705C427.391,95.139,427.391,93.62,426.244,93.358z"
              ></path>
              <path
                style="fill: #ffffff"
                d="M386.731,157.426c-11.789-3.053-21.07-12.335-24.124-24.124c-0.307-1.184-1.839-1.184-2.146,0 c-3.053,11.789-12.335,21.07-24.124,24.124c-1.184,0.307-1.184,1.839,0,2.146c11.789,3.053,21.07,12.334,24.124,24.124 c0.307,1.184,1.839,1.184,2.146,0c3.053-11.789,12.335-21.07,24.124-24.124C387.915,159.265,387.915,157.732,386.731,157.426z"
              ></path>
            </g>
          </g>
        </svg>

        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-slate-800"
          >NeonJewel's</span
        >
      </a>
      <div class="mt-2 flex justify-items-center items-center sm:mt-0 sm:flex md:order-2">
        <!-- Login Button -->
        <button
          type="button"
          class="rounde mr-3 hidden border dark:text-white border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
        >
          Login
        </button>
        <!-- Register Button -->
        <button
          type="button"
          class="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg"
        >
          Register
        </button>
        <!-- Button DarkMode -->
        <button @click="toggleDark()" type="button" class="btn btn-circle btn-ghost p-2 ml-2">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!isDark">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                stroke="#1e293b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <!-- Menu movil -->
        <label class="hamburger drawer md:hidden">
          <input type="checkbox" id="my-drawer" class="drawer-toggle" />
          <svg viewBox="0 0 32 32">
            <path
              :class="isDark ? 'offDark' : 'dark'"
              class="line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path :class="isDark ? 'offDark' : 'dark'" d="M7 16 27 16"></path>
          </svg>
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="dark:bg-slate-800 bg-slate-100 text-base-content h-full w-full text-center">
              <!-- Sidebar content here -->
              <li
                v-for="(item, i) in items"
                :key="i"
                href="#"
                :class="{ isActive: activeInd === item }"
                @click="setActive(item)"
                class="rounded h-36 border border-transparent dark:text-white text-slate-800 md:p-2 md:hover:text-blue-500 cursor-pointer content-center"
                aria-current="page"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </label>
      </div>
      <div
        class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto p-4"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-block items-center w-full dark:bg-slate-800 rounded-lg md:flex-row gap-6 md:text-sm md:font-medium"
        >
          <li
            v-for="(item, i) in items"
            :key="i"
            href="#"
            :class="{ isActive: activeInd === item }"
            @click="setActive(item)"
            class="rounded border border-transparent dark:text-white text-gray-700 hover:bg-gray-100 md:p-2 md:hover:bg-transparent md:hover:text-blue-500 cursor-pointer"
            aria-current="page"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

const isDark = inject('isDark');
const toggleDark = inject('toggleDark');
const items = ref(['Home', 'About', 'Services', 'Contact']);
const activeInd = ref(null);
const setActive = (i) => {
  activeInd.value = i;
};
</script>

<style scoped>
.isActive {
  @apply border border-blue-500 p-2 text-blue-500;
}
/* .hamburger {
  cursor: pointer;
} */

.hamburger input {
  display: none;
}

.hamburger svg {
  /* The size of the SVG defines the overall size */
  height: 3em;
  /* Define the transition for transforming the SVG */
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dark {
  stroke: #000;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition:
    stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.offDark {
  stroke: #fff;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition:
    stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
  transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
</style>
