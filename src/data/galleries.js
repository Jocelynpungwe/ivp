import { galleryStories } from './galleryStories'

// ---------------------------------------------------------------------------
// Photos and videos are picked up automatically from the asset folders:
//   IVP  → src/assets/gallery (selection), gallery/archives (reports), assets/*.mp4 + assets/videos
//   MF   → src/assets/mf-gallery/<category>/*.jpg
// ---------------------------------------------------------------------------
const curatedModules = import.meta.glob('../assets/gallery/*.jpg', { eager: true, query: '?url', import: 'default' })
const archiveModules = import.meta.glob('../assets/gallery/archives/*.jpg', { eager: true, query: '?url', import: 'default' })
const videoModules = {
  ...import.meta.glob('../assets/*.mp4', { eager: true, query: '?url', import: 'default' }),
  ...import.meta.glob('../assets/videos/*.mp4', { eager: true, query: '?url', import: 'default' }),
}
const mfModules = import.meta.glob('../assets/mf-gallery/*/*.jpg', { eager: true, query: '?url', import: 'default' })

const fileName = (path) => path.split('/').pop()
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true })
const byName = (modules) => Object.fromEntries(Object.entries(modules).map(([p, u]) => [fileName(p), u]))

const archiveUrl = byName(archiveModules)
const videoUrl = byName(videoModules)

const videoTitles = {
  'about.mp4': 'L’IVP en action',
  'clinique-mobile-kalembelembe.mp4': 'Clinique mobile · Kalembelembe',
  'terrain-0000.mp4': 'Journée des infirmiers · 1',
  'vid1.mp4': 'Journée des infirmiers · 2',
  'vid2.mp4': 'Journée des infirmiers · 3',
  'terrain-0003.mp4': 'Journée des infirmiers · 4',
  'terrain-0004.mp4': 'Journée des infirmiers · 5',
}
// Template leftover (a screen recording of an unrelated website): never shown publicly.
const hiddenVideos = ['placeholder-video.mp4']

const makeVideo = (name) => ({ type: 'video', id: `v-${name}`, src: videoUrl[name], title: videoTitles[name] || 'Vidéo' })
const makePhoto = (id, src, title) => ({ type: 'photo', id: `p-${id}`, src, title })

// ============================ IVP ============================
const allVideos = Object.keys(videoUrl)
  .filter((n) => !hiddenVideos.includes(n))
  .sort(natural)
  .map(makeVideo)

const selection = Object.entries(curatedModules)
  .filter(([p]) => !fileName(p).startsWith('hero-'))
  .sort(([a], [b]) => natural(a, b))
  .map(([p, u]) => makePhoto(`sel-${fileName(p)}`, u, 'Sélection IVP'))

export const ivpCategories = [
  { id: 'videos', label: 'Vidéos', title: 'Vidéos', text: 'Les équipes de l’IVP en action, en images animées.', photos: [], videos: allVideos },
  { id: 'selection', label: 'Sélection', title: 'Sélection IVP', text: '', photos: selection, videos: [] },
  ...galleryStories.map((s, i) => ({
    id: s.id,
    number: String(i + 1).padStart(2, '0'),
    label: s.label,
    title: s.title,
    text: s.text,
    photos: s.images.filter((n) => archiveUrl[n]).map((n) => makePhoto(n, archiveUrl[n], s.title)),
    videos: [],
    // shown only when the report is opened on its own (already listed under "Vidéos")
    focusVideos: s.videos.filter((n) => videoUrl[n]).map(makeVideo),
  })),
]

// ============================ MF Médical ============================
const mfMeta = [
  { id: 'visage', label: 'Visage & PRP', title: 'Soins du visage & régénération', text: 'PRP, soins de la peau et éclat du teint : une peau plus ferme, plus lumineuse.' },
  { id: 'dents', label: 'Blanchiment dentaire', title: 'Un sourire plus éclatant', text: 'Éclaircit la teinte des dents, avec un procédé sûr et contrôlé.' },
  { id: 'pieds', label: 'Pédicure & réflexologie', title: 'Des pieds sains, détente & équilibre', text: 'Pédicure médicale et réflexologie plantaire : un moment de détente profonde.' },
  { id: 'corps', label: 'Massage & drainage', title: 'Légèreté & vitalité', text: 'Massage, drainage lymphatique et lifting colombien pour un corps détendu et tonique.' },
  { id: 'beaute', label: 'Beauté & bien-être', title: 'Sublimez votre beauté naturelle', text: 'Parce que votre bien-être est notre priorité.' },
]

export const mfCategories = mfMeta.map((m, i) => ({
  ...m,
  number: String(i + 1).padStart(2, '0'),
  photos: Object.entries(mfModules)
    .filter(([p]) => p.includes(`/mf-gallery/${m.id}/`))
    .sort(([a], [b]) => natural(a, b))
    .map(([p, u]) => makePhoto(`mf-${m.id}-${fileName(p)}`, u, m.title)),
  videos: [],
}))

const count = (cats) => ({
  photos: cats.reduce((n, c) => n + c.photos.length, 0),
  videos: [...new Set(cats.flatMap((c) => [...c.videos, ...(c.focusVideos || [])].map((v) => v.id)))].length,
  categories: cats.filter((c) => c.photos.length || c.videos.length || c.focusVideos?.length).length,
})

export const ivpCounts = { ...count(ivpCategories), categories: galleryStories.length }
export const mfCounts = count(mfCategories)
