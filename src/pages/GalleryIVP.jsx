import GalleryView from '../components/Gallery/GalleryView'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { ivpCategories, ivpCounts } from '../data/galleries'
import heroImage from '../assets/gallery/hero-galerie.jpg'

const switchLinks = [
  { to: '/galerie/ivp', label: 'Galerie IVP', active: true },
  { to: '/galerie/mf-medical', label: 'Galerie MF Médical' },
]

export default function GalleryIVP() {
  useDocumentMeta(
    'Galerie IVP — le soin en images et en vidéos',
    'Reportages en photos et en vidéos de l’IVP — Infirmières des Voies Publiques : soins aux enfants de la rue, cliniques mobiles, hospices et centres de personnes handicapées.',
  )
  return (
    <GalleryView
      theme="ivp"
      hero={{
        image: heroImage,
        alt: 'Une infirmière de l’IVP entourée d’enfants',
        pos: 'object-[50%_35%]',
        eyebrow: 'Galerie IVP',
        title: 'Le soin,',
        accent: 'en images.',
        text: 'Les reportages de nos descentes sur le terrain, les équipes et les communautés que l’IVP accompagne, en photos et en vidéos.',
        unit: 'reportages',
      }}
      categories={ivpCategories}
      counts={ivpCounts}
      switchLinks={switchLinks}
    />
  )
}
