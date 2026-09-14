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
    category: 'Community Care',
    title: 'Bringing care closer to the community.',
    description:
      'When healthcare reaches people where they live, trust begins to grow. IVP believes meaningful care starts with meeting people where they are.',
    image: childrenImage,
  },
  {
    id: 2,
    category: 'Health Support',
    title: 'Small moments can make a lasting difference.',
    description:
      'A conversation, a helping hand, or access to basic healthcare can become an important moment of hope for someone facing difficult circumstances.',
    image: medicationImage,
  },
  {
    id: 3,
    category: 'Human Connection',
    title: 'Care begins with seeing the person.',
    description:
      'Beyond treatment is a simple human responsibility: listening, understanding and treating every person with dignity.',
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

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-ivp-red" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                  Stories & Impact
                </span>
              </div>

              <p className="mt-7 max-w-xs text-sm leading-7 text-gray-500">
                Behind every initiative, there are people, families and
                communities whose lives remind us why this work matters.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-ivp-black sm:text-6xl lg:text-8xl">
                The difference
                <span className="block italic font-normal text-ivp-red">
                  is measured in people.
                </span>
              </h2>
            </div>
          </div>

          {/* =====================================================
              FEATURED STORY
          ===================================================== */}

          <div className="mt-20 grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1.2fr_0.8fr]">
            {/* Image */}
            <div className="group relative min-h-[480px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
              <img
                src={featuredImage}
                alt="IVP nurse providing care to children in the community"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Image label */}
              <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
                <span className="rounded-full border border-white/30 bg-black/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  Featured story
                </span>
              </div>

              {/* Play button */}
              <button
                type="button"
                onClick={() =>
                  setActiveStory({
                    title: 'Stories from the field',
                    video: true,
                  })
                }
                className="absolute right-7 top-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ivp-red shadow-xl transition duration-300 hover:scale-105 sm:right-9 sm:top-9"
                aria-label="Play story video"
              >
                <Play size={19} fill="currentColor" className="ml-0.5" />
              </button>

              {/* Bottom caption */}
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Care in action
                </p>

                <h3 className="mt-3 max-w-2xl font-serif text-3xl leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                  Showing up for the people who need us.
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
                  Why it matters
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-ivp-black sm:text-4xl">
                  Healthcare is about more than treatment.
                </h3>

                <div className="mt-7 space-y-5 text-sm leading-7 text-gray-500 sm:text-base">
                  <p>
                    For many communities, access to healthcare can be
                    complicated by distance, resources and circumstances.
                  </p>

                  <p>
                    IVP's vision is rooted in bringing compassionate care closer
                    to people while creating an environment where individuals
                    feel seen, heard and respected.
                  </p>

                  <p>
                    Every visit, conversation and act of support is an
                    opportunity to create a meaningful human connection.
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-gray-200 pt-7">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Our belief
                    </p>

                    <p className="mt-2 font-serif text-xl text-ivp-black">
                      Every person deserves compassionate care.
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

          <div className="mx-auto max-w-4xl py-24 text-center sm:py-32">
            <Quote size={38} strokeWidth={1} className="mx-auto text-ivp-red" />

            <blockquote className="mt-7 font-serif text-3xl leading-tight tracking-[-0.025em] text-ivp-black sm:text-4xl lg:text-5xl">
              “When care reaches the community,
              <span className="italic font-normal text-ivp-red">
                {' '}
                hope has a place to grow.
              </span>
              ”
            </blockquote>

            <div className="mx-auto mt-8 h-px w-12 bg-gray-300" />

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              The IVP approach
            </p>
          </div>

          {/* =====================================================
              STORY GRID
          ===================================================== */}

          <div>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                  From the field
                </p>

                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-ivp-black sm:text-4xl">
                  Moments that matter.
                </h3>
              </div>

              <Link
                to="/gallery"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-ivp-black"
              >
                Explore the gallery
                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                      Read story
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

          <div className="mt-20 overflow-hidden rounded-[2rem] bg-ivp-red px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  The bigger picture
                </p>

                <h3 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  One act of care can become
                  <span className="italic font-normal">
                    {' '}
                    a ripple of change.
                  </span>
                </h3>
              </div>

              <Link
                to="/donate"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ivp-red transition duration-300 hover:bg-white/90"
              >
                Support the work
                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/15 pt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 sm:grid-cols-3">
              <span>Healthcare</span>
              <span>Community</span>
              <span>Humanity</span>
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
              aria-label="Close story"
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
                    Stories from the field
                  </p>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">
                    Replace this placeholder with an IVP field video when your
                    final footage is ready.
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

                  <div className="mt-8 border-t border-gray-200 pt-7">
                    <p className="text-sm leading-7 text-gray-500">
                      This story section currently uses placeholder copy.
                      Replace it with real IVP experiences, community stories,
                      testimonials or field reports when they are available.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
