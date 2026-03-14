import { notFound } from 'next/navigation'
import MDXContent from '@/components/mdx/MDXContent'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import { createMetadata } from '@/lib/seo'
import { getContentBySlug } from '@/lib/mdx'

export const metadata = createMetadata({
  title: 'Now',
  description: 'What I am focusing on right now across engineering, community, and writing.',
  path: '/now',
})

export default function NowPage() {
  const now = getContentBySlug('now', 'index')

  if (!now) {
    notFound()
  }

  return (
    <article>
      <section className="pt-20 pb-10 md:pt-28 border-b border-border dark:border-border-dark">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Now
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            {now.frontMatter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            {now.frontMatter.description}
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-custom mx-auto">
            <MDXContent source={now.content} />
          </div>
        </Container>
      </Section>
    </article>
  )
}
