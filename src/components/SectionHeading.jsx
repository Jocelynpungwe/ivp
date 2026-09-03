export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
    <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
    {text && <p className="mt-5 text-base leading-7 text-ivp-muted">{text}</p>}
  </div>
}