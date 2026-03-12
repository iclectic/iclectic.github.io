import Link from 'next/link'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

const base =
  'inline-flex items-center justify-center rounded-lg text-body-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants: Record<string, string> = {
  primary:
    'bg-foreground text-background hover:bg-foreground/85 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/85',
  secondary:
    'border border-border text-foreground hover:bg-foreground/5 dark:border-border-dark dark:text-foreground-dark dark:hover:bg-foreground-dark/5',
  ghost: 'text-foreground hover:bg-foreground/5 dark:text-foreground-dark dark:hover:bg-foreground-dark/5',
  link: 'text-accent hover:text-accent/80',
}

const sizes: Record<string, string> = {
  sm: 'px-4 py-2',
  md: 'px-5 py-2.5',
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
      external ??
      href.startsWith('http') ||
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
