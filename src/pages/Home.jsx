import HeroHome from '../components/Home/HeroHome'
import TwoWays from '../components/Home/TwoWays'
import ChapterSwitcher from '../components/Home/ChapterSwitcher'
import ChapterDivider from '../components/Home/ChapterDivider'
import AboutHome from '../components/Home/AboutHome'
import IVPMission from '../components/Home/IVPMission'
import IVPAction from '../components/Home/IVPAction'
import IVPImpact from '../components/Home/IVPImpact'
import IVPGetInvolved from '../components/Home/IVPGetInvolved'
import MFShowcase from '../components/Home/MFShowcase'
import MFApproach from '../components/Home/MFApproach'
import DualCTA from '../components/Home/DualCTA'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta(
    'IVP & MF Médical — Soins infirmiers solidaires et soins esthétiques',
    'IVP apporte des soins infirmiers aux enfants en situation de rue. MF Médical propose des soins esthétiques et de bien-être à Bruxelles.',
  )
  return (
    <>
      <HeroHome />
      <TwoWays />

      <div>
        <ChapterSwitcher />

        {/* ===== CHAPITRE 01 — IVP ===== */}
        <ChapterDivider
          id="chapitre-ivp"
          theme="ivp"
          number="01"
          kicker="IVP · Mission solidaire"
          title="Soigner ceux"
          accent="que l’on oublie."
          text="Infirmières des Voies Publiques apporte des soins et un soutien aux enfants et aux communautés vulnérables."
        />
        <AboutHome />
        <IVPMission />
        <IVPAction />
        <IVPImpact />
        <IVPGetInvolved />

        {/* ===== CHAPITRE 02 — MF MÉDICAL ===== */}
        <ChapterDivider
          id="chapitre-mf"
          theme="mf"
          number="02"
          kicker="MF Médical · Soins esthétiques & bien-être"
          title="Sublimez votre"
          accent="beauté naturelle."
          text="Infirmière esthéticienne diplômée en Belgique : professionnalisme, sécurité et douceur, à Bruxelles et environs."
        />
        <MFShowcase />
        <MFApproach />
      </div>

      <DualCTA />
    </>
  )
}
