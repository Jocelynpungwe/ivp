import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import childrenImage from '../../assets/children.jpg'
import eldersImage from '../../assets/elders.jpg'
import communityImage from '../../assets/community.jpg'
import feature from '../../assets/img1.png'

import medicationImage from '../../assets/medication.jpg'

const people = [
  {
    number: '01',
    title: 'Enfants et jeunes',
    description:
      'Accompagner les enfants avec compassion et attention lorsqu’ils en ont le plus besoin.',
    image: childrenImage,
  },
  {
    number: '02',
    title: 'Personnes âgées',
    description:
      'Aider les personnes âgées à accéder aux soins tout en préservant leur dignité, leur respect et leur lien humain.',
    image: eldersImage,
  },
  {
    number: '03',
    title: 'Communautés et familles',
    description:
      'Rapprocher les soins de santé des communautés et des personnes qui contribuent à leur force.',
    image: communityImage,
  },
  {
    number: '04',
    title: 'Personnes ayant besoin de soins',
    description:
      'Offrir un soutien médical empreint de compassion aux personnes qui peuvent rencontrer des obstacles dans l’accès aux soins de santé.',
    image: medicationImage,
  },
]

export default function WhoWeHelp() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ivp-red" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivp-red">
                Qui aidons-nous
              </p>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-ivp-muted">
              Notre action commence avec les personnes. Chaque visite, chaque
              conversation et chaque geste de soin sont guidés par le respect de
              la dignité humaine.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.6rem]">
              Les soins doivent être accessibles
              <br />
              <span className="text-ivp-red">à tous.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-ivp-muted sm:text-lg">
              Nous concentrons nos efforts sur les personnes et les communautés
              qui ont besoin de soins de santé empreints de compassion, de
              soutien et d’un coup de main.
            </p>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <div className="group relative mt-16 overflow-hidden rounded-[2rem] bg-neutral-200">
          <div className="aspect-[16/8] min-h-[430px]">
            <img
              src={feature}
              alt="Équipe de santé IVP avec des membres de la communauté"
              className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.025]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-7 text-white sm:p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              L’humain d’abord
            </span>

            <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Les soins de santé vont au-delà du traitement.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Il s’agit d’être présent, d’écouter attentivement et de traiter
              chaque personne avec dignité.
            </p>
          </div>
        </div>

        {/* PEOPLE GRID */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {people
            .filter((person) => person.number !== '03')
            .map((person) => (
              <PersonCard key={person.number} person={person} />
            ))}
        </div>

        {/* BOTTOM FEATURE */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="flex min-h-[420px] flex-col justify-between rounded-[2rem] bg-ivp-red p-8 text-white sm:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                Notre engagement
              </span>

              <div className="mt-10 h-px w-12 bg-white/30" />
            </div>

            <div>
              <h3 className="max-w-sm font-display text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                Chaque personne mérite d’être considérée.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
                Nous croyons que les soins empreints de compassion ne devraient
                jamais être déterminés par les circonstances d’une personne.
              </p>
            </div>
          </div>

          <PersonCard person={people[2]} large />
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Ensemble, nous pouvons faire davantage
            </p>

            <p className="mt-2 text-sm text-ivp-muted">
              Découvrez-en davantage sur IVP et sur les personnes au cœur de
              notre action.
            </p>
          </div>

          <Link
            to="/about"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-ivp-red"
          >
            En savoir plus sur IVP
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white group-hover:text-ivp-red">
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* =============================================================
   PERSON CARD
============================================================= */

function PersonCard({ person, large = false }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] bg-neutral-200 ${
        large ? 'min-h-[420px] lg:min-h-[520px]' : 'min-h-[430px]'
      }`}
    >
      <img
        src={person.image}
        alt={person.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-[1000ms] group-hover:scale-[1.035]"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* number */}
      <div className="absolute left-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-xs font-bold text-white backdrop-blur-md">
        {person.number}
      </div>

      {/* arrow */}
      <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900">
        <ArrowUpRight size={17} />
      </div>

      {/* content */}
      <div className="absolute bottom-0 left-0 max-w-lg p-7 text-white sm:p-9">
        <h3
          className={`font-display leading-tight tracking-[-0.025em] ${
            large ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
          }`}
        >
          {person.title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
          {person.description}
        </p>
      </div>
    </div>
  )
}
