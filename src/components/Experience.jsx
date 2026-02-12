const company = {
  name: 'Sirensys',
  total: 'Since June 2024',
  roles: [
    { title: 'Software Engineer', period: 'Jan 2025 – Present', current: true },
    { title: 'Full Stack Intern', period: 'June 2024 – Dec 2024', current: false },
  ],
}
const tech = ['React', 'Vite', 'Tailwind', 'PrimeReact', 'Node.js', 'TypeScript', 'Fastify', 'TypeORM', 'JWT', 'REST APIs', 'PostgreSQL', 'React Native']

export default function Experience() {
  return (
    <section id="experience" className="section-compact">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight text-text-primary">
          <span className="text-main">my</span> experience
        </h1>
        <p className="text-text-muted text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed">
          From intern to software engineer at one place.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8">
      <div className="relative flex-1 min-w-0 max-w-2xl rounded-2xl border border-main-dark/20 overflow-hidden bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:border-main/20">
        {/* Company block */}
        <div className="px-6 sm:px-8 py-5 bg-main/5 border-b border-main-dark/20">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-text-primary text-2xl sm:text-[1.75rem] font-bold tracking-tight">{company.name}</h2>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[1.15rem] font-semibold bg-main text-white`}>
              Total: {company.total}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative px-6 sm:px-8 py-5">
          <div className="absolute left-8 top-6 bottom-6 w-px bg-main-dark/30" aria-hidden />
          <ul className="space-y-0">
            {company.roles.map((role) => (
              <li key={role.title} className="relative pl-10 pb-6 last:pb-0">
                <span className="absolute left-[1.55rem] top-1.5 w-3 h-3 rounded-full bg-main -translate-x-1/2 ring-4 ring-card" aria-hidden />
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="text-text-primary text-[1.45rem] font-bold">{role.title}</h3>
                  <span className="text-text-muted text-[1.2rem]">{role.period}</span>
                  {role.current && (
                    <span className="rounded-md px-2 py-0.5 text-[0.9rem] font-bold uppercase tracking-wide bg-main text-white">
                      Current
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="px-6 sm:px-8 py-4 border-t border-main-dark/20 bg-body/50">
          <p className="text-text-muted text-[1.1rem] font-medium mb-2.5">Stack</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="rounded-lg border border-main-dark/20 px-2.5 py-1 text-[1.1rem] font-medium bg-body/80 text-text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: journey path */}
      <div className="lg:w-80 shrink-0 flex flex-col justify-center bg-card rounded-2xl border border-main-dark/20 overflow-hidden shadow-lg">
        <div className="p-6 bg-gradient-to-br from-main/10 to-main/5">
          <p className="text-text-muted text-[1.1rem] font-medium uppercase tracking-widest mb-6">The path</p>
          <div className="flex items-start">
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white text-sm font-bold shrink-0">1</span>
              <span className="mt-2 text-text-primary text-[1.15rem] font-bold leading-tight">Intern</span>
              <span className="text-text-muted text-[1rem] mt-0.5">Jun ’24 – Dec ’24</span>
            </div>
            <div className="flex-1 min-w-[2rem] flex items-center pt-5 shrink-0">
              <div className="w-full h-0.5 bg-main/40 rounded-full" aria-hidden />
            </div>
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white text-sm font-bold shrink-0 ring-4 ring-main/30">2</span>
              <span className="mt-2 text-text-primary text-[1.15rem] font-bold leading-tight">Engineer</span>
              <span className="text-text-muted text-[1rem] mt-0.5">Jan ’25 – Now</span>
            </div>
          </div>
          <p className="mt-6 pt-5 border-t border-main-dark/20 text-text-muted text-[1.15rem] leading-snug italic">
            Same company, growing role.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
