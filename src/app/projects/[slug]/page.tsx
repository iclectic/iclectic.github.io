import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Container from '@/components/Container'
import Section from '@/components/ui/Section'
import Tag from '@/components/ui/Tag'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { createMetadata } from '@/lib/seo'
import { getAllSlugs, getContentBySlug } from '@/lib/mdx'

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

  if (!project) {
    notFound()
  }

  return (
    <article>
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
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-custom mx-auto">
            <MDXRemote source={project.content} components={mdxComponents} />
          </div>
        </Container>
      </Section>

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
