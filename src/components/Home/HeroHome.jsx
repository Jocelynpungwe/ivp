import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react'
import heroImage from '../../assets/heroImage.jpg'

export default function HeroHome() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <img
        src={heroImage}
        alt="Infirmières IVP prodiguant des soins dans la communauté"
        className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/90 via-neutral-950/55 to-neutral-950/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/85 via-transparent to-neutral-950/30" />

      <div className="container-page flex min-h-[calc(100svh-80px)] flex-col justify-between gap-16 pb-10 pt-20 sm:pt-28">
        {/* Headline */}
        <div className="max-w-3xl">
          <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80" style={{ '--d': '0ms' }}>
            <span className="h-px w-10 bg-ivp-red" />
            Infirmières des Voies Publiques · MF Médical
          </p>

          <h1 className="hero-in mt-7 font-display text-[2.9rem] leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]" style={{ '--d': '120ms' }}>
            Prendre soin des gens.
            <span className="block italic text-white/65">Changer des vies.</span>
          </h1>

          <p className="hero-in mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg" style={{ '--d': '260ms' }}>
            Une même vocation infirmière, deux engagements : des soins solidaires
            pour les enfants en situation de rue, et des soins esthétiques &amp;
            de bien-être pour vous.
          </p>
        </div>

        {/* Two paths */}
        <div className="hero-in grid gap-4 md:grid-cols-2" style={{ '--d': '420ms' }}>
          <Link
            to="/don"
            className="group flex items-center gap-5 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition duration-500 hover:border-white/40 hover:bg-white/[0.16] sm:p-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ivp-red text-white">
              <Heart size={22} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span className="flex-1">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">Mission solidaire · IVP</span>
              <span className="mt-1 block font-display text-xl leading-tight sm:text-2xl">Soutenir les soins aux enfants</span>
            </span>
            <ArrowUpRight className="shrink-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
          </Link>

          <Link
            to="/soins"
            className="group flex items-center gap-5 rounded-3xl border border-white/20 bg-mf-plum/70 p-5 backdrop-blur-xl transition duration-500 hover:border-white/40 hover:bg-mf-plum/90 sm:p-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-mf-plum">
              <Sparkles size={22} />
            </span>
            <span className="flex-1">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">Soins esthétiques · MF Médical</span>
              <span className="mt-1 block font-display text-xl leading-tight sm:text-2xl">Sublimez votre beauté naturelle</span>
            </span>
            <ArrowUpRight className="shrink-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
          </Link>
        </div>
      </div>
    </section>
  )
}
