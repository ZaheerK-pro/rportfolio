import SectionShell from './SectionShell'
import { getYearsOfExperience } from '../utils/yearsOfExperience'

const company = {
  name: 'Sirensys',
  type: 'Software Company',
  since: 'Jan 2024',
  location: 'Remote · India',
  summary: 'Started as an intern and grew into a full-time software engineer — shipping real products across the stack.',
  roles: [
    {
      title: 'Software Engineer',
      period: 'Jul 2024 – Present',
      duration: '1+ yr',
      current: true,
      desc: 'Building and maintaining production web applications used by real users daily.',
      highlights: [
        'Develop responsive UIs with React, Vite, Tailwind & PrimeReact',
        'Build REST APIs with Node.js, Fastify, TypeScript & TypeORM',
        'Work with PostgreSQL — schema design, queries & optimization',
        'Collaborate on React Native features for mobile delivery',
      ],
    },
    {
      title: 'Full Stack Intern',
      period: 'Jan 2024 – Jun 2024',
      duration: '6 mo',
      current: false,
      desc: 'Hands-on learning phase — from first PR to shipping features independently.',
      highlights: [
        'Learned React component architecture & state management',
        'Built REST endpoints and integrated front-end with APIs',
        'Practiced Git workflows, code reviews & agile sprints',
        'Gained confidence across the full MERN stack',
      ],
    },
  ],
}

const stackGroups = [
  { label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'PrimeReact'] },
  { label: 'Backend', items: ['Node.js', 'Fastify', 'TypeScript', 'JWT', 'REST APIs'] },
  { label: 'Database', items: ['PostgreSQL', 'TypeORM'] },
  { label: 'Mobile', items: ['React Native'] },
]

const milestones = [
  { step: '01', title: 'Joined as Intern', sub: 'Jan 2024', done: true },
  { step: '02', title: 'Promoted to Engineer', sub: 'Jul 2024', done: true },
  { step: '03', title: 'Shipping Production', sub: 'Present', done: true, active: true },
]

export default function Experience() {
  const yearsExp = getYearsOfExperience()

  return (
    <SectionShell
      id="experience"
      number="02"
      title="Experience"
      subtitle={<>Work <span className="gradient-text">Journey</span></>}
      description="One company, two roles — from learning the stack to owning production features."
      variant="dark-band"
    >
      {/* Company header */}
      <div className="reveal exp-company-banner glass-card mb-8 sm:mb-10">
        <div className="exp-company-banner-inner">
          <div className="flex items-start gap-5 sm:gap-6">
            <div className="exp-company-logo">S</div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-display text-[2.2rem] sm:text-[2.6rem] font-extrabold text-text-primary">{company.name}</h3>
                <span className="exp-badge-current">Current</span>
              </div>
              <p className="text-[1.2rem] text-accent font-semibold">{company.type}</p>
              <p className="text-[1.15rem] text-text-muted mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <span><i className="fas fa-calendar-alt text-accent mr-1.5" />Since {company.since}</span>
                <span><i className="fas fa-map-marker-alt text-accent mr-1.5" />{company.location}</span>
              </p>
            </div>
          </div>
          <p className="text-[1.3rem] text-text-muted leading-[1.7] mt-5 max-w-3xl">{company.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Timeline */}
        <div className="lg:col-span-8">
          <div className="exp-timeline">
            {company.roles.map((role, i) => (
              <article key={role.title} className="reveal exp-timeline-item">
                <div className="exp-timeline-marker">
                  <span className={`exp-timeline-dot ${role.current ? 'exp-timeline-dot-active' : ''}`} />
                  {i < company.roles.length - 1 && <span className="exp-timeline-line" aria-hidden />}
                </div>
                <div className="exp-timeline-content glass-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="font-display text-[1.9rem] sm:text-[2.1rem] font-extrabold text-text-primary">{role.title}</h4>
                      <p className="text-[1.2rem] text-accent font-semibold mt-1">{role.period}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="exp-duration-pill">{role.duration}</span>
                      {role.current && <span className="exp-live-pill">Active</span>}
                    </div>
                  </div>
                  <p className="text-[1.25rem] text-text-muted leading-[1.65] mb-4">{role.desc}</p>
                  <ul className="exp-highlights">
                    {role.highlights.map((h) => (
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
          {/* Growth path */}
          <div className="reveal glass-card p-6 sm:p-7">
            <p className="label-caps text-accent mb-6">Growth Path</p>
            <div className="exp-milestones">
              {milestones.map((m, i) => (
                <div key={m.step} className="exp-milestone">
                  <div className={`exp-milestone-icon ${m.active ? 'exp-milestone-icon-active' : m.done ? 'exp-milestone-icon-done' : ''}`}>
                    {m.done && !m.active ? <i className="fas fa-check text-[1rem]" /> : m.step}
                  </div>
                  <div className="exp-milestone-text">
                    <p className="font-display font-bold text-[1.35rem] text-text-primary leading-tight">{m.title}</p>
                    <p className="text-[1.1rem] text-text-muted">{m.sub}</p>
                  </div>
                  {i < milestones.length - 1 && <div className="exp-milestone-connector" aria-hidden />}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-2 gap-3">
            {[
              { val: yearsExp, label: 'Years', icon: 'fas fa-clock' },
              { val: '2', label: 'Roles', icon: 'fas fa-layer-group' },
              { val: '1', label: 'Company', icon: 'fas fa-building' },
              { val: '12+', label: 'Technologies', icon: 'fas fa-tools' },
            ].map((s) => (
              <div key={s.label} className="exp-stat-mini glass rounded-xl p-4 text-center">
                <i className={`${s.icon} text-accent text-[1.3rem] mb-2`} />
                <p className="font-display text-[1.9rem] font-extrabold gradient-text-static leading-none">{s.val}</p>
                <p className="text-[0.8rem] uppercase tracking-wider text-text-muted mt-1.5 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Stack by group */}
          <div className="reveal glass-card p-6 sm:p-7">
            <p className="label-caps text-accent mb-5">Tech Stack</p>
            <div className="space-y-5">
              {stackGroups.map((g) => (
                <div key={g.label}>
                  <p className="text-[1.05rem] font-bold text-text-muted uppercase tracking-wider mb-2">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span key={t} className="tag-pill text-[0.95rem] py-1.5 px-3">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  )
}
