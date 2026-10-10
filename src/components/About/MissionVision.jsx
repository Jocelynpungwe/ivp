import { Eye, Heart } from 'lucide-react'
import communityImage from '../../assets/community.jpg'

const blocks = [
  {
    n: '01',
    icon: Heart,
    label: 'Notre mission',
    title: 'Rapprocher',
    accent: 'les soins.',
    text: 'Rapprocher des soins de santé bienveillants et un soutien concret des personnes et des communautés qui en ont le plus besoin.',
    foot: 'La compassion en action',
  },
  {
    n: '02',
    icon: Eye,
    label: 'Notre vision',
    title: 'Un avenir',
    accent: 'en meilleure santé.',
    text: 'Des communautés où chacun peut accéder aux soins avec dignité, compassion et espoir, quelles que soient ses circonstances.',
    foot: 'Construire demain',
  },
]

export default function MissionVision() {
  return (
    <section className="relative isolate overflow-hidden bg-ivp-red-dark py-24 text-white sm:py-32" aria-label="Mission et vision">
      <img src={communityImage} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ivp-red-dark/95 via-ivp-red/90 to-ivp-red-dark/95" />
      <div className="absolute -right-32 -top-32 -z-10 h-[460px] w-[460px] rounded-full border border-white/10" />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[520px] w-[520px] rounded-full border border-white/10" />

      <div className="container-page">
        <div className="reveal grid gap-px overflow-hidden rounded-[2rem] border border-white/20 bg-white/20 lg:grid-cols-2">
          {blocks.map(({ n, icon: Icon, label, title, accent, text, foot }) => (
            <article key={n} className="group flex min-h-[460px] flex-col justify-between bg-ivp-red-dark/70 p-8 backdrop-blur-sm transition duration-500 hover:bg-ivp-red-dark/40 sm:p-12">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                  <Icon size={18} strokeWidth={1.5} /> {label}
                </span>
                <span className="font-display text-6xl text-white/15 transition duration-500 group-hover:text-white/30">{n}</span>
              </div>
              <div>
                <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                  {title}
                  <span className="block italic text-white/70">{accent}</span>
                </h2>
                <p className="mt-7 max-w-md text-base leading-8 text-white/80">{text}</p>
                <p className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/55">
                  <span className="h-px w-8 bg-white/40" /> {foot}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mx-auto mt-24 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Ce qui nous anime</p>
          <h3 className="mt-6 font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Les soins ne devraient jamais dépendre
            <span className="italic text-white/65"> des circonstances.</span>
          </h3>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/75">
            Nous croyons que chaque personne mérite d’être traitée avec
            compassion, écoutée avec respect et soutenue avec dignité.
          </p>
        </div>
      </div>
    </section>
  )
}
