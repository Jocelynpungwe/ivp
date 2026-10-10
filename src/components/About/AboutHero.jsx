import { Link } from 'react-router-dom'
import { ArrowUpRight, HeartHandshake, HandHeart, Stethoscope } from 'lucide-react'
import aboutHero from '../../assets/imghero.jpeg'

const pillars = [
  [Stethoscope, 'Soigner', 'Des soins infirmiers de proximité'],
  [HandHeart, 'Écouter', 'Chaque histoire compte'],
  [HeartHandshake, 'Accompagner', 'Un soutien qui dure'],
]

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <img
        src={aboutHero}
        alt="Une infirmière de l’IVP prodiguant des soins à la communauté"
        className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/90 via-neutral-950/55 to-neutral-950/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30" />

      <div className="container-page flex min-h-[calc(100svh-80px)] flex-col justify-between gap-16 pb-10 pt-16 sm:pt-24">
        <div className="max-w-4xl">
          <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80" style={{ '--d': '0ms' }}>
            <Link to="/" className="transition hover:text-white">Accueil</Link>
            <span className="h-px w-6 bg-ivp-red" />
            À propos de l’IVP
          </p>

          <h1 className="hero-in mt-8 font-display text-[2.9rem] leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[5.75rem]" style={{ '--d': '140ms' }}>
            Prendre soin,
            <span className="block italic text-white/65">c’est bien plus que soigner.</span>
          </h1>

          <p className="hero-in mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg" style={{ '--d': '280ms' }}>
            Découvrez les personnes, la mission et l’engagement qui font
            l’IVP — Infirmières des Voies Publiques.
          </p>

          <div className="hero-in mt-10 flex flex-wrap gap-4" style={{ '--d': '400ms' }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-ivp-red px-7 py-4 text-sm font-bold transition duration-300 hover:bg-ivp-red-dark">
              Nous contacter
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/galerie" className="inline-flex items-center rounded-full border border-white/35 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur-md transition duration-300 hover:border-white hover:bg-white/10">
              Voir notre travail
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <ul className="hero-in grid gap-3 sm:grid-cols-3" style={{ '--d': '560ms' }}>
          {pillars.map(([Icon, title, text]) => (
            <li key={title} className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ivp-red">
                <Icon size={19} />
              </span>
              <span>
                <span className="block font-display text-xl leading-none">{title}</span>
                <span className="mt-1 block text-xs text-white/65">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
