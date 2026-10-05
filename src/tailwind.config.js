/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      colors: {
        ink: "#17171A",
        soft: "#D9D7D1",
        edge: "#2C2C31",
        rule: "#C2BFB7",
        white: "#E6E4E0",
        black: "#17171A",
      },
    },
  },
  plugins: [],
};