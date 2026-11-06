import type { HTMLAttributes } from 'react'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'accent' | 'neutral'
}

const tones = {
  accent: 'border-accent/40 text-accent dark:border-accent-dark/40 dark:text-accent-dark',
  neutral: 'border-border text-muted dark:border-border-dark dark:text-muted-dark',
}

export default function Tag({ tone = 'neutral', className = '', ...props }: TagProps) {
  return (
    <span
      className={`inline-flex items-center border px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
      {...props}
    />
  )
}
