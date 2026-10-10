import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react'
import Reveal from '../Reveal'
import BookingButton from '../BookingButton'

export default function DualCTA() {
  return (
    <section aria-label="Passer à l’action">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative isolate overflow-hidden bg-ivp-red px-6 py-20 text-white sm:px-12 sm:py-28 lg:px-16">
          <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-white/15" />
          <div className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full border border-white/10" />
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ivp-red"><Heart size={20} fill="currentColor" /></span>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">IVP · Faites la différence</p>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
            Prendre soin commence <span className="italic text-white/75">avec vous.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-white/75">
            Soutenez l’IVP et aidez-nous à continuer de rapprocher les soins des personnes qui en ont besoin.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/don" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ivp-red transition hover:bg-white/90">
              Faire un don <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white/10">
              S’impliquer
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative isolate overflow-hidden bg-mf-ink px-6 py-20 text-white sm:px-12 sm:py-28 lg:px-16">
          <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-mf-plum/60 blur-[100px]" />
          <div className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full border border-mf-gold/20" />
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-ink"><Sparkles size={20} /></span>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-mf-gold-soft">MF Médical · Bruxelles et environs</p>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
            Prenez rendez-vous <span className="gold-text italic">dès maintenant.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-white/65">Votre beauté, notre expertise.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookingButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] px-7 py-4 text-sm font-bold text-mf-ink transition hover:brightness-105" />
            <Link to="/soins" className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold transition hover:border-mf-gold-soft hover:text-mf-gold-soft">
              Voir les soins
            </Link>
          </div>
        </Reveal>
      </div>
      <p className="bg-[#151313] py-5 text-center text-xs uppercase tracking-[0.25em] text-white/40">Santé · Écoute · Bienveillance</p>
    </section>
  )
}
