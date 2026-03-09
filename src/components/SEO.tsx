import Head from 'next/head'
import { siteConfig } from '@/lib/siteConfig'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  date?: string
}

export default function SEO({
  title,
  description = siteConfig.description,
  image,
  url,
  type = 'website',
  date,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title

  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={siteConfig.locale} />
      {image && <meta property="og:image" content={`${siteConfig.url}${image}`} />}
      {date && <meta property="article:published_time" content={date} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`${siteConfig.url}${image}`} />}

      {/* RSS */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${siteConfig.name} RSS Feed`}
        href={`${siteConfig.url}/rss.xml`}
      />
    </Head>
  )
}
