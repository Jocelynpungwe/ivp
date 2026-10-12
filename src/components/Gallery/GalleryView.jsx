import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Camera, Folder, Play, Video, X } from 'lucide-react'
import DualCTA from '../Home/DualCTA'

const themes = {
  ivp: {
    heroBg: 'bg-neutral-950',
    heroVeil: 'bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-neutral-950/30',
    heroSide: 'bg-gradient-to-r from-neutral-950/70 to-transparent',
    dot: 'bg-ivp-red',
    icon: 'text-ivp-red',
    page: 'bg-[#f7f5f2] text-neutral-900',
    bar: 'border-black/5 bg-white/90',
    chipOn: 'bg-ivp-red text-white',
    chipOff: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200',
    countOn: 'text-white/70',
    countOff: 'text-neutral-400',
    text: 'text-neutral-500',
    num: 'text-ivp-red/25',
    meta: 'text-neutral-400',
    btn: 'bg-ivp-red text-white hover:bg-ivp-red-dark',
    btnBadge: 'bg-white/20',
    ghost: 'border-black/15 hover:bg-black hover:text-white',
    photoBg: 'bg-neutral-200',
    photoHover: 'group-hover:bg-ivp-red/20',
    label: 'text-ivp-red',
    switchOn: 'bg-ivp-red text-white',
    ring: 'hover:bg-ivp-red',
  },
  mf: {
    heroBg: 'bg-mf-ink',
    heroVeil: 'bg-gradient-to-t from-mf-ink via-mf-ink/55 to-mf-plum-dark/35',
    heroSide: 'bg-gradient-to-r from-mf-ink/75 to-transparent',
    dot: 'bg-mf-gold',
    icon: 'text-mf-gold-soft',
    page: 'bg-mf-ink text-white',
    bar: 'border-white/10 bg-mf-ink/90',
    chipOn: 'bg-gradient-to-r from-[#e9cf98] to-[#c9a05a] text-mf-ink',
    chipOff: 'bg-white/10 text-white/70 hover:bg-white/15',
    countOn: 'text-mf-ink/60',
    countOff: 'text-white/40',
    text: 'text-white/60',
    num: 'text-mf-gold/30',
    meta: 'text-white/40',
    btn: 'bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] text-mf-ink hover:brightness-105',
    btnBadge: 'bg-mf-ink/15',
    ghost: 'border-white/25 hover:bg-white/10',
    photoBg: 'bg-white/10',
    photoHover: 'group-hover:bg-mf-gold/20',
    label: 'text-mf-gold-soft',
    switchOn: 'bg-gradient-to-r from-[#e9cf98] to-[#c9a05a] text-mf-ink',
    ring: 'hover:bg-mf-plum',
  },
}

const PREVIEW = 12
const STEP = 48

export default function GalleryView({ theme = 'ivp', hero, categories, counts, switchLinks, children }) {
  const t = themes[theme]
  const [cat, setCat] = useState('all')
  const [limits, setLimits] = useState({})
  const [active, setActive] = useState(null)

  const single = cat !== 'all'
  const allowed = useMemo(() => categories.filter((c) => c.photos.length || c.videos.length || c.focusVideos?.length), [categories])

  const chips = [
    { id: 'all', label: 'Tout', count: counts.photos + counts.videos },
    ...allowed.map((c) => ({ id: c.id, label: c.label, count: c.photos.length + c.videos.length + (c.focusVideos?.length || 0) })),
  ]

  const sections = useMemo(
    () => (single ? allowed.filter((c) => c.id === cat).map((c) => ({ ...c, videos: [...c.videos, ...(c.focusVideos || [])] })) : allowed),
    [allowed, cat, single],
  )

  const shownPhotos = useCallback((s) => s.photos.slice(0, limits[s.id] ?? (single ? STEP : PREVIEW)), [limits, single])
  const queue = useMemo(() => sections.flatMap((s) => [...s.videos, ...shownPhotos(s)]), [sections, shownPhotos])
  const indexOf = (item) => queue.findIndex((q) => q.id === item.id)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback((dir) => setActive((i) => (i === null ? i : (i + dir + queue.length) % queue.length)), [queue.length])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  const choose = (id) => {
    setCat(id)
    const bar = document.getElementById('medias')
    if (bar && bar.getBoundingClientRect().top < 0) window.scrollTo({ top: bar.getBoundingClientRect().top + window.scrollY - 70, behavior: 'instant' })
  }
  const more = (s) => setLimits((l) => ({ ...l, [s.id]: (l[s.id] ?? (single ? STEP : PREVIEW)) + STEP }))
  const showAll = (s) => setLimits((l) => ({ ...l, [s.id]: s.photos.length }))
  const current = active !== null ? queue[active] : null

  return (
    <>
      {/* ============ HERO ============ */}
      <section className={`relative isolate overflow-hidden text-white ${t.heroBg}`}>
        <img src={hero.image} alt={hero.alt} className={`hero-zoom absolute inset-0 -z-20 h-full w-full object-cover ${hero.pos}`} />
        <div className={`absolute inset-0 -z-10 ${t.heroVeil}`} />
        <div className={`absolute inset-0 -z-10 ${t.heroSide}`} />

        <div className="container-page flex min-h-[calc(100svh-80px)] flex-col justify-end pb-16 pt-24 sm:pb-20">
          {/* Switch between the two galleries */}
          <nav className="hero-in mb-10 flex w-fit gap-1 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-xl" style={{ '--d': '0ms' }} aria-label="Choisir une galerie">
            {switchLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                aria-current={l.active ? 'page' : undefined}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition ${l.active ? t.switchOn : 'text-white/75 hover:text-white'}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80" style={{ '--d': '60ms' }}>
            <span className={`h-px w-10 ${t.dot}`} /> {hero.eyebrow}
          </p>
          <h1 className="hero-in mt-6 max-w-4xl font-display text-[3.2rem] leading-[0.96] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]" style={{ '--d': '160ms' }}>
            {hero.title} <span className="italic text-white/65">{hero.accent}</span>
          </h1>
          <p className="hero-in mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg" style={{ '--d': '280ms' }}>{hero.text}</p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-3" style={{ '--d': '420ms' }}>
            {[
              [Camera, `${counts.photos} photos`],
              counts.videos ? [Video, `${counts.videos} vidéos`] : null,
              [Folder, `${counts.categories} ${hero.unit}`],
            ]
              .filter(Boolean)
              .map(([Icon, label]) => (
                <span key={label} className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-md">
                  <Icon size={16} className={t.icon} /> {label}
                </span>
              ))}
            <a href="#medias" className="group ml-auto hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:text-white sm:inline-flex">
              Parcourir <ArrowDown size={16} className="transition group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CATEGORY BAR ============ */}
      <div id="medias" className={`sticky top-20 z-30 scroll-mt-20 border-b backdrop-blur-xl ${t.bar}`}>
        <div className="container-page">
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-3.5" role="tablist" aria-label="Catégories de la galerie">
            {chips.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                onClick={() => choose(c.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-semibold transition duration-300 ${cat === c.id ? t.chipOn : t.chipOff}`}
              >
                {c.label} <span className={cat === c.id ? t.countOn : t.countOff}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============ SECTIONS ============ */}
      <section className={`py-16 sm:py-24 ${t.page}`} aria-label="Galerie photos et vidéos">
        <div className="container-page space-y-24">
          {sections.map((s) => {
            const photos = shownPhotos(s)
            const remaining = s.photos.length - photos.length
            return (
              <article key={s.id} id={s.id} className="scroll-mt-40">
                <header className="grid gap-5 lg:grid-cols-[auto_1fr] lg:gap-10">
                  {s.number && <span className={`font-display text-6xl leading-none sm:text-7xl ${t.num}`} aria-hidden="true">{s.number}</span>}
                  <div className="max-w-3xl">
                    <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">{s.title}</h2>
                    {s.text && <p className={`mt-4 text-[15px] leading-7 ${t.text}`}>{s.text}</p>}
                    <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.2em] ${t.meta}`}>
                      {[s.photos.length ? `${s.photos.length} photos` : '', s.videos.length ? `${s.videos.length} vidéo${s.videos.length > 1 ? 's' : ''}` : ''].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                </header>

                {s.videos.length > 0 && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {s.videos.map((v) => (
                      <button key={v.id} type="button" onClick={() => setActive(indexOf(v))} className="group relative overflow-hidden rounded-[1.5rem] bg-neutral-900 text-left" aria-label={`Lire la vidéo : ${v.title}`}>
                        <video src={`${v.src}#t=1`} preload="metadata" muted playsInline className="aspect-video w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ivp-red shadow-2xl transition duration-500 group-hover:scale-110">
                          <Play size={22} fill="currentColor" className="ml-0.5" />
                        </span>
                        <span className="absolute inset-x-5 bottom-4 font-display text-xl text-white">{v.title}</span>
                      </button>
                    ))}
                  </div>
                )}

                {photos.length > 0 && (
                  <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
                    {photos.map((p, i) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActive(indexOf(p))}
                        className={`group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl md:mb-4 ${t.photoBg}`}
                        aria-label={`Agrandir la photo ${i + 1} : ${s.title}`}
                      >
                        <img src={p.src} alt={`${s.title} — photo ${i + 1}`} loading="lazy" className="h-auto w-full transition duration-[900ms] group-hover:scale-105" />
                        <span className={`absolute inset-0 bg-transparent transition duration-500 ${t.photoHover}`} />
                      </button>
                    ))}
                  </div>
                )}

                {remaining > 0 && (
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <button type="button" onClick={() => (single ? more(s) : showAll(s))} className={`inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold transition ${t.btn}`}>
                      {single ? 'Afficher plus de photos' : `Voir les ${s.photos.length} photos`}
                      <span className={`rounded-full px-3 py-1 text-xs ${t.btnBadge}`}>{remaining} de plus</span>
                    </button>
                    {!single && s.id !== 'selection' && (
                      <button type="button" onClick={() => choose(s.id)} className={`rounded-full border px-6 py-3.5 text-sm font-semibold transition ${t.ghost}`}>
                        Ouvrir ce reportage
                      </button>
                    )}
                  </div>
                )}
              </article>
            )
          })}

          {children}
        </div>
      </section>

      {/* ============ OTHER GALLERY ============ */}
      {switchLinks.filter((l) => !l.active).map((l) => (
        <section key={l.to} className={`py-16 ${theme === 'mf' ? 'bg-[#151313] text-white' : 'bg-white'}`}>
          <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${theme === 'mf' ? 'text-white/40' : 'text-neutral-400'}`}>Voir aussi</p>
              <p className="mt-2 font-display text-3xl">{l.label}</p>
            </div>
            <Link to={l.to} className={`group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition ${t.btn}`}>
              Ouvrir la galerie <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      ))}

      <DualCTA />

      {/* ============ LIGHTBOX ============ */}
      {current && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-10" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <button type="button" onClick={close} aria-label="Fermer" className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8">
            <X size={22} />
          </button>

          <div className="flex max-h-full max-w-full items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {current.type === 'video' ? (
              <video key={current.id} src={current.src} controls autoPlay playsInline className="max-h-[82vh] max-w-full rounded-2xl" />
            ) : (
              <img key={current.id} src={current.src} alt={current.title} className="max-h-[82vh] max-w-full rounded-2xl object-contain" />
            )}
          </div>

          {queue.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Précédent" className={`absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition sm:left-8 ${t.ring}`}>
                <ArrowLeft size={20} />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Suivant" className={`absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition sm:right-8 ${t.ring}`}>
                <ArrowRight size={20} />
              </button>
            </>
          )}

          <p className="absolute bottom-5 left-1/2 max-w-[90vw] -translate-x-1/2 truncate rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {current.title} · {active + 1} / {queue.length}
          </p>
        </div>
      )}
    </>
  )
}
