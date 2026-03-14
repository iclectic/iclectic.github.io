import Link from 'next/link'

import type { RelatedLinkItem } from '@/data/relatedContent'
import SectionHeader from '@/components/layout/SectionHeader'
import Card from '@/components/primitives/Card'

interface RelatedLinksProps {
  title: string
  description: string
  links: RelatedLinkItem[]
}

export default function RelatedLinks({ title, description, links }: RelatedLinksProps) {
  if (links.length === 0) {
    return null
  }

  return (
    <>
      <SectionHeader title={title} description={description} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {links.map((item) => (
          <Card key={`${item.href}-${item.title}`} className="p-6">
            <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
              {item.title}
            </h3>
            <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="mt-4 inline-flex items-center text-body-sm font-medium text-accent hover:underline underline-offset-2"
            >
              Explore
            </Link>
          </Card>
        ))}
      </div>
    </>
  )
}
