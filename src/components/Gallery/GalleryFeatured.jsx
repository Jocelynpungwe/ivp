import { ArrowUpRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

import featuredImage from '../../assets/community.jpg'

export default function GalleryFeatured() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                Featured Story
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-500">
              A closer look at the people and moments behind IVP's commitment to
              compassionate community care.
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-ivp-black sm:text-6xl lg:text-7xl">
            Where care becomes
            <span className="block italic font-normal text-ivp-red">
              connection.
            </span>
          </h2>
        </div>

        {/* Featured layout */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#f7f5f2] lg:grid-cols-[1.3fr_0.7fr]">
          {/* Image */}
          <div className="group relative min-h-[500px] overflow-hidden sm:min-h-[650px] lg:min-h-[720px]">
            <img
              src={featuredImage}
              alt="IVP community healthcare and outreach"
              className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.035]"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <span className="rounded-full border border-white/30 bg-black/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                IVP · 01
              </span>
            </div>

            {/* Image caption */}
            <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55">
                    Community care
                  </p>

                  <p className="mt-3 max-w-lg font-serif text-2xl leading-tight text-white sm:text-3xl">
                    Every person has a story worth caring for.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ivp-red sm:flex">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            <div>
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivp-red text-white">
                <Heart size={20} fill="currentColor" strokeWidth={1.5} />
              </div>

              <p className="mt-12 text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                The story
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-ivp-black sm:text-4xl">
                Care starts with showing up.
              </h3>

              <div className="mt-7 space-y-5 text-sm leading-7 text-gray-500 sm:text-base">
                <p>
                  Healthcare is not only about what happens inside a clinic.
                  Sometimes it begins with a conversation, a helping hand or
                  simply being present.
                </p>

                <p>
                  IVP is built around the belief that compassionate care should
                  reach beyond traditional healthcare settings and closer to the
                  communities that need support.
                </p>

                <p>
                  These moments may seem small, but together they can create
                  trust, dignity and hope.
                </p>
              </div>
            </div>

            {/* Bottom information */}
            <div className="mt-12 border-t border-gray-200 pt-7">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                    Our approach
                  </p>

                  <p className="mt-2 font-serif text-xl text-ivp-black">
                    Listen. Reach. Care. Empower.
                  </p>
                </div>

                <span className="font-serif text-5xl text-ivp-red/20">01</span>
              </div>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-ivp-black"
              >
                Connect with IVP
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivp-red text-white transition duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              People
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Putting people at the centre of care.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Community
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Meeting communities where they are.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Compassion
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Treating every person with dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
