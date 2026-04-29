export default function Home() {
  const tags = ['MERN', 'JavaScript', 'Next.js', 'Three.js', 'GSAP', 'PostgreSQL', 'React Native', 'Tailwind CSS', 'Node.js', 'GitHub']
  const metrics = [
    { label: 'Projects Built', value: '20+' },
    { label: 'Core Stack', value: 'MERN' },
    { label: 'Experience', value: 'Full Stack' },
  ]

  return (
    <section
      id="home"
      className="home-section min-h-0 py-10 sm:py-14 lg:py-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none bg-main/20 hero-float" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl pointer-events-none bg-main/20" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30 bg-main/10 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 w-full">
        {/* Left: content */}
        <div className="flex-1 min-w-0 max-w-3xl">
          <p className="hero-fade-up hero-delay-1 inline-flex items-center gap-2 text-[1.1rem] sm:text-[1.25rem] font-semibold uppercase tracking-[0.16em] mb-3 px-4 py-1.5 rounded-full bg-main/20 border border-main/25 text-main">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-main-dark animate-pulse" />
            Available for freelance
          </p>
          <h1 className="hero-fade-up hero-delay-2 text-[2.8rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-tight leading-[1.05] text-text-primary">
            Zaheer{' '}
            <span className="inline-block bg-gradient-to-r from-main to-main-dark bg-clip-text text-transparent">
              Khan
            </span>
          </h1>
          <div className="hero-fade-up hero-delay-3 mt-3 text-[1.8rem] sm:text-[2rem] font-semibold text-text-primary">
            Software Engineer
          </div>
          <div className="hero-fade-up hero-delay-4 text-text-muted text-[1.35rem] sm:text-[1.5rem] leading-snug mt-4 w-full max-w-full space-y-2">
            <p>
              I design and build high-performance web and mobile applications using React, Node.js, PostgreSQL, and modern UI systems.
            </p>
          </div>

          {/* Tech tags */}
          <div className="hero-fade-up hero-delay-5 flex flex-wrap gap-2 sm:gap-2.5 mt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-xl text-[1.1rem] sm:text-[1.18rem] font-medium bg-card border border-main-dark/20 text-text-muted shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-fade-up hero-delay-6 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl bg-card border border-main/20 px-4 py-3">
                <p className="text-[1.7rem] font-extrabold text-text-primary">{metric.value}</p>
                <p className="text-[1.1rem] uppercase tracking-wide text-text-muted">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-fade-up hero-delay-7 flex flex-wrap items-center gap-3 mt-6">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 py-3 px-7 bg-main text-white text-[1.35rem] font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Projects
              <i className="fas fa-arrow-right text-[1.2rem]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-[1.3rem] font-medium border-2 border-main/50 text-text-primary hover:border-main hover:text-main transition-all duration-200"
            >
              Get in touch
              <i className="fas fa-envelope text-[1.2rem]" />
            </a>
          </div>

          <div className="hero-fade-up hero-delay-7 lg:hidden mt-6">
            <div className="rounded-2xl p-5 border border-main-dark/20 shadow-xl bg-card">
              <p className="text-[1.6rem] font-bold text-text-primary">Portfolio Highlights</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-body/70 px-3 py-2 border border-main/20">
                  <span className="text-[1.2rem] text-text-muted">Responsive UI</span>
                  <i className="fas fa-check-circle text-main" />
                </div>
                <div className="flex items-center justify-between rounded-xl bg-body/70 px-3 py-2 border border-main/20">
                  <span className="text-[1.2rem] text-text-muted">API Integration</span>
                  <i className="fas fa-check-circle text-main" />
                </div>
                <div className="flex items-center justify-between rounded-xl bg-body/70 px-3 py-2 border border-main/20">
                  <span className="text-[1.2rem] text-text-muted">Clean UX Flow</span>
                  <i className="fas fa-check-circle text-main" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: profile showcase + info cards (desktop) */}
        <div className="hidden lg:flex flex-1 min-w-0 max-w-xl flex-col gap-4 justify-center items-stretch pl-4">
          <div className="relative w-full rounded-2xl p-6 border border-main-dark/20 shadow-2xl bg-card hero-fade-up hero-delay-7">
            <div className="absolute -inset-1 bg-gradient-to-r from-main/40 to-main-dark/40 rounded-2xl blur-xl -z-10 opacity-60" />
            <div className="rounded-2xl border border-main/20 bg-body/60 p-5">
              <p className="text-main text-[1.05rem] font-semibold uppercase tracking-widest">
                Personal Brand
              </p>
              <p className="text-text-primary text-[2rem] font-extrabold mt-2">
                Zaheer Khan
              </p>
              <p className="text-[1.25rem] text-text-muted font-medium mt-1">Software Engineer</p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="rounded-xl bg-card border border-main/20 px-3 py-2">
                  <p className="text-[1.05rem] uppercase tracking-wide text-text-muted">Speciality</p>
                  <p className="text-[1.2rem] font-semibold text-text-primary">Full Stack Web</p>
                </div>
                <div className="rounded-xl bg-card border border-main/20 px-3 py-2">
                  <p className="text-[1.05rem] uppercase tracking-wide text-text-muted">Location</p>
                  <p className="text-[1.2rem] font-semibold text-text-primary">India</p>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-5">
                <a href="#portfolio" className="flex h-10 w-10 items-center justify-center rounded-xl bg-main text-white hover:bg-main-dark transition-colors">
                  <i className="fas fa-briefcase text-sm" />
                </a>
                <a href="#contact" className="flex h-10 w-10 items-center justify-center rounded-xl bg-main/20 text-main hover:bg-main hover:text-white transition-colors border-2 border-main/50">
                  <i className="fas fa-paper-plane text-sm" />
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-5 border border-main-dark/20 shadow-lg bg-card hero-fade-up hero-delay-7">
            <p className="text-text-primary text-[1.2rem] font-bold uppercase tracking-wide mb-3">Connect</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.linkedin.com/in/zaheerk1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-xl text-[1.15rem] font-medium transition-colors bg-body/80 hover:bg-main hover:text-white text-text-muted" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ZaheerK-pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-xl text-[1.15rem] font-medium transition-colors bg-body/80 hover:bg-main hover:text-white text-text-muted" aria-label="GitHub">
                <i className="fab fa-github" />
                <span>GitHub</span>
              </a>
              <a href="#contact" className="flex items-center gap-2 px-3 py-2 rounded-xl text-[1.15rem] font-medium transition-colors bg-body/80 hover:bg-main hover:text-white text-text-muted" aria-label="Email">
                <i className="fas fa-envelope" />
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-5 border border-main-dark/20 shadow-lg bg-card hero-fade-up hero-delay-7">
            <p className="text-text-primary text-[1.2rem] font-bold uppercase tracking-wide mb-3">Focus</p>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-2 px-3 py-2 rounded-xl text-[1.1rem] font-medium bg-main/10 text-main border border-main/20">
                <i className="fas fa-code" />
                Front-end
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-xl text-[1.1rem] font-medium bg-main/10 text-main border border-main/20">
                <i className="fas fa-server" />
                Back-end
              </span>
              <span className="flex items-center gap-2 px-3 py-2 rounded-xl text-[1.1rem] font-medium bg-main/10 text-main border border-main/20">
                <i className="fas fa-mobile-alt" />
                Mobile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
