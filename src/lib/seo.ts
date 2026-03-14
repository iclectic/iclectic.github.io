import type { Metadata } from 'next'
import { siteSettings } from '@/data/site'

interface MetaArgs {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export function createMetadata({ title, description, path = '', image, type = 'website' }: MetaArgs): Metadata {
  const url = new URL(path, siteSettings.url).toString()
  const imageUrl = image ? new URL(image, siteSettings.url).toString() : undefined

  return {
    title,
    description,
    authors: [{ name: siteSettings.author.name, url: siteSettings.url }],
    creator: siteSettings.author.name,
    publisher: siteSettings.author.name,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: siteSettings.name,
      locale: siteSettings.locale,
      title: `${title} | ${siteSettings.name}`,
      description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteSettings.name}`,
      description,
      creator: siteSettings.author.twitter,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}
