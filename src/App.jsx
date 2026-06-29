import { useState, useLayoutEffect, useCallback } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Cursor from './components/Cursor'
import Header from './components/Header'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './components/Home'
import AboutStrip from './components/AboutStrip'
import Marquee from './components/Marquee'
import Service from './components/Service'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NameBanner from './components/NameBanner'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { useSmoothScroll } from './hooks/useSmoothScroll'

const THEME_KEY = 'portfolio-theme'

export default function App() {
  const [toast, setToast] = useState({ message: '', type: 'success', visible: false })
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'dark' || saved === 'light') return saved
    }
    return 'dark'
  })

  useSmoothScroll()

  useLayoutEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.classList.toggle('dark', theme === 'dark')
    if (typeof window !== 'undefined') localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, visible: true })
  }, [])

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }))
  }, [])

  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <div className="max-md:hidden relative z-[100]">
        <Cursor />
      </div>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative z-[2] min-h-screen">
        <Home />
        <div className="section-divider" aria-hidden />
        <AboutStrip />
        <Marquee />
        <div className="section-divider" aria-hidden />
        <Experience />
        <Portfolio />
        <Education />
        <Certifications />
        <Service />
        <Contact onShowToast={showToast} />
        <NameBanner />
        <Footer />
      </main>
      <Toast message={toast.message} type={toast.type} visible={toast.visible} onHide={hideToast} />
    </>
  )
}
