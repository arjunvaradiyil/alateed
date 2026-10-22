import type { Metadata } from 'next'

import { ContactSection } from '@/components/home/ContactSection'
import { siteUrl } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach Noor Al Ateed Technical Services in Muhaisanah Fourth, Madina Mall, Dubai — phone and email.',
  keywords: [
    'contact Noor Al Ateed',
    'technical services Dubai contact',
    'Muhaisanah Madina Mall',
    'electrical contractor Dubai phone',
  ],
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Us | Noor Al Ateed',
    description:
      'Call, email, or visit Noor Al Ateed Technical Services at Madina Mall, Muhaisanah Fourth, Dubai.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-w-0 bg-white pt-[var(--header-h)]">
      <ContactSection />
    </div>
  )
}
