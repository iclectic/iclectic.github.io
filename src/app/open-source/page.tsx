import Container from '@/components/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import ContributionCard from '@/components/ui/ContributionCard'
import RepoCard from '@/components/ui/RepoCard'
import { createMetadata } from '@/lib/seo'
import { getGitHubActivity, getGitHubRepos, getGitHubUsername } from '@/lib/github'
import {
  openSourceContributions,
  openSourceFocusAreas,
  openSourceHighlights,
  openSourcePrinciples,
  openSourceRepositories,
} from '@/data/openSource'
import { siteConfig } from '@/lib/siteConfig'

export const metadata = createMetadata({
  title: 'Open Source',
  description: 'Open source contributions across developer tooling, documentation, and technical discussions.',
  path: '/open-source',
})

export default async function OpenSourcePage() {
  const githubUsername = getGitHubUsername(siteConfig.author.github)
  const [githubActivity, githubRepos] = await Promise.all([
    githubUsername ? getGitHubActivity(githubUsername, 6) : [],
    githubUsername ? getGitHubRepos(githubUsername, 6) : [],
  ])

  const contributions = githubActivity.length > 0 ? githubActivity : openSourceContributions
  const repositories = githubRepos.length > 0 ? githubRepos : openSourceRepositories

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Open Source
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Open source work rooted in clarity and respect for maintainers
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I contribute through public repositories, documentation improvements, community tooling, and targeted fixes.
            My goal is to reduce friction for users and maintainers while learning in public.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={siteConfig.author.github} variant="primary" external>
              View GitHub profile
            </Button>
            <Button href="/contact" variant="secondary">
              Collaborate on open source
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Focus areas"
            description="Where I spend the most time contributing and learning."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {openSourceFocusAreas.map((item) => (
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
            title="Recent public work"
            description="Live GitHub activity when available, otherwise curated repository work that shows how I build in public."
            action={
              <Button href={siteConfig.author.github} variant="link" external>
                See more on GitHub
              </Button>
            }
          />
          {contributions.length > 0 ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {contributions.map((item) => (
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

      {repositories.length > 0 && (
        <Section>
          <Container>
            <SectionHeader
              title="Selected public repositories"
              description="Repositories that reflect the kind of software, tooling, and community infrastructure I build in the open."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repositories.map((repo) => (
                <RepoCard key={repo.name} {...repo} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeader
            title="Impact and contribution philosophy"
            description="Small contributions can still remove friction, clarify behaviour, and improve reliability."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {openSourceHighlights.map((item) => (
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
                {openSourcePrinciples.map((item) => (
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
