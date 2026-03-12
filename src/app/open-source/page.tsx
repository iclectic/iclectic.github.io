import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { createMetadata } from '@/lib/seo'
import { openSourceFocusAreas, openSourceHighlights } from '@/data/openSource'
import { siteConfig } from '@/lib/siteConfig'

export const metadata = createMetadata({
  title: 'Open Source',
  description: 'Open source contributions across developer tooling, documentation, and technical discussions.',
  path: '/open-source',
})

export default function OpenSourcePage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Open Source
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Practical contributions that improve developer tooling
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I contribute through issue triage, documentation improvements, and collaboration with maintainers. Open
            source keeps my engineering grounded in shared standards and real world feedback.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={siteConfig.author.github} variant="primary" external>
              View GitHub profile
            </Button>
            <Button href="/contact" variant="secondary">
              Collaborate on open source
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Focus areas"
            description="The areas where I spend the most time contributing and learning in public."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {openSourceFocusAreas.map((item) => (
              <Card key={item} className="p-5 text-body-sm text-muted dark:text-muted-dark">
                {item}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Contribution highlights"
            description="Representative ways I show up for open source projects."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {openSourceHighlights.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Have a project that needs contributors
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                Share the maintainers goals and I can help with targeted improvements.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
