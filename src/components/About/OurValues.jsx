import {
  ArrowUpRight,
  Heart,
  HandHeart,
  UsersRound,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const values = [
  {
    number: '01',
    title: 'Compassion',
    description:
      'We approach every person with empathy, patience and genuine concern for their wellbeing.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Dignity',
    description:
      'Every person deserves to be seen, heard and treated with respect, regardless of their circumstances.',
    icon: HandHeart,
  },
  {
    number: '03',
    title: 'Community',
    description:
      'We believe meaningful care begins by understanding and working alongside the communities we serve.',
    icon: UsersRound,
  },
  {
    number: '04',
    title: 'Accessibility',
    description:
      'We strive to bring support closer to people and help reduce barriers that stand between communities and care.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Commitment',
    description:
      'We remain dedicated to serving with consistency, responsibility and a long-term commitment to positive change.',
    icon: Sparkles,
  },
]

export default function OurValues() {
  return (
    <section className="overflow-hidden bg-[#151313] py-24 text-white sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Our Values
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              The principles
              <span className="block italic font-normal text-white/45">
                behind the care.
              </span>
            </h2>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div />

          <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            The way we care matters just as much as the care itself. These
            principles guide how we connect with people, work within communities
            and approach the work we do.
          </p>
        </div>

        {/* Values list */}
        <div className="mt-20 border-t border-white/10">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.number}
                className="group border-b border-white/10 transition duration-500 hover:bg-white/[0.035]"
              >
                <div className="grid gap-7 px-0 py-9 sm:py-11 lg:grid-cols-[100px_1fr_1.2fr_60px] lg:items-center lg:gap-10">
                  {/* Number */}
                  <div>
                    <span className="font-serif text-2xl text-white/20 transition duration-500 group-hover:text-ivp-red">
                      {value.number}
                    </span>
                  </div>

                  {/* Title + icon */}
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition duration-500 group-hover:border-ivp-red group-hover:bg-ivp-red">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-white/50 transition duration-500 group-hover:text-white"
                      />
                    </div>

                    <h3 className="font-serif text-3xl tracking-[-0.025em] transition duration-500 group-hover:translate-x-1 sm:text-4xl">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="max-w-xl text-sm leading-7 text-white/40 transition duration-500 group-hover:text-white/65 sm:text-base">
                      {value.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex lg:justify-end">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-500 group-hover:border-white/30 group-hover:bg-ivp-red">
                      <ArrowUpRight
                        size={17}
                        className="text-white/30 transition duration-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-3xl font-serif text-3xl leading-tight tracking-[-0.025em] text-white/80 sm:text-4xl">
              “The quality of our care begins with the way we see the people we
              serve.”
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30">
            <span className="h-px w-8 bg-ivp-red" />
            Our commitment
          </div>
        </div>
      </div>
    </section>
  )
}
