/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        display: ['var(--font-display)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      colors: {
        background: {
          DEFAULT: '#F3F0E8',
          dark: '#110F0C',
        },
        foreground: {
          DEFAULT: '#1A1612',
          dark: '#F3EEE6',
        },
        muted: {
          DEFAULT: '#5E574E',
          dark: '#A89F92',
        },
        accent: {
          DEFAULT: '#8F3D2B',
          light: '#C46A52',
          dark: '#E4A08F',
        },
        border: {
          DEFAULT: '#DDD6C8',
          dark: '#2C2823',
        },
        paper: {
          DEFAULT: '#E7E1D6',
          dark: '#1B1814',
        },
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '0.96', letterSpacing: '-0.035em', fontWeight: '600' }],
        'h1': ['2.75rem', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['1.35rem', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        'content': '1120px',
        'prose': '68ch',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
