/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "nord"],
  },
  theme: {
    extend: {
      colors: {
        purple: "#bc00cc",
        blue: "#0000CD",
        grey: "#DBDBBE",
        light_Grey: "#C6C6A5",
      },
    },
  },
  plugins: [require("daisyui")],
};
