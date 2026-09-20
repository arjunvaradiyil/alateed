import { ContactForm } from '@/app/contact/ContactForm'
import { Container } from '@/components/layout/Container'
import { SectionPreHeader } from '@/components/ui/SectionPreHeader'
import { company } from '@/data/site'

export function ContactSection() {
  return (
    <div className="overflow-x-hidden bg-white text-[#111]">
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
