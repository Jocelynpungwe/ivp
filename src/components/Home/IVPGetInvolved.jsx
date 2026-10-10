import { Link } from 'react-router-dom'
import { ArrowUpRight, Handshake, Heart, HandHeart } from 'lucide-react'
import Reveal from '../Reveal'
import img1 from '../../assets/img18.jpg'
import img2 from '../../assets/img20.jpg'
import img3 from '../../assets/img14.jpeg'

export default function IVPGetInvolved() {
  return (
    <section className="bg-[#151313] py-24 text-white sm:py-32" aria-labelledby="agir-title">
      <div className="container-page">
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-label text-ivp-red">Comment vous pouvez aider</p>
            <h2 id="agir-title" className="mt-5 font-display text-4xl leading-[1.04] tracking-tight sm:text-6xl">
              Il existe plus d’une <span className="italic text-white/55">façon de prendre soin.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-white/60">
            Que vous fassiez un don, deveniez bénévole ou établissiez un partenariat, votre engagement nous aide à placer l’humain au cœur des soins.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <Reveal>
            <article className="flex h-full flex-col justify-between rounded-[1.75rem] bg-ivp-red p-8 sm:p-10">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ivp-red"><Heart size={20} fill="currentColor" /></span>
                <h3 className="mt-8 font-display text-3xl leading-tight sm:text-4xl">Votre soutien peut devenir un soin pour quelqu’un.</h3>
                <p className="mt-4 text-sm leading-7 text-white/80">Chaque contribution renforce l’action de l’IVP et son engagement pour des soins empreints de compassion.</p>
              </div>
              <Link to="/don" className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ivp-red transition hover:bg-white/90">
                Faire un don à l’IVP <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </article>
          </Reveal>

          {[
            [HandHeart, 'Devenir bénévole', 'Offrez votre temps, vos compétences et votre compassion pour renforcer l’action de l’IVP.'],
            [Handshake, 'Devenir partenaire', 'Bâtissons des communautés plus fortes grâce à la collaboration, au soutien et à un objectif commun.'],
          ].map(([Icon, title, text], i) => (
            <Reveal key={title} delay={(i + 1) * 100}>
              <Link to="/contact" className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/15 p-8 transition duration-500 hover:border-ivp-red hover:bg-white/[0.04]">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition duration-500 group-hover:border-ivp-red group-hover:bg-ivp-red"><Icon size={20} strokeWidth={1.5} /></span>
                  <h3 className="mt-8 font-display text-3xl leading-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{text}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition group-hover:text-white">
                  Nous contacter <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Gallery teaser */}
        <Reveal className="mt-4">
          <Link to="/galerie" className="group relative block overflow-hidden rounded-[1.75rem]" aria-label="Voir la galerie">
            <div className="grid grid-cols-3 gap-1">
              {[img1, img2, img3].map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" className="h-40 w-full object-cover transition duration-[1200ms] group-hover:scale-105 sm:h-56" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/45 transition duration-500 group-hover:bg-black/30">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ivp-red">
                Voir la galerie <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
