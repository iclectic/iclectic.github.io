import type { MetadataRoute } from 'next'
import { siteSettings } from '@/data/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: siteSettings.url,
    sitemap: `${siteSettings.url}/sitemap.xml`,
  }
}
