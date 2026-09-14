import { ArrowUpRight, Heart, HandHeart, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const waysToHelp = [
  {
    number: '01',
    icon: Heart,
    title: 'Faire un don',
    description:
      'Votre contribution peut aider à soutenir des soins de santé empreints de compassion et un accompagnement significatif pour les personnes qui en ont besoin.',
    link: '/donate',
    featured: true,
  },
  {
    number: '02',
    icon: HandHeart,
    title: 'Devenir bénévole',
    description:
      'Offrez votre temps, vos compétences et votre compassion pour contribuer à renforcer l’action de l’IVP.',
    link: '/contact',
  },
  {
    number: '03',
    icon: UsersRound,
    title: 'Devenir partenaire',
    description:
      'Joignez-vous à nous pour bâtir des communautés plus fortes grâce à la collaboration, au soutien et à un objectif commun.',
    link: '/contact',
  },
]

export default function HowYouCanHelp() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f8] py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ivp-red" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivp-red">
                Comment vous pouvez aider
              </p>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-ivp-muted">
              Le changement ne se fait pas seul. Il existe de nombreuses façons
              de participer à notre action.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.7rem]">
              Il existe plus d’une
              <br />
              <span className="text-ivp-red">façon de prendre soin.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-ivp-muted sm:text-lg">
              Que vous fassiez un don, deveniez bénévole ou établissiez un
              partenariat, votre engagement peut nous aider à continuer de
              placer l’humain au cœur des soins de santé.
            </p>
          </div>
        </div>

        {/* =====================================================
            HELP CARDS
        ====================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          {/* DONATE FEATURE */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-ivp-red p-8 text-white sm:p-10 lg:min-h-[540px] lg:p-12">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full border border-white/10" />

            {/* Top */}
            <div className="relative flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.18em] text-white/40">
                01
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:bg-white group-hover:text-ivp-red">
                <Heart size={18} strokeWidth={1.7} />
              </div>
            </div>

            {/* Main content */}
            <div className="relative mt-24 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                Faites la différence
              </p>

              <h3 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Votre soutien peut devenir un soin pour quelqu’un.
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Chaque contribution contribue à renforcer l’action de l’IVP et à
                soutenir notre engagement envers des soins de santé empreints de
                compassion.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/donate"
              className="group/button relative mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ivp-red transition-all duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Faire un don à l’IVP
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivp-red/10 transition group-hover/button:bg-white/10">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-5">
            {waysToHelp.slice(1).map((item) => (
              <HelpCard key={item.number} item={item} />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-16 grid gap-8 border-t border-neutral-200 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-2xl leading-tight tracking-[-0.025em] text-neutral-900 sm:text-3xl">
              Les petits gestes peuvent créer
              <span className="text-ivp-red"> un changement durable.</span>
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-ivp-muted">
              Trouvez la manière qui vous convient et rejoignez la communauté de
              l’IVP.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-bold text-neutral-900 transition-all duration-300 hover:border-ivp-red hover:bg-ivp-red hover:text-white"
          >
            Nous contacter
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 transition group-hover:bg-white/10">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* =============================================================
   HELP CARD
============================================================= */

function HelpCard({ item }) {
  const Icon = item.icon

  return (
    <Link
      to={item.link}
      className="group relative flex min-h-[255px] flex-col justify-between overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ivp-red/20 hover:shadow-xl hover:shadow-neutral-900/5 sm:p-8"
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.16em] text-neutral-300">
          {item.number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-ivp-red transition-all duration-300 group-hover:border-ivp-red group-hover:bg-ivp-red group-hover:text-white">
          <Icon size={17} strokeWidth={1.7} />
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display text-3xl tracking-[-0.03em] text-neutral-900">
          {item.title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-ivp-muted">
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:border-ivp-red group-hover:bg-ivp-red group-hover:text-white">
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  )
}
