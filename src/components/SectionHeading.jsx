export default function SectionHeading({ label, title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="reveal text-accent text-[1.3rem] sm:text-[1.4rem] font-semibold uppercase tracking-[0.2em] mb-3">
        {label}
      </p>
      <h2 className="reveal text-[3.2rem] sm:text-[4rem] md:text-[4.8rem] font-display font-bold tracking-tight leading-[1.1] text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="reveal text-text-muted text-[1.5rem] sm:text-[1.7rem] max-w-2xl mt-4 leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
