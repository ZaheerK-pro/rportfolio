import SectionShell from './SectionShell'

const education = [
  {
    short: 'MCA',
    degree: 'Master of Computer Application',
    institution: 'SRTM University',
    campus: 'Nanded, Maharashtra',
    period: 'Jun 2022 – May 2024',
    duration: '2 years',
    cgpa: '8.35',
    scale: '10.0',
    latest: true,
    desc: 'Advanced postgraduate program focused on software engineering, system design, and modern application development.',
    focus: ['Software Engineering', 'DBMS', 'Operating Systems', 'Web Technologies', 'Project Work'],
    highlights: [
      'Built full-stack projects using modern web frameworks',
      'Studied database design, normalization & query optimization',
      'Completed coursework in OS, networking & system architecture',
      'Strengthened problem-solving through DSA & programming labs',
    ],
  },
  {
    short: 'BCA',
    degree: 'Bachelor of Computer Application',
    institution: 'MIT College of CS & IT',
    campus: 'Basmath, Maharashtra',
    period: 'Jun 2019 – May 2022',
    duration: '3 years',
    cgpa: '9.22',
    scale: '10.0',
    latest: false,
    desc: 'Foundation in computer science — programming, web basics, and core CS concepts that shaped my developer career.',
    focus: ['Programming in C/Java', 'Data Structures', 'Web Development', 'Computer Networks', 'Mathematics'],
    highlights: [
      'Learned programming fundamentals and logical problem solving',
      'Introduction to HTML, CSS, JavaScript & web development',
      'Strong academic record with consistent performance',
      'Participated in practical labs and mini projects',
    ],
  },
]

const journey = [
  { year: '2019', label: 'Started BCA', done: true },
  { year: '2022', label: 'BCA Completed', done: true },
  { year: '2022', label: 'Started MCA', done: true },
  { year: '2024', label: 'MCA Completed', done: true, active: true },
]

const stats = [
  { val: '5', label: 'Years', icon: 'fas fa-hourglass-half' },
  { val: '2', label: 'Degrees', icon: 'fas fa-graduation-cap' },
  { val: '8.79', label: 'Avg CGPA', icon: 'fas fa-star' },
  { val: '10+', label: 'Core Subjects', icon: 'fas fa-book' },
]

export default function Education() {
  const avgCgpa = ((parseFloat(education[0].cgpa) + parseFloat(education[1].cgpa)) / 2).toFixed(2)
  stats[2].val = avgCgpa

  return (
    <SectionShell
      id="education"
      number="04"
      title="Education"
      subtitle={<>Academic <span className="gradient-text">Path</span></>}
      description="Five years of Computer Applications — building a strong foundation from Bachelor's to Master's."
      variant="angled"
    >
      {/* Summary banner */}
      <div className="reveal edu-summary glass-card mb-8 sm:mb-10">
        <div className="edu-summary-inner">
          <div className="flex items-start gap-5">
            <div className="edu-summary-icon">
              <i className="fas fa-university" />
            </div>
            <div>
              <h3 className="font-display text-[2rem] sm:text-[2.4rem] font-extrabold text-text-primary">Computer Applications</h3>
              <p className="text-[1.2rem] text-accent font-semibold mt-1">BCA → MCA · Maharashtra, India</p>
              <p className="text-[1.25rem] text-text-muted leading-[1.7] mt-3 max-w-2xl">
                A focused academic journey in computer science — from programming basics to advanced software engineering and project-based learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Degree timeline */}
        <div className="lg:col-span-8">
          <div className="exp-timeline">
            {education.map((edu, i) => (
              <article key={edu.short} className="reveal exp-timeline-item">
                <div className="exp-timeline-marker">
                  <span className={`exp-timeline-dot ${edu.latest ? 'exp-timeline-dot-active' : ''}`} />
                  {i < education.length - 1 && <span className="exp-timeline-line" aria-hidden />}
                </div>
                <div className="exp-timeline-content glass-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="edu-degree-badge">{edu.short}</span>
                      {edu.latest && <span className="exp-live-pill">Latest</span>}
                    </div>
                    <span className="exp-duration-pill">{edu.duration}</span>
                  </div>

                  <h4 className="font-display text-[1.85rem] sm:text-[2rem] font-extrabold text-text-primary leading-tight mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-[1.25rem] font-semibold text-accent mt-1">{edu.institution}</p>
                  <p className="text-[1.15rem] text-text-muted flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    <span><i className="fas fa-map-marker-alt text-accent mr-1.5" />{edu.campus}</span>
                    <span><i className="fas fa-calendar-alt text-accent-2 mr-1.5" />{edu.period}</span>
                  </p>

                  <p className="text-[1.2rem] text-text-muted leading-[1.65] mt-4 mb-4">{edu.desc}</p>

                  {/* CGPA bar */}
                  <div className="edu-cgpa-block mb-5">
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-[1.1rem] font-semibold text-text-muted">CGPA</span>
                      <span className="font-display text-[2rem] font-extrabold gradient-text-static leading-none">
                        {edu.cgpa}<span className="text-[1.1rem] text-text-muted font-sans font-medium"> / {edu.scale}</span>
                      </span>
                    </div>
                    <div className="edu-cgpa-bar">
                      <div className="edu-cgpa-fill" style={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }} />
                    </div>
                  </div>

                  {/* Focus areas */}
                  <p className="text-[1rem] font-bold uppercase tracking-wider text-text-muted mb-2">Focus Areas</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.focus.map((f) => (
                      <span key={f} className="tag-pill text-[0.95rem] py-1.5 px-3">{f}</span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="exp-highlights">
                    {edu.highlights.map((h) => (
                      <li key={h}>
                        <i className="fas fa-check text-accent text-[0.85rem] mt-1 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Academic journey */}
          <div className="reveal glass-card p-6 sm:p-7">
            <p className="label-caps text-accent mb-6">Academic Journey</p>
            <div className="edu-journey">
              {journey.map((j, i) => (
                <div key={j.year + j.label} className="edu-journey-step">
                  <div className={`edu-journey-year ${j.active ? 'edu-journey-year-active' : ''}`}>{j.year}</div>
                  <div className="edu-journey-label">
                    <p className="font-display font-bold text-[1.3rem] text-text-primary leading-tight">{j.label}</p>
                  </div>
                  {i < journey.length - 1 && <div className="edu-journey-line" aria-hidden />}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="exp-stat-mini glass rounded-xl p-4 text-center">
                <i className={`${s.icon} text-accent text-[1.3rem] mb-2`} />
                <p className="font-display text-[1.9rem] font-extrabold gradient-text-static leading-none">{s.val}</p>
                <p className="text-[0.8rem] uppercase tracking-wider text-text-muted mt-1.5 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CGPA comparison */}
          <div className="reveal glass-card p-6 sm:p-7">
            <p className="label-caps text-accent mb-5">Performance</p>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.short}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[1.1rem] font-semibold text-text-muted">{edu.short}</span>
                    <span className="font-display font-bold text-[1.4rem] text-text-primary">{edu.cgpa}</span>
                  </div>
                  <div className="edu-cgpa-bar edu-cgpa-bar-sm">
                    <div
                      className="edu-cgpa-fill"
                      style={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%`, opacity: edu.latest ? 1 : 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[1.1rem] text-text-muted mt-5 pt-4 border-t border-border leading-relaxed">
              Consistent academic performance across both undergraduate and postgraduate programs.
            </p>
          </div>
        </aside>
      </div>
    </SectionShell>
  )
}
