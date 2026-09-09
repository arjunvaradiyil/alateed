import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import { SectionPreHeader } from '@/components/ui/SectionPreHeader'
import { aboutImages, company, values } from '@/data/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Noor Al Ateed Technical Services — electrical, fire, ELV, and security works in Muhaisanah, Dubai.',
}

export default function AboutPage() {
  return (
    <div className="min-w-0 bg-white text-[#111]">
      <section className="py-14 sm:py-16 lg:py-24">
        <Container>
          <div className="mb-8 flex justify-center sm:mb-10">
            <p
              dir="rtl"
              className="font-arabic max-w-full px-1 text-center text-xl font-semibold leading-snug text-neutral-300 sm:text-4xl lg:text-5xl"
            >
              {company.arabicName}
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <SectionPreHeader>About Us</SectionPreHeader>
              <h1 className="font-bebas-neue mb-5 text-[32px] uppercase leading-tight text-brand-dark sm:text-5xl lg:text-[52px] lg:leading-[56px]">
                Technical services built on quality, safety and reliability
              </h1>
              <p className="font-helvetica-neue mb-6 text-left text-[15px] font-light leading-[1.7] text-neutral-700 sm:text-[17px]">
                {company.about}
              </p>
              <p className="font-poppins text-sm text-neutral-500">{company.address}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={aboutImages.primary}
                alt="Noor Al Ateed technical team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-14 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
            {values.map((value) => (
              <article
                key={value.title}
                className="border-t-2 border-brand-blue bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-bebas-neue mb-3 text-2xl uppercase text-brand-dark">
                  {value.title}
                </h3>
                <p className="font-poppins text-sm leading-relaxed text-neutral-600">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
