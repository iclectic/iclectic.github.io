import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import {
  communityGallery,
  communityEvents,
  communityHighlights,
  communityMetrics,
  communityMilestones,
  communityOperations,
  communityRoles,
  communitySpeakers,
  communityWorkstreams,
} from '@/data/community'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Community',
  description: 'Community leadership across Flutter Birmingham and Golang Birmingham with practical, collaborative delivery.',
  path: '/community',
})

function formatEventDate(dateString: string) {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) {
    return dateString
  }

  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function CommunityPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Community
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Community leadership grounded in practical engineering
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I organise Flutter Birmingham and help lead Golang Birmingham with the organising team. I focus on
            practical learning, inclusive communities, and creating space for engineers to share honest delivery
            lessons.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://www.meetup.com/flutter-birmingham/" variant="secondary" external>
              Flutter Birmingham meetup
            </Button>
            <Button href="https://www.meetup.com/birminghamgodevs/" variant="secondary" external>
              Golang Birmingham meetup
            </Button>
            <Button href="/speaking" variant="secondary">
              View speaking work
            </Button>
            <Button href="/contact" variant="ghost">
              Partner with the community
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Leadership snapshot"
            description="Evidence of consistent delivery and collaborative leadership."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {communityMetrics.map((metric) => (
              <Card key={metric.label} className="p-6">
                <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                  {metric.label}
                </p>
                <p className="mt-3 font-display text-h2 text-foreground dark:text-foreground-dark">
                  {metric.value}
                </p>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Leadership roles"
            description="Hands on responsibilities that keep the communities running and growing."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {communityRoles.map((role) => (
              <Card key={role.name} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {role.name}
                </h3>
                <p className="mt-1 text-body-sm text-accent">{role.role}</p>
                <p className="mt-3 text-body-sm text-muted dark:text-muted-dark">
                  {role.summary}
                </p>
                <a
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  Visit meetup page
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Programming and speaker pipeline"
            description="How I plan sessions and support speakers so the learning stays practical."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {communityWorkstreams.map((item) => (
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

      <Section>
        <Container>
          <SectionHeader
            title="Event planning and delivery"
            description="The operational work that keeps meetups steady and enjoyable."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {communityOperations.map((item) => (
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

      <Section>
        <Container>
          <SectionHeader
            title="Community impact"
            description="The outcomes I prioritise when working with the organising teams."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {communityHighlights.map((item) => (
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

      <Section>
        <Container>
          <SectionHeader
            title="Events calendar"
            description="A running list of recent and upcoming sessions across both communities."
          />
          <div className="mt-8 space-y-4">
            {communityEvents.map((event) => (
              <Card key={`${event.title}-${event.date}`} className="p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                      {event.group}
                    </p>
                    <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                      {event.focus}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-caption text-muted dark:text-muted-dark">
                      <span>{formatEventDate(event.date)}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{event.location}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{event.format}</span>
                    </div>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caption font-medium text-accent hover:underline underline-offset-2"
                  >
                    Meetup details
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Speaker archive"
            description="A record of speakers and sessions I have supported."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {communitySpeakers.map((speaker) => (
              <Card key={`${speaker.name}-${speaker.date}`} className="p-6">
                <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                  {speaker.group}
                </p>
                <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
                  {speaker.name}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {speaker.topic}
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-caption text-muted dark:text-muted-dark">
                  <span>{formatEventDate(speaker.date)}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{speaker.format}</span>
                </div>
                <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70">
                  {speaker.note}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <SectionHeader
            title="Milestones and momentum"
            description="A short record of community moments worth noting."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {communityMilestones.map((item) => (
              <Card key={item.title} className="p-6">
                <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                  {item.date}
                </p>
                <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
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

      <Section>
        <Container>
          <SectionHeader
            title="Gallery and media"
            description="Use photos, posters, and highlights to show the communities in action."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {communityGallery.map((item) => (
              <Card key={item.title} className="p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border dark:border-border-dark">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-caption font-medium text-foreground shadow-sm backdrop-blur dark:bg-background-dark/90 dark:text-foreground-dark">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark">
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
                Share a session idea or partner with the community
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                I welcome speaker recommendations, venue support, and collaborations that keep the learning useful.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/speaking" variant="secondary">
                Speaking and workshops
              </Button>
              <Button href="/writing" variant="secondary">
                Writing and notes
              </Button>
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
