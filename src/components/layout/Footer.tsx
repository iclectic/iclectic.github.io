import Link from 'next/link'
import Container from '@/components/primitives/Container'
import { siteSettings, socialLinks as siteSocialLinks } from '@/data/site'
import SocialLinks from './SocialLinks'

const groups = [
  {
    title: 'Work',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Open source', href: '/open-source' },
      { label: 'Writing', href: '/writing' },
    ],
  },
  {
    title: 'Record',
    links: [
      { label: 'Community', href: '/community' },
      { label: 'Speaking', href: '/speaking' },
      { label: 'Impact', href: '/impact' },
      { label: 'Timeline', href: '/timeline' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Profile', href: '/about' },
      { label: 'CV', href: '/cv' },
      { label: 'Now', href: '/now' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  const socialLinks = siteSocialLinks.filter((item) =>
    ['github', 'linkedin', 'email', 'rss'].includes(item.id)
  )

  return (
    <footer className="border-t border-border dark:border-border-dark">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div>
            <p className="font-display text-4xl tracking-tight text-foreground dark:text-foreground-dark">
              {siteSettings.author.name}
            </p>
            <p className="mt-4 max-w-sm text-body-sm text-muted dark:text-muted-dark">
              Software engineer and community organiser in the United Kingdom. I ship products, then I build the rooms where other engineers learn to ship.
            </p>
            <SocialLinks
              items={socialLinks}
              className="mt-6 flex items-center gap-4"
              itemClassName="text-muted transition-colors hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted dark:text-muted-dark">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-body-sm text-foreground transition-colors hover:text-accent dark:text-foreground-dark dark:hover:text-accent-dark"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 dark:border-border-dark sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
            © {new Date().getFullYear()} {siteSettings.author.name}
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
            {siteSettings.url.replace('https://', '')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
