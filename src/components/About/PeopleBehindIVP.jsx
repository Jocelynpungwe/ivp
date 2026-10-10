import { ArrowUpRight, HandHeart, Stethoscope, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import nursesImage from '../../assets/img21.jpg'
import medicationImage from '../../assets/medication.jpg'
import groupImage from '../../assets/community.jpg'

const people = [
  {
    icon: Stethoscope,
    title: 'Infirmières',
    description: 'Des professionnelles de santé qui apportent savoir-faire, compassion et soins concrets au cœur de la communauté.',
  },
  {
    icon: HandHeart,
    title: 'Bénévoles',
    description: 'Des personnes qui donnent leur temps, leur énergie et leurs compétences pour soutenir l’action de l’IVP.',
  },
  {
    icon: UsersRound,
    title: 'Communauté',
    description: 'Les personnes, les familles et les communautés dont la participation rend possible un soin qui compte.',
  },
]

export default function PeopleBehindIVP() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="personnes">
      <div className="container-page">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="section-label justify-center text-ivp-red">Les personnes derrière l’IVP</p>
          <h2 id="personnes" className="mt-7 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ivp-black sm:text-6xl">
            Les personnes <span className="italic text-ivp-red">derrière le soin.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            Derrière chaque moment de soin, il y a une personne prête à être
            présente, à écouter, à servir et à faire la différence. L’action de
            l’IVP est portée par des personnes convaincues que chaque vie mérite
            compassion et dignité.
          </p>
        </div>

        {/* Mosaic */}
        <div className="reveal mx-auto mt-14 grid max-w-6xl gap-4 md:h-[440px] md:grid-cols-12 md:grid-rows-2">
          <figure className="group relative overflow-hidden rounded-[1.5rem] md:col-span-5 md:row-span-2 md:min-h-0">
            <img src={nursesImage} alt="Une infirmière de l’IVP entourée d’enfants" loading="lazy" className="h-[280px] w-full object-cover object-[12%_50%] transition duration-[1200ms] group-hover:scale-105 md:h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-7 bottom-7 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">Le soin en action</p>
              <p className="mt-2 font-display text-xl leading-tight sm:text-2xl">Être présentes pour celles et ceux qui ont besoin de nous.</p>
            </figcaption>
          </figure>

          <figure className="group relative overflow-hidden rounded-[1.5rem] md:col-span-7 md:min-h-0">
            <img src={groupImage} alt="L’équipe de l’IVP réunie avec la communauté" loading="lazy" className="h-[200px] w-full object-cover transition duration-[1200ms] group-hover:scale-105 md:h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-7 font-display text-xl text-white sm:text-2xl">Une équipe, une communauté.</figcaption>
          </figure>

          <figure className="group relative overflow-hidden rounded-[1.5rem] md:col-span-7 md:min-h-0">
            <img src={medicationImage} alt="Distribution de médicaments par l’IVP" loading="lazy" className="h-[200px] w-full object-cover transition duration-[1200ms] group-hover:scale-105 md:h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-7 font-display text-xl text-white sm:text-2xl">Un soin qui voit la personne dans sa globalité.</figcaption>
          </figure>
        </div>

        {/* Roles */}
        <div className="reveal mt-6 grid gap-4 md:grid-cols-3">
          {people.map(({ icon: Icon, title, description }, i) => (
            <article key={title} className="group rounded-[1.75rem] border border-gray-200 p-8 transition duration-500 hover:-translate-y-1.5 hover:border-ivp-red hover:bg-ivp-red hover:text-white hover:shadow-2xl hover:shadow-ivp-red/20">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ivp-red-soft text-ivp-red transition duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <span className="font-display text-2xl text-ivp-red/40 transition group-hover:text-white/50">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-display text-3xl tracking-[-0.02em]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500 transition duration-500 group-hover:text-white/80">{description}</p>
            </article>
          ))}
        </div>

        {/* Callout */}
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#151313] px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">Ensemble</p>
            <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              Le changement commence quand on choisit de prendre soin.
            </h3>
          </div>
          <Link to="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-ivp-red px-7 py-4 text-sm font-bold transition duration-300 hover:bg-ivp-red-dark">
            S’impliquer
            <ArrowUpRight size={17} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
