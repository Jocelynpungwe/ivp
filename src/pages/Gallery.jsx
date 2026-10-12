import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Heart, Sparkles, Video } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import Reveal from '../components/Reveal'
import { ivpCounts, mfCounts } from '../data/galleries'
import ivpImage from '../assets/gallery/hero-galerie.jpg'
import mfImage from '../assets/mf/hero.jpg'

const galleries = [
  {
    to: '/galerie/ivp',
    image: ivpImage,
    pos: 'object-[50%_35%]',
    tag: 'IVP · Mission solidaire',
    title: 'Galerie IVP',
    text: 'Nos descentes sur le terrain, cliniques mobiles, hospices et centres : les reportages en photos et en vidéos.',
    counts: ivpCounts,
    unit: 'reportages',
    icon: Heart,
    wrap: 'bg-ivp-red-dark',
    veil: 'from-ivp-red-dark via-ivp-red-dark/70 to-ivp-red-dark/20',
    badge: 'bg-white text-ivp-red',
    btn: 'bg-white text-ivp-red group-hover:bg-white/90',
  },
  {
    to: '/galerie/mf-medical',
    image: mfImage,
    pos: 'object-[50%_25%]',
    tag: 'MF Médical · Soins esthétiques',
    title: 'Galerie MF Médical',
    text: 'Soins du visage, sourire, pieds, corps et bien-être : l’art de sublimer votre beauté naturelle.',
    counts: mfCounts,
    unit: 'catégories',
    icon: Sparkles,
    wrap: 'bg-mf-plum-dark',
    veil: 'from-mf-plum-dark via-mf-plum-dark/70 to-mf-plum/20',
    badge: 'bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-plum-dark',
    btn: 'bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] text-mf-ink group-hover:brightness-105',
  },
]

const pill = 'inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md'

export default function Gallery() {
  useDocumentMeta(
    'Galerie — IVP & MF Médical',
    'Deux galeries : les reportages photo et vidéo de l’IVP, et les soins esthétiques de MF Médical en images.',
  )
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-in flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70" style={{ '--d': '0ms' }}>
            <span className="h-px w-8 bg-white/40" /> Galerie <span className="h-px w-8 bg-white/40" />
          </p>
          <h1 className="hero-in mt-6 font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl" style={{ '--d': '120ms' }}>
            Deux galeries, <span className="italic text-white/60">un même cœur.</span>
          </h1>
          <p className="hero-in mx-auto mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg" style={{ '--d': '240ms' }}>
            Choisissez l’univers que vous souhaitez explorer.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {galleries.map((g, i) => {
            const Icon = g.icon
            return (
              <Reveal key={g.to} delay={i * 120}>
                <Link to={g.to} className={`group relative isolate flex min-h-[560px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 ${g.wrap}`}>
                  <img src={g.image} alt="" loading="lazy" className={`absolute inset-0 -z-20 h-full w-full object-cover ${g.pos} transition duration-[1400ms] group-hover:scale-105`} />
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-t ${g.veil}`} />
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full ${g.badge}`}><Icon size={24} /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">{g.tag}</p>
                    <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">{g.title}</h2>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/80">{g.text}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      <li className={pill}><Camera size={14} /> {g.counts.photos} photos</li>
                      {g.counts.videos > 0 && <li className={pill}><Video size={14} /> {g.counts.videos} vidéos</li>}
                      <li className={pill}>{g.counts.categories} {g.unit}</li>
                    </ul>
                    <span className={`mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition ${g.btn}`}>
                      Ouvrir la galerie <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
