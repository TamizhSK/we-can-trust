/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccb',
          700: '#004498',
          800: '#002d64',
          900: '#001631',
        },
        secondary: {
          50: '#e6fbfc',
          100: '#ccf7f9',
          200: '#99eff3',
          300: '#66e6ed',
          400: '#33dee7',
          500: '#00d5e1',
          600: '#00aab4',
          700: '#008087',
          800: '#00555a',
          900: '#002b2d',
        },
        accent: {
          50: '#fdf8e9',
          100: '#fbf1d3',
          200: '#f7e3a8',
          300: '#f3d47c',
          400: '#efc650',
          500: '#ebb824',
          600: '#bc931d',
          700: '#8d6e16',
          800: '#5e490e',
          900: '#2f2407',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};