import { Flower2, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react'
import Reveal from '../Reveal'
import { assurances } from '../../data/mf'
import glowImg from '../../assets/mf/glow.jpg'
import ambianceImg from '../../assets/mf/ambiance.jpg'

const icons = [ShieldCheck, Flower2, HeartHandshake, MapPin]

export default function MFApproach() {
  return (
    <section className="relative overflow-hidden bg-mf-cream py-24 sm:py-32" aria-labelledby="mf-approche">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold">Notre approche</p>
            <h2 id="mf-approche" className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-mf-ink sm:text-6xl">
              La précision d’un geste médical, <span className="italic text-mf-plum">la douceur d’un soin de bien-être.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-mf-ink/10 bg-mf-ink/10 sm:grid-cols-2">
            {assurances.map(([title, text], i) => {
              const Icon = icons[i]
              return (
                <Reveal key={title} delay={i * 70} className="bg-mf-cream p-7 transition duration-500 hover:bg-white">
                  <Icon size={26} strokeWidth={1.3} className="text-mf-plum" />
                  <h3 className="mt-6 font-display text-xl text-mf-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal delay={120} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-t-[12rem] rounded-b-[2rem]">
            <img src={ambianceImg} alt="Soin de bien-être MF Médical" loading="lazy" className="aspect-[4/5] w-full object-cover object-[50%_25%]" />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-40 overflow-hidden rounded-[1.5rem] border-[8px] border-mf-cream shadow-2xl sm:block">
            <img src={glowImg} alt="Soin du visage" loading="lazy" className="aspect-square w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
