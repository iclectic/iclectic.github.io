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
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}
