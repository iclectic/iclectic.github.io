import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { projects, Project } from '@/data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

type CategoryFilter = (typeof categories)[number]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <SEO
        title="Projects"
        description="Selected projects across mobile, full stack, and data engineering."
        url="/projects"
      />

      <section className="pt-20 pb-8 md:pt-28">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-body text-muted dark:text-muted-dark">
            A curated selection of work across mobile, full stack, and data. Each project reflects clear scope,
            practical delivery, and measurable outcomes.
          </p>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-body-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-foreground text-background dark:bg-foreground-dark dark:text-background-dark'
                    : 'bg-foreground/5 text-muted hover:text-foreground dark:bg-foreground-dark/10 dark:text-muted-dark dark:hover:text-foreground-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {activeCategory === 'All' && (
        <section className="pb-16">
          <Container>
            <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
              Featured
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </Container>
        </section>
      )}

      <section className="pb-20 border-t border-border dark:border-border-dark pt-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
                {activeCategory === 'All' ? 'All projects' : activeCategory}
              </h2>
              <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
                Looking for deeper context. Explore detailed case studies for selected projects.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              View case studies
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted dark:text-muted-dark py-12">
              No projects in this category yet.
            </p>
          )}
        </Container>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark hover:border-accent/30 transition-colors"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/10] overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-caption font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover:text-accent transition-colors"
        >
          <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
            {project.title}
          </h3>
        </a>
        <p className="mt-2 flex-1 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
          >
            View project
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
