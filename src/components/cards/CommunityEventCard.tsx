import Card from '@/components/primitives/Card'
import type { CommunityEvent } from '@/data/community'

interface CommunityEventCardProps {
  event: CommunityEvent
  displayDate?: string
}

export default function CommunityEventCard({
  event,
  displayDate,
}: CommunityEventCardProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            {event.group}
          </p>
          <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
            {event.title}
          </h3>
          <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
            {event.focus}
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-caption text-muted dark:text-muted-dark">
            <span>{displayDate ?? event.date}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{event.location}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{event.format}</span>
          </div>
        </div>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-caption font-medium text-accent hover:underline underline-offset-2"
        >
          Meetup details
        </a>
      </div>
    </Card>
  )
}
