/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    colors: {
      "dark-blue": "#254e70",
      blue: "#1fb6ff",
      orange: "#ffc484",
      "light-brown": "#ffedc8",
      brown: "#733f19",
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
