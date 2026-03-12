import type { HTMLAttributes, ElementType } from 'react'

const tones: Record<string, string> = {
  default: 'bg-transparent',
  subtle: 'bg-foreground/[0.02] dark:bg-foreground-dark/[0.02]',
}

const borders: Record<string, string> = {
  none: '',
  top: 'border-t border-border dark:border-border-dark',
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  tone?: keyof typeof tones
  border?: keyof typeof borders
}

export default function Section({
  as: Component = 'section',
  tone = 'default',
  border = 'top',
  className = '',
  ...props
}: SectionProps) {
  return (
    <Component
      className={`py-16 ${tones[tone]} ${borders[border]} ${className}`}
      {...props}
    />
  )
}
