import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { getAllSlugs } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/open-source',
    '/community',
    '/writing',
    '/speaking',
    '/now',
    '/contact',
    '/case-studies',
    '/impact',
    '/uses',
    '/media',
    '/timeline',
    '/cv',
    '/rss.xml',
    '/atom.xml',
  ]

  const writing = getAllSlugs('writing').map((slug) => `/writing/${slug}`)
  const caseStudies = getAllSlugs('case-studies').map((slug) => `/case-studies/${slug}`)
  const projects = getAllSlugs('projects').map((slug) => `/projects/${slug}`)

  const routes = [...staticPages, ...writing, ...caseStudies, ...projects]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }))
}
