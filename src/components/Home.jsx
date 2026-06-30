import HeroVisual from './HeroVisual'
import { getYearsOfExperience } from '../utils/yearsOfExperience'

const stack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Next.js', 'Tailwind CSS']

export default function Home() {
  const yearsExp = getYearsOfExperience()

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 grid-overlay opacity-[0.07]" />
        <div className="absolute top-[18%] right-[8%] w-[320px] h-[320px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute bottom-[22%] left-[5%] w-[240px] h-[240px] rounded-full bg-accent-2/[0.05] blur-[100px]" />
      </div>

      <div className="section-container relative z-10 w-full pt-[10rem] pb-[5rem] lg:pt-[10rem] lg:pb-[6rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — intro */}
          <div>
            <div className="hero-animate hero-delay-1 hero-status-badge glass mb-8">
              <span className="hero-status-dot h-2 w-2 rounded-full bg-accent" />
              <span className="text-[1.1rem] font-medium text-text-muted">Open to opportunities</span>
            </div>

            <h1 className="hero-animate hero-delay-2 font-display font-extrabold text-text-primary leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(3.2rem, 6.5vw, 5.8rem)' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Zaheer Khan</span>
            </h1>

            <p className="hero-animate hero-delay-3 hero-role text-text-primary mb-5">
              Full Stack Software Engineer
            </p>

            <p className="hero-animate hero-delay-4 hero-lead text-text-muted max-w-[52ch] mb-8">
              I design and build modern web applications — from polished frontends to scalable backends. Currently shipping production software at Sirensys.
            </p>

            <div className="hero-animate hero-delay-5 flex flex-wrap gap-3 mb-10">
              <a href="#portfolio" className="btn-primary text-[1.2rem] min-h-[4.4rem] px-7">
                See My Work <i className="fas fa-arrow-right" />
              </a>
              <a href="#contact" className="btn-outline text-[1.2rem] min-h-[4.4rem] px-7">
                Get In Touch
              </a>
            </div>

            <div className="hero-animate hero-delay-6 flex flex-wrap gap-3 mb-8">
              {[
                { n: '27+', l: 'Projects' },
                { n: yearsExp, l: 'Years Exp.' },
                { n: 'MERN', l: 'Stack' },
              ].map((s) => (
                <div key={s.l} className="hero-stat-pill px-5 py-3 rounded-xl glass text-center min-w-[90px]">
                  <p className="text-[1.8rem] font-display font-bold gradient-text-static leading-none">{s.n}</p>
                  <p className="text-[0.8rem] uppercase tracking-wider text-text-muted mt-1.5 font-semibold">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="hero-animate hero-delay-7 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="tag-pill text-[0.95rem]">{t}</span>
              ))}
            </div>
          </div>

          {/* Right — profile + code (no 3D) */}
          <div className="hero-animate hero-delay-3 w-full max-w-[480px] mx-auto lg:max-w-none lg:ml-auto">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
