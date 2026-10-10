import { HandHeart, Heart, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'

const values = [
  {
    title: 'Compassion',
    description: 'Nous accueillons chaque personne avec empathie, patience et un réel souci de son bien-être.',
    icon: Heart,
  },
  {
    title: 'Dignité',
    description: 'Chaque personne mérite d’être vue, entendue et respectée, quelles que soient ses circonstances.',
    icon: HandHeart,
  },
  {
    title: 'Communauté',
    description: 'Un soin qui compte commence par comprendre les communautés que nous servons et par travailler à leurs côtés.',
    icon: UsersRound,
  },
  {
    title: 'Accessibilité',
    description: 'Nous nous efforçons de rapprocher le soutien des personnes et de réduire les obstacles qui les séparent des soins.',
    icon: ShieldCheck,
  },
  {
    title: 'Engagement',
    description: 'Nous restons dévoués, avec constance et responsabilité, pour un changement positif et durable.',
    icon: Sparkles,
  },
]

export default function OurValues() {
  return (
    <section className="bg-[#151313] py-24 text-white sm:py-32 lg:py-40" aria-labelledby="valeurs">
      <div className="container-page grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Sticky intro */}
        <div className="reveal lg:sticky lg:top-32 lg:self-start">
          <p className="section-label text-ivp-red">Nos valeurs</p>
          <h2 id="valeurs" className="mt-7 font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
            Les principes
            <span className="block italic text-white/45">derrière le soin.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-8 text-white/55">
            La manière de soigner compte autant que le soin lui-même. Ces
            principes guident notre rencontre avec les personnes, notre travail
            au sein des communautés et notre façon d’agir.
          </p>
          <p className="mt-10 border-l-2 border-ivp-red pl-5 font-display text-xl leading-8 text-white/80">
            « La qualité de nos soins commence par le regard que nous portons
            sur les personnes que nous servons. »
          </p>
        </div>

        {/* Values */}
        <ol className="reveal border-t border-white/10">
          {values.map(({ title, description, icon: Icon }, i) => (
            <li key={title} className="group grid gap-5 border-b border-white/10 py-9 transition duration-500 hover:bg-white/[0.04] sm:grid-cols-[70px_1fr] sm:gap-8 sm:px-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white/60 transition duration-500 group-hover:border-ivp-red group-hover:bg-ivp-red group-hover:text-white">
                <Icon size={22} strokeWidth={1.4} />
              </span>
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-ivp-red">0{i + 1}</span>
                  <h3 className="font-display text-3xl tracking-[-0.02em] transition duration-500 group-hover:translate-x-1 sm:text-4xl">{title}</h3>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/50 transition duration-500 group-hover:text-white/75 sm:text-base">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
