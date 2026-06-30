import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLeft = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#portfolio', label: 'Projects', id: 'portfolio' },
  ]
  const navRight = [
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#service', label: 'Services', id: 'service' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]
  const allNav = [...navLeft, ...navRight]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      for (let i = allNav.length - 1; i >= 0; i--) {
        const el = document.getElementById(allNav[i].id)
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(allNav[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const NavLink = ({ item }) => (
    <a
      href={item.href}
      onClick={closeMenu}
      className={`relative px-4 py-2 text-[1.25rem] font-semibold transition-all duration-300 rounded-full ${
        activeSection === item.id ? 'nav-link-active' : 'text-text-muted hover:text-text-primary'
      }`}
    >
      {item.label}
    </a>
  )

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4'}`}>
        <div className="section-container">
          <nav
            className={`relative flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 ${
              scrolled ? 'glass shadow-card' : ''
            }`}
            role="banner"
          >
            <ul className="hidden lg:flex items-center gap-0.5 flex-1">
              {navLeft.map((item) => (
                <li key={item.href}><NavLink item={item} /></li>
              ))}
            </ul>

            <Logo className="lg:mx-8 shrink-0" />

            <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-end">
              {navRight.map((item) => (
                <li key={item.href}><NavLink item={item} /></li>
              ))}
              <li className="ml-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass hover:border-accent/30 transition-all"
                  aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                >
                  <i className={`${theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} text-accent text-[1.4rem]`} />
                </button>
                <a href="#contact" className="btn-primary text-[1.15rem] py-2.5 px-6 min-h-[4rem]">Hire Me</a>
              </li>
            </ul>

            <div className="flex lg:hidden items-center gap-2 ml-auto">
              <button type="button" onClick={onToggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full glass" aria-label="Toggle theme">
                <i className={`${theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} text-accent`} />
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-[1.6rem] text-text-primary"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`fixed inset-0 z-[999] lg:hidden transition-all duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-body/92 backdrop-blur-2xl" onClick={closeMenu} />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <nav className="flex flex-col items-center gap-1 w-full max-w-sm">
            {allNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`w-full text-center font-display text-[3rem] sm:text-[3.6rem] font-extrabold py-3 rounded-2xl transition-all ${
                  activeSection === item.id ? 'gradient-text' : 'text-text-primary hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={closeMenu} className="btn-primary text-[1.4rem] mt-10 min-h-[5rem] px-10">Get In Touch</a>
        </div>
      </div>
    </>
  )
}
