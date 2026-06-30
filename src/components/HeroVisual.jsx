const codeLines = [
  { indent: 0, parts: [{ t: 'const ', c: 'code' }, { t: 'developer', c: 'name' }, { t: ' = {', c: 'plain' }] },
  { indent: 1, parts: [{ t: 'name', c: 'key' }, { t: ': ', c: 'plain' }, { t: '"Zaheer Khan"', c: 'str' }, { t: ',', c: 'plain' }] },
  { indent: 1, parts: [{ t: 'role', c: 'key' }, { t: ': ', c: 'plain' }, { t: '"Full Stack Engineer"', c: 'str' }, { t: ',', c: 'plain' }] },
  { indent: 1, parts: [{ t: 'stack', c: 'key' }, { t: ': [', c: 'plain' }, { t: '"React"', c: 'str' }, { t: ', ', c: 'plain' }, { t: '"Node.js"', c: 'str' }, { t: '],', c: 'plain' }] },
  { indent: 1, parts: [{ t: 'openToWork', c: 'key' }, { t: ': ', c: 'plain' }, { t: 'true', c: 'bool' }] },
  { indent: 0, parts: [{ t: '}', c: 'plain' }] },
]

const colorMap = {
  code: 'text-accent-2',
  name: 'text-text-primary',
  key: 'text-accent',
  str: 'text-accent-3',
  bool: 'text-accent-2',
  plain: 'text-text-muted',
}

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      {/* Profile */}
      <div className="hero-profile">
        <div className="hero-profile-ring">
          <div className="hero-profile-avatar">
            <span>ZK</span>
          </div>
        </div>
        <div className="hero-profile-meta">
          <p className="font-display font-bold text-[1.7rem] text-text-primary">Zaheer Khan</p>
          <p className="text-[1.15rem] text-accent font-medium">Full Stack Developer</p>
          <p className="text-[1.1rem] text-text-muted mt-1 flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-[0.9rem]" /> India
          </p>
        </div>
      </div>

      {/* Code terminal */}
      <div className="hero-terminal">
        <div className="hero-terminal-bar">
          <span className="hero-terminal-dot bg-[#ff5f57]" />
          <span className="hero-terminal-dot bg-[#febc2e]" />
          <span className="hero-terminal-dot bg-[#28c840]" />
          <span className="hero-terminal-title">developer.js</span>
        </div>
        <pre className="hero-terminal-body">
          {codeLines.map((line, i) => (
            <div key={i} className="hero-code-line" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="hero-code-indent" style={{ width: `${line.indent * 1.6}rem` }} />
              {line.parts.map((p, j) => (
                <span key={j} className={colorMap[p.c]}>{p.t}</span>
              ))}
            </div>
          ))}
          <span className="hero-cursor" aria-hidden />
        </pre>
      </div>

      {/* Quick links */}
      <div className="hero-quick-links">
        <a href="https://github.com/ZaheerK-pro" target="_blank" rel="noopener noreferrer" className="hero-quick-link">
          <i className="fab fa-github" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/zaheerk1" target="_blank" rel="noopener noreferrer" className="hero-quick-link hero-quick-link-primary">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
      </div>
    </div>
  )
}
