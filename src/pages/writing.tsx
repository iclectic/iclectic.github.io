import Link from 'next/link'
import { GetStaticProps } from 'next'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { getAllWriting, ContentItem } from '@/lib/mdx'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface WritingProps {
  mdxArticles: ContentItem[]
}

const focusAreas = [
  'AI ethics and responsible technology',
  'Software engineering craft and architecture',
  'Community building and developer education',
  'Tooling, productivity, and career growth',
]

const externalWriting = [
  {
    label: 'SSRN',
    description: 'Research writing on emerging themes such as AI ethics and responsible innovation.',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6153030',
  },
  {
    label: 'Dev.to',
    description: 'Developer essays on software engineering, learning journeys, and practical tooling.',
    href: 'https://dev.to/intelgreatnez',
  },
]

export default function Writing({ mdxArticles }: WritingProps) {
  const mdxFeatured = mdxArticles.filter((a) => a.frontMatter.featured)
  const mdxRest = mdxArticles.filter((a) => !a.frontMatter.featured)

  return (
    <>
      <SEO
        title="Writing"
        description="Writing on AI ethics, engineering practice, community building, and developer education."
        url="/writing"
      />

      <section className="pt-20 pb-8 md:pt-28">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Writing
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I write about AI ethics, engineering practice, community building, and developer education. The focus is
            practical, reflective, and rooted in real delivery work.
          </p>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-4">
            Topics I care about
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((topic) => (
              <li
                key={topic}
                className="rounded-xl border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
              >
                {topic}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-4">
            Writing elsewhere
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {externalWriting.map((source) => (
              <a
                key={source.label}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border dark:border-border-dark p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {source.label}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {source.description}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {mdxFeatured.length > 0 && (
        <section className="pb-16">
          <Container>
            <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
              Featured
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {mdxFeatured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/writing/${article.slug}`}
                  className="group rounded-xl border border-border dark:border-border-dark p-6 hover:border-accent/30 transition-colors"
                >
                  {article.frontMatter.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {article.frontMatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/10 px-2.5 py-0.5 text-caption font-medium text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
                    {article.frontMatter.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
                    {article.frontMatter.description}
                  </p>
                  <p className="mt-4 text-caption text-muted dark:text-muted-dark">
                    {formatDate(article.frontMatter.date)} · {article.readingTime}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {mdxRest.length > 0 && (
        <section className="pb-20 border-t border-border dark:border-border-dark pt-16">
          <Container>
            <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
              More articles
            </h2>
            <div className="divide-y divide-border dark:divide-border-dark">
              {mdxRest.map((article) => (
                <Link key={article.slug} href={`/writing/${article.slug}`} className="block py-6 first:pt-0 last:pb-0 group">
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
                  <p className="mt-2 text-caption text-muted dark:text-muted-dark">
                    {article.readingTime}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {mdxArticles.length === 0 && (
        <section className="pb-20">
          <Container>
            <div className="rounded-xl border border-dashed border-border dark:border-border-dark p-8 text-center">
              <p className="text-body text-muted dark:text-muted-dark">
                Articles are in progress. Check back soon or subscribe to the RSS feed.
              </p>
              <a
                href="/rss.xml"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                RSS feed
              </a>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxArticles = getAllWriting()
  return {
    props: {
      mdxArticles: JSON.parse(JSON.stringify(mdxArticles)),
    },
  }
}
