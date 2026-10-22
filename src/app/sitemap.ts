import type { MetadataRoute } from 'next'

import { siteUrl } from '@/data/site'

const pages = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
