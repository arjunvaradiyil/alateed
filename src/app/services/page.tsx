import type { Metadata } from 'next'

import { ServicesPreview } from '@/components/home/ServicesPreview'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Electrical works, fire alarm, ELV, CCTV, access control, UPS, and maintenance from Noor Al Ateed Technical Services in Dubai.',
}

export default function ServicesPage() {
  return (
    <div className="min-w-0 bg-neutral-50 pt-[var(--header-h)]">
      <ServicesPreview headingLevel="h1" />
    </div>
  )
}
