/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontInter: ["Inter", "serif"],
        fontCinzel: ["Cinzel", "serif"],
      },
      backgroundImage: {
        bannerBg: "url('/src/assets/home/chef-service.jpg')",
        featureBg: "url('/src/assets/home/featured.jpg')",
        loginBg: "url('/src/assets/others/authentication.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
