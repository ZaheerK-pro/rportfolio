const education = [
  {
    institution: 'SRTM University, Nanded, Maharashtra',
    degree: 'Master Of Computer Application',
    short: 'MCA',
    cgpa: '8.35',
    period: 'June 2022 - May 2024',
  },
  {
    institution: 'MIT College Of CS & IT, Basmath, Maharashtra',
    degree: 'Bachelor Of Computer Application',
    short: 'BCA',
    cgpa: '9.22',
    period: 'June 2019 - May 2022',
  },
]

export default function Education({ theme = 'light' }) {
  const isLight = theme === 'light'
  const cardBg = isLight
    ? 'bg-white border-slate-200/80 shadow-md hover:shadow-xl'
    : 'bg-slate-800/80 border-slate-600/50 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-slate-900/40'
  const headingCls = isLight ? 'text-text-primary' : 'text-white'
  const textCls = isLight ? 'text-text-muted' : 'text-slate-400'
  const accentBg = isLight ? 'bg-main/10' : 'bg-main/20'
  const badgeCls = isLight ? 'bg-main text-white' : 'bg-main text-white'

  return (
    <section id="education" className="section-compact transition-colors duration-300">
      <div className="mb-8 sm:mb-12">
        <h1 className={`text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight ${headingCls}`}>
          <span className="text-main">my</span> education
        </h1>
        <p className={`${textCls} text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed`}>
          Academic background in Computer Applications — from Bachelor's to Master's degree.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {education.map((edu) => (
          <article
            key={edu.institution}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col text-left min-h-0 ${cardBg}`}
          >
            {/* Top accent strip */}
            <div className={`h-1 w-full ${isLight ? 'bg-gradient-to-r from-main to-teal-400' : 'bg-gradient-to-r from-main to-teal-500'}`} />

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Degree badge + icon row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[1.2rem] font-bold uppercase tracking-wide ${badgeCls}`}>
                  {edu.short}
                </span>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accentBg} text-main transition-transform duration-300 group-hover:scale-110`}>
                  <i className="fas fa-graduation-cap text-xl" aria-hidden />
                </span>
              </div>

              <h3 className={`${headingCls} text-[1.5rem] sm:text-[1.65rem] font-bold leading-tight`}>
                {edu.institution}
              </h3>
              <p className={`${headingCls} text-[1.3rem] sm:text-[1.4rem] font-semibold mt-2 opacity-90`}>
                {edu.degree}
              </p>

              {/* CGPA + period row */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className={`inline-flex items-center gap-1.5 ${textCls} text-[1.25rem]`}>
                  <i className="fas fa-chart-line text-main text-[1rem]" aria-hidden />
                  CGPA <strong className={headingCls}>{edu.cgpa}</strong>
                </span>
                <span className={`${textCls} text-[1.25rem] flex items-center gap-1.5`}>
                  <i className="fas fa-calendar-alt text-main text-[1rem]" aria-hidden />
                  {edu.period}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
