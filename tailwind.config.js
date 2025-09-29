/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          500: '#22d3ee',
          600: '#06b6d4',
          700: '#0891b2',
        },
        surface: '#0b0f1a',
        ink: '#0f172a',
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(99,102,241,0.3), 0 0 30px rgba(99,102,241,0.25)',
      },
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
