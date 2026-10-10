import { useEffect, useState } from 'react'

const chapters = [
  { id: 'chapitre-ivp', label: 'IVP', long: ' · Solidarité', active: 'bg-ivp-red text-white', dot: 'bg-ivp-red' },
  { id: 'chapitre-mf', label: 'MF Médical', long: ' · Esthétique', active: 'bg-mf-plum text-white', dot: 'bg-mf-plum' },
]

// Sticky pill that follows the visitor and shows which "chapter" (niche) they're in.
export default function ChapterSwitcher() {
  const [current, setCurrent] = useState(chapters[0].id)

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.4
      let found = chapters[0].id
      for (const c of chapters) {
        const el = document.getElementById(c.id)
        if (el && el.getBoundingClientRect().top <= mid) found = c.id
      }
      setCurrent(found)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
  }

  return (
    <div className="pointer-events-none sticky top-[88px] z-40 h-0">
      <div className="container-page flex justify-center">
        <nav
          aria-label="Choisir une activité"
          className="pointer-events-auto flex gap-1 rounded-full border border-black/10 bg-white/85 p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          {chapters.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => go(c.id)}
              aria-current={current === c.id ? 'true' : undefined}
              className={`rounded-full whitespace-nowrap px-5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-500 sm:px-6 sm:text-xs ${
                current === c.id ? c.active : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {c.label}
              <span className="hidden sm:inline">{c.long}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
