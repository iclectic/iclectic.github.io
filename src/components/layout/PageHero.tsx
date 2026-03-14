import type { ReactNode } from 'react'

import type { ActionLink } from '@/types/components'
import Button from '@/components/primitives/Button'
import Container from '@/components/primitives/Container'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
  actions?: ActionLink[]
  children?: ReactNode
  className?: string
  containerClassName?: string
  contentClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  align?: 'left' | 'center'
}

export default function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  children,
  className = '',
  containerClassName = '',
  contentClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  align = 'left',
}: PageHeroProps) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <section className={`pt-20 pb-16 md:pt-28 md:pb-20 ${className}`}>
      <Container className={containerClassName}>
        <div className={`max-w-2xl ${alignmentClass} ${contentClassName}`.trim()}>
          {eyebrow ? (
            <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
              {eyebrow}
            </p>
          ) : null}
          <h1 className={`mt-4 font-display text-h1 text-foreground dark:text-foreground-dark ${titleClassName}`.trim()}>
            {title}
          </h1>
          <p className={`mt-4 text-body text-muted dark:text-muted-dark ${descriptionClassName}`.trim()}>
            {description}
          </p>
          {actions.length > 0 ? (
            <div className={`mt-6 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`.trim()}>
              {actions.map((action) => (
                <Button
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  variant={action.variant ?? 'secondary'}
                  external={action.external}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </Container>
    </section>
  )
}
