import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { createMetadata } from '@/lib/seo'
import { getAllCaseStudies } from '@/lib/mdx'

export const metadata = createMetadata({
  title: 'Case Studies',
  description: 'Detailed case studies covering delivery context, decisions, and outcomes.',
  path: '/case-studies',
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Case Studies
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Deep dives into delivery decisions and outcomes
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            These case studies provide context on scope, constraints, and how I approached each build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/projects" variant="secondary">
              View projects
            </Button>
            <Button href="/contact" variant="ghost">
              Discuss a project
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Featured case studies"
            description="Extended write ups covering strategy, implementation, and learnings."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {studies.map((study) => (
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
    </>
  )
}
