import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { createMetadata } from '@/lib/seo'
import { getAllWriting } from '@/lib/mdx'

export const metadata = createMetadata({
  title: 'Writing',
  description: 'Writing about engineering practice, AI ethics, and community building.',
  path: '/writing',
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function WritingPage() {
  const articles = getAllWriting()

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Writing
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Notes on engineering practice and AI ethics
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            Essays and articles on software engineering, responsible technology, and community building. I aim for
            clarity and practical takeaways.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://dev.to/intelgreatnez" variant="secondary" external>
              Dev.to profile
            </Button>
            <Button href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6153030" variant="ghost" external>
              SSRN research
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Latest writing"
            description="Recent articles and research notes."
          />
          <div className="mt-10 divide-y divide-border dark:divide-border-dark">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="block py-6 first:pt-0 last:pb-0 group"
              >
                {article.frontMatter.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {article.frontMatter.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
                    {article.frontMatter.title}
                  </h3>
                  <span className="text-caption text-muted dark:text-muted-dark whitespace-nowrap">
                    {formatDate(article.frontMatter.date)}
                  </span>
                </div>
                <p className="mt-1 text-body-sm text-muted dark:text-muted-dark">
                  {article.frontMatter.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Want to commission an article
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                I write for community publications, internal teams, and educational platforms.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Start a writing request
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
