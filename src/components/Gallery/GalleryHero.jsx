import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import galleryHeroImage from '../../assets/community.jpg'

export default function GalleryHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#151313] text-white">
      {/* Background image */}
      <img
        src={galleryHeroImage}
        alt="IVP community healthcare"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-between px-6 py-8 lg:px-8 lg:py-10">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ivp-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              IVP Gallery
            </span>
          </div>

          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-xs font-semibold backdrop-blur-sm transition duration-300 hover:bg-white hover:text-ivp-black sm:flex"
          >
            Connect with IVP
            <ArrowUpRight
              size={15}
              className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Main content */}
        <div className="pb-10 pt-32 sm:pb-14 lg:pb-20">
          <p className="mb-6 max-w-md text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Stories · People · Community
          </p>

          <h1 className="max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[8rem]">
            Care,
            <span className="block italic font-normal text-white/85">
              captured.
            </span>
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              A glimpse into the people, communities and moments that inspire
              the work of IVP — Infirmières des Voies Publiques.
            </p>

            <Link
              to="/donate"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-ivp-red px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-ivp-red"
            >
              Support the work
              <ArrowUpRight
                size={17}
                className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-4 text-white/50 lg:left-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
            <ArrowDown size={15} className="animate-bounce" />
          </div>

          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] sm:block">
            Explore the gallery
          </span>
        </div>
      </div>
    </section>
  )
}
