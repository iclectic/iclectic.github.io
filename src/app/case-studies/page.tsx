import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionHeader from '@/components/layout/SectionHeader'
import Button from '@/components/primitives/Button'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import Tag from '@/components/primitives/Tag'
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
      <PageHero
        eyebrow="Case Studies"
        title="Deep dives into delivery decisions and outcomes"
        description="These case studies provide context on scope, constraints, and how I approached each build."
        actions={[
          { label: 'View projects', href: '/projects', variant: 'secondary' },
          { label: 'Discuss a project', href: '/contact', variant: 'ghost' },
        ]}
      />

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
