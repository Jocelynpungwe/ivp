import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, Camera, Play, Video, X } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import DualCTA from '../components/Home/DualCTA'
import heroImage from '../assets/gallery/hero-galerie.jpg'

// Every web-sized photo in src/assets/gallery and every video in src/assets is picked up automatically.
const photoModules = import.meta.glob('../assets/gallery/*.jpg', { eager: true, query: '?url', import: 'default' })
const videoModules = import.meta.glob('../assets/*.mp4', { eager: true, query: '?url', import: 'default' })

const videoTitles = {
  'about.mp4': 'L’IVP en action',
  'vid1.mp4': 'Sur le terrain · 1',
  'vid2.mp4': 'Sur le terrain · 2',
}

// Template leftover (a screen recording of an unrelated website): not shown publicly.
const hiddenVideos = ['placeholder-video.mp4']

const fileName = (path) => path.split('/').pop()
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true })

const photos = Object.entries(photoModules)
  .filter(([path]) => !fileName(path).startsWith('hero-'))
  .sort(([a], [b]) => natural(a, b))
  .map(([path, src], i) => ({ type: 'photo', id: `p${i}`, src, title: `Photo ${i + 1}` }))

const videos = Object.entries(videoModules)
  .filter(([path]) => !hiddenVideos.includes(fileName(path)))
  .sort(([a], [b]) => natural(a, b))
  .map(([path, src], i) => ({ type: 'video', id: `v${i}`, src, title: videoTitles[fileName(path)] || `Vidéo ${i + 1}` }))

const filters = [
  ['all', 'Tout', photos.length + videos.length],
  ['photo', 'Photos', photos.length],
  ['video', 'Vidéos', videos.length],
]

export default function Gallery() {
  useDocumentMeta(
    'Galerie — IVP, le soin en images et en vidéos',
    'Photos et vidéos de l’IVP — Infirmières des Voies Publiques : les soins, les équipes et les communautés en images.',
  )
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const visibleVideos = filter === 'photo' ? [] : videos
  const visiblePhotos = filter === 'video' ? [] : photos
  const queue = useMemo(() => [...visibleVideos, ...visiblePhotos], [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + queue.length) % queue.length)),
    [queue.length],
  )

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

  const current = active !== null ? queue[active] : null
  const indexOf = (item) => queue.findIndex((q) => q.id === item.id)

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img src={heroImage} alt="Une infirmière de l’IVP entourée d’enfants" className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover object-[50%_35%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-neutral-950/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/70 to-transparent" />

        <div className="container-page flex min-h-[calc(100svh-80px)] flex-col justify-end pb-16 pt-24 sm:pb-20">
          <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80" style={{ '--d': '0ms' }}>
            <span className="h-px w-10 bg-ivp-red" /> Galerie
          </p>
          <h1 className="hero-in mt-6 max-w-4xl font-display text-[3.2rem] leading-[0.96] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]" style={{ '--d': '140ms' }}>
            Le soin, <span className="italic text-white/65">en images.</span>
          </h1>
          <p className="hero-in mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg" style={{ '--d': '280ms' }}>
            Les équipes, les gestes de soin et les communautés que l’IVP accompagne, racontés en photos et en vidéos.
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-4" style={{ '--d': '420ms' }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-md">
              <Camera size={16} className="text-ivp-red" /> {photos.length} photos
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-md">
              <Video size={16} className="text-ivp-red" /> {videos.length} vidéos
            </span>
            <a href="#medias" className="group ml-auto hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:text-white sm:inline-flex">
              Parcourir <ArrowDown size={16} className="transition group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ FILTER BAR ============ */}
      <div id="medias" className="sticky top-20 z-30 scroll-mt-20 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="container-page flex items-center justify-between gap-4 py-3.5">
          <div className="flex gap-2" role="tablist" aria-label="Filtrer la galerie">
            {filters.map(([key, label, count]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={filter === key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  filter === key ? 'bg-ivp-red text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {label} <span className={filter === key ? 'text-white/70' : 'text-neutral-400'}>{count}</span>
              </button>
            ))}
          </div>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:block">IVP · Infirmières des Voies Publiques</p>
        </div>
      </div>

      <section className="bg-[#f7f5f2] py-16 sm:py-24" aria-label="Galerie photos et vidéos">
        <div className="container-page space-y-20">
          {/* ===== Videos ===== */}
          {visibleVideos.length > 0 && (
            <div>
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <p className="section-label">Vidéos</p>
                  <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">Le terrain en mouvement.</h2>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {visibleVideos.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActive(indexOf(v))}
                    className={`group relative overflow-hidden rounded-[1.75rem] bg-neutral-900 text-left ${i === 0 && visibleVideos.length % 2 === 1 ? 'sm:col-span-2' : ''}`}
                    aria-label={`Lire la vidéo : ${v.title}`}
                  >
                    <video
                      src={`${v.src}#t=1`}
                      preload="metadata"
                      muted
                      playsInline
                      className={`w-full object-cover transition duration-[1200ms] group-hover:scale-105 ${i === 0 && visibleVideos.length % 2 === 1 ? 'aspect-[21/9]' : 'aspect-video'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ivp-red shadow-2xl transition duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
                      <Play size={26} fill="currentColor" className="ml-1" />
                    </span>
                    <span className="absolute inset-x-6 bottom-5 font-display text-2xl text-white sm:text-3xl">{v.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ===== Photos ===== */}
          {visiblePhotos.length > 0 && (
            <div>
              <div className="mb-8">
                <p className="section-label">Photos</p>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                  Des visages, <span className="italic text-ivp-red">des gestes, des histoires.</span>
                </h2>
              </div>
              <div className="columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
                {visiblePhotos.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(indexOf(p))}
                    className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-neutral-200 md:mb-4"
                    aria-label={`Agrandir : ${p.title}`}
                  >
                    <img src={p.src} alt={`${p.title} — action de l’IVP`} loading="lazy" className="h-auto w-full transition duration-[900ms] group-hover:scale-105" />
                    <span className="absolute inset-0 bg-ivp-red/0 transition duration-500 group-hover:bg-ivp-red/20" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

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
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Précédent" className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-ivp-red sm:left-8">
                <ArrowLeft size={20} />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Suivant" className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-ivp-red sm:right-8">
                <ArrowRight size={20} />
              </button>
            </>
          )}

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {current.title} · {active + 1} / {queue.length}
          </p>
        </div>
      )}
    </>
  )
}
