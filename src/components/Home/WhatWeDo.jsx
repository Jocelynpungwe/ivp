import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  HeartPulse,
  GraduationCap,
  HandHeart,
  UsersRound,
} from 'lucide-react'

import whatWeDoImage from '../../assets/heroImage.jpg'

const services = [
  {
    number: '01',
    icon: HeartPulse,
    title: 'Healthcare & Nursing',
    description:
      'Compassionate healthcare support focused on the needs of the people and communities we serve.',
  },
  {
    number: '02',
    icon: HandHeart,
    title: 'Community Outreach',
    description:
      'Bringing care, support and human connection closer to communities that need it most.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Health Education',
    description:
      'Sharing knowledge and practical health information that can help people make informed choices.',
  },
  {
    number: '04',
    icon: UsersRound,
    title: 'Support for Vulnerable People',
    description:
      'Creating pathways to compassionate support for people facing difficult circumstances.',
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
                What We Do
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[4.4rem]">
              Care beyond the clinic.
              <br />
              <span className="text-ivp-red">Support beyond the moment.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-ivp-muted sm:text-lg">
              Our work is rooted in compassion, dignity and a commitment to
              making healthcare and meaningful support more accessible to the
              people and communities we serve.
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
                Our approach
              </p>

              <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                Putting people at the heart of care.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">
                We believe healthcare is about more than treatment. It is about
                listening, understanding and showing up for people.
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
            Explore the work behind IVP and learn more about how our
            organization serves its community.
          </p>

          <Link
            to="/about"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-ivp-red px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-ivp-red-dark"
          >
            Explore our work
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
