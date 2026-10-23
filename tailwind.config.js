/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Nunito", "sans-serif"],
      },
      colors: {
        cream: "#fff9ed",
        ink: "#243047",
        coral: "#f47761",
        sun: "#ffc857",
        leaf: "#4f9b75",
        sky: "#7dc8e8",
        lilac: "#b7a5df",
      },
      boxShadow: {
        soft: "0 12px 35px rgba(36, 48, 71, .08)",
        card: "0 8px 0 rgba(36, 48, 71, .06)",
      },
    },
  },
  plugins: [],
};