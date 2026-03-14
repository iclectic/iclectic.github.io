import type { Metadata } from 'next'
import { siteConfig } from './siteConfig'

interface MetaArgs {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export function createMetadata({ title, description, path = '', image, type = 'website' }: MetaArgs): Metadata {
  const url = new URL(path, siteConfig.url).toString()
  const imageUrl = image ? new URL(image, siteConfig.url).toString() : undefined

  return {
    title,
    description,
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      creator: siteConfig.author.twitter,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}
