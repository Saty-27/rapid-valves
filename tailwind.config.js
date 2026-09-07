/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D71920",
          redDark: "#B8141A",
          redLight: "#FFF1F1",
          navy: "#0B0F14",
          navyCard: "#111418",
          charcoal: "#58585A",
          darkGray: "#58585A",
          rapidGray: "#58585A",
          body: "#58585A",
          lightGrey: "#F7F8FA",
          borderGrey: "#E2E5EB",
          steelGrey: "#8E9199"
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
