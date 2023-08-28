/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  mode: "jit",
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      heropolygon: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
      aboutpolygon: "polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)"
    },
    extend: {
      backgroundImage: {
        'home-background': "url('assets/images/bg-home-2.png')"
      },
      screens: {
        'sm': { 'min': '0px', 'max': '640px' },
        'md': { 'min': '641px', 'max': '767px' },
        'lg': { 'min': '768px', 'max': '1279px' },
        'xl': { 'min': '1280px' }
      },
      colors: {
        background: {
          dark: "#0D0D0D",
          light: "#FFFFFF",
        },
        blue: {
          dark: "#0055CC",
          light: "#0055CC",
        }
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

