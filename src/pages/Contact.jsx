import { Mail, MapPin, Facebook, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactHero from '../components/Contact/ContactHero'
import FinalCTA from '../components/Home/FinalCTA'
import ContactInfoForm from '../components/Contact/ContactInfoForm'
import GetInvolved from '../components/Contact/GetInovolved'
import FAQ from '../components/Contact/FAQ'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfoForm />
      <GetInvolved />
      <FAQ />
      <FinalCTA />
    </>
  )
}
