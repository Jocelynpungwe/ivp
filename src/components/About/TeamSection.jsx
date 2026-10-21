import Reveal from '../Reveal'
import marieFrance from '../../assets/team/marie-france-fondatrice.jpg'
import madinda from '../../assets/team/madinda.jpg'
import edouard from '../../assets/team/edouard.jpg'
import gervais from '../../assets/team/maitre-germain-ilunga.jpg'
import eveline from '../../assets/team/eveline.jpg'
import anneFrancoise from '../../assets/team/anne-francoise-lap.jpg'
import memoria from '../../assets/team/memoria.jpg'
import mardoche from '../../assets/team/mardoche.jpg'
import benevoles from '../../assets/team/benevoles.jpg'
import infirmieres from '../../assets/team/infirmieres.jpg'
import equipePolos from '../../assets/team/equipe-polos.jpg'
import equipeNoire from '../../assets/team/equipe-noire.jpg'
import equipeBleue from '../../assets/team/equipe-bleue.jpg'
import hospice from '../../assets/team/hospice.jpg'

// Names and roles as provided by the association (and the previous IVP website, ivp-asbl.org).
const direction = [
  { name: 'Marie-France Bomengo Mambia', role: 'Fondatrice et présidente', image: marieFrance, pos: 'object-[50%_35%]' },
  { name: 'Dr Madinda B.', role: 'Médecin directeur', image: madinda, pos: 'object-[50%_30%]' },
  { name: 'Dr Édouard A.', role: 'Médecin chef de staff', image: edouard, pos: 'object-[50%_30%]' },
  { name: 'Maître Gervais Ilunga', role: 'Conseiller juridique et avocat', image: gervais, pos: 'object-[50%_20%]' },
  { name: 'Mr Romuald P.', role: 'Chargé de finance', initials: 'RP' },
  { name: 'Sr Eveline L.', role: 'Biologie · Technicienne de laboratoire', image: eveline, pos: 'object-[50%_20%]' },
]

const representants = [
  { name: 'Anne Françoise Lap', role: 'Représentante de l’IVP en Belgique', image: anneFrancoise, pos: 'object-[50%_30%]' },
  { name: 'Memoria Pungwe', role: 'Représentante de l’IVP au Canada', image: memoria, pos: 'object-[50%_25%]' },
  { name: 'Mr Mardoché', role: 'Représentant de l’IVP à Mbuji-Mayi', image: mardoche, pos: 'object-[62%_35%]' },
]

const field = [
  { image: benevoles, alt: 'Les équipes des bénévoles de l’IVP', caption: 'Les équipes des bénévoles de l’IVP', className: 'md:col-span-2', pos: 'object-[50%_40%]' },
  { image: infirmieres, alt: 'Infirmières de l’IVP devant une bannière sur les soins médicaux gratuits', caption: 'Infirmières de l’IVP', className: 'md:row-span-2', pos: 'object-[50%_50%]' },
  { image: equipePolos, alt: 'Une équipe de l’IVP en mission', caption: 'L’équipe de l’IVP en mission', className: '', pos: 'object-[50%_40%]' },
  { image: equipeNoire, alt: 'Une équipe médicale de l’IVP sur le terrain', caption: 'L’équipe de l’IVP sur le terrain', className: '', pos: 'object-[50%_40%]' },
  { image: hospice, alt: 'L’équipe de l’IVP devant le home des vieillards, hospice de l’archidiocèse de Kinshasa', caption: 'Au home des vieillards · Kinshasa', className: 'md:col-span-2', pos: 'object-[50%_60%]' },
  { image: equipeBleue, alt: 'L’équipe de l’IVP devant une bâche bleue', caption: 'L’équipe de l’IVP', className: 'md:col-span-2', pos: 'object-[50%_50%]' },
]

function Portraits({ people, offset = 0 }) {
  return (
    <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-12">
      {people.map(({ name, role, image, pos, initials }, i) => (
        <Reveal as="li" delay={((i + offset) % 3) * 100} key={name} className="group w-full sm:w-[calc(33.333%-1rem)]">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-neutral-200">
            {image ? (
              <>
                <img src={image} alt={`${name}, ${role}`} loading="lazy" className={`aspect-[4/5] w-full object-cover ${pos} transition duration-[1200ms] group-hover:scale-105`} />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </>
            ) : (
              <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ivp-red to-ivp-red-dark" role="img" aria-label={`${name}, ${role}`}>
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/15" />
                <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full border border-white/10" />
                <span className="relative font-display text-7xl tracking-tight text-white/90">{initials}</span>
              </div>
            )}
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-ivp-red transition-all duration-700 group-hover:w-full" />
          </div>
          <h3 className="mt-6 font-display text-2xl leading-tight text-ivp-black">{name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-ivp-red">{role}</p>
        </Reveal>
      ))}
    </ul>
  )
}

export default function TeamSection({ compact = false }) {
  return (
    <section className="bg-[#f7f5f2] py-24 sm:py-32" aria-labelledby="equipe">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center text-ivp-red">Notre équipe</p>
          <h2 id="equipe" className="mt-6 font-display text-4xl leading-[1.04] tracking-tight text-ivp-black sm:text-6xl">
            Les visages <span className="italic text-ivp-red">de l’IVP.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-500">
            Des personnes engagées, au service des plus démunis : orphelins, enfants de la rue, veuves, personnes âgées et personnes handicapées.
          </p>
        </Reveal>

        <div className="mt-16">
          <Portraits people={direction} />
        </div>

        <Reveal className="mx-auto mt-24 max-w-2xl text-center">
          <p className="section-label justify-center text-ivp-red">Nos représentants</p>
          <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight text-ivp-black sm:text-4xl">
            L’IVP <span className="italic text-ivp-red">au-delà des frontières.</span>
          </h3>
        </Reveal>
        <div className="mt-12">
          <Portraits people={representants} />
        </div>

        {!compact && (
          <>
            {/* Équipes sur le terrain */}
            <Reveal className="mx-auto mt-28 max-w-2xl text-center">
              <p className="section-label justify-center text-ivp-red">Sur le terrain</p>
              <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-ivp-black sm:text-5xl">
                Des équipes <span className="italic text-ivp-red">engagées.</span>
              </h3>
            </Reveal>

            <Reveal className="mt-14 grid gap-4 md:h-[560px] md:grid-cols-3 md:grid-rows-2">
              {field.map(({ image, alt, caption, className, pos }) => (
                <figure key={caption} className={`group relative overflow-hidden rounded-[1.5rem] bg-neutral-200 ${className}`}>
                  <img src={image} alt={alt} loading="lazy" className={`h-[260px] w-full object-cover ${pos} transition duration-[1200ms] group-hover:scale-105 md:h-full`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-5 left-5 right-5 font-display text-xl text-white">{caption}</figcaption>
                </figure>
              ))}
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
