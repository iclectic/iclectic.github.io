import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Section from '@/components/ui/Section'
import Tag from '@/components/ui/Tag'
import RenderedMdx from '@/components/mdx/RenderedMdx'
import { createMetadata } from '@/lib/seo'
import { getAllSlugs, getContentBySlug } from '@/lib/mdx'

interface ArticlePageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const slugs = getAllSlugs('writing')
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = getContentBySlug('writing', params.slug)

  if (!article) {
    return createMetadata({
      title: 'Writing',
      description: 'Writing on engineering practice and community building.',
      path: `/writing/${params.slug}`,
    })
  }

  return createMetadata({
    title: article.frontMatter.title,
    description: article.frontMatter.description,
    path: `/writing/${article.slug}`,
    image: article.frontMatter.image,
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

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getContentBySlug('writing', params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article>
      <section className="pt-20 pb-10 md:pt-28 border-b border-border dark:border-border-dark">
        <Container>
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-body-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to writing
          </Link>

          {article.frontMatter.tags && article.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {article.frontMatter.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          <h1 className="font-display text-display text-foreground dark:text-foreground-dark text-balance">
            {article.frontMatter.title}
          </h1>

          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            {article.frontMatter.description}
          </p>

          <p className="mt-6 text-body-sm text-muted dark:text-muted-dark">
            {formatDate(article.frontMatter.date)} · {article.readingTime}
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-custom mx-auto">
            <RenderedMdx source={article.content} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex justify-between">
            <Link
              href="/writing"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              Get in touch
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
