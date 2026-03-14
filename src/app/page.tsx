import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { openSourcePublicWork } from '@/data/openSource'
import { getGitHubActivity, getGitHubUsername } from '@/lib/github'
import { getAllCaseStudies, getAllWriting } from '@/lib/mdx'
import { siteConfig } from '@/lib/siteConfig'

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
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
  const featuredCaseStudies = getAllCaseStudies().slice(0, 2)
  const latestWriting = getAllWriting().slice(0, 2)
  const githubUsername = getGitHubUsername(siteConfig.author.github)
  const githubActivity = githubUsername ? await getGitHubActivity(githubUsername, 3) : []
  const recentContributions = githubActivity.length > 0
    ? githubActivity
    : openSourcePublicWork.slice(0, 3)
  const proofItems = [
    {
      label: 'Education',
      value: 'BEng Computer Engineering, University of Benin',
      detail: 'MSc Computer Science, Birmingham City University',
    },
    {
      label: 'Community',
      value: 'Organiser, Flutter Birmingham',
      detail: 'Organising team, Golang Birmingham',
    },
    {
      label: 'Public work',
      value: 'Open source contributor and technical writer',
      detail: 'Public repositories, articles, and speaking work',
    },
    {
      label: 'Availability',
      value: 'Freelance engineer based in the United Kingdom',
      detail: 'Mobile and full stack delivery with clear scope and outcomes',
    },
  ] as const
  const impactItems: ImpactItem[] = [
    {
      date: '2026-03-12',
      label: 'Writing',
      title: 'Published Responsible AI starts in the backlog',
      detail: 'A practical essay on keeping ethics inside product and engineering decisions rather than treating it as a final review step.',
      href: '/writing/responsible-ai-starts-in-the-backlog',
      cta: 'Read article',
    },
    {
      date: '2026-03-05',
      label: 'Community',
      title: 'Published a practical model for running developer communities',
      detail: 'Turned organiser experience into a public article on programming, delivery, and trust for technical meetups.',
      href: '/writing/running-developer-communities-like-engineering-projects',
      cta: 'Read article',
    },
    {
      date: '2026-02-27',
      label: 'Open source',
      title: 'Built State-Layers-Demo in public',
      detail: 'Created a Flutter teaching repository that explains local, shared, and app-level state through one usable example.',
      href: 'https://github.com/iclectic/State-Layers-Demo',
      cta: 'View repository',
      external: true,
    },
    {
      date: '2025',
      label: 'Speaking',
      title: 'Delivered Avoiding headaches in state management',
      detail: 'Presented a practical Flutter session at Flutter Birmingham on state boundaries, maintainability, and architectural trade offs.',
      href: '/speaking',
      cta: 'View speaking',
    },
  ] as const

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    email: siteConfig.author.email,
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
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.twitter,
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
                Freelance engineer and community organiser based in the United Kingdom
              </h1>
              <p className="mt-4 text-h3 text-muted dark:text-muted-dark font-medium">
                Mobile and full stack delivery with clear scope and outcomes.
              </p>
              <p className="mt-6 text-body text-foreground/80 dark:text-foreground-dark/80 max-w-xl">
                I organise Flutter Birmingham and help lead Golang Birmingham with the organising team. I contribute
                to open source and write about engineering practice, AI ethics, and community building.
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
                Selected proof
              </h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                The site is backed by public work, formal study, and community leadership, not just positioning copy.
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
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">Engineering depth</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Mobile and full stack delivery with clear scope, measurable outcomes, and maintainable systems.
              </p>
            </div>
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">Community leadership</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Organising Flutter Birmingham and helping lead Golang Birmingham with the organising team.
              </p>
            </div>
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">Open source impact</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Contributing to developer tooling and infrastructure projects through issues, documentation, and collaboration.
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
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border dark:border-border-dark"
                >
                  {project.link.startsWith('/') ? (
                    <Link href={project.link} className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[16/10] overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </a>
                  )}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5">
                      <Tag>{project.projectType}</Tag>
                      {project.tags.slice(0, 2).map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 rounded-lg bg-accent/5 px-3 py-2">
                      <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                        Outcome
                      </p>
                      <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80 line-clamp-2">
                        {project.outcome}
                      </p>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                          Role
                        </p>
                        <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80 line-clamp-2">
                          {project.role}
                        </p>
                      </div>
                      <div>
                        <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                          Scope
                        </p>
                        <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80 line-clamp-2">
                          {project.scope}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
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
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Open source contributions</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I contribute through public repositories, community tooling, documentation, and collaboration with
                maintainers. Open source keeps my engineering honest and grounded in shared standards.
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
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Community leadership</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I organise Flutter Birmingham and help lead Golang Birmingham with the organising team, shaping programming
                and speaker pipelines that keep sessions practical and welcoming.
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
              description="Writing on engineering practice, AI ethics, and community building with an emphasis on clarity and practical learning."
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
                I speak about engineering craft, AI ethics, and community leadership with a focus on practical takeaways.
              </p>
              <Link
                href="/speaking"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                View speaking topics
              </Link>
            </div>
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Final call to action</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                If you are hiring, collaborating, or organising a technical event, I would love to talk.
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
