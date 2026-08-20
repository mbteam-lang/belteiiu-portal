/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      colors: {
        primary: '#0a96a4',
      },
    },
  },
  plugins: [],
}
