import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import nurseImage from '../../assets/about-hero.jpg'
import eldersImage from '../../assets/elders.jpg'

export default function OurStory() {
  return (
    <>
      {/* Manifeste */}
      <section className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="manifeste">
        <div className="container-page">
          <div className="reveal mx-auto max-w-5xl text-center">
            <p className="section-label justify-center text-ivp-red">Notre histoire</p>
            <h2 id="manifeste" className="mt-8 font-display text-4xl leading-[1.05] tracking-[-0.03em] text-ivp-black sm:text-6xl lg:text-7xl">
              Chaque personne mérite des soins,{' '}
              <span className="italic text-ivp-red">de la dignité</span> et de l’attention.
            </h2>
            <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              L’IVP est née d’une conviction simple : chacun mérite un accès à
              des soins bienveillants et à la dignité qui les accompagne.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire en images */}
      <section className="overflow-hidden bg-[#f7f5f2] py-24 sm:py-32">
        <div className="container-page grid items-center gap-20 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="reveal relative mx-auto w-full max-w-lg pb-16 lg:max-w-none">
            <div className="w-[74%] overflow-hidden rounded-[2rem]">
              <img src={nurseImage} alt="Une infirmière de l’IVP auprès des enfants" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[54%] overflow-hidden rounded-[1.75rem] border-[8px] border-[#f7f5f2] shadow-2xl">
              <img src={eldersImage} alt="Soins de l’IVP auprès de personnes âgées" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            {/* Rotating seal */}
            <div className="absolute right-[6%] top-[4%] flex h-28 w-28 items-center justify-center rounded-full bg-ivp-red text-white shadow-xl sm:h-32 sm:w-32">
              <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0" aria-hidden="true">
                <defs><path id="seal" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                <text fontSize="10.5" letterSpacing="3.2" fill="currentColor" fontWeight="700">
                  <textPath href="#seal">SOINS · COMPASSION · DIGNITÉ ·</textPath>
                </text>
              </svg>
              <span className="font-display text-2xl">IVP</span>
            </div>
          </div>

          <div className="reveal">
            <div className="space-y-6 text-base leading-8 text-gray-600">
              <p className="font-display text-2xl leading-[1.35] tracking-[-0.01em] text-ivp-black sm:text-3xl">
                Là où le soin rejoint la communauté.
              </p>
              <p>
                Là où l’accès aux soins est difficile, un simple geste de soin
                peut changer beaucoup de choses. L’IVP rapproche les soins
                infirmiers, la compassion et le soutien communautaire de celles
                et ceux qui en ont besoin.
              </p>
              <p>
                Notre travail repose sur une conviction : la santé ne se résume
                pas à traiter une maladie. Il s’agit aussi d’écouter, de
                comprendre la situation de chacun et de traiter chaque personne
                avec respect.
              </p>
              <p>
                Des actions de proximité à l’accompagnement direct, l’IVP crée
                des moments où chacun se sent vu, soutenu et pris en charge.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-ivp-red pl-6 font-display text-xl leading-8 text-ivp-black">
              « Quand le soin atteint la communauté, l’espoir a de la place pour grandir. »
            </blockquote>

            <Link to="/contact" className="group mt-10 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.18em] text-ivp-black">
              Nous contacter
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivp-red text-white transition duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
