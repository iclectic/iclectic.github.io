import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

interface ArticleCardProps {
  title: string
  description: string
  href: string
  date: string
  readingTime?: string
  tags?: string[]
  featured?: boolean
  image?: string
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) {
    return dateString
  }

  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleCard({
  title,
  description,
  href,
  date,
  readingTime,
  tags,
  featured,
  image,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark p-6 transition-colors hover:border-accent/60"
    >
      {image ? (
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-border/60 dark:border-border-dark/60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-2">
        {featured ? (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-caption font-semibold text-accent">
            Featured
          </span>
        ) : null}
        {tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <h3 className="mt-4 font-display text-h3 text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
        {description}
      </p>
      <p className="mt-4 text-caption text-muted dark:text-muted-dark">
        {formatDate(date)}{readingTime ? ` · ${readingTime}` : ''}
      </p>
    </Link>
  )
}
