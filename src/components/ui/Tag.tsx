import type { HTMLAttributes } from 'react'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'accent' | 'neutral'
}

const tones = {
  accent: 'bg-accent/10 text-accent',
  neutral: 'bg-foreground/5 text-muted dark:text-muted-dark dark:bg-foreground-dark/10',
}

export default function Tag({ tone = 'accent', className = '', ...props }: TagProps) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-caption font-medium ${tones[tone]} ${className}`}
      {...props}
    />
  )
}
