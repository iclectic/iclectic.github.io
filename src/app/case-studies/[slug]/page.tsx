import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Container from '@/components/Container'
import Section from '@/components/ui/Section'
import Tag from '@/components/ui/Tag'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { createMetadata } from '@/lib/seo'
import { getAllSlugs, getContentBySlug } from '@/lib/mdx'

interface CaseStudyPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const slugs = getAllSlugs('case-studies')
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: CaseStudyPageProps) {
  const study = getContentBySlug('case-studies', params.slug)

  if (!study) {
    return createMetadata({
      title: 'Case Studies',
      description: 'Case study details for Ibim Braide.',
      path: `/case-studies/${params.slug}`,
    })
  }

  return createMetadata({
    title: study.frontMatter.title,
    description: study.frontMatter.description,
    path: `/case-studies/${study.slug}`,
    image: study.frontMatter.image,
    type: 'article',
  })
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getContentBySlug('case-studies', params.slug)

  if (!study) {
    notFound()
  }

  return (
    <article>
      <section className="pt-20 pb-10 md:pt-28 border-b border-border dark:border-border-dark">
        <Container>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-body-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to case studies
          </Link>

          {study.frontMatter.tags && study.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {study.frontMatter.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          <h1 className="font-display text-display text-foreground dark:text-foreground-dark text-balance">
            {study.frontMatter.title}
          </h1>

          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            {study.frontMatter.description}
          </p>

          <p className="mt-6 text-body-sm text-muted dark:text-muted-dark">
            {formatDate(study.frontMatter.date)} · {study.readingTime}
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-custom mx-auto">
            <MDXRemote source={study.content} components={mdxComponents} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex justify-between">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All case studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              Start a conversation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  )
}
