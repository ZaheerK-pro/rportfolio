const projects = [
  { img: '/assets/smurl.png', title: 'Smurl Web App', link: 'https://github.com/imzaheerk/smurl', demo: 'https://smurl-url.vercel.app/' },
  { img: '/assets/checknown.png', title: 'Checknown', link: 'https://checknown.vercel.app/', demo: 'https://checknown.vercel.app/' },
  { img: '/assets/jobscan.jpg', title: 'jobScan Web App', link: 'https://github.com/ZaheerK-pro/jobscan', demo: 'https://jobscan.vercel.app/' },
  { img: '/assets/petrolium.jpg', title: 'subPetro', link: 'https://github.com/ZaheerK-pro/petrolium', demo: 'https://sbpetrolium.vercel.app/' },
  // { img: '/assets/portfolio.jpg', title: 'Portfolio', link: 'https://github.com/ZaheerK-pro/rportfolio', demo: 'https://zaheerk.vercel.app/' },
  { img: '/assets/gro-shop.jpg', title: 'Grocery Shop', link: 'https://github.com/ZaheerK-pro/GroceryShop', demo: 'https://igrobasket.vercel.app/' },
  { img: '/assets/cloth-shop.jpg', title: 'Clothing Shop', link: 'https://github.com/ZaheerK-pro/ClothingShop', demo: 'https://auracloths.vercel.app/' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight text-text-primary">
          <span className="text-main">my</span> projects
        </h1>
        <p className="text-text-muted text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed">
          A selection of web applications and projects I've built — from e-commerce and productivity tools to this portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-main-dark/20 bg-card hover:shadow-2xl hover:border-main/20 transition-all duration-300 shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-main-dark/95 via-main-dark/55 to-main-dark/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <div className="w-full rounded-xl bg-black/65 backdrop-blur-sm p-3 sm:p-4 shadow-lg ring-1 ring-white/15">
                  <h3 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 sm:mb-4 drop-shadow-sm">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-main hover:bg-main-dark text-white text-[1.3rem] sm:text-[1.4rem] font-medium rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50" aria-label={`View ${p.title} source code`}>
                        <i className="fas fa-code" aria-hidden /><span>Code</span>
                      </a>
                    ) : null}
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-white text-main-dark hover:bg-white/95 text-[1.3rem] sm:text-[1.4rem] font-semibold rounded-lg border-2 border-white shadow-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-black/50" aria-label={`View ${p.title} live demo`}>
                      <i className="fas fa-external-link-alt" aria-hidden /><span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 border-t border-main-dark/20 group-hover:border-main/20 transition-colors">
              <h3 className="text-text-primary text-[1.6rem] sm:text-[1.8rem] font-semibold uppercase tracking-wide">{p.title}</h3>
              <div className="flex gap-3 mt-3">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-body/80 text-text-muted hover:bg-main hover:text-white transition-all duration-200" aria-label="View source code">
                    <i className="fab fa-github text-base sm:text-lg" aria-hidden />
                  </a>
                ) : null}
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-body/80 text-text-muted hover:bg-main hover:text-white transition-all duration-200" aria-label="View live demo">
                  <i className="fas fa-external-link-alt" aria-hidden />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
