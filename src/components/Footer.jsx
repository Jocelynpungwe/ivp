import { ArrowUp, ArrowUpRight, Facebook, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import BookingButton from './BookingButton'
import logo from '../assets/ivplogo.png'

const pages = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos de l’IVP', path: '/a-propos' },
  { name: 'Soins esthétiques', path: '/soins' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' },
]

const ivpLinks = [
  { name: 'Notre mission', path: '/a-propos' },
  { name: 'Faire un don', path: '/don' },
  { name: 'Devenir bénévole', path: '/contact' },
  { name: 'Devenir partenaire', path: '/contact' },
]

const mfLinks = [
  { name: 'PRP', path: '/soins#prp' },
  { name: 'Blanchiment dentaire', path: '/soins#blanchiment' },
  { name: 'Pédicure médicale', path: '/soins#pedicure' },
  { name: 'Lifting colombien', path: '/soins#lifting' },
  { name: 'Réflexologie plantaire', path: '/soins#reflexologie' },
  { name: 'Massage & drainage lymphatique', path: '/soins#drainage' },
]

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="group flex w-fit items-center gap-2 text-sm text-white/60 transition hover:text-white">
      {children}
      <ArrowUpRight size={13} className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-[#151313] text-white">
      {/* Signature line: IVP red → plum → gold */}
      <div className="h-1 bg-gradient-to-r from-ivp-red via-mf-plum to-mf-gold" />

      <div className="container-page py-20 sm:py-24">
        {/* Statement + booking */}
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Les soins vont au-delà du traitement.
            <span className="block italic text-white/40">Ils sont synonymes d’humanité.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/don" className="inline-flex items-center gap-2 rounded-full bg-ivp-red px-6 py-3.5 text-sm font-bold transition hover:bg-ivp-red-dark">
              Soutenir l’IVP <ArrowUpRight size={16} />
            </Link>
            <BookingButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] px-6 py-3.5 text-sm font-bold text-mf-ink transition hover:brightness-105" />
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-14 pt-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Accueil">
              <img src={logo} alt="IVP asbl" className="w-24" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              Une même vocation infirmière : des soins solidaires avec l’IVP, des soins esthétiques et de bien-être avec MF Médical.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100091649801529"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de l’IVP"
              className="mt-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <Facebook size={17} />
            </a>
          </div>

          {/* Pages */}
          <nav aria-label="Pages du site">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">Explorer</p>
            <div className="mt-6 flex flex-col gap-3.5">
              {pages.map((l) => <FooterLink key={l.name} to={l.path}>{l.name}</FooterLink>)}
            </div>
          </nav>

          {/* IVP */}
          <nav aria-label="IVP">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              <span className="h-2 w-2 rounded-full bg-ivp-red" /> IVP · Solidarité
            </p>
            <div className="mt-6 flex flex-col gap-3.5">
              {ivpLinks.map((l) => <FooterLink key={l.name} to={l.path}>{l.name}</FooterLink>)}
            </div>
            <p className="mt-7 flex gap-2.5 text-sm leading-6 text-white/45">
              <MapPin size={16} className="mt-1 shrink-0 text-ivp-red" strokeWidth={1.5} />
              Infirmières des Voies Publiques, organisation à but non lucratif.
            </p>
          </nav>

          {/* MF */}
          <nav aria-label="MF Médical">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              <span className="h-2 w-2 rounded-full bg-mf-gold" /> MF Médical · Soins
            </p>
            <div className="mt-6 flex flex-col gap-3.5">
              {mfLinks.map((l) => <FooterLink key={l.name} to={l.path}>{l.name}</FooterLink>)}
            </div>
            <p className="mt-7 flex gap-2.5 text-sm leading-6 text-white/45">
              <MapPin size={16} className="mt-1 shrink-0 text-mf-gold" strokeWidth={1.5} />
              Bruxelles et Kinshasa. Soins payants, sur rendez-vous.
            </p>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IVP — Infirmières des Voies Publiques · MF Médical. Tous droits réservés.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex w-fit items-center gap-2 transition hover:text-white"
          >
            Retour en haut <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
