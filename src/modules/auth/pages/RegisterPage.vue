<template>
  <h1 class="text-2xl font-semibold mb-4 dark:text-slate-100">Register</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="fullName" class="block text-gray-600 dark:text-slate-100">Name</label>
      <input
        ref="fullNameInputRef"
        v-model="form.fullName"
        type="text"
        id="fullName"
        name="fullName"
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
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();
const fullNameInputRef = ref<HTMLInputElement | null>(null);
const emailInputRef = ref<HTMLInputElement | null>(null);
const passInputRef = ref<HTMLInputElement | null>(null);

const form = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (form.fullName.length < 2) {
    return fullNameInputRef.value?.focus();
  }
  if (form.email === '') {
    return emailInputRef.value?.focus();
  }
  if (form.password === '' || form.password.length < 6) {
    return passInputRef.value?.focus();
  }

  const { ok, message } = await authStore.register(form.fullName, form.email, form.password);
  if (ok) return;
  toast.error(message);
};
</script>
