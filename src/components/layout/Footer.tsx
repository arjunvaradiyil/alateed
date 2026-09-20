import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/layout/Logo'
import { company, navLinks } from '@/data/site'

export function Footer() {
  const office = company.phones[0]
  const mobile = company.phones[1]
  const mapsUrl = company.mapsUrl
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(company.email)}`

  return (
    <footer className="relative z-30 w-full bg-brand-navy text-white">
      <div className="border-t border-brand-gold/40">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 lg:col-span-5">
              <Logo gradientId="ateed-n-footer" />
              <p className="font-poppins max-w-sm text-sm leading-relaxed text-white/70">
                Electrical, fire, ELV, and security technical services in Dubai — built on quality,
                safety, and reliability.
              </p>
                <Link
                href="/contact"
                className="hero-cta inline-flex h-12 w-full max-w-[220px] px-6 sm:w-auto"
              >
                Contact Us
                <span className="hero-cta__arrow" aria-hidden>
                  <LuArrowUpRight size={16} />
                </span>
              </Link>
            </div>

            <div className="lg:col-span-3">
              <h3 className="font-poppins mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-poppins text-[15px] text-white/85 transition-colors hover:text-brand-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 space-y-4 lg:col-span-4">
              <h3 className="font-poppins mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Contact
              </h3>
              <a
                href={`tel:${office.value.replace(/\s/g, '')}`}
                className="block w-fit border-b-2 border-brand-gold pb-0.5 font-helvetica-neue text-xl font-bold leading-7 text-brand-light transition-colors hover:border-white hover:text-white sm:text-[22px]"
              >
                {office.value}
              </a>
              <a
                href={`tel:${mobile.value.replace(/\s/g, '')}`}
                className="block w-fit border-b-2 border-transparent pb-0.5 font-helvetica-neue text-base font-bold text-white/90 transition-colors hover:border-brand-gold hover:text-brand-gold sm:text-lg"
              >
                {mobile.value}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block break-all font-poppins text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand-gold md:hidden"
              >
                {company.email}
              </a>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden break-all font-poppins text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand-gold md:block"
              >
                {company.email}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2.5 text-white/85 transition-colors hover:text-brand-gold"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                    stroke="#c9a24a"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10" r="2.2" fill="#c9a24a" />
                </svg>
                <span className="font-poppins text-sm leading-6">{company.address}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10 bg-[#081e3f]">
        <Container className="flex flex-col gap-3 py-5 text-xs leading-relaxed text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © Copyright {new Date().getFullYear()} {company.name}. All Rights Reserved
          </span>
          <span className="font-arabic sm:text-right">{company.arabicName}</span>
        </Container>
      </div>
    </footer>
  )
}
