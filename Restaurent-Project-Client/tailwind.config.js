/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {

      fontFamily: {
        fontInter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
};

