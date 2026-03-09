import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'

const communities = [
  {
    name: 'Flutter Birmingham',
    role: 'Organiser',
    description:
      'A monthly meetup for Flutter developers in the West Midlands. We bring together developers of all levels to share knowledge, discuss best practices, and build connections within the Flutter ecosystem. Sessions include talks, live coding, and open discussions on mobile development with Dart and Flutter.',
    topics: ['Flutter', 'Dart', 'Mobile Development', 'Cross-platform'],
    link: '#',
  },
  {
    name: 'Golang Birmingham',
    role: 'Organiser',
    description:
      'A community for Go developers in Birmingham and the wider West Midlands. We meet regularly to explore Go programming, discuss backend architecture, concurrency patterns, and the growing Go ecosystem. Whether you are new to Go or have been writing it for years, you are welcome.',
    topics: ['Go', 'Backend', 'Concurrency', 'Systems Programming'],
    link: '#',
  },
]

export default function Community() {
  return (
    <>
      <SEO
        title="Community"
        description="Building developer communities in Birmingham and beyond. I organise Flutter Birmingham and Golang Birmingham, growing local developer ecosystems in the West Midlands."
        url="/community"
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Community
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted dark:text-muted-dark">
            Building developer communities in Birmingham and beyond. I believe that
            strong communities make stronger engineers, and that the best way to learn
            is alongside others who share your curiosity.
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
                </div>

                <p className="mt-6 text-body text-foreground/80 dark:text-foreground-dark/80 max-w-2xl">
                  {community.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {community.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-foreground/5 dark:bg-foreground-dark/10 px-3 py-1 text-caption font-medium text-muted dark:text-muted-dark"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
              Why I organise
            </h2>
            <div className="mt-6 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
              <p>
                When I moved to Birmingham, I found a city full of talented developers
                but with gaps in the community infrastructure for certain technologies.
                I started organising meetups because I wanted to create the spaces I
                wished had existed when I was learning.
              </p>
              <p>
                Community organising is not about having all the answers. It is about
                creating a room where the right questions get asked, where junior
                developers feel safe to contribute, and where experienced engineers are
                reminded of what it felt like to encounter something for the first time.
              </p>
              <p>
                If you are a developer in the West Midlands, or visiting Birmingham,
                you are welcome at any of our events. If you are interested in speaking
                or collaborating, I would love to hear from you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border dark:border-border-dark bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]">
        <Container>
          <div className="text-center">
            <p className="text-body text-muted dark:text-muted-dark">
              Want me to speak at your event, or interested in collaborating on community initiatives?
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
