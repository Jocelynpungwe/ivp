import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import heroImage from '../../assets/heroImage.jpg'
// import heroImage from '../../assets/imghero.jpeg'

export default function HeroHome() {
  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="IVP healthcare clinic"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Soft overall darkening - keeps the image visible */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Text readability gradient
          Darker on the left, almost completely transparent on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      {/* Very subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Hero Content */}
      <div className="container-page flex min-h-[calc(100vh-80px)] items-center py-20">
        <div className="max-w-4xl text-white">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-ivp-red">
              <Heart size={16} fill="currentColor" strokeWidth={1.5} />
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
                Infirmières des Voies Publiques
              </p>

              <div className="mt-2 h-px w-12 bg-white/50" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Prendre soin des gens.
            <br />
            <span className="text-white/70">Changer des vies.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            IVP s’engage à apporter des soins de santé compatissants et un
            soutien significatif aux personnes et communautés qui en ont le plus
            besoin.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Primary */}
            <Link
              to="/donate"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-neutral-900 shadow-lg transition-all duration-300 hover:bg-ivp-red hover:text-white"
            >
              Soutenez IVP
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivp-red text-white transition-all duration-300 group-hover:bg-white group-hover:text-ivp-red">
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>

            {/* Secondary */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-black/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Décovourez notre mission
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Bottom information */}
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/25 pt-6">
            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                Soins de santé
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
                Avec compassion
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/25 sm:block" />

            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                Communauté
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
                Avec un but
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/25 sm:block" />

            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                Personnalités
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
                Au centre
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 lg:flex">
        <span>Scroll to explore</span>
        <span className="h-px w-10 bg-white/40" />
      </div>
    </section>
  )
}
