import type { Metadata } from 'next'

import { AboutPreview } from '@/components/home/AboutPreview'
import { Container } from '@/components/layout/Container'
import { company, values } from '@/data/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Noor Al Ateed Technical Services — electrical, fire, ELV, and security works in Muhaisanah, Dubai.',
}

export default function AboutPage() {
  return (
    <div className="min-w-0 bg-white text-[#111] pt-[var(--header-h)]">
      <section className="bg-white py-10 sm:py-12">
        <Container>
          <p
            dir="rtl"
            className="font-arabic max-w-full px-1 text-center text-xl font-semibold leading-snug text-neutral-300 sm:text-4xl lg:text-5xl"
          >
            {company.arabicName}
          </p>
        </Container>
      </section>

      <AboutPreview headingLevel="h1" ctaHref="/contact" ctaLabel="Contact Us" />

      <section className="bg-neutral-50 py-14 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
            {values.map((value) => (
              <article
                key={value.title}
                className="border-t-2 border-brand-gold bg-white p-5 shadow-sm sm:p-6"
              >
                <h2 className="font-bebas-neue mb-3 text-2xl uppercase text-brand-dark">
                  {value.title}
                </h2>
                <p className="font-poppins text-sm leading-relaxed text-neutral-600">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
