import { Check, Sparkles } from 'lucide-react'
import Reveal from '../Reveal'

const tones = {
  rose: ['bg-pink-50', 'text-pink-800', 'bg-pink-100', 'from-pink-200 to-rose-100'],
  sky: ['bg-sky-50', 'text-sky-800', 'bg-sky-100', 'from-sky-200 to-cyan-100'],
  sage: ['bg-emerald-50', 'text-emerald-800', 'bg-emerald-100', 'from-emerald-200 to-teal-100'],
  amber: ['bg-orange-50', 'text-orange-800', 'bg-orange-100', 'from-orange-200 to-amber-100'],
  lilac: ['bg-purple-50', 'text-purple-800', 'bg-purple-100', 'from-purple-200 to-fuchsia-100'],
  teal: ['bg-teal-50', 'text-teal-800', 'bg-teal-100', 'from-teal-200 to-cyan-100'],
}

export default function ServiceCard({ service, index = 0, compact = false }) {
  const [soft, ink, pill, grad] = tones[service.tone]
  return (
    <Reveal as="article" delay={(index % 3) * 90} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-mf-plum/10">
        <div className={`relative aspect-[16/8] overflow-hidden ${soft}`}>
          {service.image ? (
            <img
              src={service.image}
              alt={`${service.title} — ${service.subtitle}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${grad}`}>
              <Sparkles className={`float-slow ${ink}`} size={44} strokeWidth={1.2} />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${ink}`}>{service.subtitle}</p>
          <h3 className="mt-2 font-display text-2xl leading-tight">{service.title}</h3>
          {!compact && (
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ivp-muted">
              {service.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <Check size={16} className={`mt-1 shrink-0 ${ink}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto pt-6">
            <p className={`rounded-2xl px-4 py-3 text-center text-sm font-semibold ${pill} ${ink}`}>
              {service.result}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
