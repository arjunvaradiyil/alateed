import { AboutPreview } from '@/components/home/AboutPreview'
import { HomeHero } from '@/components/home/HomeHero'
import { ServicesPreview } from '@/components/home/ServicesPreview'

export default function HomePage() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <HomeHero />
      <AboutPreview />
      <ServicesPreview limit={6} showAllLink />
    </div>
  )
}
