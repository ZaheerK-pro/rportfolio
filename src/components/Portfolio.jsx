import SectionShell from './SectionShell'

const projects = [
  {
    img: '/assets/checknown.png',
    title: 'Checknown',
    desc: 'Productivity & task management with a distraction-free interface.',
    longDesc: 'Productivity and task management app with a clean, distraction-free interface built for focused work.',
    link: 'https://checknown.vercel.app/',
    demo: 'https://checknown.vercel.app/',
    featured: true,
    category: 'Productivity',
    year: '2026',
    tags: [
      'React',
      'Vite',
      'TypeScript',
      'Three.js',
      'React Native',
      'Expo',
      'Node.js',
      'Fastify',
      'TypeORM',
      'PostgreSQL',
      'Redis',
      'WebSocket',
      'JWT Authentication',
      'REST APIs',
    ],
    highlights: ['Task management', 'Distraction-free UI', 'Productivity focused'],
  },
  {
    img: '/assets/smurl.png',
    title: 'Smurl Web App',
    desc: 'URL shortener with analytics dashboard and custom links.',
    longDesc: 'Full-stack URL shortening platform with click tracking, custom slugs, and a clean analytics dashboard.',
    link: 'https://github.com/imzaheerk/smurl',
    demo: 'https://smurl-url.vercel.app/',
    category: 'Developer Tool',
    year: '2026',
    tags: [
      'React',
      'TypeScript',
      'Tailwind',
      'GSAP/Three.js',
      'Node.js',
      'Fastify',
      'PostgreSQL',
      'TypeORM',
      'Redis',
    ],
  },
  {
    img: '/assets/jobscan.jpg',
    title: 'JobScan',
    desc: 'Track applications, interview stages, and company details in one place.',
    link: 'https://github.com/ZaheerK-pro/jobscan',
    demo: 'https://jobscan.vercel.app/',
    category: 'Productivity',
    year: '2025',
    tags: ['MERN', 'MongoDB', 'Express'],
  },
  {
    img: '/assets/petrolium.jpg',
    title: 'SubPetro',
    desc: 'Business system for petroleum inventory, sales, and reporting.',
    link: 'https://github.com/ZaheerK-pro/petrolium',
    demo: 'https://sbpetrolium.vercel.app/',
    category: 'Business',
    year: '2025',
    tags: ['React', 'Node.js', 'MySQL'],
  },
  {
    img: '/assets/gro-shop.jpg',
    title: 'Grocery Shop',
    desc: 'E-commerce platform with catalog, cart, checkout, and orders.',
    link: 'https://github.com/ZaheerK-pro/GroceryShop',
    demo: 'https://igrobasket.vercel.app/',
    category: 'E-Commerce',
    year: '2025',
    tags: ['MERN', 'JWT', 'Stripe'],
  },
  {
    img: '/assets/cloth-shop.jpg',
    title: 'Clothing Shop',
    desc: 'Fashion storefront with filters and responsive shopping flow.',
    link: 'https://github.com/ZaheerK-pro/ClothingShop',
    demo: 'https://auracloths.vercel.app/',
    category: 'E-Commerce',
    year: '2024',
    tags: ['React', 'Node.js', 'CSS'],
  },
  {
    img: '/assets/studyOs.png',
    title: 'StudyOs',
    desc: 'Manage your study environment — schedules, focus sessions, and learning tools in one place.',
    category: 'Productivity',
    year: '2026',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
]

const featured = projects.find((p) => p.featured)
const rest = projects.filter((p) => !p.featured)
const categories = [...new Set(projects.map((p) => p.category))]

function ProjectActions({ project, variant = 'default' }) {
  const base = variant === 'overlay'
    ? 'work-action work-action-overlay'
    : 'work-action'

  return (
    <>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} work-action-ghost`}
        >
          <i className="fab fa-github" />
          {variant !== 'overlay' && 'Code'}
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} work-action-accent`}
        >
          <i className="fas fa-external-link-alt" />
          {variant !== 'overlay' && 'Live Demo'}
        </a>
      )}
    </>
  )
}

export default function Portfolio() {
  return (
    <SectionShell
      id="portfolio"
      number="03"
      title="Portfolio"
      subtitle={<>Selected <span className="gradient-text">Works</span></>}
      description="Real projects — developer tools, productivity apps, and full-stack e-commerce builds."
      variant="dark-band"
    >
      <div className="reveal work-stats">
        <span className="work-stat">
          <strong>{projects.length}</strong> projects
        </span>
        <span className="work-stat-dot" aria-hidden />
        <span className="work-stat">
          <strong>{categories.length}</strong> categories
        </span>
        <div className="work-stat-chips">
          {categories.map((c) => (
            <span key={c} className="work-category-chip">{c}</span>
          ))}
        </div>
      </div>

      {featured && (
        <article className="reveal work-featured glass-card">
          <div className="work-featured-layout">
            <div className="work-featured-media group">
              <img
                src={featured.img}
                alt={featured.title}
                className="work-featured-img img-crisp"
                loading="lazy"
              />
              <div className="work-featured-media-shade" />
              <span className="work-featured-badge">Featured</span>
            </div>

            <div className="work-featured-content">
              <div className="work-meta-row">
                <span className="work-category-chip">{featured.category}</span>
                <span className="exp-duration-pill">{featured.year}</span>
              </div>
              <h3 className="work-featured-title">{featured.title}</h3>
              <p className="work-featured-desc">{featured.longDesc}</p>
              <ul className="work-highlights">
                {(featured.highlights ?? []).map((item) => (
                  <li key={item}>
                    <i className="fas fa-check" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="work-tags">
                {featured.tags.map((t) => (
                  <span key={t} className="tag-pill work-tag">{t}</span>
                ))}
              </div>
              <div className="work-actions">
                <ProjectActions project={featured} />
              </div>
            </div>
          </div>
        </article>
      )}

      <div className="reveal work-grid-header">
        <p className="label-caps text-accent">More Projects</p>
        <p className="work-grid-count">{rest.length} builds</p>
      </div>

      <div className="work-grid">
        {rest.map((p, i) => (
          <article key={p.title} className="reveal work-card glass-card">
            <div className="work-card-media group">
              <img src={p.img} alt={p.title} className="work-card-img img-crisp" loading="lazy" />
              <div className="work-card-overlay">
                <ProjectActions project={p} variant="overlay" />
              </div>
              <span className="work-card-num">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <div className="work-card-content">
              <div className="work-card-top">
                <h4 className="work-card-title">{p.title}</h4>
                <span className="exp-duration-pill">{p.year}</span>
              </div>
              <span className="work-category-chip work-card-cat">{p.category}</span>
              <p className="work-card-desc">{p.desc}</p>
              <div className="work-card-tags">
                {p.tags.slice(0, 2).map((t) => (
                  <span key={t} className="work-tag-inline">{t}</span>
                ))}
                {p.tags.length > 2 && (
                  <span className="work-tag-inline work-tag-more">+{p.tags.length - 2}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
