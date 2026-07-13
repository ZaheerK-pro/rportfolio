import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const reveals = el.querySelectorAll('.reveal')
      reveals.forEach((target, i) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: (options.stagger ?? 0.08) * i,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      const revealsLeft = el.querySelectorAll('.reveal-left')
      revealsLeft.forEach((target, i) => {
        gsap.fromTo(
          target,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            delay: (options.stagger ?? 0.08) * i,
            ease: 'power3.out',
            scrollTrigger: { trigger: target, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })

      const revealsScale = el.querySelectorAll('.reveal-scale')
      revealsScale.forEach((target, i) => {
        gsap.fromTo(
          target,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            delay: (options.stagger ?? 0.06) * i,
            ease: 'power3.out',
            scrollTrigger: { trigger: target, start: 'top 90%', toggleActions: 'play none none none' },
          }
        )
      })
    }, el)

    return () => ctx.revert()
  }, [options.stagger])

  return ref
}
