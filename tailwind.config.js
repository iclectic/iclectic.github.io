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
          DEFAULT: '#F7F7FB',
          dark: '#0A0D12',
        },
        foreground: {
          DEFAULT: '#0B1020',
          dark: '#E2E8F0',
        },
        muted: {
          DEFAULT: '#516070',
          dark: '#8A9AB1',
        },
        accent: {
          DEFAULT: '#14B8A6',
          light: '#5EEAD4',
          dark: '#2DD4BF',
        },
        border: {
          DEFAULT: '#E3E8EF',
          dark: '#1C2330',
        },
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      maxWidth: {
        'content': '1200px',
        'prose': '680px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
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
