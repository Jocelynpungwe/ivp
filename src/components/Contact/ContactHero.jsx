import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import communityImage from '../../assets/community.jpg'

export default function ContactHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#151313]">
      {/* BACKGROUND IMAGE */}
      <img
        src={communityImage}
        alt="IVP community care"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-between px-5 py-8 md:px-8 md:py-10 lg:px-12">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ivp-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Contact IVP
            </span>
          </div>

          <div className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md md:block">
            Infirmières des Voies Publiques
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-5xl pb-16 pt-20 md:pb-20 lg:pb-24">
          <p className="mb-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            Whether you want to learn more about IVP, get involved, explore a
            partnership or simply reach out, we would love to hear from you.
          </p>

          <h1 className="font-serif text-[3.5rem] leading-[0.88] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[8rem]">
            Let&apos;s make
            <br />
            care
            <br />
            <span className="italic text-white/85">possible.</span>
          </h1>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="#contact-form"
              className="group inline-flex items-center justify-between gap-8 rounded-full bg-ivp-red px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-ivp-black"
            >
              Get in touch
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1 group-hover:bg-ivp-black group-hover:text-white">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            <Link
              to="/donate"
              className="group inline-flex items-center justify-between gap-8 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-ivp-black"
            >
              Support IVP
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:translate-x-1 group-hover:border-black/10">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-6 border-t border-white/15 pt-6 md:flex-row md:items-end">
          <div className="flex gap-8 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
            <span>Healthcare</span>
            <span>Community</span>
            <span>People</span>
          </div>

          <a
            href="#contact-form"
            className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:bg-white group-hover:text-ivp-black">
              <ArrowDown size={15} />
            </span>
            Send us a message
          </a>
        </div>
      </div>
    </section>
  )
}
