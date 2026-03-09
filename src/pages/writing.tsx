import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'

const articles = [
  {
    id: 1,
    title: 'A Step-by-Step Guide to Creating Python Virtual Environments',
    summary:
      'A comprehensive guide outlining the essential steps for setting up isolated virtual environments in Python, covering installation, activation, and dependency management.',
    date: '2025-07-25',
    readTime: '17 min read',
    tags: ['Python', 'Developer Tools'],
  },
  {
    id: 2,
    title: 'React Hooks: A Practical Guide',
    summary:
      'Unravelling the fundamentals of React Hooks, covering useState, useEffect, and useContext with practical examples for modern React development.',
    date: '2025-07-20',
    readTime: '12 min read',
    tags: ['React', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Understanding JavaScript Closures',
    summary:
      'A deep dive into closures in JavaScript, how they work under the hood, and practical use-cases you will encounter in real applications.',
    date: '2025-07-10',
    readTime: '8 min read',
    tags: ['JavaScript'],
  },
  {
    id: 4,
    title: 'Building Responsive Layouts with CSS Grid',
    summary:
      'Learn how to use CSS Grid to create responsive and modern web layouts that adapt gracefully across screen sizes.',
    date: '2025-06-30',
    readTime: '10 min read',
    tags: ['CSS', 'Frontend'],
  },
  {
    id: 5,
    title: 'Getting Started with Next.js',
    summary:
      'A practical guide to building fast, SEO-friendly React applications with Next.js, covering routing, data fetching, and deployment.',
    date: '2025-06-25',
    readTime: '9 min read',
    tags: ['Next.js', 'React'],
  },
  {
    id: 6,
    title: 'Introduction to TypeScript for JavaScript Developers',
    summary:
      'Why you should consider TypeScript for your next project and how to get started without friction.',
    date: '2025-06-20',
    readTime: '11 min read',
    tags: ['TypeScript', 'JavaScript'],
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Writing() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const featured = sorted.slice(0, 2)
  const rest = sorted.slice(2)

  return (
    <>
      <SEO
        title="Writing"
        description="Articles on software engineering, AI ethics, developer tools, and community building. Written by Ibim Braide."
        url="/writing"
      />

      <section className="pt-20 pb-8 md:pt-28">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Writing
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted dark:text-muted-dark">
            I write about software engineering, developer tools, and the things I learn
            along the way. Mostly for my own understanding, but hopefully useful to others.
          </p>
        </Container>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <Container>
          <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
            Featured
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((article) => (
              <article
                key={article.id}
                className="group rounded-xl border border-border dark:border-border-dark p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-2.5 py-0.5 text-caption font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
                  {article.summary}
                </p>
                <p className="mt-4 text-caption text-muted dark:text-muted-dark">
                  {formatDate(article.date)} · {article.readTime}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* All articles */}
      <section className="pb-20 border-t border-border dark:border-border-dark pt-16">
        <Container>
          <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
            All articles
          </h2>
          <div className="divide-y divide-border dark:divide-border-dark">
            {rest.map((article) => (
              <article key={article.id} className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark hover:text-accent transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <span className="text-caption text-muted dark:text-muted-dark whitespace-nowrap">
                    {formatDate(article.date)}
                  </span>
                </div>
                <p className="mt-1 text-body-sm text-muted dark:text-muted-dark">
                  {article.summary}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/5 dark:bg-foreground-dark/10 px-2 py-0.5 text-caption text-muted dark:text-muted-dark"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-caption text-muted dark:text-muted-dark">
                    · {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
