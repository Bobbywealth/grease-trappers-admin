/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary palette: rich industrial copper → bronze → gold
          copper: '#8A4F2A',
          sienna: '#A85E32',
          bronze: '#B67842',
          gold: '#D6A04D',
          champagne: '#F1D28A',
          cream: '#F7F2E8',
          // Dark base
          black: '#0a0a0a',
          dark: '#111111',
          // Legacy pink kept as accent for buttons (deprecated, prefer copper)
          pink: '#E84DB2',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};