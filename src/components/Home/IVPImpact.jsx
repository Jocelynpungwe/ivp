import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'

const stats = [
  [500, 'Personnes accompagnées', 'Des personnes ayant bénéficié de soins, de soutien et d’actions communautaires.'],
  [350, 'Interventions médicales', 'Des interventions où des soins empreints de compassion ont fait la différence.'],
  [25, 'Initiatives communautaires', 'Des actions de proximité pour rapprocher les soins des communautés.'],
]

function Counter({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduce || typeof IntersectionObserver === 'undefined') {
      setN(to)
      return
    }
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1600, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return <span ref={ref}>{n}+</span>
}

export default function IVPImpact() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="impact-title">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Notre impact</p>
          <h2 id="impact-title" className="mt-5 font-display text-4xl leading-[1.04] tracking-tight sm:text-6xl">
            Chaque geste de soin <span className="italic text-ivp-red">crée une onde de changement.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-200 md:grid-cols-3">
          {stats.map(([n, label, text], i) => (
            <Reveal key={label} delay={i * 100} className="bg-white p-9 text-center transition duration-500 hover:bg-ivp-red-soft/40 sm:p-12">
              <p className="font-display text-7xl leading-none tracking-tight text-ivp-red sm:text-8xl"><Counter to={n} /></p>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.2em]">{label}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ivp-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-7 text-ivp-muted">
          Derrière chaque chiffre, il y a une personne, une famille et un moment de solidarité qui compte.
        </p>
      </div>
    </section>
  )
}
