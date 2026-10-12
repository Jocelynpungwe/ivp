import { Link } from 'react-router-dom'
import { ArrowUpRight, HeartHandshake, HandHeart, Stethoscope } from 'lucide-react'
import aboutHero from '../../assets/imghero.jpeg'
import aboutHeroMobile from '../../assets/gallery/img11.jpg'

const pillars = [
  [Stethoscope, 'Soigner', 'Des soins infirmiers de proximité'],
  [HandHeart, 'Écouter', 'Chaque histoire compte'],
  [HeartHandshake, 'Accompagner', 'Un soutien qui dure'],
]

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Portrait photo on phones, landscape photo from tablet up */}
      <picture>
        <source media="(max-width: 767px)" srcSet={aboutHeroMobile} />
        <img
          src={aboutHero}
          alt="Une infirmière de l’IVP prodiguant des soins à la communauté"
          className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover object-[50%_20%] md:object-center"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/55 to-transparent md:bg-gradient-to-r md:from-neutral-950/90 md:via-neutral-950/55 md:to-neutral-950/10" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30 md:block" />

      <div className="container-page flex min-h-[calc(100svh-80px)] flex-col justify-end gap-8 pb-8 pt-16 md:justify-between md:gap-16 md:pb-10 md:pt-24">
        <div className="max-w-4xl">
          <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80" style={{ '--d': '0ms' }}>
            <Link to="/" className="transition hover:text-white">Accueil</Link>
            <span className="h-px w-6 bg-ivp-red" />
            À propos de l’IVP
          </p>

          <h1 className="hero-in mt-5 font-display text-[2.7rem] leading-[0.98] tracking-[-0.035em] sm:text-6xl md:mt-8 lg:text-[5.75rem]" style={{ '--d': '140ms' }}>
            Prendre soin,
            <span className="block italic text-white/65">c’est bien plus que soigner.</span>
          </h1>

          <p className="hero-in mt-8 hidden max-w-xl text-base leading-8 text-white/80 md:block md:text-lg" style={{ '--d': '280ms' }}>
            Découvrez les personnes, la mission et l’engagement qui font
            l’IVP — Infirmières des Voies Publiques.
          </p>

          <div className="hero-in mt-6 flex flex-wrap gap-3 md:mt-10 md:gap-4" style={{ '--d': '400ms' }}>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-ivp-red px-5 py-3.5 text-[13px] font-bold transition duration-300 hover:bg-ivp-red-dark md:gap-3 md:px-7 md:py-4 md:text-sm">
              Nous contacter
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/galerie/ivp" className="inline-flex items-center rounded-full border border-white/35 bg-white/5 px-5 py-3.5 text-[13px] font-bold backdrop-blur-md transition duration-300 hover:border-white hover:bg-white/10 md:px-7 md:py-4 md:text-sm">
              Voir notre travail
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <ul className="hero-in grid grid-cols-3 gap-2 md:gap-3" style={{ '--d': '560ms' }}>
          {pillars.map(([Icon, title, text]) => (
            <li key={title} className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center backdrop-blur-xl md:flex-row md:gap-4 md:p-4 md:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ivp-red md:h-11 md:w-11">
                <Icon size={18} />
              </span>
              <span>
                <span className="block font-display text-base leading-none md:text-xl">{title}</span>
                <span className="mt-1 hidden text-xs text-white/65 md:block">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
