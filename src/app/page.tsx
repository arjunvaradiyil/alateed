import { AboutPreview } from '@/components/home/AboutPreview'
import { ContactSection } from '@/components/home/ContactSection'
import { HomeHero } from '@/components/home/HomeHero'
import { ServicesPreview } from '@/components/home/ServicesPreview'

export default function HomePage() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <HomeHero />
      <AboutPreview />
      <ServicesPreview />
      <ContactSection />
    </div>
  )
}
