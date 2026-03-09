import Link from 'next/link'
import { GetStaticProps } from 'next'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { getAllCaseStudies, ContentItem } from '@/lib/mdx'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface CaseStudiesProps {
  caseStudies: ContentItem[]
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Deep dives into how I approach problem solving, delivery, and impact."
        url="/case-studies"
      />

      <section className="pt-20 pb-8 md:pt-28">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Case Studies
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted dark:text-muted-dark">
            Detailed narratives that capture context, technical decisions, and measurable outcomes.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((study) => (
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
          ) : (
            <div className="rounded-xl border border-dashed border-border dark:border-border-dark p-8 text-center">
              <p className="text-body text-muted dark:text-muted-dark">
                Case studies are in progress. In the meantime, explore my project work and open source contributions.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  View projects
                </Link>
                <Link
                  href="/open-source"
                  className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
                >
                  View open source
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const caseStudies = getAllCaseStudies()
  return {
    props: {
      caseStudies: JSON.parse(JSON.stringify(caseStudies)),
    },
  }
}
