import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'

const topics = [
  {
    title: 'Software engineering craft and architecture',
    description:
      'Building maintainable systems, choosing the right tools, and balancing speed with reliability.',
  },
  {
    title: 'Community building for developers',
    description:
      'Lessons from organising Flutter Birmingham and Golang Birmingham, from speaker pipelines to sustainable growth.',
  },
  {
    title: 'AI ethics and responsible technology',
    description:
      'Practical ways engineers can design responsible systems and avoid unintended harm.',
  },
  {
    title: 'Developer education and career growth',
    description:
      'Learning in public, building credible portfolios, and mentoring early career engineers.',
  },
]

const formats = [
  'Conference talks and keynotes',
  'Meetup sessions and panels',
  'Workshops and technical training',
  'Podcasts and interviews',
]

export default function Speaking() {
  return (
    <>
      <SEO
        title="Speaking"
        description="I speak about software engineering, community building, and AI ethics. Available for conferences, meetups, and workshops."
        url="/speaking"
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Speaking
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I speak about software engineering, community leadership, and AI ethics. I focus on clear, practical ideas
            that help teams build better systems.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-8">
            Topics I cover
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-xl border border-border dark:border-border-dark p-6"
              >
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {topic.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Formats
              </h2>
              <ul className="mt-4 space-y-3">
                {formats.map((format) => (
                  <li
                    key={format}
                    className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {format}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Recent appearances
              </h2>
              <p className="mt-4 text-body text-muted dark:text-muted-dark">
                I regularly present at Flutter Birmingham and Golang Birmingham meetups. This section will grow with
                future conferences and events.
              </p>
              <Link
                href="/community"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                Explore community work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t border-border dark:border-border-dark bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
              Invite me to speak
            </h2>
            <p className="mt-2 text-body text-muted dark:text-muted-dark max-w-lg mx-auto">
              If you are organising an event and want a thoughtful, practical session, I would love to help.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-body-sm font-semibold text-background transition-colors hover:bg-foreground/80 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
