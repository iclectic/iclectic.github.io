import Link from 'next/link'
import Container from '@/components/primitives/Container'
import { footerNavigation, siteSettings, socialLinks as siteSocialLinks } from '@/data/site'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const socialLinks = siteSocialLinks.filter((item) =>
    ['github', 'linkedin', 'email', 'rss', 'atom'].includes(item.id)
  )

  return (
    <footer className="mt-24 border-t border-border dark:border-border-dark">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-lg font-bold text-foreground dark:text-foreground-dark"
            >
              {siteSettings.author.name}
            </Link>
            <p className="mt-2 text-body-sm text-muted dark:text-muted-dark">
              Freelance engineer and community organiser based in the United Kingdom. Open source contributor and technical writer.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3" aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-sm text-muted transition-colors hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <SocialLinks
            items={socialLinks}
            className="flex items-center gap-4"
            itemClassName="text-muted transition-colors hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark"
          />
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-8 dark:border-border-dark sm:flex-row sm:items-center sm:justify-between">
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
