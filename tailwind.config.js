import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
