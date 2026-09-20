import type { Metadata } from 'next'

import { ContactSection } from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach Noor Al Ateed Technical Services in Muhaisanah Fourth, Madina Mall, Dubai — phone and email.',
}

export default function ContactPage() {
  return (
    <div className="min-w-0 bg-white pt-[var(--header-h)]">
      <ContactSection />
    </div>
  )
}
