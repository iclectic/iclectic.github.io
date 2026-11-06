import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm text-body-sm font-medium tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants: Record<string, string> = {
  primary:
    'bg-foreground px-5 py-2.5 text-background hover:bg-accent dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-accent-dark dark:hover:text-background-dark',
  secondary:
    'border border-foreground/20 px-5 py-2.5 text-foreground hover:border-foreground hover:bg-foreground hover:text-background dark:border-foreground-dark/25 dark:text-foreground-dark dark:hover:border-foreground-dark dark:hover:bg-foreground-dark dark:hover:text-background-dark',
  ghost:
    'px-3 py-2.5 text-foreground hover:text-accent dark:text-foreground-dark dark:hover:text-accent-dark',
  link: 'text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent dark:text-accent-dark',
}

const sizes: Record<string, string> = {
  sm: '',
  md: '',
}

export type ButtonProps = {
  href?: string
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  external?: boolean
  ariaLabel?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export type LinkButtonProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  ariaLabel,
  ...props
}: LinkButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const isExternal =
      typeof external === 'boolean'
        ? external
        : href.startsWith('http') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:')

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          {...props}
        >
          {props.children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...props}>
        {props.children}
      </Link>
    )
  }

  return (
    <button className={classes} aria-label={ariaLabel} {...props}>
      {props.children}
    </button>
  )
}
