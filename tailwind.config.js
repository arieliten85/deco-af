/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto escanea todos los archivos en la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#2C2F33",
        "color-main": "rgb(203, 214, 255)",
      },
    },
  },
  plugins: [],
};
