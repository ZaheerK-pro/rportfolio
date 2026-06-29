import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let w = 0
    let h = 0

    const blobs = [
      { x: 0.2, y: 0.3, r: 0.32, dx: 0.00018, dy: 0.00012, color: '--blob-1' },
      { x: 0.75, y: 0.2, r: 0.28, dx: -0.00012, dy: 0.00018, color: '--blob-2' },
      { x: 0.5, y: 0.7, r: 0.36, dx: 0.00012, dy: -0.00012, color: '--blob-3' },
      { x: 0.85, y: 0.65, r: 0.22, dx: -0.00018, dy: -0.00008, color: '--blob-1' },
    ]

    const getColor = (varName) => {
      const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
      return val || 'rgba(201,169,98,0.1)'
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      blobs.forEach((b) => {
        b.x += b.dx
        b.y += b.dy
        if (b.x < 0.05 || b.x > 0.95) b.dx *= -1
        if (b.y < 0.05 || b.y > 0.95) b.dy *= -1

        const cx = b.x * w
        const cy = b.y * h
        const radius = b.r * Math.min(w, h)

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        grad.addColorStop(0, getColor(b.color))
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, w, h)
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    const observer = new MutationObserver(draw)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />
      <div className="noise-overlay fixed inset-0 z-[1] pointer-events-none" aria-hidden />
    </>
  )
}
