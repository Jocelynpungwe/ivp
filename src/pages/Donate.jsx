import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Copy, HeartHandshake, Landmark, Smartphone } from 'lucide-react'
import Reveal from '../components/Reveal'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { bank, mobileMoney } from '../data/contact'

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* le copier-coller manuel reste possible */
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-ivp-red-dark"
    >
      {copied ? <><Check size={15} /> Copié</> : <><Copy size={15} /> Copier</>}
    </button>
  )
}

export default function Donate() {
  useDocumentMeta('Faire un don — IVP', 'Soutenez l’IVP par virement bancaire ou par mobile money (M-Pesa, Airtel Money, Orange Money) et aidez-nous à offrir des soins gratuits aux plus démunis.')

  return (
    <section className="bg-[#f7f5f2] py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center text-ivp-red">Soutenir l’IVP</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
            Transformez votre générosité <span className="italic text-ivp-red">en soins.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-500">
            Chaque don aide l’IVP à offrir gratuitement des soins aux plus démunis : orphelins, enfants de la rue, veuves, personnes âgées et personnes handicapées.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Virement bancaire */}
          <Reveal>
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-ivp-red p-8 text-white sm:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
              <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15"><Landmark size={22} /></span>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Virement bancaire</p>
                <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Faire un don depuis l’Europe.</h2>
              </div>

              <dl className="relative mt-10 space-y-6">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Numéro de compte (IBAN)</dt>
                  <dd className="mt-2 flex flex-wrap items-center gap-4">
                    <span className="font-display text-3xl tracking-wide sm:text-4xl">{bank.iban}</span>
                    <CopyButton value={bank.iban.replace(/\s/g, '')} />
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Au nom de</dt>
                  <dd className="mt-2 text-xl font-medium">{bank.holder}</dd>
                </div>
              </dl>
            </article>
          </Reveal>

          {/* Mobile money */}
          <Reveal delay={120}>
            <article className="h-full rounded-[2rem] bg-white p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivp-red-soft text-ivp-red"><Smartphone size={22} /></span>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">Mobile money</p>
              <h2 className="mt-3 font-display text-3xl leading-tight">Faire un don en RDC.</h2>
              <ul className="mt-8 divide-y divide-black/10">
                {mobileMoney.map((m) => (
                  <li key={m.name} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-semibold">{m.name}</span>
                    <a href={`tel:${m.tel}`} className="text-base text-neutral-700 transition hover:text-ivp-red">{m.display}</a>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 flex max-w-5xl flex-col items-start justify-between gap-5 rounded-[2rem] border border-black/10 bg-white/60 p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivp-red-soft text-ivp-red"><HeartHandshake size={20} /></span>
            <p className="max-w-xl text-sm leading-7 text-neutral-600">
              Merci pour votre soutien. Une question sur votre don, ou l’envie de nous aider autrement (bénévolat, partenariat) ? Contactez-nous.
            </p>
          </div>
          <Link to="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-ivp-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-ivp-red">
            Nous contacter <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
