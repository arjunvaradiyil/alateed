import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { SectionPreHeader } from '@/components/ui/SectionPreHeader'
import { aboutImages, company } from '@/data/site'

const HIGHLIGHTS = [
  { num: '01', label: 'Electrical & power' },
  { num: '02', label: 'Life safety systems' },
  { num: '03', label: 'ELV & security' },
] as const

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-[var(--header-h)] bg-[#f7f4ec] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="grid h-full grid-cols-12 gap-3 sm:gap-4 lg:col-span-6">
            <div className="relative col-span-7 min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
              <Image
                src={aboutImages.primary}
                alt="Technical installation on a construction site"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </div>

            <div className="col-span-5 flex h-full flex-col gap-3 sm:gap-4">
              <div className="relative min-h-[140px] flex-1 overflow-hidden sm:min-h-[180px]">
                <Image
                  src={aboutImages.overlay}
                  alt="Electrical systems work"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
              <div className="bg-brand-navy px-3 py-4 text-white sm:px-5 sm:py-6">
                <p className="font-bebas-neue text-3xl leading-none sm:text-4xl">11</p>
                <p className="font-poppins mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 sm:text-xs">
                  Technical services
                </p>
                <p className="font-poppins mt-3 text-[11px] uppercase tracking-[0.14em] text-brand-light sm:text-xs">
                  Dubai, U.A.E.
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col lg:col-span-6">
            <SectionPreHeader>About Us</SectionPreHeader>
            <h2 className="font-bebas-neue mb-5 text-[32px] font-normal uppercase leading-[1.1] tracking-tight text-brand-dark sm:mb-6 sm:text-4xl lg:text-[52px] lg:leading-[56px]">
              Quality, safety and reliability on every site
            </h2>
            <p className="font-helvetica-neue mb-8 text-[15px] font-light leading-[1.7] text-neutral-700 sm:text-[17px]">
              {company.about}
            </p>

            <ul className="mb-8 mt-auto w-full border-t border-neutral-200">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item.num}
                  className="flex w-full items-center justify-between gap-4 border-b border-neutral-200 py-3"
                >
                  <span className="font-bebas-neue shrink-0 text-xl text-brand-blue">
                    {item.num}
                  </span>
                  <span className="font-poppins text-right text-sm uppercase tracking-wider text-brand-dark">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="#contact">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
