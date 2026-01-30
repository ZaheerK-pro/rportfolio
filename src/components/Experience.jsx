const experiences = [
  { title: 'Front-End Development', text: 'Building interactive UIs with HTML, CSS, Tailwind, Bootstrap, and JavaScript/React. Focus on clean code, performance, and accessibility.' },
  { title: 'Backend Development', text: 'Designing scalable server-side applications with Node.js and Express.js. RESTful APIs, authentication, and robust backend architecture.' },
  { title: 'React Native Development', text: 'Developing cross-platform mobile applications with React Native for iOS and Android. From UI to state management and native modules.' },
  { title: 'Databases', text: 'Designing schemas, writing optimized queries, and ensuring data integrity. Experience with MongoDB, PostgreSQL, and MySQL.' },
  { title: 'UI Design', text: 'Creating intuitive interfaces with a focus on user experience and usability. From wireframes to polished, consistent design systems.' },
  { title: 'Responsive Design', text: 'Delivering interfaces that adapt seamlessly to all devices and screen sizes for an optimal viewing and interaction experience.' },
]

export default function Experience({ theme = 'light' }) {
  const isLight = theme === 'light'
  const cardBg = isLight ? 'bg-white border-slate-100 shadow-lg' : 'bg-slate-800 border-slate-700 shadow-xl shadow-slate-900/50'
  const headingCls = isLight ? 'text-text-primary' : 'text-white'
  const textCls = isLight ? 'text-text-muted' : 'text-slate-400'

  return (
    <section id="experience" className="min-h-screen transition-colors duration-300">
      <div className="mb-8 sm:mb-12">
        <h1 className={`text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight ${headingCls}`}>
          <span className="text-main">my</span> experience
        </h1>
        <p className={`${textCls} text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed`}>
          Skills and areas I work in — from front-end and backend to mobile, databases, and design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {experiences.map((exp) => (
          <article
            key={exp.title}
            className={`group relative p-6 sm:p-8 rounded-2xl border border-l-4 border-l-main hover:shadow-xl hover:border-main/30 transition-all duration-300 flex flex-col text-left min-h-0 ${cardBg}`}
          >
            <h3 className={`${headingCls} text-[1.8rem] sm:text-[2rem] font-bold uppercase tracking-wide`}>
              {exp.title}
            </h3>
            <p className={`${textCls} text-[1.4rem] sm:text-[1.55rem] leading-relaxed mt-3 flex-1`}>
              {exp.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
