import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const active = useRef(false)

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => { active.current = true }
    const onLeave = () => { active.current = false }

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15

      if (dotRef.current && ringRef.current) {
        const { x, y } = pos.current
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        ringRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        dotRef.current.classList.toggle('active', active.current)
        ringRef.current.classList.toggle('active', active.current)
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    const bindInteractive = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    bindInteractive()
    const observer = new MutationObserver(bindInteractive)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
