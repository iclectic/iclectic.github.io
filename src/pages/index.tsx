import Image from 'next/image'
import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <SEO
        description="Software engineer, community organiser, and open source contributor based in the United Kingdom. Building across frontend, backend, mobile, and data."
      />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <Container>
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h1 className="font-display text-display text-foreground dark:text-foreground-dark text-balance">
                Ibim Braide
              </h1>
              <p className="mt-4 text-h3 text-muted dark:text-muted-dark font-medium">
                Software Engineer. Community Organiser. Open Source Contributor.
              </p>
              <p className="mt-6 text-body text-foreground/80 dark:text-foreground-dark/80 max-w-lg">
                I build software across frontend, backend, mobile, and data. I organise
                Flutter Birmingham and Golang Birmingham. I write about AI ethics,
                engineering culture, and the tools we use to build.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-body-sm font-semibold text-background transition-colors hover:bg-foreground/80 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
                >
                  View my work
                </Link>
                <Link
                  href="/writing"
                  className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-body-sm font-semibold text-foreground transition-colors hover:bg-foreground/5 dark:border-border-dark dark:text-foreground-dark dark:hover:bg-foreground-dark/5"
                >
                  Read my writing
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border dark:border-border-dark lg:h-64 lg:w-64">
                <Image
                  src="/images/profile/ibim_photo.jpg"
                  alt="Ibim Braide"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 192px, 256px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">Engineering</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Building across frontend, backend, mobile, and data. Working with
                TypeScript, Python, Go, Dart, React, Flutter, and Next.js.
              </p>
            </div>
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">Community</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Organising Flutter Birmingham and Golang Birmingham. Growing developer
                communities in the West Midlands and beyond.
              </p>
            </div>
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">Open Source</h3>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Contributing to the tools and frameworks I use. Building in the open
                and sharing what I learn with the wider community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-t border-border dark:border-border-dark bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-caption text-muted dark:text-muted-dark">
            <span>MSc Computer Science, BCU</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>BCS Certified</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>Flutter Birmingham Organiser</span>
            <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
            <span>Golang Birmingham Organiser</span>
          </div>
        </Container>
      </section>
    </>
  )
}
