import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { createMetadata } from '@/lib/seo'
import { education, experience, focusAreas, values } from '@/data/about'

export const metadata = createMetadata({
  title: 'About',
  description:
    'Freelance engineer, community organiser, and open source contributor. Background, focus areas, and the work that shapes my delivery style.',
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
                Freelance engineer with a community first approach
              </h1>
              <div className="mt-8 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  I am a freelance engineer based in the United Kingdom. I build across frontend, backend, mobile, and
                  data with a focus on clear delivery, maintainable systems, and measurable outcomes.
                </p>
                <p>
                  I organise Flutter Birmingham and help lead Golang Birmingham with the organising team. Community
                  building is core to my work because it strengthens engineering ecosystems and improves access to
                  high quality learning.
                </p>
                <p>
                  I contribute to open source and write about AI ethics, engineering craft, and developer education. I
                  hold a Master of Science in Computer Science from Birmingham City University and a Bachelor of
                  Engineering in Computer Engineering from the University of Benin.
                </p>
              </div>

              <h2 className="mt-12 font-display text-h2 text-foreground dark:text-foreground-dark">
                Focus areas
              </h2>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-h2 text-foreground dark:text-foreground-dark">
                Values and approach
              </h2>
              <ul className="mt-4 space-y-3">
                {values.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-h2 text-foreground dark:text-foreground-dark">
                Personal note
              </h2>
              <div className="mt-4 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  I enjoy research, thoughtful design, and building tools that help people do their best work. I am
                  motivated by impact and honest outcomes.
                </p>
                <p>
                  I currently live in England and work with communities across the West Midlands.
                </p>
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
            title="Experience"
            description="A concise timeline of roles and work that shaped my delivery style. [Placeholder] Add recent freelance engagements with scope and outcomes."
          />
          <div className="mt-10 space-y-0">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="group relative border-b border-border dark:border-border-dark py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-body-sm">
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-2"
                      >
                        {item.company}
                      </a>
                      <span className="text-muted dark:text-muted-dark"> · {item.location}</span>
                    </p>
                  </div>
                  <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70 max-w-2xl">
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
            title="Education"
            description="Academic background that supports my engineering practice and research interests."
          />
          <div className="mt-10 space-y-0">
            {education.map((item) => (
              <div
                key={item.degree}
                className="border-b border-border dark:border-border-dark py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-body-sm text-muted dark:text-muted-dark">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70 max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Want the full CV or a quick conversation
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                I am happy to share more detail and discuss how I can help.
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
