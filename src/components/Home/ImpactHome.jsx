import { ArrowUpRight, Heart, Users, Stethoscope, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const impactStats = [
  {
    number: 'XX+',
    label: 'People Reached',
    description: 'People connected with care, support and community outreach.',
    icon: Users,
  },
  {
    number: 'XX+',
    label: 'Healthcare Interventions',
    description: 'Moments where compassionate healthcare made a difference.',
    icon: Stethoscope,
  },
  {
    number: 'XX+',
    label: 'Community Initiatives',
    description:
      'Outreach efforts created to bring care closer to communities.',
    icon: MapPin,
  },
  {
    number: 'XX+',
    label: 'Lives Supported',
    description:
      'People supported through IVP’s commitment to compassionate care.',
    icon: Heart,
  },
]

export default function ImpactHome() {
  return (
    <section className="relative overflow-hidden bg-ivp-red py-24 text-white sm:py-28 lg:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-white/30" />

      <div className="container-page relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          {/* Eyebrow */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/50" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Our Impact
              </p>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/65">
              Behind every number is a person, a family and a moment of care
              that matters.
            </p>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.8rem]">
              Every act of care
              <br />
              <span className="text-white/55">creates a ripple.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Through compassionate healthcare and community support, IVP
              continues working to make a meaningful difference in the lives of
              the people it serves.
            </p>
          </div>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className={`group relative py-9 sm:px-7 lg:min-h-[300px] lg:px-8 ${
                  index !== 0
                    ? 'border-t border-white/20 sm:border-l sm:border-t-0'
                    : ''
                } ${index === 2 ? 'lg:border-l' : ''}`}
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-white/40">
                    0{index + 1}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ivp-red">
                    <Icon size={17} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Number */}
                <div className="mt-14">
                  <p className="font-display text-5xl tracking-[-0.04em] sm:text-6xl lg:text-[4.5rem]">
                    {stat.number}
                  </p>

                  <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/90">
                    {stat.label}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-14 border-t border-white/20 pt-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20">
                <Heart size={15} fill="currentColor" />
              </div>

              <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                We measure impact not only by what we provide, but by the people
                we reach and the dignity we help preserve.
              </p>
            </div>

            <Link
              to="/about"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ivp-red transition-all duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Discover our impact
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivp-red/10 transition group-hover:bg-white/10">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
