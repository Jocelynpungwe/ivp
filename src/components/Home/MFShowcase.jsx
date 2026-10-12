import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Images } from 'lucide-react'
import Reveal from '../Reveal'
import BookingButton from '../BookingButton'
import { paid, services } from '../../data/mf'

// Six tall treatment cards. On desktop the details slide up on hover/focus; on touch screens they are always visible.
export default function MFShowcase() {
  return (
    <section className="relative overflow-hidden bg-mf-ink pb-24 text-white sm:pb-32" aria-label="Les soins MF Médical">
      <div className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-mf-plum/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[460px] w-[460px] rounded-full bg-mf-gold/10 blur-[140px]" />

      <div className="container-page relative">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">La carte des soins</p>
            <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-5xl">
              Six soins, <span className="gold-text italic">une même exigence.</span>
            </h3>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50">Passez la souris sur un soin pour découvrir ses bienfaits.</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-col gap-3 rounded-2xl border border-mf-gold/30 bg-mf-gold/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-white/85">
            <strong className="text-mf-gold-soft">{paid.short}.</strong> {paid.prices}
          </p>
          <Link to="/contact?sujet=soins" className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-mf-gold-soft transition hover:text-white">Demander un tarif →</Link>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 100}>
              <article tabIndex={0} className="group relative isolate flex min-h-[460px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-mf-plum-dark outline-none focus-visible:ring-2 focus-visible:ring-mf-gold lg:aspect-[3/4] lg:min-h-0">
                <img src={s.image} alt={`${s.title} — ${s.subtitle}`} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-110 group-focus-within:scale-110" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-mf-ink via-mf-ink/55 to-mf-ink/10 transition duration-700 lg:group-hover:from-mf-ink/95 lg:group-hover:via-mf-ink/80 lg:group-focus-within:from-mf-ink/95 lg:group-focus-within:via-mf-ink/80" />

                <div className="flex items-start justify-between p-6">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">{s.subtitle}</span>
                  <span className="outline-num font-display text-5xl leading-none">0{i + 1}</span>
                </div>

                <div className="p-6">
                  <h4 className="font-display text-3xl leading-tight">{s.title}</h4>
                  <span className="mt-4 block h-px w-12 bg-mf-gold transition-all duration-700 group-hover:w-24" />

                  <div className="grid grid-rows-[1fr] transition-all duration-700 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-within:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <ul className="mt-5 space-y-2 text-[13.5px] leading-6 text-white/75">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-3">
                            <span className="mt-3 h-px w-3 shrink-0 bg-mf-gold" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 font-display text-lg italic leading-snug text-mf-gold-soft">{s.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <BookingButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] px-8 py-4 text-sm font-bold text-mf-ink shadow-[0_10px_40px_-10px_rgba(201,160,90,0.6)] transition hover:-translate-y-0.5" />
          <Link to="/soins" className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold transition hover:border-mf-gold-soft hover:text-mf-gold-soft">
            Tous les détails <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
          <Link to="/galerie/mf-medical" className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold transition hover:border-mf-gold-soft hover:text-mf-gold-soft">
            <Images size={16} /> Galerie MF Médical <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
