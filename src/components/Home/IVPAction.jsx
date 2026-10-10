import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenCheck, HandHeart, Stethoscope, UsersRound } from 'lucide-react'
import Reveal from '../Reveal'
import eldersImg from '../../assets/elders.jpg'

const approach = [
  { icon: Stethoscope, title: 'Soins infirmiers', text: 'Des soins empreints de compassion, axés sur les besoins des personnes que nous servons.' },
  { icon: UsersRound, title: 'Action communautaire', text: 'Rapprocher les soins, le soutien et la solidarité de ceux qui en ont le plus besoin.' },
  { icon: BookOpenCheck, title: 'Éducation à la santé', text: 'Partager des informations pratiques pour aider chacun à faire des choix éclairés.' },
  { icon: HandHeart, title: 'Soutien aux personnes vulnérables', text: 'Un accompagnement bienveillant pour les personnes en situation difficile.' },
]

const helped = [
  ['Enfants et jeunes', 'Une attention particulière quand ils en ont le plus besoin.'],
  ['Personnes âgées', 'Un accès aux soins qui préserve leur dignité.'],
  ['Communautés et familles', 'Des soins rapprochés de ceux qui font leur force.'],
  ['Personnes en besoin de soins', 'Un soutien médical pour lever les obstacles.'],
]

export default function IVPAction() {
  return (
    <section className="bg-[#f7f5f2] py-24 sm:py-32" aria-labelledby="action-title">
      <div className="container-page">
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32">
            <p className="section-label">Notre action</p>
            <h2 id="action-title" className="mt-5 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">
              L’humain <span className="italic text-ivp-red">au cœur des soins.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-ivp-muted">
              La santé va au-delà du traitement : il s’agit d’écouter, de comprendre et d’être présents aux côtés des personnes.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.75rem]">
              <img src={eldersImg} alt="Soins de l’IVP auprès de personnes âgées" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
            <Link to="/a-propos" className="group mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em]">
              Découvrir notre action
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivp-red text-white transition group-hover:translate-x-1"><ArrowRight size={16} /></span>
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="h-full rounded-[1.5rem] border border-neutral-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-ivp-red/40 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ivp-red-soft text-ivp-red"><Icon size={22} strokeWidth={1.5} /></span>
                  <h3 className="mt-8 font-display text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ivp-muted">{text}</p>
                </article>
              </Reveal>
            ))}

            {/* Qui aidons-nous */}
            <Reveal delay={200} className="sm:col-span-2">
              <div className="rounded-[1.75rem] bg-ivp-red p-8 text-white sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">Qui aidons-nous</p>
                <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">Chaque personne mérite d’être considérée.</p>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                  {helped.map(([t, d]) => (
                    <li key={t} className="border-t border-white/25 pt-4">
                      <h4 className="font-display text-xl">{t}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/70">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
