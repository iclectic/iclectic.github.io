import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { createMetadata } from '@/lib/seo'
import { projects } from '@/data/projects'

export const metadata = createMetadata({
  title: 'Projects',
  description: 'Selected software projects across mobile, full stack, and data driven work.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Projects
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Product delivery across mobile, full stack, and data
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            A selection of work that reflects how I scope projects, build reliable systems, and support communities with
            practical tools.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/case-studies" variant="secondary">
              Read case studies
            </Button>
            <Button href="/contact" variant="ghost">
              Start a project
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Featured and recent projects"
            description="Projects that show the range of my delivery, from community tooling to full stack concepts and data work."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    <Tag>{project.projectType}</Tag>
                    {project.tags.slice(0, 2).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark">
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
                  <div className="mt-4 grid gap-3">
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
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-caption text-muted dark:text-muted-dark">{project.category}</span>
                    {project.link.startsWith('/') ? (
                      <Link
                        href={project.link}
                        className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
                      >
                        View details
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
                      >
                        Visit project
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Need delivery support
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                I am available for scoped freelance projects and longer term collaborations.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Talk about a project
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
