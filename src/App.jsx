import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'
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
  const canvasRef = useRef(null)
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

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles = []
    const particleCount = 48
    const maxDistance = 130
    const darkMode = theme === 'dark'
    const nodeColor = darkMode ? 'rgba(201, 255, 246, 0.56)' : 'rgba(12, 38, 34, 0.45)'
    const lineColorBase = darkMode ? '201, 255, 246' : '12, 38, 34'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.8 + 1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i]

        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1

        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2)
        ctx.fillStyle = nodeColor
        ctx.fill()

        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (darkMode ? 0.34 : 0.24)
            ctx.strokeStyle = `rgba(${lineColorBase}, ${alpha})`
            ctx.lineWidth = darkMode ? 1 : 0.8
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
    }

    resize()
    initParticles()
    window.addEventListener('resize', resize)
    gsap.ticker.add(draw)

    return () => {
      window.removeEventListener('resize', resize)
      gsap.ticker.remove(draw)
    }
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
        <canvas ref={canvasRef} className="site-network-layer" aria-hidden />
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
