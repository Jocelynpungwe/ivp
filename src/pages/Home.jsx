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
    'Community Care',
    'Create a clear space for IVP’s community healthcare initiatives and outreach work.',
    HeartPulse,
  ],
  [
    'Compassionate Support',
    'Highlight the people, families and communities who are at the heart of the mission.',
    HandHeart,
  ],
  [
    'Nursing in Action',
    'Show the work of nurses and volunteers through stories, photography and impact.',
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
          eyebrow="Our purpose"
          title="Healthcare with humanity at the center."
          text="The final copy can be replaced with IVP’s official mission and history."
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
