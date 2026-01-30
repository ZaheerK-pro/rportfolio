import { useState, useEffect } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.pageX, y: e.pageY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll('a')
    const enter = () => setActive(true)
    const leave = () => setActive(false)
    links.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => {
      links.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${active ? 'active' : ''}`}
        style={{ top: pos.y, left: pos.x }}
      />
      <div
        className={`cursor-ring ${active ? 'active' : ''}`}
        style={{ top: pos.y, left: pos.x }}
      />
    </>
  )
}
