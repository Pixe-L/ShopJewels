<template>
  <!-- component -->
  <!-- Create By Joker Banny -->
  <!-- Header Navbar -->
  <top-menu />

  <!-- Router view -->
  <RouterView />

  <!-- Footer -->
  <custom-footer />
</template>

<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>

<style scoped></style>
