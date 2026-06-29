import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AboutStrip() {
  const ref = useScrollReveal()

  const highlights = [
    { icon: 'fas fa-rocket', title: 'Fast Delivery', desc: 'Production-ready code shipped on tight deadlines without cutting corners.' },
    { icon: 'fas fa-cube', title: '3D Experiences', desc: 'WebGL & Three.js interfaces that feel premium and interactive.' },
    { icon: 'fas fa-mobile-alt', title: 'Cross-Platform', desc: 'Unified web + React Native apps with consistent UX.' },
    { icon: 'fas fa-shield-alt', title: 'Scalable APIs', desc: 'Node.js backends architected to grow with your product.' },
  ]

  return (
    <div className="relative z-10 border-y border-border bg-surface/40 backdrop-blur-xl">
      <div className="section-container py-14 sm:py-16 lg:py-20" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 reveal-left">
            <p className="label-caps text-accent mb-4">Who I Am</p>
            <h3 className="font-display font-extrabold text-text-primary leading-[1.08] text-balance" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              Turning ideas into <span className="gradient-text">digital reality</span>
            </h3>
            <p className="text-[clamp(1.3rem,2vw,1.45rem)] text-text-muted mt-5 leading-[1.75] max-w-[48ch]">
              Based in India. Building production software at Sirensys — focused on clean code, bold design, and experiences that feel alive.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="https://www.linkedin.com/in/zaheerk1" target="_blank" rel="noopener noreferrer" className="btn-outline text-[1.2rem] py-2.5 px-5 min-h-[4.4rem]">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a href="https://github.com/ZaheerK-pro" target="_blank" rel="noopener noreferrer" className="btn-outline text-[1.2rem] py-2.5 px-5 min-h-[4.4rem]">
                <i className="fab fa-github" /> GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="reveal-scale glass-card-hover p-6 sm:p-7 group neon-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-white text-[1.6rem] mb-4 group-hover:scale-105 transition-transform duration-300 shadow-glow-sm">
                  <i className={h.icon} />
                </div>
                <h4 className="font-display text-[1.65rem] font-bold text-text-primary leading-tight">{h.title}</h4>
                <p className="text-[1.25rem] text-text-muted mt-2 leading-[1.65]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
