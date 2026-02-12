import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Home from './components/Home'
import Service from './components/Service'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'

const THEME_KEY = 'portfolio-theme'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState({ message: '', type: 'success', visible: false })
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'dark' || saved === 'light') return saved
    }
    return 'light'
  })

  useLayoutEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.classList.toggle('dark', theme === 'dark')
    if (typeof window !== 'undefined') localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const onMenuToggle = useCallback((value) => {
    setMenuOpen((prev) => (typeof value === 'boolean' ? value : !prev))
  }, [])

  useEffect(() => {
    const closeOnScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', closeOnScroll)
    return () => window.removeEventListener('scroll', closeOnScroll)
  }, [])

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, visible: true })
  }, [])

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }))
  }, [])

  return (
    <>
      <div className="max-md:hidden">
        <Cursor />
      </div>
      <Header menuOpen={menuOpen} onMenuToggle={onMenuToggle} theme={theme} onToggleTheme={toggleTheme} />
      <main className="bg-body min-h-screen transition-colors duration-300">
        <Home />
        <Experience />
        <Portfolio />
        <Education />
        <Certifications />
        <Service />
        <Contact onShowToast={showToast} />
        <Footer />
      </main>
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onHide={hideToast}
      />
    </>
  )
}
