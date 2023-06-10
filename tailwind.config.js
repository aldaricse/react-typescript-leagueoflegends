/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-120px': 'repeat(auto-fit, minmax(120px, 1fr))'
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        color1: 'var(--color1)',
      }
    },
  },
  plugins: [],
}

