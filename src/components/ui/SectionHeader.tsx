import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-body-sm text-muted dark:text-muted-dark max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  )
}
