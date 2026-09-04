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
          red: "#E31E24",
          redDark: "#C4151B",
          redLight: "#FFF1F1",
          navy: "#0B0F14",
          navyCard: "#111418",
          charcoal: "#1A1A1A",
          body: "#5B5F66",
          lightGrey: "#F7F8FA",
          borderGrey: "#E2E5EB",
          steelGrey: "#8E9199"
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
