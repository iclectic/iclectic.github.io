import ProjectCard from '@/components/cards/ProjectCard'
import PageHero from '@/components/layout/PageHero'
import SectionHeader from '@/components/layout/SectionHeader'
import Button from '@/components/primitives/Button'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
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
      <PageHero
        eyebrow="Projects"
        title="Product delivery across mobile, full stack, and data"
        description="A selection of work that reflects how I scope projects, build reliable systems, and support communities with practical tools."
        actions={[
          { label: 'Read case studies', href: '/case-studies', variant: 'secondary' },
          { label: 'Start a project', href: '/contact', variant: 'ghost' },
        ]}
      />

      <Section>
        <Container>
          <SectionHeader
            title="Featured and recent projects"
            description="Projects that show the range of my delivery, from community tooling to full stack concepts and data work."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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
