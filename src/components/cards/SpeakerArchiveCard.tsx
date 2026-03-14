import Card from '@/components/primitives/Card'
import type { CommunitySpeakerCardData } from '@/lib/content'

interface SpeakerArchiveCardProps {
  speaker: CommunitySpeakerCardData
  displayDate?: string
}

export default function SpeakerArchiveCard({
  speaker,
  displayDate,
}: SpeakerArchiveCardProps) {
  return (
    <Card className="p-6">
      <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
        {speaker.group}
      </p>
      <h3 className="mt-3 font-display text-h3 text-foreground dark:text-foreground-dark">
        {speaker.name}
      </h3>
      <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
        {speaker.topic}
      </p>
      <div className="mt-3 flex flex-wrap gap-3 text-caption text-muted dark:text-muted-dark">
        <span>{displayDate ?? speaker.date}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{speaker.format}</span>
      </div>
      <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70">
        {speaker.note}
      </p>
    </Card>
  )
}
