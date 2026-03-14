import Link from 'next/link'
import { notFound } from 'next/navigation'
import RelatedLinks from '@/components/blocks/RelatedLinks'
import MDXContent from '@/components/mdx/MDXContent'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import Tag from '@/components/primitives/Tag'
import { projects } from '@/data/projects'
import { relatedProjectLinks } from '@/data/relatedContent'
import { createMetadata } from '@/lib/seo'
import { getAllSlugs, getContentBySlug } from '@/lib/mdx'
import {
  createBreadcrumbStructuredData,
  createCreativeWorkStructuredData,
} from '@/lib/structuredData'

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const slugs = getAllSlugs('projects')
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getContentBySlug('projects', params.slug)

  if (!project) {
    return createMetadata({
      title: 'Project',
      description: 'Project details for Ibim Braide.',
      path: `/projects/${params.slug}`,
    })
  }

  return createMetadata({
    title: project.frontMatter.title,
    description: project.frontMatter.description,
    path: `/projects/${project.slug}`,
    image: project.frontMatter.image,
    type: 'article',
  })
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getContentBySlug('projects', params.slug)
  const projectMeta = projects.find((item) => item.link === `/projects/${params.slug}`)

  if (!project) {
    notFound()
  }

  const path = `/projects/${project.slug}`
  const projectSchema = createCreativeWorkStructuredData({
    title: project.frontMatter.title,
    description: project.frontMatter.description,
    path,
    datePublished: project.frontMatter.date as string | undefined,
    image: project.frontMatter.image as string | undefined,
    tags: project.frontMatter.tags,
  })
  const breadcrumbSchema = createBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: project.frontMatter.title, path },
  ])
  const relatedLinks = relatedProjectLinks[project.slug] ?? []

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="pt-20 pb-10 md:pt-28 border-b border-border dark:border-border-dark">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-body-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>

          {project.frontMatter.tags && project.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.frontMatter.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          <h1 className="font-display text-display text-foreground dark:text-foreground-dark text-balance">
            {project.frontMatter.title}
          </h1>

          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            {project.frontMatter.description}
          </p>

          {projectMeta ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-4">
                <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                  Project type
                </p>
                <p className="mt-2 text-body-sm font-medium text-foreground dark:text-foreground-dark">
                  {projectMeta.projectType}
                </p>
              </div>
              <div className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-4">
                <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                  Role
                </p>
                <p className="mt-2 text-body-sm text-foreground/80 dark:text-foreground-dark/80">
                  {projectMeta.role}
                </p>
              </div>
              <div className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-4">
                <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                  Scope
                </p>
                <p className="mt-2 text-body-sm text-foreground/80 dark:text-foreground-dark/80">
                  {projectMeta.scope}
                </p>
              </div>
              <div className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-4">
                <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                  Outcome
                </p>
                <p className="mt-2 text-body-sm text-foreground/80 dark:text-foreground-dark/80">
                  {projectMeta.outcome}
                </p>
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-custom mx-auto">
            <MDXContent source={project.content} />
          </div>
        </Container>
      </Section>

      {relatedLinks.length > 0 ? (
        <Section>
          <Container>
            <RelatedLinks
              title="Related paths"
              description="Continue into the most relevant supporting pages for this project."
              links={relatedLinks}
            />
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <div className="flex justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              Start a project
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  )
}
