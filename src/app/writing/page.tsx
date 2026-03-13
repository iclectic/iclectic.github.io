import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import ArticleCard from '@/components/ui/ArticleCard'
import WritingLibrary from '@/components/writing/WritingLibrary'
import { createMetadata } from '@/lib/seo'
import { getAllWriting } from '@/lib/mdx'

export const metadata = createMetadata({
  title: 'Writing',
  description: 'Writing about engineering practice, AI ethics, and community building.',
  path: '/writing',
})

const categories = [
  {
    title: 'AI ethics and responsible innovation',
    description: 'Practical decision making that keeps AI work accountable and human.',
  },
  {
    title: 'Engineering practice and delivery',
    description: 'How to plan, build, and ship software with clear scope and outcomes.',
  },
  {
    title: 'Open source and tooling',
    description: 'Small contributions, strong collaboration, and maintainable systems.',
  },
  {
    title: 'Community and developer education',
    description: 'How communities create learning momentum and shared standards.',
  },
  {
    title: 'Flutter and mobile engineering',
    description: 'Notes on reliable Flutter delivery, architecture, and testing.',
  },
  {
    title: 'Go and backend systems',
    description: 'Design choices, reliability, and service architecture in Go.',
  },
  {
    title: 'Career growth in tech',
    description: 'Sustainable learning, visibility, and building trust in your work.',
  },
]

const evergreenSeries = [
  {
    title: 'Practical engineering notes',
    description: 'Short essays on scope, delivery, and quality for working engineers.',
  },
  {
    title: 'Community leadership playbook',
    description: 'What I have learned while organising developer communities.',
  },
  {
    title: 'Responsible technology checklist',
    description: 'A living reference for ethical AI and product decisions.',
  },
]

export default function WritingPage() {
  const articles = getAllWriting()
  const featuredArticles = articles.filter((article) => article.frontMatter.featured).slice(0, 3)
  const articleSummaries = articles.map((article) => ({
    slug: article.slug,
    title: article.frontMatter.title,
    description: article.frontMatter.description,
    date: article.frontMatter.date,
    readingTime: article.readingTime,
    tags: article.frontMatter.tags,
    series: article.frontMatter.series as string | undefined,
    image: article.frontMatter.image as string | undefined,
  }))

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Writing
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Writing that turns engineering work into shared learning
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I write about software delivery, responsible technology, open source, and community leadership. The goal
            is clarity, practical takeaways, and a point of view shaped by real delivery work.
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
            title="Editorial mission"
            description="What I aim to publish and why it matters."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                Clear thinking
              </h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Each article is designed to be useful to engineers who want substance over noise.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                Real delivery context
              </h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                I share lessons from product work, open source, and community leadership.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                Responsible technology
              </h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                I treat AI ethics as a delivery decision, not a final check.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {featuredArticles.length > 0 ? (
        <Section>
          <Container>
            <SectionHeader
              title="Featured articles"
              description="Flagship pieces that capture the depth and tone I aim to sustain."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.frontMatter.title}
                  description={article.frontMatter.description}
                  href={`/writing/${article.slug}`}
                  date={article.frontMatter.date}
                  readingTime={article.readingTime}
                  tags={article.frontMatter.tags}
                  image={article.frontMatter.image as string | undefined}
                  featured
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <SectionHeader
            title="Core categories"
            description="Where my writing will focus as the library grows."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {category.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Browse the library"
            description="Filter by category or series to find the topics that matter to you."
          />
          <div className="mt-8">
            <WritingLibrary articles={articleSummaries} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Evergreen series"
            description="Long running themes that I will keep refining over time."
            action={(
              <Button href="/writing/series" variant="link">
                Explore series
              </Button>
            )}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {evergreenSeries.map((series) => (
              <Card key={series.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {series.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {series.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Connected to community and open source"
            description="Writing that reflects the work I do in public."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                Community leadership
              </h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Many articles are shaped by organising Flutter Birmingham and helping lead Golang Birmingham.
              </p>
              <Button href="/community" variant="secondary" className="mt-4">
                Explore community work
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                Open source practice
              </h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Open source contributions keep my thinking grounded in real maintainership and review standards.
              </p>
              <Button href="/open-source" variant="secondary" className="mt-4">
                See open source work
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Want to commission an article or invite a talk
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                I write for community publications, internal teams, and educational platforms.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Start a writing request
              </Button>
              <Button href="/speaking" variant="secondary">
                Speaking topics
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
