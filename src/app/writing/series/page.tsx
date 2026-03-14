import Link from 'next/link'
import ArticleCard from '@/components/cards/ArticleCard'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/primitives/Button'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import { createMetadata } from '@/lib/seo'
import { getAllWriting } from '@/lib/mdx'
import { writingSeries } from '@/data/writing'

export const metadata = createMetadata({
  title: 'Writing Series',
  description: 'Curated writing series on engineering practice, community leadership, and responsible technology.',
  path: '/writing/series',
})

function getSeriesDescription(name: string) {
  const match = writingSeries.find((series) => series.name === name)
  if (match) {
    return match.description
  }
  return 'Curated articles that share a consistent theme and practical guidance.'
}

export default function WritingSeriesPage() {
  const articles = getAllWriting()
  const articlesWithSeries = articles.filter((article) => article.frontMatter.series)
  const seriesFromArticles = Array.from(
    new Set(articlesWithSeries.map((article) => article.frontMatter.series as string))
  )

  const orderedSeries = [
    ...writingSeries.map((series) => series.name),
    ...seriesFromArticles.filter((series) => !writingSeries.some((item) => item.name === series)),
  ]

  return (
    <>
      <PageHero
        eyebrow="Writing series"
        title="Curated bundles of writing by theme"
        description="Each series groups articles around a shared problem space so you can explore a topic in depth. I use series to turn individual essays into coherent guidance."
        actions={[
          { label: 'Back to writing', href: '/writing', variant: 'secondary' },
          { label: 'Suggest a topic', href: '/contact', variant: 'ghost' },
        ]}
      />

      <Section>
        <Container>
          {orderedSeries.map((seriesName) => {
            const seriesArticles = articlesWithSeries.filter(
              (article) => article.frontMatter.series === seriesName
            )

            if (seriesArticles.length === 0) {
              return null
            }

            return (
              <div key={seriesName} className="mb-12 last:mb-0">
                <div className="flex flex-col gap-2">
                  <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                    Series
                  </p>
                  <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                    {seriesName}
                  </h2>
                  <p className="max-w-2xl text-body-sm text-muted dark:text-muted-dark">
                    {getSeriesDescription(seriesName)}
                  </p>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {seriesArticles.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      title={article.frontMatter.title}
                      description={article.frontMatter.description}
                      href={`/writing/${article.slug}`}
                      date={article.frontMatter.date}
                      readingTime={article.readingTime}
                      tags={article.frontMatter.tags}
                      image={article.frontMatter.image as string | undefined}
                    />
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/writing"
                    className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                  >
                    View all writing
                  </Link>
                </div>
              </div>
            )
          })}
        </Container>
      </Section>
    </>
  )
}
