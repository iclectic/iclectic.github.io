import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article'
}

export default function Card({ as: Component = 'div', className = '', ...props }: CardProps) {
  return (
    <Component
      className={`border border-border bg-background dark:border-border-dark dark:bg-background-dark ${className}`}
      {...props}
    />
  )
}
