/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,js,jsx,tsx,pug,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite')
  ],
};
