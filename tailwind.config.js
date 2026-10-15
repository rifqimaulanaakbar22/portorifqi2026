/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F5F0FF',
          100: '#EBE2FF',
          200: '#D9C8FF',
          300: '#BFA2FF',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          900: '#2E1065',
        },
        ink: { DEFAULT: '#1F1B2E', soft: '#5B5670' },
      },
      borderRadius: { card: '1.5rem' },
    },
  },
  plugins: [],
}
