import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import StructuredData from '@/components/StructuredData'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { getContentBySlug, getAllSlugs, FrontMatter } from '@/lib/mdx'

interface ProjectProps {
  frontMatter: FrontMatter
  mdxSource: MDXRemoteSerializeResult
  readingTime: string
  slug: string
}

export default function Project({ frontMatter, mdxSource, readingTime, slug }: ProjectProps) {
  return (
    <>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/projects/${slug}`}
        type="article"
        date={frontMatter.date}
        image={frontMatter.image}
      />
      <StructuredData
        type="article"
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        url={`/projects/${slug}`}
        image={frontMatter.image}
      />

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

            {frontMatter.tags && frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {frontMatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-caption font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-display text-display text-foreground dark:text-foreground-dark text-balance">
              {frontMatter.title}
            </h1>

            <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
              {frontMatter.description}
            </p>

            <p className="mt-6 text-body-sm text-muted dark:text-muted-dark">
              {new Date(frontMatter.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {' · '}
              {readingTime}
            </p>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="prose-custom mx-auto">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>
          </Container>
        </section>

        <section className="py-12 border-t border-border dark:border-border-dark">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
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
                href="/case-studies"
                className="inline-flex items-center gap-1 text-body-sm font-medium text-accent hover:underline underline-offset-2"
              >
                Explore case studies
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs('projects')
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getContentBySlug('projects', slug)

  if (!post) {
    return { notFound: true }
  }

  const mdxSource = await serialize(post.content)

  return {
    props: {
      frontMatter: post.frontMatter,
      mdxSource,
      readingTime: post.readingTime,
      slug,
    },
  }
}
