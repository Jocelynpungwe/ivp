import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, HandHeart, UsersRound } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import HeroHome from '../components/Home/HeroHome'
import AboutHome from '../components/Home/AboutHome'
import WhatWeDo from '../components/Home/WhatWeDo'
import WhoWeHelp from '../components/Home/HowWeHelp'
import ImpactHome from '../components/Home/ImpactHome'
import StoriesHome from '../components/Home/StoriesHome'
import HowYouCanHelp from '../components/Home/HowYouCanHelp'
import TrustPartners from '../components/Home/TrustPartners'
import FinalCTA from '../components/Home/FinalCTA'

const programs = [
  [
    'Soins communautaires',
    'Distribuer les médicaments de première nécessité aux orphelinats.',
    HeartPulse,
  ],
  [
    'Soutien compatissant',
    'Prendre en charge les frais médicaux desdits enfants pour les cas qui nécessitent les soins dans une institution hospitlière.',
    HandHeart,
  ],
  [
    'Soins infirmiers en action',
    'Implanter une représentation dans les villes où se trouve un plus grand nombre des enfants en situation de rue.',
    UsersRound,
  ],
]

export default function Home() {
  return (
    <>
      <HeroHome />

      <AboutHome />
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Mission"
          title="Notre mission"
          text="Administrer les soins infirmiers auxdits enfant"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {programs.map(([title, text, Icon]) => (
            <article
              key={title}
              className="rounded-3xl border border-neutral-200 p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-ivp-red-soft text-ivp-red">
                <Icon size={23} />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivp-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <WhatWeDo />
      <WhoWeHelp />
      <ImpactHome />
      <StoriesHome />
      <HowYouCanHelp />
      <FinalCTA />
    </>
  )
}
