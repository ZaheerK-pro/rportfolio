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
        /* Theme via CSS variables (light = Imperial Topaz, dark = Platinum MIST) */
        body: 'var(--color-body)',
        card: 'var(--color-card)',
        main: 'var(--color-main)',
        'main-dark': 'var(--color-main-dark)',
        sidebar: 'var(--color-sidebar)',
        'text-primary': 'var(--color-text-primary)',
        'text-muted': 'var(--color-text-muted)',
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
