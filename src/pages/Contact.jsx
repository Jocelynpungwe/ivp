import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, CalendarHeart, CheckCircle2, Facebook, HandHeart, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { MF, paid, services } from '../data/mf'
import ivpHero from '../assets/img16.jpeg'
import mfHero from '../assets/mf/hero.jpg'

const FACEBOOK = 'https://www.facebook.com/profile.php?id=100091649801529'

const niches = {
  ivp: {
    label: 'IVP',
    sub: 'Mission solidaire',
    icon: HandHeart,
    tab: 'bg-ivp-red text-white',
    button: 'bg-ivp-red hover:bg-ivp-red-dark text-white',
    accent: 'text-ivp-red',
    soft: 'bg-ivp-red-soft text-ivp-red',
    focus: 'focus:border-ivp-red',
    panel: 'bg-[#f7f5f2]',
    title: 'Parlons de votre engagement.',
    text: 'Une question sur l’IVP, l’envie de devenir bénévole ou partenaire, ou de soutenir nos soins gratuits aux plus démunis ? Écrivez-nous.',
    reasons: ['Demande d’information', 'Devenir bénévole', 'Devenir partenaire', 'Soutenir l’IVP / faire un don', 'Autre'],
    place: 'Organisation congolaise à but non lucratif (asbl)',
    placeSub: 'Des soins infirmiers au service des communautés vulnérables',
  },
  mf: {
    label: 'MF Médical',
    sub: 'Soins esthétiques',
    icon: Sparkles,
    tab: 'bg-mf-plum text-white',
    button: 'bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] text-mf-ink hover:brightness-105',
    accent: 'text-mf-plum',
    soft: 'bg-mf-blush text-mf-plum',
    focus: 'focus:border-mf-plum',
    panel: 'bg-mf-cream',
    title: 'Prenez rendez-vous.',
    text: 'Un soin à réserver, une question sur un traitement ? Dites-nous ce qui vous ferait du bien, nous revenons vers vous.',
    reasons: ['Prendre rendez-vous', 'Question sur un soin', 'Autre'],
    place: 'Bruxelles et Kinshasa',
    placeSub: 'Infirmière esthéticienne diplômée en Belgique',
  },
}

const encode = (data) => new URLSearchParams(data).toString()

const fieldClass = (focus) =>
  `w-full border-b border-black/15 bg-transparent px-0 py-3.5 text-sm text-neutral-900 outline-none transition placeholder:text-black/30 ${focus}`
const labelClass = 'mb-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45'

export default function Contact() {
  useDocumentMeta(
    'Contact — IVP & MF Médical',
    'Contactez l’IVP (soins infirmiers solidaires) ou prenez rendez-vous avec MF Médical (soins esthétiques & bien-être à Bruxelles et Kinshasa).',
  )
  const [params] = useSearchParams()
  const [niche, setNiche] = useState(params.get('sujet') === 'soins' ? 'mf' : 'ivp')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const initialService = services.find((x) => x.id === params.get('soin'))
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    reason: params.get('sujet') === 'soins' && initialService ? 'Prendre rendez-vous' : '',
    service: initialService ? initialService.title : '',
    message: '', 'bot-field': '',
  })
  const t = niches[niche]

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const switchNiche = (key) => {
    setNiche(key)
    setStatus('idle')
    setForm((f) => ({ ...f, reason: '', service: '' }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', activite: niches[niche].label, ...form }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setForm({ firstName: '', lastName: '', email: '', phone: '', reason: '', service: '', message: '', 'bot-field': '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 -z-10 grid grid-cols-2">
          <img src={ivpHero} alt="" className="hero-zoom h-full w-full origin-top scale-[1.2] object-cover object-[50%_0%]" />
          <img src={mfHero} alt="" className="hero-zoom h-full w-full object-cover object-[50%_25%]" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40" />
        <div className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-ivp-red-dark/40 mix-blend-multiply" />
        <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-mf-plum-dark/50 mix-blend-multiply" />

        <div className="container-page flex min-h-[62svh] flex-col items-center justify-end pb-16 pt-28 text-center sm:pb-20">
          <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80" style={{ '--d': '0ms' }}>
            <span className="h-px w-8 bg-white/50" /> Contact <span className="h-px w-8 bg-white/50" />
          </p>
          <h1 className="hero-in mt-6 font-display text-6xl leading-[0.95] tracking-[-0.04em] sm:text-8xl" style={{ '--d': '140ms' }}>
            Parlons-en<span className="italic text-white/60">.</span>
          </h1>
          <p className="hero-in mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg" style={{ '--d': '280ms' }}>
            Deux façons de prendre soin, un seul endroit pour nous écrire.
          </p>
        </div>
      </section>

      {/* ============ MAIN ============ */}
      <section className="bg-white py-20 sm:py-28" aria-label="Formulaire de contact">
        <div className="container-page">
          {/* Niche selector */}
          <Reveal className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2" role="tablist" aria-label="Qui souhaitez-vous contacter ?">
            {Object.entries(niches).map(([key, n]) => {
              const Icon = n.icon
              const on = niche === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => switchNiche(key)}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition duration-500 ${on ? `${n.tab} border-transparent shadow-xl` : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'}`}
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${on ? 'bg-white/20' : n.soft}`}><Icon size={22} /></span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">{n.sub}</span>
                    <span className="block font-display text-2xl leading-tight">{n.label}</span>
                  </span>
                </button>
              )
            })}
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Info */}
            <div>
              <p className={`section-label ${t.accent}`}>{t.label}</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl">{t.title}</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-neutral-500">{t.text}</p>

              {niche === 'mf' && (
                <p className="mt-6 max-w-md rounded-2xl border border-mf-plum/20 bg-mf-blush px-5 py-4 text-sm leading-6 text-mf-plum-dark">
                  <strong>{paid.short}.</strong> {paid.prices}
                </p>
              )}

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${t.soft}`}><MapPin size={19} /></span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">Où</p>
                    <p className="mt-1 text-base font-medium">{t.place}</p>
                    <p className="mt-0.5 text-sm text-black/45">{t.placeSub}</p>
                  </div>
                </li>
                {niche === 'mf' && MF.whatsapp && (
                  <li className="flex gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${t.soft}`}><MessageCircle size={19} /></span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">WhatsApp</p>
                      <a href={`https://wa.me/${MF.whatsapp}`} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-base font-medium hover:underline">
                        Écrire sur WhatsApp <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </li>
                )}
                {niche === 'ivp' && (
                  <li className="flex gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${t.soft}`}><Facebook size={19} /></span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">Suivez l’IVP</p>
                      <a href={FACEBOOK} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-base font-medium hover:underline">
                        Page Facebook <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Form */}
            <div className={`rounded-[2rem] p-6 transition-colors duration-700 sm:p-10 lg:p-12 ${t.panel}`}>
              {status === 'sent' ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center" role="status">
                  <span className={`flex h-20 w-20 items-center justify-center rounded-full ${niche === 'ivp' ? 'bg-ivp-red text-white' : 'bg-mf-plum text-white'}`}><CheckCircle2 size={36} strokeWidth={1.5} /></span>
                  <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.25em] ${t.accent}`}>Message envoyé</p>
                  <h3 className="mt-3 max-w-md font-display text-4xl leading-tight">Merci pour votre message.</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-black/55">Nous vous répondrons dès que possible.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="mt-8 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <p className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] ${t.accent}`}>Écrire à {t.label}</p>
                      <h3 className="font-display text-3xl sm:text-4xl">Commençons la conversation.</h3>
                    </div>
                  </div>

                  {/* honeypot */}
                  <p className="hidden"><label>Ne pas remplir <input name="bot-field" value={form['bot-field']} onChange={onChange} tabIndex={-1} autoComplete="off" /></label></p>

                  <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>Prénom</label>
                      <input id="firstName" name="firstName" value={form.firstName} onChange={onChange} required autoComplete="given-name" placeholder="Votre prénom" className={fieldClass(t.focus)} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>Nom</label>
                      <input id="lastName" name="lastName" value={form.lastName} onChange={onChange} required autoComplete="family-name" placeholder="Votre nom" className={fieldClass(t.focus)} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Adresse e-mail</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="vous@exemple.com" className={fieldClass(t.focus)} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Téléphone <span className="normal-case tracking-normal text-black/30">(facultatif)</span></label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" placeholder="+32 …" className={fieldClass(t.focus)} />
                    </div>
                    <div className={niche === 'mf' ? '' : 'md:col-span-2'}>
                      <label htmlFor="reason" className={labelClass}>Comment pouvons-nous vous aider ?</label>
                      <select id="reason" name="reason" value={form.reason} onChange={onChange} required className={`${fieldClass(t.focus)} cursor-pointer`}>
                        <option value="" disabled>Choisir une option</option>
                        {t.reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    {niche === 'mf' && (
                      <div>
                        <label htmlFor="service" className={labelClass}>Soin souhaité <span className="normal-case tracking-normal text-black/30">(facultatif)</span></label>
                        <select id="service" name="service" value={form.service} onChange={onChange} className={`${fieldClass(t.focus)} cursor-pointer`}>
                          <option value="">Je ne sais pas encore</option>
                          {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                        </select>
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <label htmlFor="message" className={labelClass}>Votre message</label>
                      <textarea id="message" name="message" value={form.message} onChange={onChange} required rows="5" placeholder="Dites-nous en quelques mots comment nous pouvons vous aider…" className={`${fieldClass(t.focus)} resize-none leading-7`} />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
                      Le message n’a pas pu être envoyé pour le moment. Veuillez réessayer, ou nous écrire via{' '}
                      <a href={FACEBOOK} target="_blank" rel="noreferrer" className="font-semibold underline">Facebook</a>.
                    </p>
                  )}

                  <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-[11px] leading-5 text-black/40">
                      En envoyant ce formulaire, vous acceptez d’être recontacté(e) au sujet de votre demande.
                    </p>
                    <button type="submit" disabled={status === 'sending'} className={`group inline-flex shrink-0 items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold transition duration-300 disabled:opacity-60 ${t.button}`}>
                      {status === 'sending' ? 'Envoi en cours…' : niche === 'mf' ? <><CalendarHeart size={16} /> Demander un rendez-vous</> : <>Envoyer le message <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
