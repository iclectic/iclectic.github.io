import Image from 'next/image'
import CommunityEventCard from '@/components/cards/CommunityEventCard'
import SpeakerArchiveCard from '@/components/cards/SpeakerArchiveCard'
import PageHero from '@/components/layout/PageHero'
import SectionHeader from '@/components/layout/SectionHeader'
import Button from '@/components/primitives/Button'
import Card from '@/components/primitives/Card'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import {
  communityGallery,
  communityEvents,
  communityHighlights,
  communityMetrics,
  communityMilestones,
  communityOperations,
  communityReferences,
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
  if (/^\d{4}$/.test(dateString)) {
    return dateString
  }

  if (/^[A-Za-z]+\s+\d{4}$/.test(dateString)) {
    return dateString
  }

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
      <PageHero
        eyebrow="Community"
        title="Community leadership grounded in practical engineering"
        description="I organise Flutter Birmingham and help lead Golang Birmingham with the organising team. I focus on practical learning, inclusive communities, and creating space for engineers to share honest delivery lessons."
        actions={[
          {
            label: 'Flutter Birmingham meetup',
            href: 'https://www.meetup.com/flutter-birmingham/',
            variant: 'secondary',
            external: true,
          },
          {
            label: 'Golang Birmingham meetup',
            href: 'https://www.meetup.com/birminghamgodevs/',
            variant: 'secondary',
            external: true,
          },
          { label: 'View speaking work', href: '/speaking', variant: 'secondary' },
          { label: 'Partner with the community', href: '/contact', variant: 'ghost' },
        ]}
      />

      {communityMetrics.length > 0 ? (
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
      ) : null}

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

      {communityReferences.length > 0 ? (
        <Section>
          <Container>
            <SectionHeader
              title="Public documentation trail"
              description="References that make the work easier to verify across meetup pages, speaking, and published writing."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {communityReferences.map((item) => (
                <Card key={`${item.type}-${item.title}`} className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-caption font-medium text-accent">
                      {item.type}
                    </span>
                    <span className="text-caption text-muted dark:text-muted-dark">
                      {formatEventDate(item.date)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <Button href={item.link} variant="link" external={item.external}>
                      {item.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {communityEvents.length > 0 ? (
        <Section>
          <Container>
            <SectionHeader
              title="Events calendar"
              description="A dated record of sessions and community activity that can be tied back to public pages."
            />
            <div className="mt-8 space-y-4">
              {communityEvents.map((event) => (
                <CommunityEventCard
                  key={`${event.title}-${event.date}`}
                  event={event}
                  displayDate={formatEventDate(event.date)}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {communitySpeakers.length > 0 ? (
        <Section>
          <Container>
            <SectionHeader
              title="Speaker archive"
              description="A record of speakers and sessions I have supported."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {communitySpeakers.map((speaker) => (
                <SpeakerArchiveCard
                  key={`${speaker.name}-${speaker.date}`}
                  speaker={speaker}
                  displayDate={formatEventDate(speaker.date)}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {communityMilestones.length > 0 ? (
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
      ) : null}

      {communityGallery.length > 0 ? (
        <Section>
          <Container>
            <SectionHeader
              title="Gallery and media"
              description="Photos, posters, and highlights from community activity."
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
      ) : null}

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
