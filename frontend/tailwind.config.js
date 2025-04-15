// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      // Você pode adicionar suas customizações de tema aqui, se necessário
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
