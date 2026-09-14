import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ourStoryImage from '../../assets/elders.jpg'

export default function OurStory() {
  return (
    <section className="overflow-hidden bg-[#f7f5f2] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top intro */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                Our Story
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] text-ivp-black sm:text-6xl lg:text-7xl">
              Where care meets
              <span className="block italic font-normal text-ivp-red">
                community.
              </span>
            </h2>
          </div>
        </div>

        {/* Main story */}
        <div className="mt-20 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={ourStoryImage}
                alt="IVP nurse providing care in the community"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:h-[620px]"
              />
            </div>

            {/* Image label */}
            <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Care in action
              </p>
            </div>

            {/* Decorative red block */}
            <div className="absolute -bottom-5 -right-5 -z-0 hidden h-32 w-32 rounded-[1.5rem] bg-ivp-red lg:block" />
          </div>

          {/* Story content */}
          <div>
            <p className="font-serif text-2xl leading-[1.35] tracking-[-0.02em] text-ivp-black sm:text-3xl">
              IVP was created from a simple belief: everyone deserves access to
              compassionate care and the dignity that comes with it.
            </p>

            <div className="mt-9 space-y-6 text-base leading-8 text-gray-600">
              <p>
                In communities where access to healthcare can be difficult, even
                a small act of care can make a meaningful difference. IVP brings
                nursing care, compassion and community support closer to people
                who need it.
              </p>

              <p>
                Our work is rooted in the understanding that healthcare is about
                more than treating an illness. It is about listening,
                understanding people's circumstances and treating every person
                with respect.
              </p>

              <p>
                From community outreach to direct support, IVP seeks to create
                moments where people feel seen, supported and cared for.
              </p>
            </div>

            {/* Small highlighted statement */}
            <div className="mt-10 border-l-2 border-ivp-red pl-6">
              <p className="font-serif text-xl leading-7 text-ivp-black">
                “When care reaches the community, hope has a place to grow.”
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivp-black"
            >
              Connect with IVP
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivp-red text-white transition duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-gray-200 pt-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <span className="font-serif text-4xl text-ivp-red">01</span>

              <h3 className="mt-4 font-serif text-2xl text-ivp-black">
                Listen
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Understanding people and the communities they call home.
              </p>
            </div>

            <div>
              <span className="font-serif text-4xl text-ivp-red">02</span>

              <h3 className="mt-4 font-serif text-2xl text-ivp-black">Care</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Bringing compassionate support closer to those who need it.
              </p>
            </div>

            <div>
              <span className="font-serif text-4xl text-ivp-red">03</span>

              <h3 className="mt-4 font-serif text-2xl text-ivp-black">
                Empower
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Helping create stronger, healthier and more supported
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
