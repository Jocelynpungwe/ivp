import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutHero from '../../assets/about-hero.jpg'

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
      {/* Background image */}
      <img
        src={aboutHero}
        alt="IVP nurse providing care to children in the community"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left-side gradient for typography */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-ivp-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
              About IVP
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
            Care is more
            <span className="block italic font-normal text-white/75">
              than treatment.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Discover the people, purpose and commitment behind IVP — Infirmières
            des Voies Publiques.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ivp-red px-7 py-4 text-sm font-semibold transition duration-300 hover:bg-red-700"
            >
              Connect with IVP
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <ArrowDown
                  size={14}
                  className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition duration-300 hover:border-white hover:bg-white/10"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
          Discover IVP
        </span>

        <div className="h-10 w-px bg-white/30" />
      </div>
    </section>
  )
}
