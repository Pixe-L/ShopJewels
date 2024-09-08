<template>
  <h1 class="text-2xl font-semibold mb-4 dark:text-slate-100">Register</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600 dark:text-slate-100">Name</label>
      <input
        ref="nameInputRef"
        v-model="form.name"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Email Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600 dark:text-slate-100">Email</label>
      <input
        ref="emailInputRef"
        v-model="form.email"
        type="text"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600 dark:text-slate-100">Password</label>
      <input
        ref="passInputRef"
        v-model="form.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Create
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Login Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';

const authStore = useAuthStore();
const nameInputRef = ref<HTMLInputElement | null>(null);
const emailInputRef = ref<HTMLInputElement | null>(null);
const passInputRef = ref<HTMLInputElement | null>(null);

const form = reactive({
  name: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (form.name === '') {
    return nameInputRef.value?.focus();
  }
  if (form.email === '') {
    return emailInputRef.value?.focus();
  }
  if (form.password === '' || form.password.length < 6) {
    return passInputRef.value?.focus();
  }

  const okRegister = await authStore.register(form.name, form.email, form.password);
  if (okRegister) {
  }
};
</script>
