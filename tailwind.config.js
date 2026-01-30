/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#0d9488',
        'main-dark': '#0f766e',
        body: '#f1f5f9',
        sidebar: '#0f172a',
        'text-primary': '#0f172a',
        'text-muted': '#64748b',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        'sidebar': '30rem',
      },
      fontSize: {
        'base-custom': '1.7rem',
        'heading': '4rem',
        'home-h3': '4.5rem',
        'home-info': '2.5rem',
      },
      transitionDuration: {
        'normal': '200ms',
      },
    },
  },
  plugins: [],
}
