import Reveal from '../Reveal'

const themes = {
  ivp: {
    wrap: 'bg-ivp-red-dark text-white',
    glow: 'bg-ivp-red/50',
    kicker: 'text-white/70',
    num: 'text-white/15',
    line: 'bg-white/40',
  },
  mf: {
    wrap: 'bg-mf-ink text-white',
    glow: 'bg-mf-plum/60',
    kicker: 'text-mf-gold-soft',
    num: 'text-mf-gold/25',
    line: 'bg-mf-gold-soft/60',
  },
}

export default function ChapterDivider({ id, theme = 'ivp', number, kicker, title, accent, text }) {
  const t = themes[theme]
  return (
    <section id={id} className={`relative isolate scroll-mt-16 overflow-hidden py-20 sm:py-28 ${t.wrap}`}>
      <div className={`absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full blur-[120px] ${t.glow}`} />
      <div className="absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full border border-white/10" />
      <Reveal className="container-page grid items-end gap-8 lg:grid-cols-[auto_1fr]">
        <span className={`font-display text-[7rem] leading-none sm:text-[11rem] ${t.num}`} aria-hidden="true">{number}</span>
        <div className="max-w-3xl pb-2">
          <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${t.kicker}`}>
            <span className={`h-px w-10 ${t.line}`} /> {kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
            {title} <span className={theme === 'mf' ? 'gold-text italic' : 'italic text-white/70'}>{accent}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">{text}</p>
        </div>
      </Reveal>
    </section>
  )
}
