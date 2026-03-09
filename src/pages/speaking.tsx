import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'

const topics = [
  {
    title: 'Software Engineering and Architecture',
    description:
      'Building maintainable applications, choosing the right tools, and making technical decisions that scale.',
  },
  {
    title: 'Community Building for Developers',
    description:
      'How to start, grow, and sustain developer communities. Lessons from organising Flutter Birmingham and Golang Birmingham.',
  },
  {
    title: 'AI Ethics and Responsible Technology',
    description:
      'The intersection of artificial intelligence, ethics, and the responsibility engineers carry when building systems that affect people.',
  },
  {
    title: 'Developer Education and Growth',
    description:
      'Learning in public, building a portfolio that reflects real depth, and navigating a career in software engineering.',
  },
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
          <p className="mt-4 max-w-xl text-body text-muted dark:text-muted-dark">
            I speak about software engineering, community building, and AI ethics.
            I am available for conferences, meetups, podcasts, and workshops.
          </p>
        </Container>
      </section>

      {/* Topics */}
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

      {/* Past talks placeholder */}
      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-4">
            Past appearances
          </h2>
          <p className="text-body text-muted dark:text-muted-dark">
            This section will be updated as I give more public talks. I regularly
            present at Flutter Birmingham and Golang Birmingham meetups.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border dark:border-border-dark bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
              Invite me to speak
            </h2>
            <p className="mt-2 text-body text-muted dark:text-muted-dark max-w-lg mx-auto">
              If you are organising an event and think I would be a good fit, I would
              love to hear from you. I am happy to tailor talks to your audience.
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
