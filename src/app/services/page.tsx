import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import { SectionPreHeader } from '@/components/ui/SectionPreHeader'
import { services } from '@/data/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Electrical works, fire alarm, ELV, CCTV, access control, UPS, central battery, testing, cable pulling, and maintenance in Dubai.',
}

export default function ServicesPage() {
  return (
    <div className="min-w-0 bg-white">
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionPreHeader>Our Services</SectionPreHeader>
          <h1 className="font-bebas-neue mb-5 max-w-3xl text-[32px] uppercase leading-tight text-brand-dark sm:text-4xl lg:text-[52px] lg:leading-[56px]">
            Eleven technical services for Dubai projects
          </h1>
          <p className="font-poppins max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            From electrical works and fire alarm systems to ELV, CCTV, access control, UPS, testing,
            and maintenance — delivered with quality, safety, and reliability.
          </p>
        </Container>
      </section>

      <div className="pb-16 sm:pb-20">
        <Container>
          {services.map((service, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 grid grid-cols-1 overflow-hidden border-t border-neutral-200 lg:grid-cols-2"
              >
                <div className={`relative min-h-[220px] sm:min-h-[280px] ${reverse ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center px-0 py-8 sm:py-10 lg:px-10 xl:px-14 ${reverse ? 'lg:order-1' : ''}`}
                >
                  <span className="font-bebas-neue text-4xl text-brand-blue sm:text-5xl">
                    {service.number}
                  </span>
                  <h3 className="font-bebas-neue mt-2 text-2xl uppercase text-brand-dark sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="font-poppins mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {service.subtitle}
                  </p>
                  <p className="font-poppins mt-4 max-w-md text-sm leading-relaxed text-neutral-600 sm:mt-5 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </Container>
      </div>
    </div>
  )
}
