import { useId } from 'react'

export default function Logo({ className = '' }) {
  const gradId = `logo-flow-${useId().replace(/:/g, '')}`

  return (
    <a href="#home" className={`site-logo ${className}`} aria-label="Zaheer Khan — Home">
      <svg
        className="site-logo-swoosh"
        viewBox="0 0 120 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="16" x2="120" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="20%" stopColor="var(--color-accent)" />
            <stop offset="50%" stopColor="var(--color-accent-2)" />
            <stop offset="80%" stopColor="var(--color-accent-3)" />
            <stop offset="100%" stopColor="var(--color-accent-2)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M4 26 C28 8, 52 8, 60 16 C68 24, 92 24, 116 10"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <span className="site-logo-word" aria-hidden>
        <span className="site-logo-z">Z</span>
        <span className="site-logo-k">K</span>
      </span>

      <span className="site-logo-caption">Software Engineer</span>
    </a>
  )
}
