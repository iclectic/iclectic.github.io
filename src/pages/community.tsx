import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'

const communities = [
  {
    name: 'Flutter Birmingham',
    role: 'Organiser',
    description:
      'A developer community for Flutter engineers across the West Midlands. I lead programming, speaker curation, and the overall direction of the meetup.',
    link: 'https://www.meetup.com/flutter-birmingham/',
    responsibilities: [
      'Organising developer meetups and sessions',
      'Inviting and supporting speakers',
      'Planning event topics and formats',
      'Promoting community growth and visibility',
      'Coordinating sessions with the organising team',
    ],
    impact: [
      'Multiple developer events organised',
      'Hosted technical speakers and community sessions',
      'Supported the growth of the Flutter ecosystem in Birmingham',
    ],
  },
  {
    name: 'Golang Birmingham',
    role: 'Organiser within the organising team',
    description:
      'A growing Go community in Birmingham. I support strategic direction with the organising team, including programming and partnerships.',
    link: 'https://www.meetup.com/birminghamgodevs/',
    responsibilities: [
      'Supporting event planning and logistics',
      'Coordinating speakers and topics',
      'Community outreach and partnerships',
      'Organising technical sessions',
    ],
    impact: [
      'Contributed to organising several community events',
      'Supported discussions on Go, distributed systems, and infrastructure',
      'Helped create space for backend engineering growth in Birmingham',
    ],
  },
]

const principles = [
  'Create welcoming rooms for engineers at every career stage',
  'Prioritise technical depth and practical learning',
  'Amplify underrepresented voices and new speakers',
  'Build community infrastructure that scales with care',
]

export default function Community() {
  return (
    <>
      <SEO
        title="Community"
        description="Building developer communities in Birmingham and beyond. I organise Flutter Birmingham and help steer Golang Birmingham with the organising team."
        url="/community"
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Community
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I organise developer communities because strong ecosystems make stronger engineers. My focus is creating
            technically credible, welcoming spaces that help people grow.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="space-y-12">
            {communities.map((community) => (
              <article
                key={community.name}
                className="rounded-xl border border-border dark:border-border-dark p-8 md:p-10"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                      {community.name}
                    </h2>
                    <span className="mt-1 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-caption font-medium text-accent">
                      {community.role}
                    </span>
                  </div>
                  <a
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
                  >
                    View Meetup page
                  </a>
                </div>

                <p className="mt-6 text-body text-foreground/80 dark:text-foreground-dark/80 max-w-2xl">
                  {community.description}
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      Responsibilities
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {community.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      Impact
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {community.impact.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
              Principles
            </h2>
            <ul className="mt-6 space-y-3">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t border-border dark:border-border-dark bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]">
        <Container>
          <div className="text-center">
            <p className="text-body text-muted dark:text-muted-dark">
              Interested in speaking, partnering, or supporting our community programmes
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-body-sm font-semibold text-background transition-colors hover:bg-foreground/80 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
