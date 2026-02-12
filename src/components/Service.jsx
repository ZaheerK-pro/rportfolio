const services = [
  { icon: 'fas fa-code', title: 'Front-End', text: 'Building clean, interactive UIs with HTML, CSS, Bootstrap, Tailwind, JavaScript, and React. Focus on performance, accessibility, and modern tooling.' },
  { icon: 'fas fa-server', title: 'Backend Development', text: 'Designing and building scalable server-side applications with Node.js and Express.js. RESTful APIs, authentication, and robust backend architecture.' },
  { icon: 'fab fa-react', title: 'React Native App Development', text: 'Developing cross-platform mobile apps with React Native. From UI to state management and native integrations for iOS and Android.' },
  { icon: 'fas fa-database', title: 'Databases', text: 'Designing schemas, writing optimized queries, and ensuring data integrity. Experience with MongoDB, PostgreSQL, and MySQL.' },
  { icon: 'fas fa-palette', title: 'UI Design', text: 'Creating intuitive interfaces with a focus on user experience and usability. From wireframes to polished, consistent design systems.' },
  { icon: 'fas fa-mobile-alt', title: 'Responsive Design', text: 'Making interfaces that adapt seamlessly to all screen sizes — from mobile to tablet and desktop — for an optimal experience everywhere.' },
]

export default function Service() {
  return (
    <section id="service" className="min-h-screen">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight text-text-primary">
          <span className="text-main">my</span> services
        </h1>
        <p className="text-text-muted text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed">
          What I offer — from front-end and backend to mobile apps, databases, and design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative p-6 sm:p-8 rounded-2xl border border-main-dark/20 bg-card hover:shadow-xl hover:border-main/20 transition-all duration-300 flex flex-col text-center min-h-0 shadow-lg"
          >
            <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-main text-white text-xl sm:text-2xl shadow-md group-hover:scale-110 group-hover:bg-main-dark transition-all duration-300 mx-auto shrink-0">
              <i className={s.icon} aria-hidden />
            </div>
            <h3 className="text-text-primary text-[1.8rem] sm:text-[2rem] font-bold uppercase tracking-wide mt-4 sm:mt-6">{s.title}</h3>
            <p className="text-text-muted text-[1.4rem] sm:text-[1.55rem] leading-relaxed mt-3 flex-1">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
