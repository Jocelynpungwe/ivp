import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import MissionVision from '../components/About/MissionVision'
import OurValues from '../components/About/OurValues'
import PeopleBehindIVP from '../components/About/PeopleBehindIVP'
import StoriesImpact from '../components/About/StoriesImpact'
import FinalCTA from '../components/Home/FinalCTA'
import useDocumentMeta from '../hooks/useDocumentMeta'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  useDocumentMeta(
    'À propos de l’IVP — Infirmières des Voies Publiques',
    'Découvrez les personnes, la mission et les valeurs de l’IVP — Infirmières des Voies Publiques : des soins infirmiers rapprochés de ceux qui en ont le plus besoin.',
  )
  useScrollReveal()
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <PeopleBehindIVP />
      <StoriesImpact />
      <FinalCTA />
    </>
  )
}
