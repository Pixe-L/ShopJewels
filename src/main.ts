import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { useDark, useToggle } from '@vueuse/core';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

const isDark = useDark();
const toggleDark = useToggle(isDark);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.provide('isDark', isDark);
app.provide('toggleDark', toggleDark);
app.use(Toast);

app.mount('#app');
