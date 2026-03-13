import Tag from './Tag'

interface ContributionCardProps {
  type: string
  project: string
  title: string
  summary: string
  date: string
  link: string
  impact?: string
}

export default function ContributionCard({
  type,
  project,
  title,
  summary,
  date,
  link,
  impact,
}: ContributionCardProps) {
  return (
    <div className="rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Tag>{type}</Tag>
        <span className="text-caption text-muted dark:text-muted-dark">{project}</span>
        <span className="text-caption text-muted dark:text-muted-dark">- {date}</span>
      </div>
      <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
        {title}
      </h3>
      <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
        {summary}
      </p>
      {impact ? (
        <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70">
          Impact: {impact}
        </p>
      ) : null}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
      >
        View contribution
      </a>
    </div>
  )
}
