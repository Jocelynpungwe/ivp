import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CalendarHeart,
  Coins,
  Flower2,
  HandHeart,
  HeartHandshake,
  Images,
  MapPin,
  MessageCircleQuestion,
  Plus,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import BookingButton from '../components/BookingButton'
import MFPhotoStrip from '../components/Home/MFPhotoStrip'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { services, assurances, MF as brand, paid } from '../data/mf'
import heroImg from '../assets/mf/hero.jpg'
import ambianceImg from '../assets/mf/ambiance.jpg'
import glowImg from '../assets/mf/glow.jpg'
import facialImg from '../assets/mf/facial.jpg'

const icons = [ShieldCheck, Flower2, HeartHandshake, MapPin]

const goldBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9cf98] via-[#c9a05a] to-[#e9cf98] px-8 py-4 text-sm font-bold tracking-wide text-mf-ink shadow-[0_10px_40px_-10px_rgba(201,160,90,0.6)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_rgba(201,160,90,0.85)]'
const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition duration-500 hover:border-mf-gold-soft hover:text-mf-gold-soft'

const steps = [
  { icon: CalendarHeart, title: 'Prenez rendez-vous', text: 'Écrivez-nous en indiquant le soin qui vous intéresse : nous revenons vers vous pour convenir d’un rendez-vous.' },
  { icon: HandHeart, title: 'Écoute et conseil', text: 'Chaque soin est personnalisé. Nous prenons le temps de comprendre vos besoins, dans l’écoute et la bienveillance.' },
  { icon: Stethoscope, title: 'Votre soin', text: 'Réalisé avec professionnalisme, sécurité et douceur, avec des produits de qualité et du matériel certifié.' },
  { icon: Sparkles, title: 'Les résultats', text: 'Visibles dès la première séance pour le blanchiment dentaire, progressifs et durables pour le lifting colombien.' },
]

const practical = [
  { icon: MapPin, title: 'Où ?', text: 'À Bruxelles et à Kinshasa.' },
  { icon: CalendarHeart, title: 'Comment réserver ?', text: 'Sur rendez-vous uniquement, via le bouton « Prendre rendez-vous » ou le formulaire de contact.' },
  { icon: Coins, title: 'Et les tarifs ?', text: paid.prices },
]

const faq = [
  { q: 'Les soins MF Médical sont-ils gratuits ?', a: `Non. ${paid.sentence} ${paid.prices} ${paid.ivp}` },
  { q: 'Qui réalise les soins ?', a: 'Les soins sont réalisés par une infirmière esthéticienne diplômée en Belgique, avec professionnalisme, sécurité et douceur.' },
  { q: 'Où ont lieu les soins ?', a: 'À Bruxelles et à Kinshasa, sur rendez-vous.' },
  { q: 'Comment prendre rendez-vous ?', a: 'Cliquez sur « Prendre rendez-vous », indiquez le soin souhaité et vos coordonnées : nous vous recontactons pour convenir d’un créneau.' },
  { q: 'Que fait le PRP ?', a: 'Le PRP utilise vos propres plaquettes sanguines pour stimuler la régénération cellulaire. Il améliore la qualité de la peau, réduit les rides, les cicatrices et les taches, et favorise la repousse des cheveux en renforçant le cuir chevelu.' },
  { q: 'Le lifting colombien est-il invasif ?', a: 'Non. C’est une technique non invasive et naturelle qui stimule la production de collagène pour remodeler, raffermir et améliorer la tonicité des fessiers. Les résultats sont progressifs et durables.' },
  { q: 'Quand voit-on le résultat du blanchiment dentaire ?', a: 'Le résultat est visible dès la première séance. Le procédé est sûr et contrôlé, et élimine les taches liées au café, au thé ou au tabac.' },
  { q: 'Mes soins sont-ils sûrs ?', a: 'Oui : les soins sont sûrs et personnalisés, réalisés avec des produits de qualité et du matériel certifié.' },
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {faq.map((f, i) => {
        const on = open === i
        return (
          <li key={f.q}>
            <button type="button" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} className="group flex w-full items-center gap-5 py-6 text-left">
              <span className={`flex-1 font-display text-xl leading-snug transition sm:text-2xl ${on ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>{f.q}</span>
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-500 ${on ? 'rotate-45 border-mf-gold bg-mf-gold text-mf-ink' : 'border-white/20 text-white/60'}`}>
                <Plus size={18} />
              </span>
            </button>
            <div className={`grid transition-all duration-500 ${on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 text-[15px] leading-7 text-white/65">{f.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default function Soins() {
  useDocumentMeta(
    'MF Médical — Soins esthétiques & bien-être à Bruxelles et Kinshasa (sur rendez-vous)',
    'Infirmière esthéticienne diplômée en Belgique : PRP, blanchiment dentaire, pédicure médicale, lifting colombien, réflexologie plantaire, massage et drainage lymphatique. Services payants, sur rendez-vous.',
  )

  return (
    <div className="bg-mf-ink">
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-mf-ink text-white">
        <div className="absolute -left-40 top-20 -z-10 h-[620px] w-[620px] rounded-full bg-mf-plum/40 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 -z-10 h-[520px] w-[520px] rounded-full bg-mf-gold/15 blur-[140px]" />

        <div className="container-page grid items-center gap-14 pb-20 pt-16 sm:pt-24 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-24">
          <div>
            <p className="hero-in flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-mf-gold-soft" style={{ '--d': '0ms' }}>
              <span className="h-px w-10 bg-mf-gold-soft" />
              {brand.tagline}
            </p>
            <h1 className="hero-in mt-8 font-display text-[3.4rem] leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]" style={{ '--d': '120ms' }}>
              MF <span className="gold-text italic">Médical</span>
            </h1>
            <p className="hero-in mt-6 font-display text-2xl italic leading-snug text-white/85 sm:text-3xl" style={{ '--d': '240ms' }}>
              Parce que votre bien-être est notre priorité.
            </p>
            <p className="hero-in mt-7 max-w-md text-base leading-8 text-white/65" style={{ '--d': '340ms' }}>
              Infirmière esthéticienne diplômée en Belgique. Des soins réalisés avec professionnalisme, sécurité et douceur, pour sublimer votre beauté naturelle.
            </p>

            <ul className="hero-in mt-8 flex flex-wrap gap-2.5" style={{ '--d': '420ms' }}>
              {['Service payant', 'Sur rendez-vous', 'Bruxelles & Kinshasa'].map((t) => (
                <li key={t} className="rounded-full border border-mf-gold/40 bg-mf-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mf-gold-soft">{t}</li>
              ))}
            </ul>

            <div className="hero-in mt-10 flex flex-wrap gap-4" style={{ '--d': '500ms' }}>
              <BookingButton className={goldBtn} />
              <a href="#soins" className={ghostBtn}>Découvrir les soins</a>
            </div>
          </div>

          <div className="hero-in relative mx-auto w-full max-w-md lg:max-w-none" style={{ '--d': '300ms' }}>
            <div className="absolute -inset-3 rounded-t-[14rem] rounded-b-[3rem] border border-mf-gold/40" />
            <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-[3rem]">
              <img src={heroImg} alt="Portrait d’une femme à la peau lumineuse — soins esthétiques MF Médical" className="hero-zoom aspect-[4/5] w-full object-cover object-[50%_25%] lg:aspect-[4/5.2]" />
              <div className="absolute inset-0 bg-gradient-to-t from-mf-ink/60 via-transparent to-transparent" />
            </div>
            <div className="float-slow absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-xl sm:left-auto sm:right-[-1.5rem] sm:w-auto sm:translate-x-0 sm:text-left">
              <p className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-mf-gold-soft sm:justify-start">
                <Sparkles size={13} /> Diplômée en Belgique
              </p>
              <p className="mt-1 font-display text-lg">Infirmière esthéticienne</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAID SERVICE BAND ============ */}
      <section className="border-b border-white/10 bg-mf-plum-dark text-white" aria-label="Service payant">
        <Reveal className="container-page grid gap-8 py-12 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-ink"><Coins size={24} /></span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mf-gold-soft">Bon à savoir</p>
            <p className="mt-2 font-display text-2xl leading-snug sm:text-3xl">{paid.sentence}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">{paid.prices} {paid.ivp}</p>
          </div>
          <BookingButton className={goldBtn} />
        </Reveal>
      </section>

      {/* ============ PHILOSOPHIE ============ */}
      <section className="relative overflow-hidden bg-mf-cream py-24 sm:py-32" aria-labelledby="philo">
        <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={glowImg} alt="Soin du visage et peau éclatante" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-[1.5rem] border-[8px] border-mf-cream shadow-2xl sm:block">
              <img src={facialImg} alt="Soin du visage en institut" loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold">Notre approche</p>
            <h2 id="philo" className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-mf-ink sm:text-6xl">
              La précision d’un geste médical, <span className="italic text-mf-plum">la douceur d’un soin de bien-être.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-neutral-600">
              Formée comme infirmière, MF Médical réunit la rigueur des soins de santé et l’art de l’esthétique. Chaque soin est pensé pour vous, dans l’écoute et la bienveillance.
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-mf-ink/10 pt-8">
              {['Professionnalisme', 'Sécurité', 'Douceur'].map((v, i) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-mf-gold">0{i + 1}</dt>
                  <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-mf-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ SOINS ============ */}
      <section id="soins" className="scroll-mt-20 bg-mf-ink py-24 text-white sm:py-32" aria-labelledby="soins-list">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">La carte des soins</p>
            <h2 id="soins-list" className="mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Huit soins, <span className="gold-text italic">une même exigence.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/55">Chaque soin se réalise sur rendez-vous. {paid.prices}</p>
          </Reveal>

          <nav className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2" aria-label="Aller à un soin">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white/70 transition hover:border-mf-gold-soft hover:text-mf-gold-soft">
                {s.title}
              </a>
            ))}
          </nav>

          <div className="mt-20 space-y-24 sm:space-y-32">
            {services.map((s, i) => {
              const flip = i % 2 === 1
              return (
                <article key={s.id} id={s.id} className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                  <Reveal className={flip ? 'lg:order-2' : ''}>
                    <div className="group relative">
                      <div className={`absolute -inset-3 rounded-[2rem] border border-mf-gold/30 transition duration-700 group-hover:-inset-4 ${flip ? 'translate-x-2' : '-translate-x-2'} translate-y-2`} />
                      <div className="relative overflow-hidden rounded-[2rem]">
                        <img src={s.image} alt={`${s.title} — ${s.subtitle}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-mf-ink/40 to-transparent" />
                        <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md">Sur rendez-vous</span>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
                    <span className="outline-num font-display text-7xl leading-none sm:text-8xl">0{i + 1}</span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.28em] text-mf-gold-soft">{s.subtitle}</p>
                    <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{s.title}</h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-full border border-mf-gold/30 bg-mf-gold/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-mf-gold-soft">{t}</li>
                      ))}
                    </ul>
                    <ul className="mt-7 space-y-3.5 text-[15px] leading-7 text-white/70">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-4">
                          <span className="mt-3 h-px w-5 shrink-0 bg-mf-gold" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 border-l-2 border-mf-gold pl-5 font-display text-xl italic leading-snug text-mf-gold-soft sm:text-2xl">{s.result}</p>
                    <p className="mt-6 flex items-center gap-2 text-xs text-white/45"><Coins size={14} className="text-mf-gold" /> Service payant · tarif communiqué sur demande</p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                      <BookingButton service={s} icon={false} className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:text-mf-gold-soft">
                        Réserver ce soin <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </BookingButton>
                      <Link to={`/contact?sujet=soins&soin=${s.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white">
                        <MessageCircleQuestion size={16} /> Poser une question
                      </Link>
                    </div>
                  </Reveal>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ PARCOURS ============ */}
      <section className="bg-mf-cream py-24 sm:py-32" aria-labelledby="parcours">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold">Votre parcours</p>
            <h2 id="parcours" className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-mf-ink sm:text-6xl">
              Du rendez-vous <span className="italic text-mf-plum">aux résultats.</span>
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 90} className="relative rounded-[1.75rem] border border-mf-ink/10 bg-white p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-mf-plum/10">
                <div className="flex items-center justify-between">
                  <span className="outline-num font-display text-6xl leading-none text-mf-gold/30" aria-hidden="true">0{i + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mf-blush text-mf-plum"><Icon size={22} strokeWidth={1.5} /></span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-mf-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ ENGAGEMENTS ============ */}
      <section className="relative isolate overflow-hidden py-24 text-white sm:py-32" aria-labelledby="engagements">
        <img src={ambianceImg} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_25%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-mf-plum-dark/95 via-mf-plum/90 to-mf-ink/95" />
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">Nos engagements</p>
            <h2 id="engagements" className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Votre confiance, <span className="italic text-white/70">notre priorité.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map(([title, text], i) => {
              const Icon = icons[i]
              return (
                <Reveal key={title} delay={i * 80} className="bg-mf-ink/70 p-8 backdrop-blur-md transition duration-500 hover:bg-mf-ink/40">
                  <Icon size={28} strokeWidth={1.2} className="text-mf-gold-soft" />
                  <h3 className="mt-8 font-display text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ EN IMAGES ============ */}
      <MFPhotoStrip />

      {/* ============ INFOS PRATIQUES & TARIFS ============ */}
      <section className="border-t border-white/10 bg-[#151313] py-24 text-white sm:py-28" aria-labelledby="infos">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">Informations pratiques</p>
            <h2 id="infos" className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">Tarifs et rendez-vous</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {practical.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-ink"><Icon size={22} strokeWidth={1.6} /></span>
                <h3 className="mt-7 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-mf-ink py-24 text-white sm:py-32" aria-labelledby="faq">
        <div className="container-page grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">Questions fréquentes</p>
            <h2 id="faq" className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Vous avez <span className="gold-text italic">une question ?</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Vous ne trouvez pas votre réponse ? Écrivez-nous, nous vous répondrons avec plaisir.</p>
            <Link to="/contact?sujet=soins" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-mf-gold-soft transition hover:text-white">
              Nous écrire <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={100}><Faq /></Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-mf-ink py-28 text-center text-white sm:py-40" aria-labelledby="cta-rdv">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mf-plum/50 blur-[130px]" />
        <Reveal className="container-page relative">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-mf-gold-soft">Bruxelles & Kinshasa · Service payant</p>
          <h2 id="cta-rdv" className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
            Prenez rendez-vous <span className="gold-text italic">dès maintenant.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-lg text-white/60">MF Médical. Votre beauté, notre expertise.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <BookingButton className={goldBtn} />
            <Link to="/galerie/mf-medical" className={ghostBtn}><Images size={16} /> Voir la galerie</Link>
            <Link to="/a-propos" className={ghostBtn}>Découvrir l’IVP</Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
