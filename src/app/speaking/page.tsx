import PageHero from '@/components/layout/PageHero'
import SectionHeader from '@/components/layout/SectionHeader'
import SpeakingCard from '@/components/cards/SpeakingCard'
import Button from '@/components/primitives/Button'
import Card from '@/components/primitives/Card'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import {
  getOrganiserExpectations,
  getSpeakingEngagements,
  getSpeakingTopics,
} from '@/lib/content'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Speaking',
  description: 'Talks and workshops on engineering craft, AI ethics, and community leadership.',
  path: '/speaking',
})

export default function SpeakingPage() {
  const speakingTopics = getSpeakingTopics()
  const speakingEngagements = getSpeakingEngagements()
  const organiserExpectations = getOrganiserExpectations()

  return (
    <>
      <PageHero
        eyebrow="Speaking"
        title="Talks focused on practical engineering and community impact"
        description="I speak about engineering craft, Flutter, delivery clarity, and community leadership. Sessions are designed to be practical, grounded in real work, and useful for teams or meetup audiences rather than performative."
        actions={[
          { label: 'Invite me to speak', href: '/contact', variant: 'primary' },
          { label: 'View community work', href: '/community', variant: 'secondary' },
          { label: 'Read my writing', href: '/writing', variant: 'ghost' },
        ]}
      />

      <Section>
        <Container>
          <SectionHeader
            title="Current topics"
            description="Sessions I can deliver for meetups, conferences, team events, and community programmes."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {speakingTopics.map((topic) => (
              <SpeakingCard key={topic.title} variant="topic" item={topic} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Recent engagements"
            description="Delivered sessions and the kinds of outcomes they were designed to support."
          />
          <div className="mt-8 space-y-4">
            {speakingEngagements.map((item) => (
              <SpeakingCard key={`${item.title}-${item.date}`} variant="engagement" item={item} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="What organisers can expect"
            description="A simple working style that helps organisers assess fit quickly."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {organiserExpectations.map((item) => (
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
                Planning a technical event
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                Share the audience, format, and goals and I will propose the most suitable session.
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
