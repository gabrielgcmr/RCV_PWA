// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // Ajuste os caminhos para corresponder aos seus arquivos de template/componentes
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      // Você pode adicionar suas customizações de tema aqui, se necessário
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
