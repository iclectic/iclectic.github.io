import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { siteConfig } from '@/lib/siteConfig'

const focusAreas = [
  'Developer tooling and documentation',
  'Python ecosystems and infrastructure tooling',
  'Community tooling and event operations',
  'Platform engineering and backend systems',
  'Data and automation workflows',
]

export default function OpenSource() {
  return (
    <>
      <SEO
        title="Open Source"
        description="Open source contributions focused on developer tooling, documentation, and collaboration."
        url="/open-source"
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Open source
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            I contribute to open source because it is where engineering standards are visible and shared. It keeps
            my work grounded in collaboration, clarity, and practical impact.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Philosophy
              </h2>
              <div className="mt-4 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  Open source keeps engineering accountable. I contribute in ways that make projects clearer, more
                  stable, and more welcoming. That includes code, documentation, issue triage, and supporting new
                  contributors.
                </p>
                <p>
                  My contributions include reporting issues, joining technical discussions, proposing improvements,
                  and collaborating with maintainers. I value maintainability and shared ownership.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                Focus areas
              </h2>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-xl border border-border dark:border-border-dark px-4 py-3 text-body-sm text-muted dark:text-muted-dark"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-4">
            Contributions
          </h2>
          <p className="text-body text-muted dark:text-muted-dark mb-6">
            You can find my public repositories and contribution history on GitHub. [Placeholder] Add two to three
            highlighted contributions with a short summary of impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-body-sm font-semibold text-background transition-colors hover:bg-foreground/80 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View my GitHub
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-body-sm font-semibold text-foreground transition-colors hover:bg-foreground/5 dark:border-border-dark dark:text-foreground-dark dark:hover:bg-foreground-dark/5"
            >
              Interested in collaborating
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
