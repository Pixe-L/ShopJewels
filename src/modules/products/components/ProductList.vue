<template>
  <section class="py-10 bg-gray-100 dark:bg-slate-900 dark:text-slate-100">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <!-- Product card -->
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '../interfaces/product.interface';
import ProductCard from './ProductCard.vue';

interface Props {
  products: Product[];
}
defineProps<Props>();
</script>

<style scoped></style>
