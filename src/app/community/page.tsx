import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { communityHighlights, communityRoles } from '@/data/community'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Community',
  description: 'Community leadership across Flutter Birmingham and Golang Birmingham.',
  path: '/community',
})

export default function CommunityPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Community
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Building spaces where engineers learn together
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I organise Flutter Birmingham and help lead Golang Birmingham with the organising team. My focus is
            practical learning, inclusive communities, and helping engineers connect with real opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/speaking" variant="secondary">
              View speaking topics
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

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Want to host a session or collaborate
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                I am open to partnerships, sponsorships, and speaker recommendations.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
