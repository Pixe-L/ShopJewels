<template>
  <h1 class="text-2xl font-semibold mb-4 dark:text-slate-100">Login</h1>
  <form @submit.prevent="onLogin">
    <!-- Email Input -->
    <div class="mb-4">
      <label for="email" class="dark:text-slate-100 block text-gray-600">Email</label>
      <input
        v-model="form.email"
        ref="emailInputRef"
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
        v-model="form.password"
        ref="passwordInputRef"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input
        v-model="form.rememberMe"
        type="checkbox"
        id="remember"
        name="remember"
        class="text-blue-500"
      />
      <label for="remember" class="text-gray-600 ml-2 dark:text-slate-100">Remember Me</label>
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
      Login
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();
const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);

// El reacative se utiliza para almacenar objetos reactivos
const form = reactive({
  email: '',
  password: '',
  rememberMe: false,
});

const onLogin = async () => {
  if (form.email === '') {
    return emailInputRef.value?.focus();
  }
  if (form.password.length < 6) {
    return passwordInputRef.value?.focus();
  }
  if (form.rememberMe) {
    return localStorage.setItem('email', form.email);
  } else {
    localStorage.removeItem('email');
  }

  const okLogin = await authStore.login(form.email, form.password);
  if (okLogin) return;
  toast.error('User/Password are not corrects!');
};
</script>
