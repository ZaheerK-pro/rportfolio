export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.04] to-transparent pointer-events-none" />
      <div className="section-container relative py-10 sm:py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex gap-3">
            {[
              { href: 'https://www.linkedin.com/in/zaheerk1', icon: 'fab fa-linkedin', label: 'LinkedIn' },
              { href: 'https://github.com/ZaheerK-pro', icon: 'fab fa-github', label: 'GitHub' },
              { href: 'https://www.instagram.com/im__zaheerk/', icon: 'fab fa-instagram', label: 'Instagram' },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-muted hover:text-accent hover:border-accent/30 transition-all text-[1.5rem]"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
          <p className="text-[1.1rem] text-text-muted">
            Made with <span aria-label="love">❤️</span> by{' '}
            <span className="gradient-text-static font-semibold">Zaheer Khan</span>
            <span className="mx-1.5 opacity-50" aria-hidden>·</span>
            &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
