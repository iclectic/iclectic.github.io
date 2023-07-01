/** @type {import('tailwindcss').Config} */

const { fontfamily } = require(`tailwindcss/defaultTheme`)



module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
    },
  },
  plugins: [],
}

