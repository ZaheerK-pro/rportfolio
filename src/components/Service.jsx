import SectionShell from './SectionShell'

const services = [
  { icon: 'fas fa-code', title: 'Front-End', text: 'React, Tailwind, GSAP — pixel-perfect, performant, accessible UIs.', num: '01' },
  { icon: 'fas fa-server', title: 'Backend', text: 'Node.js, Fastify, Express — scalable APIs and server architecture.', num: '02' },
  { icon: 'fab fa-react', title: 'Mobile Apps', text: 'React Native cross-platform apps for iOS and Android.', num: '03' },
  { icon: 'fas fa-cube', title: '3D & WebGL', text: 'Three.js, React Three Fiber — immersive interactive experiences.', num: '04' },
  { icon: 'fas fa-database', title: 'Databases', text: 'PostgreSQL, MongoDB — schema design and query optimization.', num: '05' },
  { icon: 'fas fa-palette', title: 'UI/UX Design', text: 'Wireframes to polished design systems with great user flow.', num: '06' },
]

export default function Service() {
  return (
    <SectionShell id="service" number="06" title="Services" subtitle={<>What I <span className="gradient-text">Build</span></>} description="End-to-end development — from UI polish to scalable backends and 3D.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((s) => (
          <article key={s.title} className="reveal group relative glass-card-hover p-8 sm:p-9 overflow-hidden tilt-card neon-border">
            <span className="absolute top-4 right-6 font-display font-extrabold text-[4rem] leading-none text-accent/10 group-hover:text-accent/20 transition-colors">{s.num}</span>
            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent text-white text-xl shadow-glow-sm mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <i className={s.icon} />
              </div>
              <h3 className="font-display text-[2rem] font-extrabold text-text-primary">{s.title}</h3>
              <p className="text-[1.35rem] text-text-muted leading-relaxed mt-3">{s.text}</p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-accent transition-all duration-500 rounded-full" />
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
