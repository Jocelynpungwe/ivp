import { useEffect, useState } from 'react'
import { ArrowUpRight, Play, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import placeholderVideo from '../../assets/placeholder-video.mp4'

const videos = [
  {
    id: 1,
    title: 'Care in the community',
    category: 'Community Care',
    description:
      'A glimpse into the people, moments and connections that make community care meaningful.',
    video: placeholderVideo,
  },
  {
    id: 2,
    title: 'Every person matters',
    category: 'People & Care',
    description:
      'Healthcare is about more than treatment. It is about listening, dignity and human connection.',
    video: placeholderVideo,
  },
  {
    id: 3,
    title: 'Together we care',
    category: 'IVP In Action',
    description:
      'See how compassion and community come together to create moments of support and hope.',
    video: placeholderVideo,
  },
]

export default function VideoStories() {
  const [activeVideo, setActiveVideo] = useState(null)

  useEffect(() => {
    if (!activeVideo) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveVideo(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  return (
    <>
      <section className="bg-[#f7f5f2] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          {/* HEADER */}
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-ivp-red" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                  Video Stories
                </span>
              </div>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-ivp-black md:text-6xl lg:text-7xl">
                See the moments
                <br />
                <span className="italic">behind the mission.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/60 md:text-base">
              Stories from the people, communities and moments that remind us
              why compassionate healthcare matters.
            </p>
          </div>

          {/* VIDEO GRID */}
          <div className="grid gap-6 lg:grid-cols-3">
            {videos.map((item, index) => (
              <article
                key={item.id}
                className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                {/* VIDEO */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(item)}
                  className={`relative block w-full overflow-hidden rounded-[1.75rem] bg-black text-left ${
                    index === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'
                  }`}
                >
                  <video
                    src={item.video}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10 transition duration-500 group-hover:from-black/65" />

                  {/* NUMBER */}
                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-medium text-white backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* PLAY BUTTON */}
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-ivp-red shadow-2xl transition duration-500 group-hover:scale-110">
                      <Play size={22} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  {/* BOTTOM INFO */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      {item.category}
                    </p>

                    <h3 className="max-w-xl font-serif text-3xl leading-tight text-white md:text-4xl">
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* DESCRIPTION */}
                <div className="flex items-start justify-between gap-6 px-2 pt-5">
                  <p className="max-w-md text-sm leading-6 text-black/55">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-ivp-red transition hover:bg-ivp-red hover:text-white"
                    aria-label={`Play ${item.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-10 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                More from IVP
              </p>

              <p className="font-serif text-2xl text-ivp-black md:text-3xl">
                Explore more moments from our work.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ivp-red px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#151313]"
            >
              Connect with IVP
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FULLSCREEN VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveVideo(null)
            }
          }}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:right-8 md:top-8"
            aria-label="Close video"
          >
            <X size={22} />
          </button>

          {/* VIDEO CONTENT */}
          <div className="w-full max-w-6xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-black shadow-2xl md:rounded-[2rem]">
              <video
                key={activeVideo.id}
                src={activeVideo.video}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] w-full object-contain"
              />
            </div>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                {activeVideo.category}
              </p>

              <h3 className="font-serif text-3xl text-white md:text-4xl">
                {activeVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
