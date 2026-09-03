import SectionHeading from '../components/SectionHeading'

const photos = [
  ['Community care','https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85'],
  ['Nursing in action','https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85'],
  ['People at the center','https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85'],
  ['Outreach','https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1200&q=85'],
  ['Teamwork','https://images.unsplash.com/photo-1580281658628-2c56b3d7a7f5?auto=format&fit=crop&w=1200&q=85'],
  ['Hope','https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1200&q=85']
]

export default function Gallery() {
  return <section className="container-page py-20 sm:py-24"><SectionHeading eyebrow="Gallery" title="See care in action." text="A visual home for IVP’s real photographs, outreach events, healthcare activities and community stories."/><div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">{photos.map(([label,src])=><figure key={label} className="group mb-5 overflow-hidden rounded-3xl break-inside-avoid bg-neutral-100"><img src={src} alt={label} className="w-full transition duration-500 group-hover:scale-[1.03]"/><figcaption className="px-5 py-4 text-sm font-semibold">{label}</figcaption></figure>)}</div></section>
}