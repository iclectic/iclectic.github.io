import PageHero from '@/components/layout/PageHero'
import SectionHeader from '@/components/layout/SectionHeader'
import Button from '@/components/primitives/Button'
import Card from '@/components/primitives/Card'
import Container from '@/components/primitives/Container'
import Section from '@/components/primitives/Section'
import ContributionCard from '@/components/cards/ContributionCard'
import RepoCard from '@/components/cards/RepoCard'
import { siteSettings } from '@/data/site'
import { createMetadata } from '@/lib/seo'
import {
  getOpenSourceExternalContributions,
  getOpenSourceFocusAreas,
  getOpenSourceHighlights,
  getOpenSourcePrinciples,
  getOpenSourcePublicWork,
  getOpenSourceRepositoryCards,
} from '@/lib/content'
import { getGitHubActivity, getGitHubUsername } from '@/lib/github'

export const metadata = createMetadata({
  title: 'Open Source',
  description: 'Open source contributions across developer tooling, documentation, and technical discussions.',
  path: '/open-source',
})

export default async function OpenSourcePage() {
  const githubUsername = getGitHubUsername(siteSettings.author.github)
  const githubActivity = githubUsername ? await getGitHubActivity(githubUsername, 6) : []

  const focusAreas = getOpenSourceFocusAreas()
  const highlights = getOpenSourceHighlights()
  const principles = getOpenSourcePrinciples()
  const recentActivity = githubActivity.length > 0 ? githubActivity : getOpenSourcePublicWork()
  const maintainedRepositories = getOpenSourceRepositoryCards()
  const externalContributions = getOpenSourceExternalContributions()

  return (
    <>
      <PageHero
        eyebrow="Open Source"
        title="Open source work rooted in clarity and respect for maintainers"
        description="I separate the work I maintain in public from contributions to other projects. That keeps the page honest and makes it easier to assess how I build, document, and collaborate."
        actions={[
          { label: 'View GitHub profile', href: siteSettings.author.github, variant: 'primary', external: true },
          { label: 'Collaborate on open source', href: '/contact', variant: 'secondary' },
        ]}
      />

      <Section>
        <Container>
          <SectionHeader
            title="Focus areas"
            description="Where I spend the most time contributing and learning."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {focusAreas.map((item) => (
              <Card key={item} className="p-5 text-body-sm text-muted dark:text-muted-dark">
                {item}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Recent GitHub activity"
            description="Live public activity when available, otherwise a curated snapshot of recent work I maintain in public."
            action={
              <Button href={siteSettings.author.github} variant="link" external>
                See more on GitHub
              </Button>
            }
          />
          {recentActivity.length > 0 ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {recentActivity.map((item) => (
                <ContributionCard key={`${item.project}-${item.title}`} {...item} />
              ))}
            </div>
          ) : (
            <Card className="mt-8 p-6">
              <p className="text-body text-muted dark:text-muted-dark">
                Live GitHub activity will appear here when recent contribution data is available. Until then, the page
                only shows sections backed by real evidence.
              </p>
            </Card>
          )}
        </Container>
      </Section>

      {maintainedRepositories.length > 0 && (
        <Section>
          <Container>
            <SectionHeader
              title="Repositories I maintain"
              description="Selected public repositories that reflect the kind of software, tooling, and community infrastructure I build in the open."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {maintainedRepositories.map((repo) => (
                <RepoCard key={repo.name} {...repo} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeader
            title="Contributions to other projects"
            description="A separate record of issues, pull requests, discussions, and documentation work on repositories I do not maintain."
          />
          {externalContributions.length > 0 ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {externalContributions.map((item) => (
                <ContributionCard key={`${item.project}-${item.title}`} {...item} />
              ))}
            </div>
          ) : (
            <Card className="mt-8 p-6">
              <p className="text-body text-muted dark:text-muted-dark">
                I keep external open source contribution separate from my own public repositories. As that body of work
                grows, I will list specific issues, pull requests, and discussions here rather than padding the page
                with weak examples.
              </p>
            </Card>
          )}
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Impact and contribution philosophy"
            description="Small contributions can still remove friction, clarify behaviour, and improve reliability."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                How I contribute
              </h3>
              <ul className="mt-4 space-y-2 text-body-sm text-muted dark:text-muted-dark list-disc pl-5">
                {principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                Why it matters
              </h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                I focus on clear, reviewable contributions that respect maintainer time. That consistency builds trust,
                strengthens tooling, and improves my own engineering judgement.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Have an open source project that needs support
              </h2>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                Share your priorities and I can help with targeted, maintainable improvements.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
