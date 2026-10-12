import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal'
import { mfCategories } from '../../data/galleries'

// Two rows of MF Médical photos drifting in opposite directions (stops for visitors who prefer reduced motion).
const photos = mfCategories.flatMap((c) => c.photos)

function Row({ items, reverse = false }) {
  const loop = [...items, ...items]
  return (
    <div className={`marquee overflow-hidden ${reverse ? 'marquee-reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track gap-4">
        {loop.map((p, i) => (
          <img key={`${p.id}-${i}`} src={p.src} alt="" loading="lazy" className="h-56 w-auto shrink-0 rounded-2xl object-cover sm:h-72" />
        ))}
      </div>
    </div>
  )
}

export default function MFPhotoStrip() {
  const half = Math.ceil(photos.length / 2)
  return (
    <section className="overflow-hidden bg-mf-ink py-20 text-white sm:py-28" aria-labelledby="mf-photos">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">En images</p>
          <h3 id="mf-photos" className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-5xl">
            L’art de sublimer <span className="gold-text italic">votre beauté naturelle.</span>
          </h3>
        </Reveal>
      </div>

      <div className="mt-12 space-y-4">
        <Row items={photos.slice(0, half)} />
        <Row items={photos.slice(half)} reverse />
      </div>

      <Reveal className="container-page mt-12 text-center">
        <Link to="/galerie/mf-medical" className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold transition hover:border-mf-gold-soft hover:text-mf-gold-soft">
          Voir toute la galerie MF Médical <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </section>
  )
}
