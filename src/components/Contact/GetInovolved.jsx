import { ArrowUpRight, Heart, Handshake, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const involvementOptions = [
  {
    number: '01',
    icon: UsersRound,
    title: 'Volunteer',
    description:
      'Give your time, skills and compassion to help bring meaningful support closer to people and communities.',
    linkText: 'Become a volunteer',
    href: '/contact',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Partner With Us',
    description:
      'Work alongside IVP to create stronger healthcare initiatives and make a lasting difference together.',
    linkText: 'Start a partnership',
    href: '/contact',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Support IVP',
    description:
      'Your support can help make compassionate care, community outreach and essential assistance possible.',
    linkText: 'Support our work',
    href: '/don',
  },
]

export default function GetInvolved() {
  return (
    <section className="overflow-hidden bg-[#151313] px-5 py-24 text-white md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                Get Involved
              </span>
            </div>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              There is a place
              <br />
              <span className="italic text-white/70">
                for everyone who cares.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50 md:text-base lg:pb-2">
            Whether you give your time, build a partnership or provide financial
            support, your contribution can help create meaningful change.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
          {involvementOptions.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-[#1b1919] p-7 transition duration-500 hover:bg-ivp-red md:p-10"
              >
                {/* DECORATIVE NUMBER */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/35 transition duration-500 group-hover:text-white/60">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/70 transition duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-ivp-red">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                </div>

                {/* LARGE DECORATIVE CIRCLE */}
                <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full border border-white/[0.04] transition duration-700 group-hover:scale-125 group-hover:border-white/10" />

                <div className="relative z-10">
                  <div className="mb-6 h-px w-10 bg-ivp-red transition duration-500 group-hover:bg-white" />

                  <h3 className="font-serif text-4xl tracking-[-0.03em] text-white md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/45 transition duration-500 group-hover:text-white/75">
                    {item.description}
                  </p>

                  <Link
                    to={item.href}
                    className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300"
                  >
                    {item.linkText}

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:translate-x-1 group-hover:border-white/40">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-ivp-red">
              One community
            </p>

            <p className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              Change becomes possible when
              <span className="italic text-white/60">
                {' '}
                people come together.
              </span>
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 self-start rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-ivp-black md:self-end"
          >
            Talk to IVP
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-black/5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
