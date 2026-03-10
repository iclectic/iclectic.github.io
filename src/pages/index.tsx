import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import StructuredData from '@/components/StructuredData'
import { projects } from '@/data/projects'
import { getAllCaseStudies, getAllWriting, ContentItem } from '@/lib/mdx'

interface HomeProps {
  caseStudies: ContentItem[]
  writing: ContentItem[]
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Home({ caseStudies, writing }: HomeProps) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
  const featuredCaseStudies = caseStudies.slice(0, 2)
  const latestWriting = writing.slice(0, 2)

  return (
    <>
      <SEO
        description="Software engineer, community organiser, and open source contributor based in the United Kingdom. Building across frontend, backend, mobile, and data."
      />
      <StructuredData type="person" />

      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <Container>
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="font-display text-display text-foreground dark:text-foreground-dark text-balance">
                Ibim Braide
              </h1>
              <p className="mt-4 text-h3 text-muted dark:text-muted-dark font-medium">
                Software engineer, community organiser, and open source contributor.
              </p>
              <p className="mt-6 text-body text-foreground/80 dark:text-foreground-dark/80 max-w-xl">
                I build software across frontend, backend, mobile, and data. I organise Flutter Birmingham and help
                steer Golang Birmingham with the organising team. I write about AI ethics, engineering craft, and
                community building.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-body-sm font-semibold text-background transition-colors hover:bg-foreground/80 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
                >
                  View projects
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-body-sm font-semibold text-foreground transition-colors hover:bg-foreground/5 dark:border-border-dark dark:text-foreground-dark dark:hover:bg-foreground-dark/5"
                >
                  Read case studies
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-transparent px-5 py-2.5 text-body-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Work with me
                </Link>
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

      <section className="py-12 border-t border-border dark:border-border-dark bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-caption text-muted dark:text-muted-dark">
            <span>MSc Computer Science, Birmingham City University</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>BCS Certified</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>Organiser, Flutter Birmingham</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>Organiser, Golang Birmingham</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>Open source contributor</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>Based in the United Kingdom</span>
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-border dark:border-border-dark">
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
                Building production software across frontend, backend, mobile, and data. Focused on performance,
                accessibility, and maintainable systems.
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
                Building inclusive spaces for engineers to learn and ship together. Leading Flutter Birmingham and
                supporting Golang Birmingham strategy with the wider team.
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
                Contributing to the tools I use and building in the open. I care about documentation, community support,
                and sustainable engineering practices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {featuredProjects.length > 0 && (
        <section className="py-16 border-t border-border dark:border-border-dark">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Featured projects</h2>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  A snapshot of recent work across community tooling, full stack platforms, and mobile apps.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                View all projects
              </Link>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border dark:border-border-dark"
                >
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
                      placeholder="blur"
                    />
                  </a>
                  <div className="p-5">
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {featuredCaseStudies.length > 0 && (
        <section className="py-16 border-t border-border dark:border-border-dark">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Case studies</h2>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  Detailed write ups of problem framing, execution, and outcomes.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                View all case studies
              </Link>
            </div>
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
                        <span
                          key={tag}
                          className="rounded-full bg-accent/10 px-2.5 py-0.5 text-caption font-medium text-accent"
                        >
                          {tag}
                        </span>
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
        </section>
      )}

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Open source</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I contribute to open source projects and care about healthy maintainer workflows. I am particularly
                interested in developer tooling, documentation, and community support systems.
              </p>
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
                I organise Flutter Birmingham and help guide Golang Birmingham with the wider organising team. My focus
                is creating welcoming, technically credible spaces that help engineers grow.
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
      </section>

      {latestWriting.length > 0 && (
        <section className="py-16 border-t border-border dark:border-border-dark">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Latest writing</h2>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  Writing on engineering practice, developer tooling, and emerging topics like AI ethics and community building.
                </p>
              </div>
              <Link
                href="/writing"
                className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                Read all articles
              </Link>
            </div>
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
        </section>
      )}

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Speaking</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I speak at meetups and conferences about engineering practice, AI ethics, and community leadership.
              </p>
              <Link
                href="/speaking"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                View speaking topics
              </Link>
            </div>
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">Working together</h2>
              <p className="mt-3 text-body text-muted dark:text-muted-dark">
                I collaborate with teams that value craft, clarity, and meaningful impact. If you are hiring or need a
                technical partner, I would love to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const caseStudies = getAllCaseStudies()
  const writing = getAllWriting()

  return {
    props: {
      caseStudies: JSON.parse(JSON.stringify(caseStudies)),
      writing: JSON.parse(JSON.stringify(writing)),
    },
  }
}
