export default function Footer({ theme = 'light' }) {
  const currentYear = new Date().getFullYear()
  const isLight = theme === 'light'
  return (
    <footer
      role="contentinfo"
      className={`mt-8 text-[1.4rem] sm:text-[1.6rem] md:text-2xl py-8 sm:py-10 px-4 text-center transition-colors duration-300 ${
        isLight ? 'bg-slate-100 text-slate-600 border-t border-slate-200' : 'bg-slate-900 text-slate-300 border-t border-slate-700'
      }`}
    >
      <span className="text-main font-medium">mr. Zaheer Khan</span>
      <span className="mx-1">|</span>
      <span> all rights reserved </span>
      <span className="text-main font-medium">{currentYear}</span>
      <span> – </span>
      <span className="text-main font-medium">{currentYear + 1}</span>
    </footer>
  )
}
