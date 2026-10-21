import prp from '../assets/mf/s-prp.jpg'
import blanchiment from '../assets/mf/s-blanchiment.jpg'
import pedicure from '../assets/mf/s-pedicure.jpg'
import lifting from '../assets/mf/s-lifting.jpg'
import reflexologie from '../assets/mf/s-reflexologie.jpg'
import massage from '../assets/mf/s-drainage.jpg'
import minceur from '../assets/mf/s-minceur.jpg'
import hifu from '../assets/mf/s-hifu.jpg'

// Business details for MF Médical.
// WhatsApp number shown on the MF Médical flyer (international format, digits only).
// If emptied, every "Prendre rendez-vous" button routes to the contact form instead.
export const MF = {
  name: 'MF Médical',
  tagline: 'Soins esthétiques & bien-être',
  whatsapp: '243816091136',
  phone: '+243 816 091 136',
  kinshasa: 'Kinshasa · Ngaliema',
}

export const bookingLink = MF.whatsapp
  ? { href: `https://wa.me/${MF.whatsapp}`, external: true }
  : { href: '/contact?sujet=soins', external: false }

// Link to book a given treatment (falls back to the generic booking link).
export const bookingLinkFor = (service) => {
  if (!service) return bookingLink
  return MF.whatsapp
    ? { href: `https://wa.me/${MF.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite prendre rendez-vous pour : ${service.title}.`)}`, external: true }
    : { href: `/contact?sujet=soins&soin=${service.id}`, external: false }
}

// MF Médical is a paid, by-appointment service (unlike the free care offered by the IVP).
export const paid = {
  short: 'Service payant · sur rendez-vous',
  sentence: 'Les soins MF Médical sont des services payants, réalisés sur rendez-vous.',
  prices: 'Les tarifs sont communiqués sur demande : contactez-nous pour connaître le tarif du soin qui vous intéresse.',
  ivp: 'À ne pas confondre avec l’IVP, l’association qui offre gratuitement des soins aux plus démunis.',
}

export const services = [
  {
    id: 'prp',
    tags: ['Vos propres plaquettes', 'Peau & cheveux'],
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
    tags: ['Procédé sûr et contrôlé', 'Résultat dès la 1re séance'],
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
    tags: ['Soins des ongles', 'Prévention des infections'],
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
    tags: ['Non invasif', 'Résultats progressifs et durables'],
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
    tags: ['Anti-stress', 'Circulation & énergie'],
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
    tags: ['Rétention d’eau', 'Élimination des toxines'],
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
  {
    id: 'obesite',
    tags: ['Accompagnement personnalisé', 'Résultats durables'],
    title: 'Traitement de l’obésité',
    subtitle: 'Perte du ventre & silhouette',
    image: minceur,
    points: [
      'Suivi diététique personnalisé (rééquilibrage alimentaire).',
      'Programme d’activité physique adapté.',
      'Soins esthétiques ciblés (raffermissement, modelage, drainage).',
      'Accompagnement médical (contrôle du poids et de la santé).',
      'Conseils et motivation tout au long du parcours.',
    ],
    result: 'Un ventre plus plat, une perte de poids durable, plus d’énergie et plus de confiance en vous.',
    tone: 'teal',
  },
  {
    id: 'hifu',
    tags: ['Lifting sans chirurgie', 'Sans cicatrice, sans éviction sociale'],
    title: 'HIFU',
    subtitle: 'Lifting sans chirurgie',
    image: hifu,
    points: [
      'Lifte et raffermit la peau : stimule la production naturelle de collagène et d’élastine.',
      'Réduit les rides et ridules : effet tenseur visible et durable.',
      'Améliore l’ovale du visage : redessine les contours et lutte contre le relâchement.',
      'Sans bistouri, sans cicatrice, sans éviction sociale.',
      'Zones traitées : visage, cou, décolleté, contour des yeux, ventre et bras.',
    ],
    result: 'Un visage plus ferme, une peau plus tonique, une meilleure confiance. Résultats visibles dès les premières semaines.',
    tone: 'rose',
  },
]

export const assurances = [
  ['Soins sûrs et personnalisés', 'Chaque soin est adapté à vos besoins.'],
  ['Produits de qualité', 'Matériel certifié et produits sélectionnés.'],
  ['Écoute et bienveillance', 'Un accompagnement attentif, sans jugement.'],
  ['À Bruxelles et à Kinshasa', 'Des soins proches de chez vous.'],
]
