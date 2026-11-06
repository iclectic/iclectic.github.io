import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/primitives/Container'
import Button from '@/components/primitives/Button'
import { siteSettings } from '@/data/site'
import { getGitHubActivity, getGitHubUsername } from '@/lib/github'
import { getFeaturedProjectCards, getOpenSourcePublicWork } from '@/lib/content'
import { getAllCaseStudies, getAllWriting } from '@/lib/mdx'

function formatDate(dateString: string) {
  if (/^\d{4}$/.test(dateString)) {
    return dateString
  }

  if (/^[A-Za-z]+\s+\d{4}$/.test(dateString)) {
    return dateString
  }

  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
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

const proofItems = [
  {
    index: '01',
    label: 'Education',
    href: '/about',
    value: 'MSc Computer Science, Birmingham City University',
    detail: 'BEng Computer Engineering, University of Benin. Published research on SSRN.',
  },
  {
    index: '02',
    label: 'Community',
    href: '/community',
    value: 'Organiser, Flutter Birmingham',
    detail: 'Organising team, Golang Birmingham. Supported first-time speakers and ran recurring sessions since 2024.',
  },
  {
    index: '03',
    label: 'Open source',
    href: '/open-source',
    value: '4 public repositories shipped in 2026',
    detail: 'TEXTARA, State-Layers-Demo, checkin-qr, and flutter-birmingham-hub.',
  },
  {
    index: '04',
    label: 'Speaking',
    href: '/speaking',
    value: 'State management at Flutter Birmingham',
    detail: 'A delivered meetup session, with conference-ready talks on architecture, delivery, and community engineering.',
  },
] as const

const practices = [
  {
    index: '01',
    title: 'I ship across the stack',
    body: 'Flutter mobile apps, React frontends, C# and Node backends, PostgreSQL, and Python analysis. The tool follows the problem.',
  },
  {
    index: '02',
    title: 'I run two communities',
    body: 'Flutter Birmingham as organiser, and the Golang Birmingham organising team. Programming, speaker pipelines, venues, and first-time speakers.',
  },
  {
    index: '03',
    title: 'I build in public',
    body: 'Teaching repositories, meetup tooling, and essays on AI ethics, open source, and how a community is actually run.',
  },
] as const

export default async function HomePage() {
  const featuredProjects = getFeaturedProjectCards().slice(0, 3)
  const featuredCaseStudies = getAllCaseStudies().slice(0, 3)
  const latestWriting = getAllWriting().slice(0, 3)
  const githubUsername = getGitHubUsername(siteSettings.author.github)
  const githubActivity = githubUsername ? await getGitHubActivity(githubUsername, 3) : []
  const fallbackOpenSourceWork = getOpenSourcePublicWork()
  const recentContributions = githubActivity.length > 0
    ? githubActivity
    : fallbackOpenSourceWork.slice(0, 3)

  const impactItems: ImpactItem[] = [
    {
      date: '2026-03-12',
      label: 'Writing',
      title: 'Responsible AI starts in the backlog',
      detail: 'Ethical review belongs in sprint planning, not after the model ships. The essay includes a reusable delivery checklist.',
      href: '/writing/responsible-ai-starts-in-the-backlog',
      cta: 'Read the essay',
    },
    {
      date: '2026-03-05',
      label: 'Community',
      title: 'The Flutter Birmingham operating model',
      detail: 'How sessions are programmed, speakers are onboarded, and meetup delivery stays steady.',
      href: '/writing/running-developer-communities-like-engineering-projects',
      cta: 'Read the write-up',
    },
    {
      date: '2026-02-27',
      label: 'Open source',
      title: 'State-Layers-Demo',
      detail: 'A Flutter repository that teaches local, shared, and app-level state in one working example, built for a live talk.',
      href: 'https://github.com/iclectic/State-Layers-Demo',
      cta: 'View repository',
      external: true,
    },
    {
      date: '2025',
      label: 'Speaking',
      title: 'State management, delivered live',
      detail: 'A meetup walkthrough of where Flutter state decisions go wrong, and how to keep them maintainable under delivery pressure.',
      href: '/speaking',
      cta: 'View speaking',
    },
  ]

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteSettings.author.name,
    url: siteSettings.url,
    email: siteSettings.author.email,
    jobTitle: 'Software Engineer and Community Organiser',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
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

      <section className="border-b border-border dark:border-border-dark">
        <Container className="grid items-end gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1.35fr)_17rem] lg:gap-16">
          <div>
            <p className="kicker">Software engineer · United Kingdom</p>
            <h1 className="text-display-xl mt-5 max-w-4xl text-foreground dark:text-foreground-dark">
              I build software, then the communities around it.
            </h1>
            <p className="mt-6 max-w-xl text-body text-muted dark:text-muted-dark">
              Most engineers ship a product. I also ship meetups, speaker pipelines, and teaching repositories.
              The public record is the point: code, writing, and rooms other people can use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/case-studies">Read the case studies</Button>
              <Button href="/contact" variant="secondary">Get in touch</Button>
              <Button href="/cv" variant="ghost">CV</Button>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-paper dark:border-border-dark dark:bg-paper-dark">
              <Image
                src="/images/profile/ibim_photo.jpg"
                alt="Portrait of Ibim Braide"
                fill
                className="object-cover object-center"
                priority
                sizes="272px"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
              <span>Ibim Braide</span>
              <span>Birmingham</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="record-heading">
        <Container>
          <div className="flex flex-col gap-3 border-b border-border py-8 dark:border-border-dark sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="record-heading" className="kicker">Public record</h2>
              <p className="mt-3 max-w-xl font-display text-h2 text-foreground dark:text-foreground-dark">
                Four claims. Each one has a page behind it.
              </p>
            </div>
            <Button href="/IBIM_BRAIDE_CURRICULUM_VITAE.pdf" variant="link" external>
              Download the CV
            </Button>
          </div>
          <ol>
            {proofItems.map((item) => (
              <li key={item.index} className="border-b border-border dark:border-border-dark">
                <Link
                  href={item.href}
                  className="group grid gap-3 py-6 md:grid-cols-[4.5rem_1fr_8rem] md:items-baseline md:gap-8"
                >
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-accent dark:text-accent-dark">
                    {item.index}
                  </span>
                  <span>
                    <span className="block font-display text-h3 text-foreground transition-colors group-hover:text-accent dark:text-foreground-dark dark:group-hover:text-accent-dark">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-body-sm text-muted dark:text-muted-dark">
                      {item.detail}
                    </span>
                  </span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted group-hover:text-foreground dark:text-muted-dark dark:group-hover:text-foreground-dark">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border dark:border-border-dark" aria-labelledby="practice-heading">
        <Container className="py-16 md:py-20">
          <h2 id="practice-heading" className="kicker">Practice</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {practices.map((item) => (
              <div key={item.index} className="border-t border-border pt-5 dark:border-border-dark">
                <p className="font-mono text-[0.68rem] tracking-[0.16em] text-accent dark:text-accent-dark">
                  {item.index}
                </p>
                <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-body-sm text-muted dark:text-muted-dark">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {featuredProjects.length > 0 && (
        <section className="border-t border-border dark:border-border-dark" aria-labelledby="work-heading">
          <Container className="py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 id="work-heading" className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Selected work
              </h2>
              <Button href="/projects" variant="link">All projects</Button>
            </div>
            <div className="mt-8 divide-y divide-border border-y border-border dark:divide-border-dark dark:border-border-dark">
              {featuredProjects.map((project) => (
                <article key={project.title} className="grid gap-4 py-8 lg:grid-cols-[1fr_16rem] lg:gap-12">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent dark:text-accent-dark">
                      {project.projectType} · {project.category}
                    </p>
                    <h3 className="mt-3 font-display text-h2 text-foreground dark:text-foreground-dark">
                      <Link href={project.link.startsWith('/') ? project.link : project.github ?? project.link} className="hover:text-accent dark:hover:text-accent-dark">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-2xl text-body text-muted dark:text-muted-dark">
                      {project.description}
                    </p>
                  </div>
                  <dl className="grid content-start gap-4 text-body-sm">
                    <div>
                      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted dark:text-muted-dark">Outcome</dt>
                      <dd className="mt-1 text-foreground/85 dark:text-foreground-dark/85">{project.outcome}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted dark:text-muted-dark">Role</dt>
                      <dd className="mt-1 text-foreground/85 dark:text-foreground-dark/85">{project.role}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-border dark:border-border-dark" aria-labelledby="impact-heading">
        <Container className="py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Dated proof</p>
              <h2 id="impact-heading" className="mt-3 font-display text-h2 text-foreground dark:text-foreground-dark">
                What changed, and when
              </h2>
            </div>
            <Button href="/impact" variant="link">Impact</Button>
          </div>
          <ol className="mt-8">
            {impactItems.map((item) => (
              <li key={`${item.date}-${item.title}`} className="border-t border-border py-6 dark:border-border-dark">
                <div className="grid gap-3 md:grid-cols-[7.5rem_8rem_1fr] md:gap-8">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                    {formatDate(item.date)}
                  </p>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
                    {item.label}
                  </p>
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-body-sm text-muted dark:text-muted-dark">{item.detail}</p>
                    <div className="mt-3">
                      <Button href={item.href} variant="link" external={item.external}>
                        {item.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {(featuredCaseStudies.length > 0 || latestWriting.length > 0) && (
        <section className="border-t border-border dark:border-border-dark">
          <Container className="grid gap-16 py-16 md:py-20 lg:grid-cols-2">
            {featuredCaseStudies.length > 0 && (
              <div>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Case studies</h2>
                  <Button href="/case-studies" variant="link">All</Button>
                </div>
                <ul className="mt-6 divide-y divide-border border-t border-border dark:divide-border-dark dark:border-border-dark">
                  {featuredCaseStudies.map((study) => (
                    <li key={study.slug}>
                      <Link href={`/case-studies/${study.slug}`} className="group block py-5">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                          {formatDate(study.frontMatter.date)} · {study.readingTime}
                        </p>
                        <h3 className="mt-2 font-display text-h3 text-foreground group-hover:text-accent dark:text-foreground-dark dark:group-hover:text-accent-dark">
                          {study.frontMatter.title}
                        </h3>
                        <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                          {study.frontMatter.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {latestWriting.length > 0 && (
              <div>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Writing</h2>
                  <Button href="/writing" variant="link">All</Button>
                </div>
                <ul className="mt-6 divide-y divide-border border-t border-border dark:divide-border-dark dark:border-border-dark">
                  {latestWriting.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/writing/${article.slug}`} className="group block py-5">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                          {formatDate(article.frontMatter.date)} · {article.readingTime}
                        </p>
                        <h3 className="mt-2 font-display text-h3 text-foreground group-hover:text-accent dark:text-foreground-dark dark:group-hover:text-accent-dark">
                          {article.frontMatter.title}
                        </h3>
                        <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                          {article.frontMatter.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </section>
      )}

      <section className="border-t border-border dark:border-border-dark">
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Open source</h2>
            <p className="mt-3 max-w-xl text-body text-muted dark:text-muted-dark">
              TEXTARA, State-Layers-Demo, checkin-qr, and flutter-birmingham-hub. Full commit history, not a README and a promise.
            </p>
            {recentContributions.length > 0 && (
              <ul className="mt-6 space-y-4 border-t border-border pt-6 dark:border-border-dark">
                {recentContributions.map((item) => (
                  <li key={`${item.project}-${item.title}`} className="text-body-sm">
                    <a
                      href={item.link}
                      className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-accent dark:text-foreground-dark dark:decoration-border-dark"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-muted dark:text-muted-dark">
                      {item.type} · {item.project}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6">
              <Button href="/open-source" variant="link">Open source record</Button>
            </div>
          </div>
          <div>
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Community</h2>
            <p className="mt-3 max-w-xl text-body text-muted dark:text-muted-dark">
              Flutter Birmingham and the Golang Birmingham organising team. Ten or more sessions, six first-time speakers supported, and tools built so the work can be repeated.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/community" variant="link">Community</Button>
              <Button href="/speaking" variant="link">Speaking</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-foreground text-background dark:border-border-dark dark:bg-foreground-dark dark:text-background-dark">
        <Container className="grid gap-8 py-16 md:grid-cols-[1.4fr_auto] md:items-end md:py-20">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-background/60 dark:text-background-dark/60">
              Available
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-background dark:text-background-dark sm:text-h1">
              Scoped freelance work, talks, and collaborations.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a
              href={`mailto:${siteSettings.author.email}`}
              className="font-display text-h3 text-background underline decoration-background/30 underline-offset-4 hover:decoration-background dark:text-background-dark dark:decoration-background-dark/30"
            >
              {siteSettings.author.email}
            </a>
            <Link
              href="/contact"
              className="inline-flex border border-background/40 px-5 py-2.5 text-body-sm text-background transition-colors hover:bg-background hover:text-foreground dark:border-background-dark/40 dark:text-background-dark dark:hover:bg-background-dark dark:hover:text-foreground-dark"
            >
              Contact
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
