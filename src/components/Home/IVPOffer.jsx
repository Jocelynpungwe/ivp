import { Bandage, Brain, Soup, Stethoscope } from 'lucide-react'
import Reveal from '../Reveal'

// Source: IVP asbl flyer.
const offers = [
  {
    icon: Stethoscope,
    title: 'Les soins médicaux de première nécessité',
    points: ['Consultations', 'Prise en charge de base', 'Conseils de santé'],
  },
  {
    icon: Bandage,
    title: 'Les soins des plaies',
    points: ['Nettoyage et pansements', 'Prévention des infections', 'Suivi et conseils'],
  },
  {
    icon: Brain,
    title: 'Le traitement des épileptiques',
    points: ['Suivi médical', 'Distribution des traitements', 'Accompagnement'],
  },
  {
    icon: Soup,
    title: 'La soupe commune',
    points: ['Repas chaud et nourrissant', 'Chaque jour', 'Pour tous'],
  },
]

export default function IVPOffer() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="offre-title">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Ce que l’IVP offre</p>
          <h2 id="offre-title" className="mt-5 font-display text-4xl leading-[1.04] tracking-tight sm:text-6xl">
            IVP asbl offre <span className="italic text-ivp-red">gratuitement</span> aux personnes les plus démunies.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map(({ icon: Icon, title, points }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-7 transition duration-500 hover:-translate-y-1.5 hover:border-ivp-red hover:shadow-2xl hover:shadow-ivp-red/10">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-ivp-red transition duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivp-red-soft text-ivp-red transition duration-500 group-hover:bg-ivp-red group-hover:text-white">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-3xl text-ivp-red/25">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl leading-tight">{title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ivp-muted">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-ivp-red" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
