import Button from '@/components/primitives/Button'
import Card from '@/components/primitives/Card'
import Tag from '@/components/primitives/Tag'
import type { SpeakingEngagement, SpeakingTopic } from '@/data/speaking'

type TopicCardProps = {
  variant: 'topic'
  item: SpeakingTopic
}

type EngagementCardProps = {
  variant: 'engagement'
  item: SpeakingEngagement
}

type SpeakingCardProps = TopicCardProps | EngagementCardProps

export default function SpeakingCard(props: SpeakingCardProps) {
  if (props.variant === 'topic') {
    const { item } = props

    return (
      <Card className="p-6">
        <div className="flex flex-wrap gap-1.5">
          <Tag>{item.format}</Tag>
          <Tag tone="neutral">{item.bestFor}</Tag>
        </div>
        <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
          {item.title}
        </h3>
        <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
          {item.description}
        </p>
        <p className="mt-4 text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
          Audience
        </p>
        <p className="mt-1 text-body-sm text-foreground/80 dark:text-foreground-dark/80">
          {item.audience}
        </p>
        <p className="mt-4 text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
          Key takeaways
        </p>
        <ul className="mt-2 space-y-2 pl-5 text-body-sm text-muted dark:text-muted-dark list-disc">
          {item.takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </Card>
    )
  }

  const { item } = props

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
            {item.title}
          </h3>
          <p className="mt-1 text-body-sm text-accent">{item.event}</p>
        </div>
        <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
          {item.date}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Tag>{item.format}</Tag>
        <Tag tone="neutral">{item.audience}</Tag>
      </div>
      <p className="mt-3 text-body-sm text-muted dark:text-muted-dark max-w-2xl">
        {item.description}
      </p>
      <div className="mt-4">
        <p className="text-caption uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
          Session takeaways
        </p>
        <ul className="mt-2 space-y-2 pl-5 text-body-sm text-muted dark:text-muted-dark list-disc">
          {item.takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </div>
      {item.link ? (
        <div className="mt-4">
          <Button href={item.link} variant="link" external>
            Event link
          </Button>
        </div>
      ) : null}
    </Card>
  )
}
