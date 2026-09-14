import GalleryFeatured from '../components/Gallery/GalleryFeatured'
import GalleryGrid from '../components/Gallery/GalleryGrid'
import GalleryHero from '../components/Gallery/GalleryHero'
import VideoStories from '../components/Gallery/VideoStories'
import FinalCTA from '../components/Home/FinalCTA'
import SectionHeading from '../components/SectionHeading'

export default function Gallery() {
  return (
    <>
      <GalleryHero />
      <GalleryFeatured />
      <GalleryGrid />
      <VideoStories />
      <FinalCTA />
    </>
  )
}
