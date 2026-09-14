import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  HeartPulse,
  GraduationCap,
  HandHeart,
  UsersRound,
} from 'lucide-react'

import whatWeDoImage from '../../assets/img15.jpeg'

const services = [
  {
    number: '01',
    icon: HeartPulse,
    title: 'Soins de santé et soins infirmiers',
    description:
      'Des soins de santé empreints de compassion, axés sur les besoins des personnes et des communautés que nous servons.',
  },
  {
    number: '02',
    icon: HandHeart,
    title: 'Action communautaire',
    description:
      'Rapprocher les soins, le soutien et la solidarité des communautés qui en ont le plus besoin.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Éducation à la santé',
    description:
      'Partager des connaissances et des informations pratiques en matière de santé afin d’aider chacun à faire des choix éclairés.',
  },
  {
    number: '04',
    icon: UsersRound,
    title: 'Soutien aux personnes vulnérables',
    description:
      'Mettre en place des moyens d’accès à un accompagnement bienveillant pour les personnes confrontées à des situations difficiles.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f8] py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ivp-red" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivp-red">
                Ce que nous faisons
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[4.4rem]">
              Des soins au-delà de la clinique.
              <br />
              <span className="text-ivp-red">
                Un soutien au-delà de l’instant.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-ivp-muted sm:text-lg">
              Notre action repose sur la compassion, la dignité et la volonté de
              rendre les soins de santé et un soutien significatif plus
              accessibles aux personnes et aux communautés que nous servons.
            </p>
          </div>
        </div>

        {/* =====================================================
            FEATURED SERVICE + IMAGE
        ====================================================== */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Image */}
          <div className="group relative min-h-[430px] overflow-hidden rounded-[2rem] bg-neutral-200 lg:min-h-[560px]">
            <img
              src={whatWeDoImage}
              alt="IVP healthcare and community work"
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Image content */}
            <div className="absolute bottom-0 left-0 max-w-xl p-7 text-white sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                <HeartPulse size={21} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Notre approche
              </p>

              <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                L’humain au cœur des soins.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">
                Nous croyons que les soins de santé vont au-delà du traitement.
                Il s’agit d’écouter, de comprendre et d’être présents aux côtés
                des personnes.
              </p>
            </div>
          </div>

          {/* Service list */}
          <div className="grid gap-3">
            {services.slice(0, 2).map((service) => {
              const Icon = service.icon

              return (
                <ServiceCard
                  key={service.number}
                  service={service}
                  Icon={Icon}
                />
              )
            })}
          </div>
        </div>

        {/* =====================================================
            LOWER SERVICES
        ====================================================== */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {services.slice(2).map((service) => {
            const Icon = service.icon

            return (
              <ServiceCard key={service.number} service={service} Icon={Icon} />
            )
          })}
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-ivp-muted">
            Découvrez le travail de l’IVP et apprenez-en davantage sur la façon
            dont notre organisation accompagne sa communauté.
          </p>

          <Link
            to="/about"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-ivp-red px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-ivp-red-dark"
          >
            Découvrez notre action
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white group-hover:text-ivp-red">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* =============================================================
   SERVICE CARD
============================================================= */

function ServiceCard({ service, Icon }) {
  return (
    <div className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[1.7rem] border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ivp-red/20 hover:shadow-xl hover:shadow-neutral-900/5 sm:p-8">
      {/* Number */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.15em] text-neutral-300">
          {service.number}
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-ivp-red transition-all duration-300 group-hover:border-ivp-red group-hover:bg-ivp-red group-hover:text-white">
          <Icon size={18} strokeWidth={1.7} />
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="max-w-xs font-display text-2xl tracking-[-0.025em] text-neutral-900 sm:text-3xl">
          {service.title}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-ivp-muted">
          {service.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:border-ivp-red group-hover:bg-ivp-red group-hover:text-white">
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </div>
  )
}
