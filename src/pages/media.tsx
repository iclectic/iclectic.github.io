import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { getContentBySlug, FrontMatter } from '@/lib/mdx'

interface MediaProps {
  frontMatter: FrontMatter
  mdxSource: MDXRemoteSerializeResult
  readingTime: string
}

export default function Media({ frontMatter, mdxSource, readingTime }: MediaProps) {
  return (
    <>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url="/media"
        type="article"
        date={frontMatter.date}
      />

      <article>
        <section className="pt-20 pb-10 md:pt-28 border-b border-border dark:border-border-dark">
          <Container>
            <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
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
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = getContentBySlug('media', 'index')

  if (!page) {
    return { notFound: true }
  }

  const mdxSource = await serialize(page.content)

  return {
    props: {
      frontMatter: page.frontMatter,
      mdxSource,
      readingTime: page.readingTime,
    },
  }
}
