import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { createMetadata } from '@/lib/seo'
import { speakingEngagements, speakingTopics } from '@/data/speaking'

export const metadata = createMetadata({
  title: 'Speaking',
  description: 'Talks and workshops on engineering craft, AI ethics, and community leadership.',
  path: '/speaking',
})

export default function SpeakingPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Speaking
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Talks focused on practical engineering and community impact
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I speak about engineering craft, AI ethics, and community leadership. Sessions are designed to be practical
            and grounded in real delivery experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Invite me to speak
            </Button>
            <Button href="/community" variant="secondary">
              View community work
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Current topics"
            description="Sessions I can deliver for meetups, conferences, and team events."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {speakingTopics.map((topic) => (
              <Card key={topic.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {topic.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {topic.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Recent engagements"
            description="Highlights from recent sessions and workshops."
          />
          <div className="mt-8 space-y-4">
            {speakingEngagements.map((item) => (
              <Card key={`${item.title}-${item.date}`} className="p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-body-sm text-accent">{item.event}</p>
                  </div>
                  <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <p className="mt-3 text-body-sm text-muted dark:text-muted-dark max-w-2xl">
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
                Planning a technical event
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                Share the audience goals and I will propose a tailored session.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Request a talk
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
