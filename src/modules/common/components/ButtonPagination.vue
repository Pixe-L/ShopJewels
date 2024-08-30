<template>
  <div class="flex justify-center py-10 text-slate-100 bg-gray-100 dark:bg-slate-900 gap-5">
    <button
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center space-x-1.5 bg-blue-500 disabled:bg-gray-300 disabled:text-slate-800 rounded py-1 px-5 hover:bg-blue-600 transition-all"
    >
      <arrow-left-icon />
      <span>Back</span>
    </button>
    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center space-x-1.5 bg-blue-500 disabled:bg-gray-300 rounded py-1 px-5 hover:bg-blue-600 transition-all"
    >
      <span>Next</span>
      <arrow-right-icon />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

interface Props {
  page: number;
  hasMoreData: boolean;
}
defineProps<Props>();
</script>

<style scoped></style>
