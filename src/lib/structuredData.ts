import { siteSettings } from '@/data/site'

interface BreadcrumbItem {
  name: string
  path: string
}

interface ArticleArgs {
  title: string
  description: string
  path: string
  datePublished: string
  image?: string
  tags?: string[]
  type?: 'Article' | 'BlogPosting' | 'TechArticle'
}

interface CreativeWorkArgs {
  title: string
  description: string
  path: string
  datePublished?: string
  image?: string
  tags?: string[]
}

function toAbsoluteUrl(path: string) {
  return path.startsWith('http') ? path : new URL(path, siteSettings.url).toString()
}

export function createPersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteSettings.author.name,
    url: siteSettings.url,
    image: toAbsoluteUrl('/images/profile/ibim_photo.jpg'),
    email: siteSettings.author.email,
    jobTitle: 'Freelance Software Engineer and Community Organiser',
    sameAs: [
      siteSettings.author.github,
      siteSettings.author.linkedin,
      siteSettings.author.twitter,
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Benin',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Birmingham City University',
      },
    ],
    knowsAbout: [
      'Software Engineering',
      'Mobile Development',
      'Full Stack Development',
      'Open Source',
      'Community Building',
      'Developer Education',
      'AI Ethics',
      'Flutter',
      'Go',
    ],
  }
}

export function createProfilePageStructuredData({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: title,
    description,
    url: toAbsoluteUrl(path),
    mainEntity: createPersonStructuredData(),
  }
}

export function createBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  }
}

export function createArticleStructuredData({
  title,
  description,
  path,
  datePublished,
  image,
  tags,
  type = 'Article',
}: ArticleArgs) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    description,
    url: toAbsoluteUrl(path),
    mainEntityOfPage: toAbsoluteUrl(path),
    datePublished,
    dateModified: datePublished,
    image: image ? [toAbsoluteUrl(image)] : undefined,
    keywords: tags,
    author: createPersonStructuredData(),
    publisher: createPersonStructuredData(),
  }
}

export function createCreativeWorkStructuredData({
  title,
  description,
  path,
  datePublished,
  image,
  tags,
}: CreativeWorkArgs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    url: toAbsoluteUrl(path),
    datePublished,
    image: image ? [toAbsoluteUrl(image)] : undefined,
    keywords: tags,
    author: createPersonStructuredData(),
  }
}
