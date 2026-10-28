import prp from '../assets/mf/s-prp.jpg'
import blanchiment from '../assets/mf/s-blanchiment.jpg'
import pedicure from '../assets/mf/s-pedicure.jpg'
import lifting from '../assets/mf/s-lifting.jpg'
import reflexologie from '../assets/mf/s-reflexologie.jpg'
import massage from '../assets/mf/s-drainage.jpg'
import minceur from '../assets/mf/s-minceur.jpg'
import hifu from '../assets/mf/s-hifu.jpg'
import prpCheveux from '../assets/mf-gallery/beaute/01.jpg'
import prpVisage from '../assets/mf-gallery/visage/07.jpg'
import prpArticulations from '../assets/mf-gallery/corps/03.jpg'

// Business details for MF Médical.
// WhatsApp number shown on the MF Médical flyer (international format, digits only).
// If emptied, every "Prendre rendez-vous" button routes to the contact form instead.
export const MF = {
  name: 'MF Médical',
  tagline: 'Soins esthétiques & bien-être',
  whatsapp: '243852609841',
  phone: '+243 852 609 841',
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

// PRP detail page content. To add information, edit this object only:
// - `prpTypes`: add a field to an existing application or push a new one (a new `id` gets its own card, nav pill and section).
// - `prpGeneral`: shared blocks (how it works, steps, precautions, notice).
// `icon` is a lucide-react icon name resolved in components/Soins/PrpDetail.jsx.
export const prpGeneral = {
  title: 'Le PRP, comment ça marche ?',
  intro:
    'Le PRP (plasma riche en plaquettes) est un soin autologue : il est préparé à partir de votre propre sang. Les plaquettes contiennent des facteurs de croissance qui participent à la réparation et au renouvellement des tissus. Concentrées puis réinjectées dans la zone à traiter, elles stimulent les processus naturels de régénération.',
  steps: [
    { icon: 'syringe', title: 'Prise de sang', text: 'Quelques millilitres de sang sont prélevés, comme pour une analyse classique.' },
    { icon: 'flask', title: 'Centrifugation', text: 'Le sang est centrifugé : le plasma riche en plaquettes est séparé des globules rouges.' },
    { icon: 'droplet', title: 'Injection', text: 'Le PRP est appliqué ou injecté dans la zone ciblée (cuir chevelu, visage, articulation ou muscle).' },
    { icon: 'clock', title: 'Régénération', text: 'Les facteurs de croissance agissent progressivement : les résultats s’installent sur plusieurs semaines.' },
  ],
  advantages: [
    'Préparé à partir de votre propre sang : risque d’allergie ou de rejet très faible.',
    'Peu invasif, sans chirurgie, avec une reprise rapide des activités.',
    'Peut s’associer à d’autres soins ou traitements, selon votre situation.',
  ],
  precautions: [
    'Une consultation préalable est nécessaire pour vérifier que le PRP vous convient.',
    'À signaler avant le soin : traitement anticoagulant ou anti-inflammatoire, maladie du sang, infection en cours, grossesse, maladie chronique ou cancer.',
    'Rougeurs, légers gonflements, petits hématomes ou sensibilité locale sont possibles pendant 24 à 72 h, puis disparaissent.',
    'Les résultats varient d’une personne à l’autre et ne sont pas garantis.',
  ],
  notice:
    'Les informations de cette page sont données à titre indicatif et ne remplacent pas un avis médical. Le nombre de séances et l’indication exacte sont déterminés lors de la consultation.',
}

export const prpTypes = [
  {
    id: 'prp-cheveux',
    icon: 'sprout',
    title: 'PRP cheveux',
    subtitle: 'Renforcer le cuir chevelu, relancer la repousse',
    image: prpCheveux,
    imageAlt: 'Cheveux afro naturels, soin du cuir chevelu',
    intro:
      'Des micro-injections de PRP dans le cuir chevelu viennent nourrir les follicules pileux et prolonger leur phase de croissance. C’est un soin d’appoint, surtout étudié dans la chute de cheveux progressive (alopécie androgénétique).',
    benefits: [
      'Ralentit la chute et fortifie les cheveux fragilisés.',
      'Stimule les follicules encore actifs : cheveux plus denses et plus épais.',
      'Améliore la qualité du cuir chevelu.',
      'Peut compléter un traitement de fond (minoxidil, soins locaux…).',
    ],
    indications: [
      'Chute de cheveux progressive, cheveux qui s’éclaircissent.',
      'Cheveux fins et affaiblis, densité en baisse.',
      'Chute après un stress, une grossesse ou une période de fatigue (après avis).',
    ],
    protocol: [
      ['Séances', 'En général 3 à 4 séances, espacées d’environ 1 mois.'],
      ['Durée', 'Environ 30 à 45 minutes par séance.'],
      ['Résultats', 'Premiers effets entre 2 et 4 mois ; amélioration progressive.'],
      ['Entretien', 'Rappel conseillé tous les 6 à 12 mois.'],
    ],
    good: 'Un cuir chevelu plus sain, des cheveux plus forts et une chute qui ralentit.',
    caution:
      'Le PRP ne fait pas repousser des cheveux sur une zone totalement chauve (follicules disparus). Son efficacité varie selon la cause de la chute, d’où l’importance d’un bilan préalable.',
  },
  {
    id: 'prp-visage',
    icon: 'smile',
    title: 'PRP visage',
    subtitle: 'Éclat, fermeté et qualité de peau',
    image: prpVisage,
    imageAlt: 'Soin du visage par micro-injections',
    intro:
      'Parfois appelé « vampire lift », le PRP visage utilise vos propres facteurs de croissance pour stimuler la production de collagène et le renouvellement cutané. Il ne comble pas les volumes comme l’acide hyaluronique : il améliore la qualité de la peau, de façon naturelle et progressive.',
    benefits: [
      'Peau plus lumineuse, plus ferme et mieux hydratée.',
      'Atténue les rides fines, les ridules et le teint terne.',
      'Aide à estomper certaines cicatrices (acné) et les taches.',
      'Améliore la texture de la peau et réduit les pores dilatés.',
    ],
    indications: [
      'Visage, cou et décolleté qui perdent leur éclat.',
      'Rides fines, relâchement léger, peau fatiguée.',
      'Cicatrices d’acné, texture irrégulière.',
      'Contour des yeux (cernes creusés) : à évaluer, le PRP n’agit pas sur les cernes pigmentaires.',
    ],
    protocol: [
      ['Séances', 'En général 1 à 3 séances (parfois 4), espacées d’environ 4 semaines.'],
      ['Confort', 'Crème anesthésiante appliquée avant le soin.'],
      ['Résultats', 'Visibles progressivement sur 4 à 8 semaines ; la peau continue de s’améliorer.'],
      ['Entretien', 'Rappel conseillé tous les 6 à 12 mois.'],
    ],
    good: 'Une peau plus ferme, plus lumineuse, au rendu naturel.',
    caution:
      'Après le soin : rougeurs possibles 24 à 48 h, pas de maquillage ni de savon sur le visage pendant 24 h, protection solaire indispensable. Évitez les anti-inflammatoires autour de la séance (sauf avis médical).',
  },
  {
    id: 'prp-articulations',
    icon: 'activity',
    title: 'PRP articulations et muscles',
    subtitle: 'Soulager, soutenir la réparation des tissus',
    image: prpArticulations,
    imageAlt: 'Massage et soin des muscles du dos',
    intro:
      'En médecine du sport et en rhumatologie, le PRP est injecté au niveau d’une articulation, d’un tendon ou d’un muscle pour soutenir la cicatrisation et réduire la douleur. Les données les plus solides concernent l’arthrose du genou débutante à modérée et certaines tendinopathies.',
    benefits: [
      'Peut soulager la douleur et améliorer la mobilité de l’articulation.',
      'Soutient la réparation des tendons (épicondylite « tennis elbow », tendon rotulien…).',
      'Option complémentaire quand les traitements classiques ne suffisent pas.',
      'Alternative à la répétition d’injections de corticoïdes, selon l’avis médical.',
    ],
    indications: [
      'Arthrose du genou débutante à modérée.',
      'Tendinopathies : coude, épaule, tendon rotulien, tendon d’Achille.',
      'Lésions musculaires et douleurs de sportifs (efficacité plus variable).',
    ],
    protocol: [
      ['Séances', 'Le plus souvent 1 à 3 injections, espacées de 2 à 4 semaines.'],
      ['Imagerie', 'L’injection est précise, parfois guidée par échographie.'],
      ['Résultats', 'Soulagement progressif sur 4 à 12 semaines.'],
      ['Après soin', 'Repos relatif 24 à 48 h, puis reprise graduelle de l’activité.'],
    ],
    good: 'Moins de douleur, plus de mobilité et une reprise d’activité plus confortable.',
    caution:
      'L’efficacité dépend de la zone traitée : bien documentée pour le genou et certains tendons, plus limitée pour les lésions musculaires. Une évaluation médicale (examen, imagerie) est nécessaire pour poser l’indication.',
  },
]

export const assurances = [
  ['Soins sûrs et personnalisés', 'Chaque soin est adapté à vos besoins.'],
  ['Produits de qualité', 'Matériel certifié et produits sélectionnés.'],
  ['Écoute et bienveillance', 'Un accompagnement attentif, sans jugement.'],
  ['À Bruxelles et à Kinshasa', 'Des soins proches de chez vous.'],
]
