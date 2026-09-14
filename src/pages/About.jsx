import { HeartHandshake, Stethoscope, Target, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import MissionVision from '../components/About/MissionVision'
import OurValues from '../components/About/OurValues'
import PeopleBehindIVP from '../components/About/PeopleBehindIVP'
import StoriesImpact from '../components/About/StoriesImpact'
import FinalCTA from '../components/Home/FinalCTA'

const values = [
  ['Compassion', HeartHandshake],
  ['Professional care', Stethoscope],
  ['Purpose', Target],
  ['Community', Users],
]

export default function About() {
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
