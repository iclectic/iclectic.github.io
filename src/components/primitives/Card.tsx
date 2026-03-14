import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article'
}

export default function Card({ as: Component = 'div', className = '', ...props }: CardProps) {
  return (
    <Component
      className={`rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark ${className}`}
      {...props}
    />
  )
}
