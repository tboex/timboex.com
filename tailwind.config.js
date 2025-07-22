/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'input': ['InputMono', 'Roboto Mono', 'monospace'],
        'mono': ['InputMono', 'Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
