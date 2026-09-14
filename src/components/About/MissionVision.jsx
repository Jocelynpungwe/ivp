import { ArrowUpRight, Heart, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MissionVision() {
  return (
    <section className="overflow-hidden bg-white">
      {/* Main split section */}
      <div className="grid lg:grid-cols-2">
        {/* Mission */}
        <div className="group relative min-h-[560px] overflow-hidden bg-ivp-red px-6 py-20 text-white sm:px-12 sm:py-24 lg:px-16 lg:py-28">
          {/* Decorative circles */}
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10 transition duration-700 group-hover:scale-110" />

          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-white/10" />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Heart size={19} strokeWidth={1.5} />

                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                    Our Mission
                  </span>
                </div>

                <span className="font-serif text-5xl text-white/20">01</span>
              </div>

              <div className="mt-20 max-w-xl">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Bringing care
                  <span className="block italic font-normal text-white/70">
                    closer.
                  </span>
                </h2>

                <p className="mt-9 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
                  Our mission is to bring compassionate healthcare and
                  meaningful support closer to people and communities who need
                  it most.
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
              <span className="h-px w-8 bg-white/30" />
              Compassion in action
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="group relative min-h-[560px] overflow-hidden bg-[#f5f3f0] px-6 py-20 text-ivp-black sm:px-12 sm:py-24 lg:px-16 lg:py-28">
          {/* Decorative circles */}
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-ivp-red/10 transition duration-700 group-hover:scale-110" />

          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-ivp-red/10" />

          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-ivp-red/10" />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye size={19} strokeWidth={1.5} className="text-ivp-red" />

                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                    Our Vision
                  </span>
                </div>

                <span className="font-serif text-5xl text-ivp-red/15">02</span>
              </div>

              <div className="mt-20 max-w-xl">
                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  A healthier
                  <span className="block italic font-normal text-ivp-red">
                    tomorrow.
                  </span>
                </h2>

                <p className="mt-9 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
                  We envision communities where people can access care with
                  dignity, compassion and hope, regardless of their
                  circumstances.
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
              <span className="h-px w-8 bg-ivp-red/40" />
              Building toward tomorrow
            </div>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-ivp-red">
            <Heart size={20} strokeWidth={1.5} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
            What drives us
          </p>

          <h3 className="mx-auto mt-7 max-w-5xl font-serif text-4xl leading-[1] tracking-[-0.04em] text-ivp-black sm:text-5xl lg:text-7xl">
            Healthcare should never be defined
            <span className="block italic font-normal text-gray-400">
              by circumstance.
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-500">
            We believe that every person deserves to be treated with compassion,
            listened to with respect and supported with dignity.
          </p>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ivp-black px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-ivp-red"
          >
            Learn more about IVP
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
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
