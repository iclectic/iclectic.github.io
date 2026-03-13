import Tag from './Tag'

interface RepoCardProps {
  name: string
  description: string
  why: string
  link: string
  tags: string[]
}

export default function RepoCard({ name, description, why, link, tags }: RepoCardProps) {
  return (
    <div className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-6">
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark">
        {name}
      </h3>
      <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
        {description}
      </p>
      <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70">
        Why this matters: {why}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
      >
        View repository
      </a>
    </div>
  )
}
