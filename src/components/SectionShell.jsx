import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionShell({ id, number, title, subtitle, description, children, variant = 'default', className = '' }) {
  const ref = useScrollReveal()

  return (
    <section id={id} className={`section-padding relative overflow-hidden ${className}`}>
      {variant === 'dark-band' && <div className="absolute inset-0 section-band pointer-events-none" />}
      {variant === 'angled' && <div className="absolute top-0 left-0 right-0 h-28 section-clip-top pointer-events-none" />}

      <div
        className="absolute top-6 right-4 sm:right-10 lg:right-16 font-display font-extrabold leading-none section-watermark pointer-events-none select-none tabular-nums"
        style={{ fontSize: 'clamp(5rem, 12vw, 11rem)' }}
        aria-hidden
      >
        {number}
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <header className="mb-8 sm:mb-10 max-w-3xl">
          <div className="reveal flex items-center gap-3 mb-3">
            <span className="section-index tabular-nums">{number}</span>
            <span className="h-px w-10 bg-gradient-accent shrink-0" />
            <span className="label-caps text-accent shimmer-text">{title}</span>
          </div>
          <h2 className="reveal font-display font-extrabold leading-[1] tracking-tight text-text-primary text-balance section-title">
            {subtitle}
          </h2>
          {description && (
            <p className="reveal mt-3 text-text-muted leading-relaxed max-w-[48ch] text-balance section-desc">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
