import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'

import childrenImage from '../../assets/children.jpg'
import communityImage from '../../assets/community.jpg'
import eldersImage from '../../assets/elders.jpg'
import medicationImage from '../../assets/medication.jpg'
import aboutHeroImage from '../../assets/about-hero.jpg'
import aboutSmallImage from '../../assets/heroImage.jpg'

const galleryImages = [
  {
    id: 1,
    image: childrenImage,
    category: 'Community Care',
    title: 'Care that reaches people',
    size: 'large',
  },
  {
    id: 2,
    image: communityImage,
    category: 'Community',
    title: 'Together in care',
    size: 'small',
  },
  {
    id: 3,
    image: eldersImage,
    category: 'People',
    title: 'Dignity at every stage of life',
    size: 'small',
  },
  {
    id: 4,
    image: medicationImage,
    category: 'Healthcare',
    title: 'Supporting healthier communities',
    size: 'wide',
  },
  {
    id: 5,
    image: aboutHeroImage,
    category: 'Nursing',
    title: 'Compassion in action',
    size: 'tall',
  },
  {
    id: 6,
    image: aboutSmallImage,
    category: 'Community',
    title: 'People at the heart of our work',
    size: 'small',
  },
]

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === 0 ? galleryImages.length - 1 : current - 1
    })
  }

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === galleryImages.length - 1 ? 0 : current + 1
    })
  }

  /*
   * Keyboard navigation
   */
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  return (
    <>
      <section className="overflow-hidden bg-[#f7f5f2] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* ================================================
              HEADER
          ================================================= */}

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-ivp-red" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                  Photo Gallery
                </span>
              </div>

              <p className="mt-6 max-w-xs text-sm leading-7 text-gray-500">
                A collection of moments, people and communities connected
                through care.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-ivp-black sm:text-6xl lg:text-7xl">
                Moments worth
                <span className="block italic font-normal text-ivp-red">
                  remembering.
                </span>
              </h2>
            </div>
          </div>

          {/* ================================================
              GALLERY INTRO
          ================================================= */}

          <div className="mt-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-end">
            <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              These images represent the people and moments at the heart of
              IVP's work. Each photograph tells a small part of a larger story
              about healthcare, dignity and community.
            </p>

            <span className="font-serif text-5xl text-ivp-red/20 sm:text-6xl">
              06
            </span>
          </div>

          {/* ================================================
              EDITORIAL GRID
          ================================================= */}

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
            {galleryImages.map((item, index) => {
              /*
               * Desktop layout
               */
              let gridClasses = ''

              switch (item.size) {
                case 'large':
                  gridClasses = 'lg:col-span-7 lg:row-span-2'
                  break

                case 'small':
                  gridClasses = 'lg:col-span-5'
                  break

                case 'wide':
                  gridClasses = 'lg:col-span-7'
                  break

                case 'tall':
                  gridClasses = 'lg:col-span-5 lg:row-span-2'
                  break

                default:
                  gridClasses = 'lg:col-span-5'
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative overflow-hidden rounded-[1.75rem] bg-gray-200 text-left ${gridClasses}`}
                >
                  {/* Image */}
                  <div
                    className={`
                      relative overflow-hidden
                      ${
                        item.size === 'large'
                          ? 'h-[620px] lg:h-full'
                          : item.size === 'tall'
                            ? 'h-[620px] lg:h-full'
                            : item.size === 'wide'
                              ? 'h-[420px]'
                              : 'h-[360px]'
                      }
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.045]"
                    />

                    {/* Dark hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                    {/* Top information */}
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                      <span className="rounded-full border border-white/25 bg-black/10 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {item.category}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ivp-red opacity-0 transition duration-500 group-hover:opacity-100">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    {/* Bottom information */}
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                            0{item.id}
                          </p>

                          <h3 className="mt-2 max-w-md font-serif text-2xl leading-tight text-white sm:text-3xl">
                            {item.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="shrink-0 text-white/70 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* ================================================
              GALLERY FOOTER
          ================================================= */}

          <div className="mt-14 flex flex-col gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-gray-500">
              More stories and photographs from IVP's work will be added as our
              community continues to grow.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                People · Care · Community
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={closeLightbox}
        >
          {/* Main lightbox */}
          <div
            className="relative flex h-full max-h-[900px] w-full max-w-7xl flex-col overflow-hidden rounded-[1.5rem] bg-[#151313] lg:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-ivp-black"
              aria-label="Close image"
            >
              <X size={19} />
            </button>

            {/* Image */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Information */}
            <div className="flex w-full shrink-0 flex-col justify-between bg-[#151313] p-7 text-white sm:p-10 lg:w-[360px] lg:p-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ivp-red">
                  {selectedImage.category}
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                  {selectedImage.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  A moment captured through the work and community of IVP —
                  Infirmières des Voies Publiques.
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-10">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Image
                  </span>

                  <span className="font-serif text-2xl text-white/40">
                    {String(selectedIndex + 1).padStart(2, '0')}
                    <span className="mx-1 text-white/15">/</span>
                    {String(galleryImages.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="flex h-12 flex-1 items-center justify-center rounded-full border border-white/15 text-white transition duration-300 hover:border-white hover:bg-white hover:text-ivp-black"
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="flex h-12 flex-1 items-center justify-center rounded-full bg-ivp-red text-white transition duration-300 hover:bg-white hover:text-ivp-red"
                    aria-label="Next image"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
