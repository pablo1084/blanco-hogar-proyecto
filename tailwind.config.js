/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#f7f0e7",
        oat: "#d9c7ae",
        clay: "#b79276",
        moss: "#9ead96",
        sage: "#c6d0bd",
        cocoa: "#3f352d",
        ink: "#27231f",
        milk: "#fffaf3",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(63, 53, 45, 0.12)",
      },
    },
  },
  plugins: [],
};
