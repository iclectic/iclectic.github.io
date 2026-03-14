import Image from 'next/image'
import Link from 'next/link'

import Card from '@/components/primitives/Card'
import Tag from '@/components/primitives/Tag'
import type { ProjectCardData } from '@/lib/content'

interface ProjectCardProps {
  project: ProjectCardData
  variant?: 'featured' | 'listing'
}

function ProjectImage({ project }: { project: ProjectCardData }) {
  const image = (
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )

  if (project.link.startsWith('/')) {
    return (
      <Link href={project.link} className="relative aspect-[16/10] overflow-hidden">
        {image}
      </Link>
    )
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[16/10] overflow-hidden"
    >
      {image}
    </a>
  )
}

function ProjectLink({ project }: { project: ProjectCardData }) {
  if (project.link.startsWith('/')) {
    return (
      <Link
        href={project.link}
        className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
      >
        View details
      </Link>
    )
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
    >
      Visit project
    </a>
  )
}

export default function ProjectCard({
  project,
  variant = 'listing',
}: ProjectCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Card
      as="article"
      className={`group flex flex-col overflow-hidden ${
        isFeatured ? '' : 'bg-background dark:bg-background-dark'
      }`}
    >
      <ProjectImage project={project} />
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5">
          <Tag>{project.projectType}</Tag>
          {project.tags.slice(0, 2).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark">
          {project.title}
        </h3>
        <p className="mt-2 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 rounded-lg bg-accent/5 px-3 py-2">
          <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
            Outcome
          </p>
          <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80 line-clamp-2">
            {project.outcome}
          </p>
        </div>
        <div className={`mt-4 grid gap-3 ${isFeatured ? 'sm:grid-cols-2' : ''}`}>
          <div>
            <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
              Role
            </p>
            <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80 line-clamp-2">
              {project.role}
            </p>
          </div>
          <div>
            <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
              Scope
            </p>
            <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80 line-clamp-2">
              {project.scope}
            </p>
          </div>
        </div>
        {!isFeatured ? (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-caption text-muted dark:text-muted-dark">{project.category}</span>
            <ProjectLink project={project} />
          </div>
        ) : null}
      </div>
    </Card>
  )
}
