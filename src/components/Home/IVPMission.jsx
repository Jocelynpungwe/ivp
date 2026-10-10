import { HandHeart, HeartPulse, UsersRound } from 'lucide-react'
import Reveal from '../Reveal'
import medicationImg from '../../assets/medication.jpg'
import nurseImg from '../../assets/img21.jpg'
import communityImg from '../../assets/community.jpg'

const programs = [
  {
    icon: HeartPulse,
    title: 'Soins communautaires',
    text: 'Distribuer les médicaments de première nécessité aux orphelinats.',
    image: medicationImg,
    pos: 'object-center',
  },
  {
    icon: HandHeart,
    title: 'Soutien compatissant',
    text: 'Prendre en charge les frais médicaux de ces enfants lorsque les soins nécessitent une institution hospitalière.',
    image: nurseImg,
    pos: 'object-[15%_50%]',
  },
  {
    icon: UsersRound,
    title: 'Soins infirmiers en action',
    text: 'Implanter une représentation dans les villes où vivent le plus d’enfants en situation de rue.',
    image: communityImg,
    pos: 'object-center',
  },
]

export default function IVPMission() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="mission-title">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-label">Mission</p>
            <h2 id="mission-title" className="mt-5 font-display text-4xl leading-[1.04] tracking-tight sm:text-6xl">
              Notre mission : <span className="italic text-ivp-red">administrer les soins infirmiers</span> à ces enfants.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {programs.map(({ icon: Icon, title, text, image, pos }, i) => (
            <Reveal key={title} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ivp-red/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={image} alt={title} loading="lazy" className={`h-full w-full object-cover ${pos} transition duration-[1200ms] group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ivp-red shadow-lg"><Icon size={20} /></span>
                  <span className="absolute right-5 top-4 font-display text-4xl text-white/70">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ivp-muted">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
