const certifications = [
  {
    title: 'PostgreSQL Crash Course',
    platform: 'Udemy',
    date: 'January 2025',
    description: 'Successfully completed an in-depth PostgreSQL course emphasizing practical database development and optimization.',
    icon: 'fas fa-database',
  },
  {
    title: 'Full Stack Crash Course',
    platform: 'Udemy',
    date: 'August 2024',
    description: 'Comprehensive Full Stack Crash Course covering front-end, back-end, and database development with hands-on project experience.',
    icon: 'fas fa-layer-group',
  },
  {
    title: 'Backend With Node Js',
    platform: 'Udemy',
    date: 'August 2024',
    description: 'Backend development using Node.js building scalable RESTful APIs & server-side applications.',
    icon: 'fab fa-node-js',
  },
]

export default function Certifications({ theme = 'light' }) {
  const isLight = theme === 'light'
  const cardBg = isLight
    ? 'bg-white border-slate-200/80 shadow-md hover:shadow-xl'
    : 'bg-slate-800/80 border-slate-600/50 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-slate-900/40'
  const headingCls = isLight ? 'text-text-primary' : 'text-white'
  const textCls = isLight ? 'text-text-muted' : 'text-slate-400'
  const iconBg = isLight ? 'bg-main/10 text-main' : 'bg-main/20 text-teal-300'

  return (
    <section id="certifications" className="section-compact transition-colors duration-300">
      <div className="mb-8 sm:mb-12">
        <h1 className={`text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight ${headingCls}`}>
          <span className="text-main">my</span> certifications
        </h1>
        <p className={`${textCls} text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed`}>
          Courses and certifications in full stack, backend, and database technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col text-left min-h-0 ${cardBg}`}
          >
            {/* Top gradient bar */}
            <div className={`h-1 w-full ${isLight ? 'bg-gradient-to-r from-main to-teal-400' : 'bg-gradient-to-r from-main to-teal-500'}`} />

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Icon + platform badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconBg} text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <i className={cert.icon} aria-hidden />
                </span>
                <span className={`text-[1.15rem] font-semibold px-3 py-1.5 rounded-lg ${isLight ? 'bg-slate-100 text-text-muted' : 'bg-slate-700/80 text-slate-300'}`}>
                  {cert.platform}
                </span>
              </div>

              <span className={`${textCls} text-[1.15rem] font-medium flex items-center gap-1.5 mb-2`}>
                <i className="fas fa-calendar-check text-main text-[0.95rem]" aria-hidden />
                {cert.date}
              </span>

              <h3 className={`${headingCls} text-[1.5rem] sm:text-[1.65rem] font-bold leading-tight`}>
                {cert.title}
              </h3>
              <p className={`${textCls} text-[1.25rem] sm:text-[1.35rem] leading-relaxed mt-3 flex-1`}>
                {cert.description}
              </p>

              {/* Certificate label at bottom */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600 flex items-center gap-2">
                <i className="fas fa-certificate text-main" aria-hidden />
                <span className={`${textCls} text-[1.2rem] font-medium`}>Certificate completed</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
