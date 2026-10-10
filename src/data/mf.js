import prp from '../assets/mf/s-prp.jpg'
import blanchiment from '../assets/mf/s-blanchiment.jpg'
import pedicure from '../assets/mf/s-pedicure.jpg'
import lifting from '../assets/mf/s-lifting.jpg'
import reflexologie from '../assets/mf/s-reflexologie.jpg'
import massage from '../assets/mf/s-drainage.jpg'

// Business details for MF Médical.
// TODO: set the real WhatsApp number (international format, digits only, e.g. '32470123456').
// While empty, every "Prendre rendez-vous" button routes to the contact form instead.
export const MF = {
  name: 'MF Médical',
  tagline: 'Soins esthétiques & bien-être',
  whatsapp: '',
}

export const bookingLink = MF.whatsapp
  ? { href: `https://wa.me/${MF.whatsapp}`, external: true }
  : { href: '/contact?sujet=soins', external: false }

export const services = [
  {
    id: 'prp',
    title: 'PRP',
    subtitle: 'Régénération & Jeunesse',
    image: prp,
    points: [
      'Utilise vos propres plaquettes sanguines.',
      'Stimule la régénération cellulaire.',
      'Améliore la qualité de la peau, réduit les rides, les cicatrices et les taches.',
      'Favorise la repousse des cheveux et renforce le cuir chevelu.',
    ],
    result: 'Une peau plus ferme, plus lumineuse et des cheveux plus forts.',
    tone: 'rose',
  },
  {
    id: 'blanchiment',
    title: 'Blanchiment dentaire',
    subtitle: 'Un sourire plus éclatant',
    image: blanchiment,
    points: [
      'Éclaircit la teinte des dents.',
      'Élimine les taches liées au café, thé, tabac…',
      'Procédé sûr et contrôlé.',
      'Résultat visible dès la première séance.',
    ],
    result: 'Un sourire plus blanc, plus lumineux, plus confiant !',
    tone: 'sky',
  },
  {
    id: 'pedicure',
    title: 'Pédicure médicale',
    subtitle: 'Des pieds sains et soignés',
    image: pedicure,
    points: [
      'Traitement des callosités, durillons, cors et ongles incarnés.',
      'Soins des ongles (coupe, nettoyage, soin).',
      'Soulage les douleurs et prévient les infections.',
    ],
    result: 'Des pieds en bonne santé, pour un meilleur confort au quotidien.',
    tone: 'sage',
  },
  {
    id: 'lifting',
    title: 'Lifting colombien',
    subtitle: 'Des fessiers plus galbés et fermes',
    image: lifting,
    points: [
      'Technique non invasive et naturelle.',
      'Stimule la production de collagène.',
      'Remodèle, raffermit et améliore la tonicité des fessiers.',
      'Résultats progressifs et durables.',
    ],
    result: 'Une silhouette plus harmonieuse, naturellement.',
    tone: 'amber',
  },
  {
    id: 'reflexologie',
    title: 'Réflexologie plantaire',
    subtitle: 'Détente & Équilibre',
    image: reflexologie,
    points: [
      'Massage des zones réflexes des pieds.',
      'Soulage le stress et les tensions.',
      'Améliore la circulation et l’énergie vitale.',
      'Favorise l’équilibre du corps et de l’esprit.',
    ],
    result: 'Un moment de détente profonde pour tout votre corps.',
    tone: 'lilac',
  },
  {
    id: 'drainage',
    title: 'Massage & drainage lymphatique',
    subtitle: 'Légèreté & Vitalité',
    image: massage,
    points: [
      'Stimule la circulation lymphatique.',
      'Réduit la rétention d’eau et les gonflements.',
      'Favorise l’élimination des toxines.',
      'Apaise les tensions musculaires et nerveuses.',
    ],
    result: 'Des jambes plus légères, une peau plus tonique, un corps détendu.',
    tone: 'teal',
  },
]

export const assurances = [
  ['Soins sûrs et personnalisés', 'Chaque soin est adapté à vos besoins.'],
  ['Produits de qualité', 'Matériel certifié et produits sélectionnés.'],
  ['Écoute et bienveillance', 'Un accompagnement attentif, sans jugement.'],
  ['À Bruxelles et environs', 'Des soins proches de chez vous.'],
]
