import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import Container from './Container'
import SocialLinks from './layout/SocialLinks'

export default function FooterNew() {
  const socialLinks = [
    {
      label: 'GitHub',
      href: siteConfig.author.github,
      icon: 'github' as const,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: siteConfig.author.linkedin,
      icon: 'linkedin' as const,
      external: true,
    },
    {
      label: 'Email',
      href: `mailto:${siteConfig.author.email}`,
      icon: 'email' as const,
    },
    {
      label: 'RSS',
      href: '/rss.xml',
      icon: 'rss' as const,
      display: 'text' as const,
    },
    {
      label: 'Atom',
      href: '/atom.xml',
      icon: 'atom' as const,
      display: 'text' as const,
    },
  ]

  return (
    <footer className="border-t border-border dark:border-border-dark mt-24">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-lg font-bold text-foreground dark:text-foreground-dark"
            >
              Ibim Braide
            </Link>
            <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
              Freelance engineer and community organiser based in the United Kingdom. Open source contributor and technical writer.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3" aria-label="Footer navigation">
            {siteConfig.footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-sm text-muted dark:text-muted-dark hover:text-foreground dark:hover:text-foreground-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <SocialLinks
            items={socialLinks}
            className="flex items-center gap-4"
            itemClassName="text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark transition-colors"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-border dark:border-border-dark flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-caption text-muted dark:text-muted-dark">
            &copy; {new Date().getFullYear()} Ibim Braide. All rights reserved.
          </p>
          <p className="text-caption text-muted dark:text-muted-dark">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  )
}
