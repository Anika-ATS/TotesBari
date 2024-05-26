/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  heme: {
    extend: {
      colors: {
        "custom-gray": "#9A9EA0",
      },
    },
  },
  plugins: [require("daisyui")],
};
