import { useState } from 'react'
import { ArrowUpRight, Play, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import placeholderVideo from '../../assets/placeholder-video.mp4'

const videos = [
  {
    id: 1,
    title: 'Care in action',
    category: 'Featured Story',
    description:
      'A glimpse into the people, care and moments that inspire the work of IVP.',
    video: placeholderVideo,
  },
  {
    id: 2,
    title: 'Community & Care',
    category: 'Our Work',
    description: 'Discover the human side of healthcare and community support.',
    video: placeholderVideo,
  },
  {
    id: 3,
    title: 'People First',
    category: 'Our Stories',
    description:
      'Every person has a story. Every moment of care can make a difference.',
    video: placeholderVideo,
  },
]

export default function StoriesHome() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
        <div className="container-page">
          {/* HEADER */}
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ivp-red" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivp-red">
                  Stories From The Field
                </p>
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-ivp-muted">
                A closer look at the people, moments and work behind our
                mission.
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.7rem]">
                See care
                <br />
                <span className="text-ivp-red">in action.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-ivp-muted sm:text-lg">
                Real stories have the power to show what numbers cannot. Explore
                the moments that bring the work of IVP to life.
              </p>
            </div>
          </div>

          {/* FEATURED VIDEO */}
          <div className="group relative mt-16 overflow-hidden rounded-[2rem] bg-neutral-950">
            <div className="aspect-video">
              <video
                src={videos[0].video}
                muted
                playsInline
                controls
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Featured overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-14">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div className="max-w-2xl text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                    {videos[0].category}
                  </p>

                  <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                    {videos[0].title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                    {videos[0].description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideo(videos[0])}
                  className="pointer-events-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition duration-300 hover:scale-105 hover:bg-ivp-red hover:text-white"
                  aria-label="Play featured video"
                >
                  <Play size={19} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* VIDEO CARDS */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {videos.slice(1).map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="group relative overflow-hidden rounded-[2rem] bg-neutral-950 text-left"
              >
                <div className="aspect-video">
                  <video
                    src={video.video}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Play button */}
                <div className="absolute left-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-neutral-950">
                  <Play size={16} fill="currentColor" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {video.category}
                  </p>

                  <h3 className="mt-2 font-display text-2xl tracking-[-0.025em]">
                    {video.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Stories matter
              </p>

              <p className="mt-2 text-sm text-ivp-muted">
                Follow the journey and discover more about IVP.
              </p>
            </div>

            <Link
              to="/gallery"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-ivp-red"
            >
              View our gallery
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white group-hover:text-ivp-red">
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO LIGHTBOX */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-black"
            aria-label="Close video"
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-black">
            <video
              src={activeVideo.video}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
