import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { heroImage } from '@/data/site'

export function HomeHero() {
  return (
    <section id="home" className="home-hero" aria-labelledby="hero-title">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="relative z-10 w-full py-10 sm:py-14 lg:py-16">
        <Container className="flex flex-col items-center text-center">
          <p className="mb-3 font-poppins text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
            Dubai, United Arab Emirates
          </p>
          <h1 id="hero-title" className="home-hero__title">
            <span className="block">Quality. Safety.</span>
            <span className="block">Reliability.</span>
          </h1>
          <p className="mb-8 max-w-xl font-poppins text-sm leading-relaxed text-white/85 sm:mb-10 sm:text-base">
            Electrical works, fire alarm, ELV, CCTV, access control, UPS, and maintenance — technical
            services for sites across Dubai.
          </p>
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
            <Button href="#services" variant="hero">
              Our Services
            </Button>
            <Button href="#contact" variant="hero">
              Contact Us
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}
