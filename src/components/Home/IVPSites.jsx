import { Globe, MapPin, Phone } from 'lucide-react'
import Reveal from '../Reveal'

// Source: IVP asbl flyer.
export default function IVPSites() {
  return (
    <section className="bg-ivp-red-dark text-white" aria-label="Nos sites et contact">
      <Reveal className="container-page grid gap-10 py-14 sm:py-16 md:grid-cols-3 md:gap-8">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10"><MapPin size={20} /></span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">Nos sites</p>
            <p className="mt-2 font-display text-2xl">Kinshasa · Mbuji-Mayi</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10"><Phone size={20} /></span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">Contact</p>
            <p className="mt-2 text-lg leading-8">
              <a href="tel:+243816091136" className="hover:underline">+243 816 091 136</a>
              <br />
              <a href="tel:+32488406493" className="hover:underline">+32 488 40 64 93</a>
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10"><Globe size={20} /></span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">Site web</p>
            <a href="https://ivp-asbl.org" target="_blank" rel="noreferrer" className="mt-2 inline-block font-display text-2xl hover:underline">ivp-asbl.org</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
