export default function Home({ theme = 'light' }) {
  const isLight = theme === 'light'
  const tags = ['MERN', 'Javascript', 'PostgreSQL', 'React Native', 'HTML, Tailwind CSS', 'Figma, Postman, Swagger', 'Git, GitHub']

  const bgCls = isLight ? 'bg-body' : 'bg-slate-900'
  const headingCls = isLight ? 'text-text-primary' : 'text-white'
  const mutedCls = isLight ? 'text-text-muted' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/80 backdrop-blur border-slate-200' : 'bg-slate-800/80 backdrop-blur border-slate-700'
  const orbCls = isLight ? 'bg-main/20' : 'bg-main/30'

  return (
    <section
      id="home"
      className={`home-section min-h-0 py-10 sm:py-14 lg:py-16 flex flex-col justify-center relative overflow-hidden transition-colors duration-300 ${bgCls}`}
    >
      {/* Background shapes */}
      <div className={`absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none ${orbCls} hero-float`} />
      <div className={`absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl pointer-events-none ${orbCls}`} style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30 bg-main/10 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
        {/* Left: content */}
        <div className="flex-1 min-w-0">
          <p className={`hero-fade-up hero-delay-1 text-main text-[1.2rem] sm:text-[1.4rem] font-semibold uppercase tracking-[0.2em] mb-2`}>
            Hi, I'm
          </p>
          <h1 className={`hero-fade-up hero-delay-2 text-[2.8rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-tight leading-[1.05] ${headingCls}`}>
            Zaheer{' '}
            <span className="inline-block bg-gradient-to-r from-main to-main-dark bg-clip-text text-transparent">
              Khan
            </span>
          </h1>
          <div className="hero-fade-up hero-delay-3 mt-2">
            <span className={`inline-block px-4 py-1.5 rounded-full text-[1.3rem] font-bold uppercase tracking-wide border-2 ${isLight ? 'bg-main/10 text-main border-main/30' : 'bg-main/20 text-main border-main/40'}`}>
              Software Engineer
            </span>
          </div>
          <div className={`hero-fade-up hero-delay-4 ${mutedCls} text-[1.35rem] sm:text-[1.5rem] leading-snug mt-4 w-full max-w-full space-y-2`}>
            <p>
              I'm a Skilled Software Engineer with expertise in both front-end and back-end development. I work with React, HTML, and Tailwind for front-end, Node.js with JavaScript/TypeScript for back-end, and PostgreSQL and MongoDB for databases. I also build mobile apps with React Native and MySQL.
            </p>
            <p>
              Passionate about delivering scalable, high-performance applications, I focus on creating dynamic web and mobile solutions that meet client needs.
            </p>
          </div>

          {/* Tech tags */}
          <div className="hero-fade-up hero-delay-5 flex flex-wrap gap-1.5 sm:gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1.5 rounded-lg text-[1.15rem] sm:text-[1.2rem] font-medium ${isLight ? 'bg-white border border-slate-200 text-text-muted shadow-sm' : 'bg-slate-800 border border-slate-600 text-slate-400'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-fade-up hero-delay-6 flex flex-wrap items-center gap-3 mt-6">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 py-3 px-6 bg-main text-white text-[1.4rem] font-semibold rounded-xl hover:bg-main-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View my work
              <i className="fas fa-arrow-right text-[1.2rem]" />
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 py-3 px-6 rounded-xl text-[1.35rem] font-medium border-2 transition-all duration-200 ${
                isLight
                  ? 'border-slate-300 text-text-primary hover:border-main hover:text-main'
                  : 'border-slate-600 text-slate-300 hover:border-main hover:text-main'
              }`}
            >
              Get in touch
              <i className="fas fa-envelope text-[1.2rem]" />
            </a>
          </div>
        </div>

        {/* Right: cards + connect (desktop) */}
        <div className="hidden lg:flex flex-1 min-w-0 max-w-xl flex-col gap-4 justify-center items-stretch pl-4">
          <div className={`relative w-full max-w-[300px] rounded-2xl p-6 border-2 shadow-2xl ${cardBg} hero-fade-up hero-delay-7 hero-float`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-main/40 to-main-dark/40 rounded-2xl blur-xl -z-10 opacity-60" />
            <div className="text-center">
              <p className="text-main text-[1.15rem] font-semibold uppercase tracking-widest">
                Available for work
              </p>
              <p className={`${headingCls} text-[2rem] font-bold mt-1.5`}>
                Let's build something great
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#portfolio" className="flex h-10 w-10 items-center justify-center rounded-xl bg-main text-white hover:bg-main-dark transition-colors">
                  <i className="fas fa-briefcase text-sm" />
                </a>
                <a href="#contact" className="flex h-10 w-10 items-center justify-center rounded-xl bg-main/20 text-main hover:bg-main hover:text-white transition-colors border-2 border-main/50">
                  <i className="fas fa-paper-plane text-sm" />
                </a>
              </div>
            </div>
          </div>
          <div className={`rounded-2xl p-5 border-2 shadow-lg ${cardBg} hero-fade-up hero-delay-7`}>
            <p className={`${headingCls} text-[1.2rem] font-bold uppercase tracking-wide mb-3`}>Connect</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.linkedin.com/in/zaheerk1" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[1.15rem] font-medium transition-colors ${isLight ? 'bg-slate-100 hover:bg-main hover:text-white text-text-muted' : 'bg-slate-700 hover:bg-main text-slate-300 hover:text-white'}`} aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ZaheerK-pro" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[1.15rem] font-medium transition-colors ${isLight ? 'bg-slate-100 hover:bg-main hover:text-white text-text-muted' : 'bg-slate-700 hover:bg-main text-slate-300 hover:text-white'}`} aria-label="GitHub">
                <i className="fab fa-github" />
                <span>GitHub</span>
              </a>
              <a href="#contact" className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[1.15rem] font-medium transition-colors ${isLight ? 'bg-slate-100 hover:bg-main hover:text-white text-text-muted' : 'bg-slate-700 hover:bg-main text-slate-300 hover:text-white'}`} aria-label="Email">
                <i className="fas fa-envelope" />
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className={`rounded-2xl p-5 border-2 shadow-lg ${cardBg} hero-fade-up hero-delay-7`}>
            <p className={`${headingCls} text-[1.2rem] font-bold uppercase tracking-wide mb-3`}>Focus</p>
            <div className="flex flex-wrap gap-2">
              <span className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[1.1rem] font-medium ${isLight ? 'bg-main/10 text-main border border-main/20' : 'bg-main/20 text-main border border-main/30'}`}>
                <i className="fas fa-code" />
                Front-end
              </span>
              <span className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[1.1rem] font-medium ${isLight ? 'bg-main/10 text-main border border-main/20' : 'bg-main/20 text-main border border-main/30'}`}>
                <i className="fas fa-server" />
                Back-end
              </span>
              <span className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[1.1rem] font-medium ${isLight ? 'bg-main/10 text-main border border-main/20' : 'bg-main/20 text-main border border-main/30'}`}>
                <i className="fas fa-mobile-alt" />
                Mobile
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center px-4">
        <a
          href="#service"
          className={`hero-fade-up hero-delay-7 flex flex-col items-center gap-2 py-2 ${mutedCls} hover:text-main transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2`}
          aria-label="Scroll to services"
        >
          <span className="text-[1rem] sm:text-[1.1rem] font-medium uppercase tracking-widest">Scroll</span>
          <i className="fas fa-chevron-down text-lg sm:text-xl animate-bounce-slow" aria-hidden />
        </a>
      </div>
    </section>
  )
}
