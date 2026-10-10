import { Link } from 'react-router-dom'
import { ArrowUpRight, HandHeart, Sparkles } from 'lucide-react'
import Reveal from '../Reveal'
import BookingButton from '../BookingButton'
import { services } from '../../data/mf'
import ivpImage from '../../assets/img16.jpeg'
import mfImage from '../../assets/mf/hero.jpg'

const ivpTags = ['Soins communautaires', 'Soutien compassionnel', 'Soins infirmiers en action']

export default function TwoWays() {
  return (
    <section className="relative overflow-hidden bg-mf-cream py-24 sm:py-32" aria-labelledby="two-ways-title">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-ivp-red/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-mf-plum/10 blur-[110px]" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Une même vocation</p>
          <h2 id="two-ways-title" className="mt-6 font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
            Deux façons de <span className="italic text-ivp-red">prendre soin</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-ivp-muted">
            Le soin infirmier au service des plus vulnérables avec l’IVP, et au
            service de votre bien-être avec MF Médical.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative mt-16">
          <div className="flex flex-col gap-5 lg:h-[640px] lg:flex-row lg:gap-6">
            {/* ===== IVP ===== */}
            <article className="group relative isolate flex min-h-[560px] flex-col justify-between gap-12 overflow-hidden rounded-[2rem] bg-ivp-red-dark p-7 text-white transition-[flex-grow] duration-700 ease-out sm:p-10 lg:min-h-0 lg:flex-1 lg:hover:flex-[1.25]">
              <img src={ivpImage} alt="Une infirmière de l’IVP" loading="lazy" className="absolute inset-0 -z-20 h-full w-full origin-top scale-[1.22] object-cover object-[50%_0%] transition duration-[1400ms] group-hover:scale-[1.28]" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ivp-red-dark via-ivp-red-dark/70 to-ivp-red-dark/25" />

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 py-1.5 pl-1.5 pr-4 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ivp-red"><HandHeart size={16} /></span>
                  Mission solidaire
                </span>
                <span className="font-display text-5xl text-white/20">01</span>
              </div>

              <div>
                <h3 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                  IVP
                  <span className="mt-1 block text-2xl italic text-white/75 sm:text-3xl">Infirmières des Voies Publiques</span>
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
                  Des soins infirmiers et un soutien compatissant pour les enfants en situation de rue.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ivpTags.map((t) => (
                    <li key={t} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md">{t}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/don" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ivp-red transition hover:bg-white/90">
                    Faire un don <ArrowUpRight size={16} />
                  </Link>
                  <Link to="/a-propos" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10">
                    Notre mission
                  </Link>
                </div>
              </div>
            </article>

            {/* Centre seal */}
            <div className="relative z-10 mx-auto -my-[2.4rem] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-[5px] border-mf-cream bg-white font-display text-3xl italic text-ivp-red shadow-xl lg:absolute lg:left-1/2 lg:top-1/2 lg:m-0 lg:h-20 lg:w-20 lg:-translate-x-1/2 lg:-translate-y-1/2" aria-hidden="true">
              &amp;
            </div>

            {/* ===== MF Médical ===== */}
            <article className="group relative isolate flex min-h-[560px] flex-col justify-between gap-12 overflow-hidden rounded-[2rem] bg-mf-plum-dark p-7 text-white transition-[flex-grow] duration-700 ease-out sm:p-10 lg:min-h-0 lg:flex-1 lg:hover:flex-[1.25]">
              <img src={mfImage} alt="Soins esthétiques MF Médical" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_25%] transition duration-[1400ms] group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-mf-plum-dark via-mf-plum-dark/70 to-mf-plum/20" />

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 py-1.5 pl-1.5 pr-4 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-plum-dark"><Sparkles size={16} /></span>
                  Soins esthétiques
                </span>
                <span className="font-display text-5xl text-white/20">02</span>
              </div>

              <div>
                <h3 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                  MF <span className="gold-text italic">Médical</span>
                  <span className="mt-1 block text-2xl italic text-white/75 sm:text-3xl">Soins esthétiques &amp; bien-être</span>
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
                  Infirmière esthéticienne diplômée en Belgique. Professionnalisme, sécurité, douceur.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <li key={s.id} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md">{s.title}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BookingButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] px-6 py-3.5 text-sm font-bold text-mf-plum-dark transition hover:brightness-105" />
                  <Link to="/soins" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10">
                    Découvrir les soins
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.25em] text-ivp-muted">
          <span>Soin</span><span className="text-ivp-red">•</span>
          <span>Écoute</span><span className="text-mf-gold">•</span>
          <span>Bienveillance</span>
        </Reveal>
      </div>
    </section>
  )
}
