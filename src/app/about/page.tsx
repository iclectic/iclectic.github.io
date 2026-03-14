import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { createMetadata } from '@/lib/seo'
import {
  careAbout,
  currentlyExploring,
  currentWork,
  education,
  heroHighlights,
  principles,
  storyParagraphs,
  timelineMilestones,
} from '@/data/about'

export const metadata = createMetadata({
  title: 'About',
  description:
    'Software engineer, community organiser, and open source contributor with a background in technical support, problem solving, and public contribution.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                About
              </p>
              <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
                Building software and contributing to the ecosystems around it
              </h1>
              <p className="mt-5 max-w-2xl text-body text-foreground/80 dark:text-foreground-dark/80">
                I am Ibim Braide, a freelance software engineer and community organiser based in the United Kingdom. I
                hold a Bachelor of Engineering degree from the University of Benin and a Master&apos;s degree in Computer
                Science from Birmingham City University.
              </p>
              <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
                My background spans software engineering, IT support, technical problem solving, community leadership,
                and open source contribution. I care about useful software, thoughtful engineering, and public work
                that strengthens the wider developer ecosystem.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border dark:border-border-dark lg:h-80 lg:w-80">
                <Image
                  src="/images/profile/ibim_photo.jpg"
                  alt="Ibim Braide"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Story"
            title="A career shaped by engineering foundations and practical problem solving"
            description="The thread through my work is steady technical growth, initiative, and a growing commitment to public contribution."
          />
          <div className="mt-8 max-w-3xl space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Now"
            title="What I do now"
            description="The work I am focused on today and how the different parts of it reinforce one another."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {currentWork.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-body-sm text-muted dark:text-muted-dark">
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
            eyebrow="Journey"
            title="A concise timeline of growth"
            description="Not a full CV, but the milestones that best explain how my work has developed."
          />
          <div className="mt-10 space-y-0">
            {timelineMilestones.map((item) => (
              <div
                key={`${item.period}-${item.title}`}
                className="border-b border-border dark:border-border-dark py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                      {item.period}
                    </p>
                    <h3 className="mt-2 font-display text-h3 text-foreground dark:text-foreground-dark">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 max-w-2xl text-body-sm text-foreground/70 dark:text-foreground-dark/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation"
            description="Formal study that supports both my engineering practice and long term technical development."
          />
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {education.map((item) => (
              <Card key={`${item.degree}-${item.period}`} className="p-6">
                <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                  {item.period}
                </p>
                <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.degree}
                </h3>
                <p className="mt-2 text-body-sm text-accent">{item.institution}</p>
                <p className="mt-3 text-body-sm text-muted dark:text-muted-dark">
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
            eyebrow="Principles"
            title="How I work"
            description="The standards I try to bring to engineering work, collaboration, and community leadership."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-body-sm text-muted dark:text-muted-dark">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Care"
                title="What I care about"
                description="The kinds of work and outcomes that matter most to me."
              />
              <div className="mt-8 space-y-3">
                {careAbout.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Exploring"
                title="Currently exploring"
                description="Areas where I am investing more time, attention, and long term ambition."
              />
              <div className="mt-8 space-y-3">
                {currentlyExploring.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Looking for engineering depth with public contribution
              </h2>
              <p className="mt-2 max-w-2xl text-body text-muted dark:text-muted-dark">
                I am interested in work that values technical judgement, initiative, and contribution beyond a single
                codebase.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/cv" variant="primary">
                View CV
              </Button>
              <Button href="/contact" variant="secondary">
                Contact me
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
