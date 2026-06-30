const row1 = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Three.js', 'GSAP', 'PostgreSQL', 'MongoDB', 'React Native', 'Tailwind CSS', 'Fastify', 'Express.js']
const row2 = ['REST APIs', 'JWT Auth', 'TypeORM', 'Vite', 'PrimeReact', 'WebGL', 'Framer Motion', 'Docker', 'Git', 'Figma', 'Redux', 'GraphQL']

function Track({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-track ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {doubled.map((skill, i) => (
        <span key={`${skill}-${i}`} className="inline-flex items-center mx-3 px-6 py-3 rounded-full glass text-[1.35rem] font-bold text-text-muted whitespace-nowrap border border-border hover:border-accent hover:text-accent transition-colors">
          <span className="w-2 h-2 rounded-full bg-gradient-accent mr-3 shrink-0" />
          {skill}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative z-10 py-6 overflow-hidden border-y border-border bg-surface/30">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-body to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-body to-transparent z-10 pointer-events-none" />
      <div className="space-y-4">
        <Track items={row1} />
        <Track items={row2} reverse />
      </div>
    </div>
  )
}
