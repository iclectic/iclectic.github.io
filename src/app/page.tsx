import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/cards/ProjectCard'
import Container from '@/components/primitives/Container'
import Button from '@/components/primitives/Button'
import Section from '@/components/primitives/Section'
import Tag from '@/components/primitives/Tag'
import SectionHeader from '@/components/layout/SectionHeader'
import { siteSettings } from '@/data/site'
import { getGitHubActivity, getGitHubUsername } from '@/lib/github'
import { getFeaturedProjectCards, getOpenSourcePublicWork } from '@/lib/content'
import { getAllCaseStudies, getAllWriting } from '@/lib/mdx'

export const revalidate = 3600

function formatDate(dateString: string) {
  if (/^\d{4}$/.test(dateString)) {
    return dateString
  }

  if (/^[A-Za-z]+\s+\d{4}$/.test(dateString)) {
    return dateString
  }

  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface ImpactItem {
  date: string
  label: string
  title: string
  detail: string
  href: string
  cta: string
  external?: boolean
}

export default async function HomePage() {
  const featuredProjects = getFeaturedProjectCards().slice(0, 3)
  const featuredCaseStudies = getAllCaseStudies().slice(0, 2)
  const latestWriting = getAllWriting().slice(0, 2)
  const githubUsername = getGitHubUsername(siteSettings.author.github)
  const githubActivity = githubUsername ? await getGitHubActivity(githubUsername, 3) : []
  const fallbackOpenSourceWork = getOpenSourcePublicWork()
  const recentContributions = githubActivity.length > 0
    ? githubActivity
    : fallbackOpenSourceWork.slice(0, 3)
  const proofItems = [
    {
      label: 'Education',
      value: 'MSc Computer Science, Birmingham City University',
      detail: 'BEng Computer Engineering, University of Benin. Published research on SSRN.',
    },
    {
      label: 'Community',
      value: 'Organiser, Flutter Birmingham',
      detail: 'Organising team, Golang Birmingham. Supported first-time speakers and ran recurring sessions since 2024.',
    },
    {
      label: 'Open source',
      value: '4 public repositories shipped in 2026',
      detail: 'TEXTARA (offline reader), State-Layers-Demo, checkin-qr, flutter-birmingham-hub.',
    },
    {
      label: 'Speaking',
      value: 'Delivered state management session at Flutter Birmingham',
      detail: 'Conference-ready talks on Flutter architecture, delivery clarity, and community engineering.',
    },
  ] as const
  const impactItems: ImpactItem[] = [
    {
      date: '2026-03-12',
      label: 'Writing',
      title: 'Responsible AI starts in the backlog',
      detail: 'Argued that ethical review belongs in sprint planning, not after the model ships. Published as a standalone essay with a reusable delivery checklist.',
      href: '/writing/responsible-ai-starts-in-the-backlog',
      cta: 'Read the essay',
    },
    {
      date: '2026-02-27',
      label: 'Open source',
      title: 'Shipped State-Layers-Demo on GitHub',
      detail: 'Conference-ready Flutter repository that teaches local, shared, and app-level state in one working example. Built to support my own talk and reusable by other speakers.',
      href: 'https://github.com/iclectic/State-Layers-Demo',
      cta: 'View repository',
      external: true,
    },
    {
      date: '2026-03-05',
      label: 'Community',
      title: 'Documented the Flutter Birmingham operating model',
      detail: 'Wrote up how I programme sessions, onboard speakers, and keep meetup delivery steady. Turns tacit organiser knowledge into a public reference.',
      href: '/writing/running-developer-communities-like-engineering-projects',
      cta: 'Read the write-up',
    },
    {
      date: '2025',
      label: 'Speaking',
      title: 'Talked state management at Flutter Birmingham',
      detail: 'Walked a meetup audience through where Flutter state decisions go wrong and how to keep architecture choices maintainable under delivery pressure.',
      href: '/speaking',
      cta: 'View speaking topics',
    },
  ] as const

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteSettings.author.name,
    url: siteSettings.url,
    email: siteSettings.author.email,
    jobTitle: 'Freelance Engineer and Community Organiser',
    knowsAbout: [
      'Software Engineering',
      'Open Source',
      'Community Building',
      'Developer Education',
      'AI Ethics',
      'TypeScript',
      'Python',
      'Go',
      'React',
      'Next.js',
      'Flutter',
      'Data Analysis',
      'Machine Learning',
    ],
    sameAs: [
      siteSettings.author.github,
      siteSettings.author.linkedin,
      siteSettings.author.twitter,
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Birmingham City University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Benin',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <Container>
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                Ibim Braide
              </p>
              <h1 className="mt-4 font-display text-display text-foreground dark:text-foreground-dark text-balance">
                I build software, then I build the communities around it
              </h1>
              <p className="mt-4 text-h3 text-muted dark:text-muted-dark font-medium">
                Software engineer. Flutter Birmingham organiser. Open source contributor. Based in the UK.
              </p>
              <p className="mt-6 text-body text-foreground/80 dark:text-foreground-dark/80 max-w-xl">
                Most engineers ship code. I also ship meetups, speaker pipelines, and teaching repositories.
                I believe the best engineering work happens when you invest in the ecosystem, not just the product.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/case-studies" variant="primary">
                  Read case studies
                </Button>
                <Button href="/cv" variant="secondary">
                  View CV
                </Button>
                <Button href="/projects" variant="ghost">
                  View projects
                </Button>
                <Button href="/contact" variant="link">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border dark:border-border-dark lg:h-64 lg:w-64">
                <Image
                  src="/images/profile/ibim_photo.jpg"
                  alt="Ibim Braide"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 192px, 256px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-body-sm font-semibold uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
                Verifiable credentials
              </h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                Every claim on this site links to a public repository, a meetup page, a published article, or a university record.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/cv" variant="secondary">
                View CV
              </Button>
              <Button href="/IBIM_BRAIDE_CURRICULUM_VITAE.pdf" variant="ghost" external>
                Download PDF
              </Button>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-5"
              >
                <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                  {item.label}
                </p>
                <p className="mt-3 text-body-sm font-medium text-foreground dark:text-foreground-dark">
                  {item.value}
                </p>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Selected impact"
            description="A small set of dated proof points across engineering, writing, community leadership, and public technical work."
            action={(
              <Button href="/impact" variant="link">
                View impact page
              </Button>
            )}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {impactItems.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Tag>{item.label}</Tag>
                  <span className="text-caption text-muted dark:text-muted-dark">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {item.detail}
                </p>
                <div className="mt-4">
                  <Button href={item.href} variant="link" external={item.external}>
                    {item.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">I ship across the stack</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Flutter mobile apps, React frontends, C# and Node backends, PostgreSQL data layers, Python analysis pipelines. I choose the tool that fits the problem, not the one on my CV.
              </p>
            </div>
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">I run two developer communities</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Flutter Birmingham (organiser) and Golang Birmingham (organising team). I handle programming, speaker pipelines, venue logistics, and first-time speaker support.
              </p>
            </div>
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">I build in public</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                TEXTARA (offline Flutter reader), State-Layers-Demo (teaching repo), checkin-qr (meetup ops tool), plus articles on AI ethics, open source, and community leadership.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {featuredProjects.length > 0 && (
        <Section>
          <Container>
            <SectionHeader
              title="Featured work"
              description="A focused selection of work that shows how I frame problems, build useful products, and deliver outcomes with care."
              action={(
                <Link
                  href="/projects"
                  className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  See all projects
                </Link>
              )}
            />
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} variant="featured" />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {featuredCaseStudies.length > 0 && (
        <Section>
          <Container>
            <SectionHeader
              title="Case studies"
              description="Detailed write ups covering context, decisions, and measurable impact."
              action={(
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  Read all case studies
                </Link>
              )}
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredCaseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group rounded-xl border border-border dark:border-border-dark p-6 hover:border-accent/30 transition-colors"
                >
                  {study.frontMatter.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {study.frontMatter.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  )}
                  <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
                    {study.frontMatter.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
                    {study.frontMatter.description}
                  </p>
                  <p className="mt-4 text-caption text-muted dark:text-muted-dark">
                    {formatDate(study.frontMatter.date)} · {study.readingTime}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Open source</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                Four public repositories shipped in 2026: TEXTARA (offline Flutter reader), State-Layers-Demo
                (teaching repo from my own talk), checkin-qr (meetup attendance tool), and flutter-birmingham-hub
                (community event management). Everything is on GitHub with full commit history.
              </p>
              {recentContributions.length > 0 ? (
                <div className="mt-6 rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-5">
                  <p className="text-body-sm font-semibold text-foreground dark:text-foreground-dark">
                    Recent contributions
                  </p>
                  <ul className="mt-3 space-y-3 text-body-sm text-muted dark:text-muted-dark list-disc pl-5">
                    {recentContributions.map((item) => (
                      <li key={`${item.project}-${item.title}`}>
                        <span className="font-medium text-foreground dark:text-foreground-dark">{item.type}</span>{' '}
                        in {item.project}: {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-5">
                  <p className="text-body-sm text-muted dark:text-muted-dark">
                    I publish open source work here when there is a clear contribution trail to show, rather than
                    padding the page with filler.
                  </p>
                </div>
              )}
              <Link
                href="/open-source"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                Explore open source work
              </Link>
            </div>
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Community</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I run Flutter Birmingham and sit on the Golang Birmingham organising team. Between them:
                10+ sessions delivered, 6 first-time speakers supported, and two open source tools built
                specifically to make organiser work repeatable.
              </p>
              <Link
                href="/community"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                See community work
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {latestWriting.length > 0 && (
        <Section>
          <Container>
            <SectionHeader
              title="Writing"
              description="Essays on AI ethics, community operations, and engineering judgement. Each one argues a position rather than summarising a topic."
              action={(
                <Link
                  href="/writing"
                  className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  Read all articles
                </Link>
              )}
            />
            <div className="mt-8 divide-y divide-border dark:divide-border-dark">
              {latestWriting.map((article) => (
                <Link
                  key={article.slug}
                  href={`/writing/${article.slug}`}
                  className="block py-6 first:pt-0 last:pb-0 group"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
                      {article.frontMatter.title}
                    </h3>
                    <span className="text-caption text-muted dark:text-muted-dark whitespace-nowrap">
                      {formatDate(article.frontMatter.date)}
                    </span>
                  </div>
                  <p className="mt-1 text-body-sm text-muted dark:text-muted-dark">
                    {article.frontMatter.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Speaking</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                Delivered a Flutter state management session to a live meetup audience. Conference-ready topics on
                delivery clarity and community-driven engineering are available for booking.
              </p>
              <Link
                href="/speaking"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                View speaking topics
              </Link>
            </div>
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Work with me</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I take on scoped freelance projects, speak at meetups and conferences, and collaborate on
                open source. If any of this work resonates, let us talk.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
