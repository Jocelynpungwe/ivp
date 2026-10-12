import GalleryView from '../components/Gallery/GalleryView'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { mfCategories, mfCounts } from '../data/galleries'
import heroImage from '../assets/mf/hero.jpg'

const switchLinks = [
  { to: '/galerie/ivp', label: 'Galerie IVP' },
  { to: '/galerie/mf-medical', label: 'Galerie MF Médical', active: true },
]

export default function GalleryMF() {
  useDocumentMeta(
    'Galerie MF Médical — soins esthétiques & bien-être en images',
    'La galerie MF Médical : soins du visage et PRP, blanchiment dentaire, pédicure et réflexologie, massage et drainage lymphatique, beauté et bien-être.',
  )
  return (
    <GalleryView
      theme="mf"
      hero={{
        image: heroImage,
        alt: 'Portrait d’une femme à la peau lumineuse — MF Médical',
        pos: 'object-[50%_25%]',
        eyebrow: 'Galerie MF Médical',
        title: 'La beauté,',
        accent: 'en images.',
        text: 'Le visage, le sourire, les pieds, le corps : les soins MF Médical et l’art de sublimer votre beauté naturelle.',
        unit: 'catégories',
      }}
      categories={mfCategories}
      counts={mfCounts}
      switchLinks={switchLinks}
    />
  )
}
