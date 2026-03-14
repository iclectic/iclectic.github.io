'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Container from '@/components/primitives/Container'
import { siteConfig } from '@/lib/siteConfig'
import SocialLinks from './SocialLinks'

const isActive = (href: string, pathname: string | null) => {
  if (!pathname) {
    return false
  }

  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <button
      onClick={toggle}
      className="rounded-full p-2 text-muted transition-colors hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm dark:bg-background-dark/80" onClick={onClose} />
      <nav className="fixed top-0 right-0 bottom-0 w-72 border-l border-border bg-background p-6 pt-20 dark:border-border-dark dark:bg-background-dark">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark"
          aria-label="Close menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="space-y-4">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`block text-lg font-medium transition-colors ${
                  isActive(item.href, pathname)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent dark:text-foreground-dark'
                }`}
                aria-current={isActive(item.href, pathname) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const socialLinks = [
    {
      label: 'GitHub profile',
      href: siteConfig.author.github,
      icon: 'github' as const,
      external: true,
      className: 'hidden sm:block',
    },
    {
      label: 'LinkedIn profile',
      href: siteConfig.author.linkedin,
      icon: 'linkedin' as const,
      external: true,
      className: 'hidden sm:block',
    },
  ]

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md dark:border-border-dark dark:bg-background-dark/80">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold text-foreground transition-colors hover:text-accent dark:text-foreground-dark"
          aria-label="Ibim Braide home"
        >
          IB
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-body-sm font-medium transition-colors ${
                isActive(item.href, pathname)
                  ? 'text-accent'
                  : 'text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark'
              }`}
              aria-current={isActive(item.href, pathname) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks
            items={socialLinks}
            className="flex items-center gap-3"
            itemClassName="p-2 text-muted transition-colors hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark"
          />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark lg:hidden"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
