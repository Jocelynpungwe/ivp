import { ArrowUpRight, Heart, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import peopleImage from '../../assets/about-hero.jpg'
import eldersImage from '../../assets/elders.jpg'

const people = [
  {
    number: '01',
    title: 'Nurses',
    description:
      'Healthcare professionals bringing knowledge, compassion and hands-on care into the community.',
  },
  {
    number: '02',
    title: 'Volunteers',
    description:
      'People who give their time, energy and skills to support the work of IVP.',
  },
  {
    number: '03',
    title: 'Community',
    description:
      'The people, families and communities whose participation makes meaningful care possible.',
  },
]

export default function PeopleBehindIVP() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                The People Behind IVP
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] text-ivp-black sm:text-6xl lg:text-7xl">
              The people
              <span className="block italic font-normal text-ivp-red">
                behind the care.
              </span>
            </h2>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div />

          <p className="max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            Behind every moment of care is a person willing to show up, listen,
            serve and make a difference. IVP's work is made possible through the
            dedication of people who believe that every life deserves compassion
            and dignity.
          </p>
        </div>

        {/* Photography */}
        <div className="mt-20 grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          {/* Main image */}
          <div className="group relative overflow-hidden rounded-[2rem]">
            <img
              src={peopleImage}
              alt="IVP nurse providing care to children in the community"
              className="h-[560px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.025] sm:h-[680px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Care in action
                </p>

                <p className="mt-2 max-w-md font-serif text-2xl leading-tight sm:text-3xl">
                  Showing up for the people who need us.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 sm:flex">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Secondary image */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-[#f5f3f0]">
            <img
              src={eldersImage}
              alt="IVP healthcare support in the community"
              className="h-[420px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.03] lg:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ivp-red">
                <Heart size={18} fill="currentColor" />
              </div>

              <p className="mt-5 font-serif text-2xl leading-tight text-white">
                Care that sees the whole person.
              </p>
            </div>
          </div>
        </div>

        {/* People categories */}
        <div className="mt-20 border-t border-gray-200">
          {people.map((person) => (
            <div
              key={person.number}
              className="group border-b border-gray-200 py-9 transition duration-500 hover:bg-[#f8f6f3] sm:py-11"
            >
              <div className="grid gap-6 lg:grid-cols-[100px_1fr_1.3fr_auto] lg:items-center lg:gap-10">
                {/* Number */}
                <span className="font-serif text-2xl text-ivp-red/40 transition duration-300 group-hover:text-ivp-red">
                  {person.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-3xl tracking-[-0.025em] text-ivp-black sm:text-4xl">
                  {person.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                  {person.description}
                </p>

                {/* Icon */}
                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition duration-300 group-hover:border-ivp-red group-hover:bg-ivp-red group-hover:text-white lg:flex">
                  <ArrowUpRight
                    size={17}
                    className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-20 rounded-[2rem] bg-ivp-red px-7 py-12 text-white sm:px-12 sm:py-14 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex gap-5">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 sm:flex">
                <UsersRound size={20} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Together
                </p>

                <h3 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                  Change begins when people choose to care.
                </h3>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ivp-red transition duration-300 hover:bg-white/90"
            >
              Get involved
              <ArrowUpRight
                size={17}
                className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
