import HeroHome from '../components/Home/HeroHome'
import TwoWays from '../components/Home/TwoWays'
import ChapterSwitcher from '../components/Home/ChapterSwitcher'
import ChapterDivider from '../components/Home/ChapterDivider'
import AboutHome from '../components/Home/AboutHome'
import IVPOffer from '../components/Home/IVPOffer'
import IVPSites from '../components/Home/IVPSites'
import IVPAction from '../components/Home/IVPAction'
import IVPImpact from '../components/Home/IVPImpact'
import IVPGetInvolved from '../components/Home/IVPGetInvolved'
import TeamSection from '../components/About/TeamSection'
import Recognition from '../components/About/Recognition'
import MFShowcase from '../components/Home/MFShowcase'
import MFApproach from '../components/Home/MFApproach'
import MFPhotoStrip from '../components/Home/MFPhotoStrip'
import DualCTA from '../components/Home/DualCTA'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta(
    'IVP & MF Médical — Soins infirmiers solidaires et soins esthétiques',
    'IVP offre gratuitement des soins aux plus démunis : orphelins, enfants de la rue, veuves, personnes âgées et handicapés. MF Médical propose des soins esthétiques et de bien-être à Bruxelles et à Kinshasa.',
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
          kicker="IVP asbl · Ensemble pour une vie meilleure"
          title="Soigner ceux"
          accent="que l’on oublie."
          text="Parce que chaque vie compte : IVP asbl, une action solidaire au service des plus vulnérables."
          pills={['Soigner', 'Soutenir', 'Espérer']}
        />
        <TeamSection compact />
        <Recognition />
        <AboutHome />
        <IVPOffer />
        <IVPAction />
        <IVPImpact />
        <IVPGetInvolved />
        <IVPSites />

        {/* ===== CHAPITRE 02 — MF MÉDICAL ===== */}
        <ChapterDivider
          id="chapitre-mf"
          theme="mf"
          number="02"
          kicker="MF Médical · Soins esthétiques & bien-être"
          title="Sublimez votre"
          accent="beauté naturelle."
          text="Infirmière esthéticienne diplômée en Belgique : professionnalisme, sécurité et douceur, à Bruxelles et à Kinshasa."
          pills={['Service payant', 'Sur rendez-vous', 'Bruxelles & Kinshasa']}
        />
        <MFShowcase />
        <MFApproach />
        <MFPhotoStrip />
      </div>

      <DualCTA />
    </>
  )
}
