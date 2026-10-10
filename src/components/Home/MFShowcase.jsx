import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import BookingButton from '../BookingButton'
import { services } from '../../data/mf'

export default function MFShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-mf-ink pb-24 text-white sm:pb-32" aria-label="Les soins MF Médical">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Image stack */}
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] border border-mf-gold/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mf-plum-dark">
              {services.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={`${s.title} — ${s.subtitle}`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ${
                    i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-mf-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-2xl italic leading-snug text-mf-gold-soft">
                {services[active].result}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Treatment list */}
        <Reveal delay={100}>
          <ul className="border-t border-white/10">
            {services.map((s, i) => {
              const open = i === active
              return (
                <li key={s.id} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span className={`font-display text-xl transition-colors duration-500 ${open ? 'text-mf-gold-soft' : 'text-white/30'}`}>0{i + 1}</span>
                    <span className="flex-1">
                      <span className={`block font-display text-2xl leading-tight transition-colors duration-500 sm:text-3xl ${open ? 'text-white' : 'text-white/55 group-hover:text-white'}`}>{s.title}</span>
                      <span className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${open ? 'text-mf-gold-soft' : 'text-white/30'}`}>{s.subtitle}</span>
                    </span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${open ? 'rotate-45 border-mf-gold bg-mf-gold text-mf-ink' : 'border-white/20 text-white/60'}`}>
                      <ArrowUpRight size={17} />
                    </span>
                  </button>

                  <div className={`grid transition-all duration-500 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <ul className="space-y-3 pb-7 pl-12 pr-2 text-[15px] leading-7 text-white/70">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-4">
                            <span className="mt-3 h-px w-5 shrink-0 bg-mf-gold" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <BookingButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] px-7 py-4 text-sm font-bold text-mf-ink shadow-[0_10px_40px_-10px_rgba(201,160,90,0.6)] transition hover:-translate-y-0.5" />
            <Link to="/soins" className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-mf-gold-soft hover:text-mf-gold-soft">
              Tous les détails <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
