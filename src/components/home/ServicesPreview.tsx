import Image from 'next/image'

import { Container, SectionHeading } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SectionPreHeader } from '@/components/ui/SectionPreHeader'
import { services } from '@/data/site'

type ServicesPreviewProps = {
  headingLevel?: 'h1' | 'h2'
  limit?: number
  showAllLink?: boolean
}

export function ServicesPreview({
  headingLevel = 'h2',
  limit,
  showAllLink = false,
}: ServicesPreviewProps) {
  const Heading = headingLevel
  const items = limit ? services.slice(0, limit) : services

  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={<SectionPreHeader>Our Services</SectionPreHeader>}
          title={
            <Heading className="font-bebas-neue text-[32px] uppercase leading-tight text-brand-dark sm:text-4xl lg:text-[52px] lg:leading-[56px]">
              Eleven technical services for Dubai sites
            </Heading>
          }
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.slug}
              className="service-card relative min-h-[240px] overflow-hidden bg-brand-black sm:min-h-[300px] lg:min-h-[320px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-cover ${
                  service.slug === 'ups-systems' || service.slug === 'central-battery'
                    ? 'object-top'
                    : 'object-center'
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-6">
                <span className="font-bebas-neue mb-1 text-2xl text-brand-light sm:mb-2 sm:text-3xl">
                  {service.number}
                </span>
                <h3 className="font-bebas-neue text-xl uppercase leading-tight sm:text-2xl">
                  {service.title}
                </h3>
                <p className="font-poppins mt-1 text-sm text-white/80">{service.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        {showAllLink ? (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Button href="/services">All Services</Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
