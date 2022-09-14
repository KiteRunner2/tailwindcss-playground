/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./tailwind.config.js"],
  theme: {
    extend: {
      borderWidth: {
        16: "24px",
      },
    },
  },
  plugins: [],
};
