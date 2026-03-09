import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { siteConfig } from '@/lib/siteConfig'

export default function OpenSource() {
  return (
    <>
      <SEO
        title="Open Source"
        description="My approach to open source contribution and the projects I maintain and contribute to."
        url="/open-source"
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Open Source
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted dark:text-muted-dark">
            I believe in building in the open and contributing to the tools and
            frameworks I use. Open source is how I learn, how I give back, and how
            I connect with the wider engineering community.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="max-w-2xl space-y-6 text-body text-foreground/80 dark:text-foreground-dark/80">
            <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
              Philosophy
            </h2>
            <p>
              I think the best way to improve as an engineer is to read and write code
              in public. Open source gives you feedback loops that are difficult to
              replicate in closed environments: code review from strangers, issues filed
              by people with different use-cases, and the discipline of writing code that
              others need to understand.
            </p>
            <p>
              I contribute where I can add value, whether that is documentation, bug
              fixes, or feature work. I also maintain my own projects in the open,
              because I believe that sharing your work, even when it is imperfect, is
              more valuable than keeping it private.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-8">
            Projects and contributions
          </h2>
          <p className="text-body text-muted dark:text-muted-dark mb-8">
            You can find my public repositories and contributions on GitHub. I am
            actively growing this section as I contribute more to the ecosystem.
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
              Interested in collaborating?
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
