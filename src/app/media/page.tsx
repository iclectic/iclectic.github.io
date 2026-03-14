import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Section from '@/components/ui/Section'
import RenderedMdx from '@/components/mdx/RenderedMdx'
import { createMetadata } from '@/lib/seo'
import { getContentBySlug } from '@/lib/mdx'

export const metadata = createMetadata({
  title: 'Media',
  description: 'Media, press, and recognition highlights.',
  path: '/media',
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function MediaPage() {
  const page = getContentBySlug('media', 'index')

  if (!page) {
    notFound()
  }

  return (
    <article>
      <section className="pt-20 pb-10 md:pt-28 border-b border-border dark:border-border-dark">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Media
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            {page.frontMatter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            {page.frontMatter.description}
          </p>
          <p className="mt-6 text-body-sm text-muted dark:text-muted-dark">
            {formatDate(page.frontMatter.date)} · {page.readingTime}
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-custom mx-auto">
            <RenderedMdx source={page.content} />
          </div>
        </Container>
      </Section>
    </article>
  )
}
