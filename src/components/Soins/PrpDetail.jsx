import { ArrowUpRight, Check, Activity, Clock, Droplet, FlaskConical, Info, Smile, Sprout, Syringe, TriangleAlert } from 'lucide-react'
import Reveal from '../Reveal'
import BookingButton from '../BookingButton'
import { prpGeneral, prpTypes } from '../../data/mf'

const icons = { activity: Activity, clock: Clock, droplet: Droplet, flask: FlaskConical, smile: Smile, sprout: Sprout, syringe: Syringe }

// Illustration of a centrifuged blood tube: red cells at the bottom, platelet-rich plasma (gold) on top.
function TubeIllustration() {
  return (
    <svg viewBox="50 0 225 260" role="img" aria-label="Tube de sang centrifugé : plasma riche en plaquettes au-dessus des globules rouges" className="mx-auto h-auto w-full max-w-[280px]">
      <defs>
        <linearGradient id="prp-plasma" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3dfa6" />
          <stop offset="1" stopColor="#d9b878" />
        </linearGradient>
        <linearGradient id="prp-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b3243f" />
          <stop offset="1" stopColor="#7a1228" />
        </linearGradient>
        <clipPath id="prp-tube">
          <path d="M70 20h80v170a40 40 0 0 1-80 0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prp-tube)">
        <rect x="70" y="20" width="80" height="90" fill="url(#prp-plasma)" />
        <rect x="70" y="110" width="80" height="14" fill="#f8f4ec" opacity="0.9" />
        <rect x="70" y="124" width="80" height="140" fill="url(#prp-red)" />
        {[[88, 50], [112, 62], [132, 44], [100, 82], [124, 90], [84, 100], [140, 76]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#fff6dc" opacity="0.9" />
        ))}
      </g>
      <path d="M70 20h80v170a40 40 0 0 1-80 0z" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="3" />
      <rect x="62" y="14" width="96" height="10" rx="5" fill="#fff" fillOpacity="0.85" />
      <g fontFamily="Manrope, sans-serif" fontSize="10" fill="#d9b878" fontWeight="700">
        <path d="M158 62h24" stroke="#d9b878" />
        <text x="186" y="60">Plasma riche</text>
        <text x="186" y="72">en plaquettes</text>
        <path d="M150 117h32" stroke="#fff" strokeOpacity="0.6" />
        <text x="186" y="116" fill="#fff" fillOpacity="0.7">Couche</text>
        <text x="186" y="128" fill="#fff" fillOpacity="0.7">intermédiaire</text>
        <path d="M150 190h32" stroke="#e46b82" />
        <text x="186" y="188" fill="#e46b82">Globules</text>
        <text x="186" y="200" fill="#e46b82">rouges</text>
      </g>
    </svg>
  )
}

function List({ items, icon: Icon = Check }) {
  return (
    <ul className="space-y-3 text-[15px] leading-7 text-white/70">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <Icon size={16} className="mt-2 shrink-0 text-mf-gold-soft" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrpDetail() {
  return (
    <div id="prp-detail" className="mt-20 scroll-mt-28 border-t border-white/10 pt-16 sm:pt-20">
      {/* How it works */}
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">Tout savoir sur le PRP</p>
        <h4 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">{prpGeneral.title}</h4>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/65">{prpGeneral.intro}</p>
      </Reveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <TubeIllustration />
        </Reveal>
        <Reveal delay={100}>
          <ol className="grid gap-4 sm:grid-cols-2">
            {prpGeneral.steps.map(({ icon, title, text }, i) => {
              const Icon = icons[icon]
              return (
                <li key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#e9cf98] to-[#b88a3e] text-mf-ink"><Icon size={20} strokeWidth={1.7} /></span>
                    <span className="outline-num font-display text-4xl leading-none" aria-hidden="true">0{i + 1}</span>
                  </div>
                  <h5 className="mt-5 font-display text-xl">{title}</h5>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </li>
              )
            })}
          </ol>
          <ul className="mt-6 space-y-2.5 text-sm leading-6 text-white/65">
            {prpGeneral.advantages.map((a) => (
              <li key={a} className="flex gap-3"><Check size={16} className="mt-1 shrink-0 text-mf-gold-soft" />{a}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Applications */}
      <Reveal className="mx-auto mt-24 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-mf-gold-soft">Les applications du PRP</p>
        <h4 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">Cheveux, visage, <span className="gold-text italic">articulations et muscles</span></h4>
      </Reveal>

      <nav className="mx-auto mt-8 flex flex-wrap justify-center gap-2" aria-label="Aller à une application du PRP">
        {prpTypes.map((t) => {
          const Icon = icons[t.icon]
          return (
            <a key={t.id} href={`#${t.id}`} className="inline-flex items-center gap-2 rounded-full border border-mf-gold/40 bg-mf-gold/10 px-5 py-2.5 text-xs font-semibold tracking-wide text-mf-gold-soft transition hover:bg-mf-gold hover:text-mf-ink">
              <Icon size={14} /> {t.title}
            </a>
          )
        })}
      </nav>

      <div className="mt-16 space-y-20 sm:space-y-28">
        {prpTypes.map((t, i) => {
          const flip = i % 2 === 1
          const Icon = icons[t.icon]
          return (
            <article key={t.id} id={t.id} className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={`lg:sticky lg:top-28 lg:self-start ${flip ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img src={t.image} alt={t.imageAlt} loading="lazy" className="aspect-[4/5] w-full object-cover object-[50%_30%] sm:aspect-[4/3] lg:aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-mf-ink/60 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md"><Icon size={13} /> PRP</span>
                </div>
              </Reveal>

              <Reveal delay={100} className={flip ? 'lg:order-1' : ''}>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-mf-gold-soft">{t.subtitle}</p>
                <h5 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{t.title}</h5>
                <p className="mt-5 text-[15px] leading-8 text-white/65">{t.intro}</p>

                <h6 className="mt-9 font-display text-xl text-white">Ce que le soin apporte</h6>
                <div className="mt-4"><List items={t.benefits} /></div>

                <h6 className="mt-9 font-display text-xl text-white">Pour qui ?</h6>
                <div className="mt-4"><List items={t.indications} /></div>

                <h6 className="mt-9 font-display text-xl text-white">Déroulé et résultats</h6>
                <dl className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                  {t.protocol.map(([k, v]) => (
                    <div key={k} className="bg-mf-ink p-4">
                      <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-mf-gold-soft">{k}</dt>
                      <dd className="mt-1.5 text-sm leading-6 text-white/70">{v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-8 border-l-2 border-mf-gold pl-5 font-display text-xl italic leading-snug text-mf-gold-soft sm:text-2xl">{t.good}</p>

                <p className="mt-6 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[13px] leading-6 text-white/55">
                  <Info size={16} className="mt-0.5 shrink-0 text-mf-gold-soft" />
                  <span>{t.caution}</span>
                </p>

                <div className="mt-7">
                  <BookingButton service={t} icon={false} className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:text-mf-gold-soft">
                    Réserver ce soin <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </BookingButton>
                </div>
              </Reveal>
            </article>
          )
        })}
      </div>

      {/* Precautions */}
      <Reveal className="mt-24 rounded-[2rem] border border-mf-gold/30 bg-mf-gold/[0.06] p-8 sm:p-10">
        <h4 className="flex items-center gap-3 font-display text-2xl sm:text-3xl"><TriangleAlert size={24} className="text-mf-gold-soft" /> Précautions et bon à savoir</h4>
        <div className="mt-6"><List items={prpGeneral.precautions} /></div>
        <p className="mt-6 text-xs leading-6 text-white/45">{prpGeneral.notice}</p>
      </Reveal>
    </div>
  )
}
