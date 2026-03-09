import Head from 'next/head'
import { siteConfig } from '@/lib/siteConfig'

interface PersonSchemaProps {
  type: 'person'
}

interface ArticleSchemaProps {
  type: 'article'
  title: string
  description: string
  date: string
  url: string
  image?: string
}

type StructuredDataProps = PersonSchemaProps | ArticleSchemaProps

export default function StructuredData(props: StructuredDataProps) {
  let schema: Record<string, unknown>

  if (props.type === 'person') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
      email: siteConfig.author.email,
      jobTitle: 'Software Engineer and Community Organiser',
      knowsAbout: [
        'Software Engineering',
        'Open Source',
        'Community Building',
        'Developer Education',
        'AI Ethics',
        'TypeScript',
        'Python',
        'Go',
        'React',
        'Next.js',
        'Flutter',
        'Data Analysis',
        'Machine Learning',
      ],
      sameAs: [
        siteConfig.author.github,
        siteConfig.author.linkedin,
        siteConfig.author.twitter,
      ],
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Birmingham City University',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'University of Benin',
        },
      ],
    }
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.title,
      description: props.description,
      datePublished: props.date,
      url: `${siteConfig.url}${props.url}`,
      author: {
        '@type': 'Person',
        name: siteConfig.author.name,
        url: siteConfig.url,
      },
      publisher: {
        '@type': 'Person',
        name: siteConfig.author.name,
      },
      ...(props.image && { image: `${siteConfig.url}${props.image}` }),
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}
