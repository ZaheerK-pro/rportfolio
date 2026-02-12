export default function Header({ menuOpen, onMenuToggle, theme, onToggleTheme }) {
  const navItems = [
    { href: '#home', label: 'home' },
    { href: '#experience', label: 'experience' },
    { href: '#portfolio', label: 'projects' },
    { href: '#education', label: 'education' },
    { href: '#certifications', label: 'certifications' },
    { href: '#service', label: 'service' },
    { href: '#contact', label: 'contact' },
  ]

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/zaheerk1', className: 'fab fa-linkedin' },
    { href: 'https://github.com/ZaheerK-pro', className: 'fab fa-github' },
    { href: 'https://www.instagram.com/im__zaheerk/', className: 'fab fa-instagram' },
    { href: 'https://www.twitter.com', className: 'fab fa-twitter' },
  ]

  return (
    <>
      <button
        type="button"
        id="menu-bars"
        onClick={onMenuToggle}
        className="fixed top-4 right-4 z-[10000] bg-main text-white rounded-xl py-4 px-6 min-h-[52px] min-w-[52px] flex items-center justify-center text-2xl sm:text-3xl cursor-pointer max-[991px]:flex hidden shadow-lg hover:bg-main-dark active:scale-95 transition-all duration-200"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden />
      </button>

      <header
        className={`fixed top-0 left-0 bottom-0 bg-sidebar flex flex-col items-center justify-between z-[1000] py-12 sm:py-[8rem] px-6 sm:px-8 w-[30rem] text-center border-r border-main-dark/50 max-[991px]:w-full max-[991px]:max-w-[320px] max-[991px]:border-r-0 max-[991px]:transition-[transform] max-[991px]:duration-300 max-[991px]:shadow-2xl ${
          menuOpen ? 'max-[991px]:translate-x-0' : 'max-[991px]:-translate-x-full'
        }`}
        role="banner"
      >
        <a href="#" className="uppercase text-white text-2xl sm:text-3xl font-bold tracking-wide hover:opacity-90 focus:opacity-90 transition-opacity rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar">
          <span className="text-main">Zaheer</span> Khan
        </a>

        <nav className="flex flex-col gap-0" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-xl sm:text-2xl text-white/95 py-5 sm:py-6 px-4 rounded-lg hover:tracking-widest hover:text-main transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              onClick={() => onMenuToggle(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-main text-[var(--color-button-text)] hover:bg-main-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={theme === 'dark' ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl'} aria-hidden />
          </button>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-white/90 hover:text-main transition-colors duration-200 rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar ${link.className}`}
                aria-label={link.className.includes('linkedin') ? 'LinkedIn' : link.className.includes('github') ? 'GitHub' : link.className.includes('instagram') ? 'Instagram' : 'Twitter'}
              />
            ))}
          </div>
        </div>
      </header>
    </>
  )
}
