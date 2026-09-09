import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Cairo, DM_Sans, Poppins } from 'next/font/google'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { company } from '@/data/site'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c2d5c',
}

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Dubai`,
    template: `%s | ${company.shortName}`,
  },
  description:
    'Noor Al Ateed Technical Services — electrical works, fire alarm, ELV, CCTV, access control, UPS, central battery, testing, cable pulling, and maintenance in Dubai, UAE.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebasNeue.variable} ${poppins.variable} ${cairo.variable}`}
    >
      <body className={`${dmSans.className} min-w-0 bg-white text-brand-dark antialiased`}>
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
