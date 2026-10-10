import { useState } from 'react'
import { ArrowUpRight, Play, Quote, Heart, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import featuredImage from '../../assets/about-hero.jpg'
import childrenImage from '../../assets/children.jpg'
import communityImage from '../../assets/community.jpg'
import medicationImage from '../../assets/medication.jpg'

const stories = [
  {
    id: 1,
    category: 'Soins communautaires',
    title: 'Rapprocher les soins de la communauté.',
    description:
      'Quand les soins atteignent les gens là où ils vivent, la confiance naît. L’IVP croit qu’un soin qui compte commence par aller à la rencontre des personnes.',
    image: childrenImage,
  },
  {
    id: 2,
    category: 'Soutien santé',
    title: 'De petits moments peuvent changer durablement les choses.',
    description:
      'Une conversation, une main tendue ou l’accès aux soins de base peuvent devenir un moment d’espoir pour quelqu’un qui traverse une épreuve.',
    image: medicationImage,
  },
  {
    id: 3,
    category: 'Lien humain',
    title: 'Le soin commence par voir la personne.',
    description:
      'Au-delà du traitement, il y a une responsabilité humaine toute simple : écouter, comprendre et traiter chaque personne avec dignité.',
    image: communityImage,
  },
]

export default function StoriesImpact() {
  const [activeStory, setActiveStory] = useState(null)

  return (
    <>
      <section className="overflow-hidden bg-[#f7f5f2] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="reveal grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-ivp-red" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                  Témoignages & impact
                </span>
              </div>

              <p className="mt-7 max-w-xs text-sm leading-7 text-gray-500">
                Derrière chaque action, il y a des personnes, des familles et
                des communautés qui nous rappellent pourquoi ce travail compte.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-ivp-black sm:text-6xl lg:text-8xl">
                La différence
                <span className="block italic font-normal text-ivp-red">
                  se mesure en personnes.
                </span>
              </h2>
            </div>
          </div>

          {/* =====================================================
              FEATURED STORY
          ===================================================== */}

          <div className="reveal mt-20 grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1.2fr_0.8fr]">
            {/* Image */}
            <div className="group relative min-h-[480px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
              <img
                src={featuredImage}
                alt="Une infirmière de l’IVP auprès des enfants de la communauté"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Image label */}
              <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
                <span className="rounded-full border border-white/30 bg-black/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  À la une
                </span>
              </div>

              {/* Play button */}
              <button
                type="button"
                onClick={() =>
                  setActiveStory({
                    title: 'Histoires du terrain',
                    video: true,
                  })
                }
                className="absolute right-7 top-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ivp-red shadow-xl transition duration-300 hover:scale-105 sm:right-9 sm:top-9"
                aria-label="Lire la vidéo"
              >
                <Play size={19} fill="currentColor" className="ml-0.5" />
              </button>

              {/* Bottom caption */}
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Le soin en action
                </p>

                <h3 className="mt-3 max-w-2xl font-serif text-3xl leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                  Être présentes pour celles et ceux qui ont besoin de nous.
                </h3>
              </div>
            </div>

            {/* Story content */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f5f2] text-ivp-red">
                  <Heart size={20} fill="currentColor" strokeWidth={1.5} />
                </div>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                  Pourquoi c’est important
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-ivp-black sm:text-4xl">
                  La santé, c’est plus que le traitement.
                </h3>

                <div className="mt-7 space-y-5 text-sm leading-7 text-gray-500 sm:text-base">
                  <p>
                    Pour de nombreuses communautés, l’accès aux soins est
                    compliqué par la distance, le manque de moyens et les
                    circonstances de vie.
                  </p>

                  <p>
                    La vision de l’IVP : rapprocher des soins bienveillants des
                    personnes, dans un cadre où chacun se sent vu, entendu et
                    respecté.
                  </p>

                  <p>
                    Chaque visite, chaque conversation, chaque geste de soutien
                    est une occasion de créer un vrai lien humain.
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-gray-200 pt-7">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Notre conviction
                    </p>

                    <p className="mt-2 font-serif text-xl text-ivp-black">
                      Chaque personne mérite des soins bienveillants.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivp-red text-white sm:flex">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              QUOTE
          ===================================================== */}

          <div className="reveal mx-auto max-w-4xl py-24 text-center sm:py-32">
            <Quote size={38} strokeWidth={1} className="mx-auto text-ivp-red" />

            <blockquote className="mt-7 font-serif text-3xl leading-tight tracking-[-0.025em] text-ivp-black sm:text-4xl lg:text-5xl">
              « Quand le soin atteint la communauté,
              <span className="italic font-normal text-ivp-red">
                {' '}
                l’espoir a de la place pour grandir.
              </span>
              »
            </blockquote>

            <div className="mx-auto mt-8 h-px w-12 bg-gray-300" />

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              L’approche de l’IVP
            </p>
          </div>

          {/* =====================================================
              STORY GRID
          ===================================================== */}

          <div>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                  Sur le terrain
                </p>

                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-ivp-black sm:text-4xl">
                  Des moments qui comptent.
                </h3>
              </div>

              <Link
                to="/galerie"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-ivp-black"
              >
                Voir la galerie
                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <article
                  key={story.id}
                  className={`group overflow-hidden rounded-[1.75rem] bg-white ${
                    index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Image */}
                  <button
                    type="button"
                    onClick={() => setActiveStory(story)}
                    className="relative block w-full overflow-hidden text-left"
                  >
                    <div className="relative h-[330px] overflow-hidden sm:h-[380px]">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

                      {/* Number */}
                      <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-xs font-semibold text-white backdrop-blur-sm">
                        0{story.id}
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ivp-red transition duration-300 group-hover:scale-105">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-7 sm:p-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ivp-red">
                      {story.category}
                    </p>

                    <h4 className="mt-4 font-serif text-2xl leading-tight tracking-[-0.025em] text-ivp-black sm:text-3xl">
                      {story.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {story.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveStory(story)}
                      className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-ivp-black"
                    >
                      Lire l’histoire
                      <ArrowUpRight
                        size={15}
                        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =====================================================
              IMPACT STATEMENT
          ===================================================== */}

          <div className="reveal mt-20 overflow-hidden rounded-[2rem] bg-ivp-red px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Vue d’ensemble
                </p>

                <h3 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Un seul geste de soin peut devenir
                  <span className="italic font-normal">
                    {' '}
                    une vague de changement.
                  </span>
                </h3>
              </div>

              <Link
                to="/don"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ivp-red transition duration-300 hover:bg-white/90"
              >
                Soutenir notre action
                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/15 pt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 sm:grid-cols-3">
              <span>Santé</span>
              <span>Communauté</span>
              <span>Humanité</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY MODAL
      ========================================================= */}

      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
              aria-label="Fermer"
            >
              <X size={19} />
            </button>

            {activeStory.video ? (
              <div className="flex aspect-video items-center justify-center bg-[#151313]">
                <div className="text-center text-white">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ivp-red">
                    <Play size={22} fill="currentColor" />
                  </div>

                  <p className="mt-6 font-serif text-3xl">
                    Histoires du terrain
                  </p>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">
                    La vidéo sera bientôt disponible.
                  </p>
                </div>
              </div>
            ) : (
              <div className="max-h-[90vh] overflow-y-auto">
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                  className="h-[350px] w-full object-cover sm:h-[480px]"
                />

                <div className="p-7 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                    {activeStory.category}
                  </p>

                  <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] text-ivp-black sm:text-4xl">
                    {activeStory.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500">
                    {activeStory.description}
                  </p>

                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
