/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 0.2vw 0 rgba(0, 0, 0, 0.27)",
      },
    },
  },
  plugins: [],
};
