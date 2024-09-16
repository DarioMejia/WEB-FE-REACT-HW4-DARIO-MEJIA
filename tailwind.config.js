/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#f5f5dc', // Lightest beige
          100: '#f0e5c9',
          200: '#e6d5b8',
          300: '#d9c5a7',
          400: '#ccb595',
          500: '#b3a07e',
          600: '#998a68',
          700: '#807452',
          800: '#665e3d',
          900: '#4d4829', // Darkest beige
        },
      },
    },
  },
  plugins: [],
}

