import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Heart, Users, Stethoscope, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const impactStats = [
  {
    number: 500,
    label: 'Personnes accompagnées',
    description:
      'Des personnes ayant bénéficié de soins, de soutien et d’actions communautaires.',
    icon: Users,
  },
  {
    number: 350,
    label: 'Interventions médicales',
    description:
      'Des interventions où des soins de santé empreints de compassion ont fait la différence.',
    icon: Stethoscope,
  },
  {
    number: 25,
    label: 'Initiatives communautaires',
    description:
      'Des actions de proximité mises en place pour rapprocher les soins des communautés.',
    icon: MapPin,
  },
  {
    number: 500,
    label: 'Vies soutenues',
    description:
      'Des personnes accompagnées grâce à l’engagement de l’IVP pour des soins accessibles et humains.',
    icon: Heart,
  },
]

export default function ImpactHome() {
  const [hasStarted, setHasStarted] = useState(false)
  const statsRef = useRef(null)

  // Start animation when stats enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
      },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden bg-ivp-red py-24 text-white sm:py-28 lg:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-white/30" />

      <div className="container-page relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          {/* Eyebrow */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/50" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Notre impact
              </p>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/65">
              Derrière chaque chiffre se trouve une personne, une famille et un
              moment de solidarité qui compte.
            </p>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.8rem]">
              Chaque geste de soin
              <br />
              <span className="text-white/55">
                crée une onde de changement.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Grâce à des soins de santé empreints de compassion et à notre
              soutien communautaire, l’IVP continue d’œuvrer pour faire une
              différence significative dans la vie des personnes qu’elle
              accompagne.
            </p>
          </div>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div
          ref={statsRef}
          className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <ImpactStat
                key={stat.label}
                stat={stat}
                index={index}
                hasStarted={hasStarted}
              />
            )
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-14 border-t border-white/20 pt-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20">
                <Heart size={15} fill="currentColor" />
              </div>

              <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Nous mesurons notre impact non seulement par ce que nous
                apportons, mais aussi par les personnes que nous atteignons et
                la dignité que nous contribuons à préserver.
              </p>
            </div>

            <Link
              to="/about"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ivp-red transition-all duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Découvrez notre impact
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivp-red/10 transition group-hover:bg-white/10">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =============================================================
   IMPACT STAT
============================================================= */

function ImpactStat({ stat, index, hasStarted }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!hasStarted) return

    const duration = 1800
    const startTime = performance.now()

    let animationFrame

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easedProgress * stat.number))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(stat.number)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, stat.number])

  const Icon = stat.icon

  return (
    <div
      className={`group relative py-9 sm:px-7 lg:min-h-[300px] lg:px-8 ${
        index !== 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''
      } ${index === 2 ? 'lg:border-l' : ''}`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.16em] text-white/40">
          0{index + 1}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ivp-red">
          <Icon size={17} strokeWidth={1.6} />
        </div>
      </div>

      {/* Number */}
      <div className="mt-14">
        <p className="font-display text-5xl tracking-[-0.04em] sm:text-6xl lg:text-[4.5rem]">
          {count}+
        </p>

        <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/90">
          {stat.label}
        </h3>

        <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
          {stat.description}
        </p>
      </div>
    </div>
  )
}
