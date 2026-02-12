export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      role="contentinfo"
      className="mt-8 text-[1.4rem] sm:text-[1.6rem] md:text-2xl py-8 sm:py-10 px-4 text-center bg-card/60 text-text-muted border-t border-main-dark/20"
    >
      <span>Made with ❤️ by </span>
      <span className="text-main font-medium">Zaheer Khan</span>
      <span className="mx-1">·</span>
      <span>© {currentYear}</span>
    </footer>
  )
}
