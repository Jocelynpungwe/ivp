import { Award } from 'lucide-react'
import Reveal from '../Reveal'
import trophee from '../../assets/team/trophee.jpg'

export default function Recognition() {
  return (
    <section className="relative isolate overflow-hidden bg-ivp-red-dark py-24 text-white sm:py-32" aria-labelledby="reconnaissance">
      {/* Ambient background: the same photo, blurred and tinted */}
      <img src={trophee} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full scale-125 object-cover opacity-30 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ivp-red-dark/95 via-ivp-red-dark/85 to-neutral-950/95" />
      <div className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full border border-white/10" />
      <div className="absolute -right-28 bottom-0 -z-10 h-[420px] w-[420px] rounded-full border border-white/10" />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Framed photo with rotating seal */}
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-t-[12rem] rounded-b-[2rem] border border-white/25" />
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-[2rem] shadow-2xl shadow-black/50">
            <img
              src={trophee}
              alt="Remise d’un trophée d’excellence pour les œuvres de charité envers les plus démunies"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-[50%_32%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 -right-6 flex h-32 w-32 items-center justify-center rounded-full bg-white text-ivp-red shadow-2xl sm:-right-10 sm:h-36 sm:w-36">
            <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 text-ivp-red-dark" aria-hidden="true">
              <defs><path id="reco-seal" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" /></defs>
              <text fontSize="10" textLength="288" lengthAdjust="spacing" fill="currentColor" fontWeight="700">
                <textPath href="#reco-seal">TROPHÉE D’EXCELLENCE ·</textPath>
              </text>
            </svg>
            <Award size={34} strokeWidth={1.4} />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <p className="section-label !text-white">Reconnaissance</p>
          <h2 id="reconnaissance" className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Une distinction pour <span className="italic text-white/70">celles et ceux qui soignent.</span>
          </h2>
          <p className="mt-7 max-w-xl font-display text-2xl italic leading-snug text-white/90 sm:text-3xl">
            Trophée d’excellence pour les œuvres de charité envers les plus démunies.
          </p>

          <figure className="mt-10 max-w-xl border-l-2 border-white/60 pl-6">
            <blockquote className="text-base leading-8 text-white/75">
              « Ce prestigieux trophée motive mon équipe et moi à donner encore le meilleur de nous pour le bien-être des plus petits. »
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Marie-France Bomengo Mambia · Présidente de l’IVP
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
