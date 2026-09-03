import { ArrowUpRight, Facebook, Instagram, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About IVP', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const getInvolved = [
  { name: 'Donate', path: '/donate' },
  { name: 'Volunteer', path: '/contact' },
  { name: 'Partner with us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#151313] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block font-serif text-5xl tracking-[-0.05em]"
            >
              IVP
            </Link>

            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Infirmières des Voies Publiques
            </div>

            <p className="mt-8 max-w-md text-base leading-7 text-white/55">
              Bringing care closer to people and communities through compassion,
              service and a commitment to human dignity.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100091649801529"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  {item.name}

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Get involved */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Get Involved
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {getInvolved.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  {item.name}

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Contact
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-ivp-red"
                />

                <p className="text-sm leading-6 text-white/60">
                  IVP — Infirmières des Voies Publiques
                </p>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-ivp-red"
                />

                <Link
                  to="/contact"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Contact IVP
                </Link>
              </div>
            </div>

            {/* Donate button */}
            <Link
              to="/donate"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ivp-red px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-red-700"
            >
              Support IVP
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Large footer statement */}
        <div className="mt-24 border-t border-white/10 pt-12">
          <h2 className="max-w-5xl font-serif text-4xl leading-[1] tracking-[-0.04em] text-white/90 sm:text-5xl lg:text-6xl">
            Healthcare is more than treatment.
            <span className="block text-white/35">
              It is care, dignity and humanity.
            </span>
          </h2>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} IVP — Infirmières des Voies Publiques.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/contact" className="transition hover:text-white/70">
              Contact
            </Link>

            <span>Made with care.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
