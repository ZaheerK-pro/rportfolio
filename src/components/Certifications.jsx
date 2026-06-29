import SectionShell from './SectionShell'

const certifications = [
  { title: 'PostgreSQL Crash Course', platform: 'Udemy', date: 'January 2025', description: 'In-depth PostgreSQL — practical database development and optimization.', icon: 'fas fa-database', color: 'accent' },
  { title: 'Full Stack Crash Course', platform: 'Udemy', date: 'August 2024', description: 'Front-end, back-end, and database development with hands-on projects.', icon: 'fas fa-layer-group', color: 'accent-2' },
  { title: 'Backend With Node Js', platform: 'Udemy', date: 'August 2024', description: 'Scalable RESTful APIs & server-side applications with Node.js.', icon: 'fab fa-node-js', color: 'accent-3' },
]

const iconColors = {
  accent: 'bg-accent/15 text-accent border-accent/25',
  'accent-2': 'bg-accent-2/15 text-accent-2 border-accent-2/25',
  'accent-3': 'bg-accent-3/15 text-accent-3 border-accent-3/25',
}

export default function Certifications() {
  return (
    <SectionShell id="certifications" number="05" title="Certifications" subtitle={<>Always <span className="gradient-text">Learning</span></>} description="Continuous upskilling in full stack, backend, and databases." variant="dark-band">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <article key={cert.title} className="reveal glass-card-hover p-8 flex flex-col tilt-card neon-border">
            <div className="flex items-center justify-between mb-6">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl border ${iconColors[cert.color]}`}>
                <i className={cert.icon} />
              </div>
              <span className="px-3 py-1.5 rounded-lg glass text-[1.1rem] font-bold text-text-muted">{cert.platform}</span>
            </div>
            <span className="text-[1.15rem] text-accent font-bold flex items-center gap-2 mb-3">
              <i className="fas fa-calendar-check" /> {cert.date}
            </span>
            <h3 className="font-display text-[1.8rem] font-extrabold text-text-primary leading-tight">{cert.title}</h3>
            <p className="text-[1.3rem] text-text-muted leading-relaxed mt-3 flex-1">{cert.description}</p>
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-[1.15rem] text-text-muted font-semibold">
              <i className="fas fa-certificate text-accent" /> Verified
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
