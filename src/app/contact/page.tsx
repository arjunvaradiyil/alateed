import type { Metadata } from 'next'

import { ContactForm } from '@/app/contact/ContactForm'
import { Container } from '@/components/layout/Container'
import { SectionPreHeader } from '@/components/ui/SectionPreHeader'
import { company } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach Noor Al Ateed Technical Services in Muhaisanah Fourth, Madina Mall, Dubai — phone and email.',
}

function Card({
  title,
  children,
  icon,
}: {
  title: string
  children: React.ReactNode
  icon: React.ReactNode
}) {
  return (
    <div className="flex h-full min-h-[176px] flex-col border-t-2 border-brand-gold bg-[#f7f4ec] p-5 sm:min-h-[196px] sm:p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center bg-brand-navy">
        {icon}
      </div>
      <h2 className="font-poppins mb-2 text-xs font-semibold uppercase tracking-wider text-brand-navy">
        {title}
      </h2>
      <div className="font-poppins text-sm leading-relaxed text-neutral-700">{children}</div>
    </div>
  )
}

export default function ContactPage() {
  const phone1 = company.phones[0]
  const phone2 = company.phones[1]

  return (
    <div className="overflow-x-hidden bg-white text-[#111]">
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            <Card
              title="Hotline"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6.5 3.5h3l1.2 4-2 1.2a12 12 0 0 0 6.6 6.6l1.2-2 4 1.2v3A1.5 1.5 0 0 1 19 19 15.5 15.5 0 0 1 5 5a1.5 1.5 0 0 1 1.5-1.5Z"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
              }
            >
              <p>
                <a href={`tel:${phone1.value.replace(/\s/g, '')}`} className="hover:text-brand-navy" dir="ltr">
                  {phone1.value}
                </a>
                <br />
                <a href={`tel:${phone2.value.replace(/\s/g, '')}`} className="hover:text-brand-navy" dir="ltr">
                  {phone2.value}
                </a>
              </p>
            </Card>
            <Card
              title="Email"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="white" strokeWidth="1.6" />
                  <path d="m4 7 8 6 8-6" stroke="white" strokeWidth="1.6" />
                </svg>
              }
            >
              <a
                href={`mailto:${company.email}`}
                className="break-all underline decoration-brand-gold/50 underline-offset-4 hover:text-brand-navy"
              >
                {company.email}
              </a>
            </Card>
            <Card
              title="Office"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10" r="2.2" fill="white" />
                </svg>
              }
            >
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-brand-gold/50 underline-offset-4 hover:text-brand-navy"
              >
                {company.address}
              </a>
            </Card>
            <Card
              title="Hours"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.6" />
                  <path d="M12 8v4.5l3 1.5" stroke="white" strokeWidth="1.6" />
                </svg>
              }
            >
              <p>
                {company.workingDays}
                <br />
                {company.weekend}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f4ec] py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="min-w-0">
              <SectionPreHeader>Send a Message</SectionPreHeader>
              <h1 className="font-bebas-neue mb-4 text-[28px] uppercase leading-tight text-brand-dark sm:text-3xl lg:text-4xl">
                Tell us about your site
              </h1>
              <p className="font-poppins max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-base">
                Speak with our technical engineer about electrical, fire, ELV, or maintenance works
                in Dubai.
              </p>
              <div className="mt-8 border-t border-brand-gold/30 pt-6">
                <p className="font-bebas-neue text-2xl text-brand-navy">{company.contactName}</p>
                <p className="font-poppins text-sm uppercase tracking-wider text-brand-gold">
                  {company.contactTitle}
                </p>
                <p dir="rtl" className="font-arabic mt-3 text-base text-brand-navy">
                  {company.arabicName}
                </p>
              </div>
            </div>
            <div className="min-w-0">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full overflow-hidden">
        <div className="relative h-[280px] w-full sm:h-[400px] md:h-[480px]">
          <iframe
            src={company.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${company.name} — ${company.address}`}
            className="absolute inset-0"
          />
        </div>
      </section>
    </div>
  )
}
