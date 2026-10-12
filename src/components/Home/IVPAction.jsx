import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import Reveal from '../Reveal'
import orphelins from '../../assets/gallery/archives/IMG_9875.jpg'
import rue from '../../assets/gallery/archives/IMG-20240729-WA0003.jpg'
import hospices from '../../assets/gallery/archives/IMG-20241005-WA0003.jpg'
import handicapes from '../../assets/gallery/archives/WhatsApp-Image-2023-08-08-at-20.06.20.jpg'

const objectifs = [
  'Faciliter l’accès aux soins de santé.',
  'Lutter contre la pauvreté.',
  'Améliorer les conditions de vie des personnes abandonnées.',
]

const plan = [
  'Organiser des descentes médicales communautaires.',
  'Distribuer de la bouillie protéinée, des vivres, des vêtements et des médicaments.',
  'Développer des projets durables au profit des populations défavorisées.',
]

const helped = [
  { label: 'Les orphelins', image: orphelins, pos: 'object-[35%_30%]' },
  { label: 'Les enfants de la rue', image: rue, pos: 'object-[60%_40%]' },
  { label: 'Les veuves', image: null },
  { label: 'Les hospices', image: hospices, pos: 'object-[30%_30%]' },
  { label: 'Les handicapés', image: handicapes, pos: 'object-[62%_50%]' },
]

function Checklist({ items }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((t) => (
        <li key={t} className="flex gap-4 text-[15px] leading-7 text-neutral-700">
          <span className="mt-3 h-px w-5 shrink-0 bg-ivp-red" />
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function IVPAction() {
  return (
    <section className="bg-[#f7f5f2] py-24 sm:py-32" aria-labelledby="mission-title">
      <div className="container-page">
        {/* Mission + objectifs + plan */}
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] bg-ivp-red p-8 text-white sm:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
              <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Notre mission</p>
              <h2 id="mission-title" className="relative mt-8 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Redonner espoir et dignité <span className="italic text-white/75">aux plus vulnérables</span> à travers les soins, la sensibilisation et l’aide humanitaire.
              </h2>
              <p className="relative mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                <HeartHandshake size={18} /> Soigner · Soutenir · Espérer
              </p>
            </article>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={100}>
              <article className="h-full rounded-[2rem] bg-white p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ivp-red">Nos objectifs</p>
                <Checklist items={objectifs} />
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="h-full rounded-[2rem] bg-white p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ivp-red">Notre plan d’action</p>
                <Checklist items={plan} />
              </article>
            </Reveal>
          </div>
        </div>

        {/* Qui aidons-nous */}
        <Reveal className="mt-24 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="section-label">Qui aidons-nous</p>
            <h3 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Nous venons en aide <span className="italic text-ivp-red">particulièrement à :</span>
            </h3>
          </div>
          <Link to="/a-propos" className="group inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.16em]">
            Découvrir notre action
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivp-red text-white transition group-hover:translate-x-1"><ArrowRight size={16} /></span>
          </Link>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {helped.map(({ label, image, pos }, i) => (
            <Reveal as="li" key={label} delay={i * 80} className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-ivp-red-dark">
                {image ? (
                  <img src={image} alt={label} loading="lazy" className={`h-full w-full object-cover ${pos} transition duration-[1200ms] group-hover:scale-105`} />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ivp-red to-ivp-red-dark">
                    <HeartHandshake size={46} strokeWidth={1.1} className="text-white/60" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-4 bottom-4 font-display text-xl leading-tight text-white">{label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
