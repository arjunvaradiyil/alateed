import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Cairo, DM_Sans, Poppins } from 'next/font/google'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { company, seoKeywords, siteUrl } from '@/data/site'

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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Dubai`,
    template: `%s | ${company.shortName}`,
  },
  description:
    'Noor Al Ateed Technical Services — electrical works, fire alarm, ELV, CCTV, access control, UPS, central battery, testing, cable pulling, and maintenance in Dubai, UAE.',
  keywords: seoKeywords,
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Dubai`,
    description:
      'Electrical, fire, ELV, and security technical services in Dubai — quality, safety, and reliability.',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: company.shortName }],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebasNeue.variable} ${poppins.variable} ${cairo.variable}`}
    >
      <body className={`${dmSans.className} min-w-0 bg-white text-brand-dark antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: company.name,
              alternateName: company.arabicName,
              url: siteUrl,
              email: company.email,
              telephone: company.phones.map((phone) => phone.value.replace(/\s/g, '')),
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Madina Mall, Muhaisanah Fourth',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
              image: `${siteUrl}/icon-512.png`,
              founder: { '@type': 'Person', name: company.contacts[0].name, jobTitle: company.contacts[0].title },
              employee: company.contacts.map((person) => ({
                '@type': 'Person',
                name: person.name,
                jobTitle: person.title,
                telephone: person.phone.replace(/\s/g, ''),
              })),
            }),
          }}
        />
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
