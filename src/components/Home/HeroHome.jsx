import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react'
import ivpImage from '../../assets/heroImage.jpg'
import mfImage from '../../assets/mf/hero.jpg'

// One composition, two worlds: IVP (solidarity nursing) and MF Médical (aesthetic care) meet on a diagonal seam.
export default function HeroHome() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* ===== Split background ===== */}
      <div className="absolute left-0 top-0 -z-20 h-[58%] w-full lg:h-full lg:w-[58%]">
        <div className="hero-split-a relative h-full w-full overflow-hidden">
          <img
            src={ivpImage}
            alt="Une infirmière de l’IVP prenant soin d’une personne de la communauté"
            className="hero-zoom absolute inset-0 h-full w-full object-cover object-[40%_40%]"
          />
          <div className="absolute inset-0 bg-ivp-red-dark/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
        </div>
      </div>

      <div className="hero-seam absolute bottom-0 right-0 -z-20 h-[58%] w-full lg:h-full lg:w-[58%]">
        <div className="hero-split-b relative h-full w-full overflow-hidden">
          <img
            src={mfImage}
            alt="Une femme au teint lumineux : les soins esthétiques MF Médical"
            className="hero-zoom absolute inset-0 h-full w-full object-cover object-[50%_28%]"
          />
          <div className="absolute inset-0 bg-mf-plum-dark/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        </div>
      </div>

      {/* Readability veil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-neutral-950/50" />

      {/* ===== Content ===== */}
      <div className="container-page flex min-h-[calc(100svh-80px)] flex-col justify-between gap-12 pb-10 pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="hero-in flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85" style={{ '--d': '0ms' }}>
            <span>IVP asbl</span>
            <span className="h-1 w-1 rounded-full bg-mf-gold-soft" />
            <span>MF Médical</span>
          </p>

          <h1 className="hero-in mt-7 font-display text-[2.6rem] leading-[1] tracking-[-0.035em] [text-shadow:0_2px_30px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[5.25rem]" style={{ '--d': '120ms' }}>
            Deux engagements,
            <span className="block italic text-white/75">une même vocation&nbsp;:<br />prendre soin.</span>
          </h1>

          <p className="hero-in mx-auto mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg" style={{ '--d': '260ms' }}>
            L’IVP soigne gratuitement les enfants de la rue et les plus démunis. MF Médical
            prend soin de votre beauté et de votre bien-être. Deux univers, un même cœur d’infirmière.
          </p>
        </div>

        {/* Two doors */}
        <div className="hero-in relative grid gap-4 md:grid-cols-2" style={{ '--d': '420ms' }}>
          <Link
            to="/a-propos"
            className="group flex items-center gap-5 rounded-3xl border border-white/25 bg-ivp-red-dark/70 p-5 backdrop-blur-xl transition duration-500 hover:border-white/50 hover:bg-ivp-red-dark/90 sm:p-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-ivp-red">
              <Heart size={22} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span className="flex-1">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">IVP · Soins gratuits</span>
              <span className="mt-1 block font-display text-xl leading-tight sm:text-2xl">Découvrir l’IVP et soutenir nos soins</span>
            </span>
            <ArrowUpRight className="shrink-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
          </Link>

          <span className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-neutral-950/40 bg-white font-display text-2xl italic text-ivp-red shadow-xl md:flex" aria-hidden="true">&amp;</span>

          <Link
            to="/soins"
            className="group flex items-center gap-5 rounded-3xl border border-white/25 bg-mf-plum-dark/70 p-5 backdrop-blur-xl transition duration-500 hover:border-mf-gold-soft/70 hover:bg-mf-plum-dark/90 sm:p-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-plum-dark">
              <Sparkles size={22} />
            </span>
            <span className="flex-1">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-mf-gold-soft">MF Médical · Service payant</span>
              <span className="mt-1 block font-display text-xl leading-tight sm:text-2xl">Sublimez votre beauté naturelle</span>
            </span>
            <ArrowUpRight className="shrink-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
          </Link>
        </div>
      </div>
    </section>
  )
}
