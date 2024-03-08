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
      },
    },
  },
  plugins: [require("daisyui")],
};
