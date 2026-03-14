import type { NavItem } from '@/types/navigation'
import type { SiteSettings } from '@/types/site'

import { socialLinks } from './social'

export { socialLinks } from './social'

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Community', href: '/community' },
  { label: 'Writing', href: '/writing' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export const footerNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Writing', href: '/writing' },
  { label: 'Community', href: '/community' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Now', href: '/now' },
  { label: 'Uses', href: '/uses' },
  { label: 'Media', href: '/media' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
  { label: 'CV', href: '/cv' },
]

export const siteSettings: SiteSettings = {
  name: 'ibimbraide.com',
  url: 'https://ibimbraide.com',
  title: 'Ibim Braide',
  description:
    'Freelance engineer and community organiser based in the United Kingdom. Mobile and full stack delivery with clear scope and outcomes.',
  locale: 'en-GB',
  author: {
    name: 'Ibim Braide',
    shortName: 'IB',
    role: 'Freelance Software Engineer and Community Organiser',
    location: 'United Kingdom',
    email: 'ibimbraide@gmail.com',
    github: 'https://github.com/iclectic',
    linkedin: 'https://www.linkedin.com/in/ibim-braide/',
    twitter: 'https://twitter.com/Tubo_ibim',
  },
  seo: {
    defaultTitle: 'Ibim Braide',
    titleTemplate: '%s | Ibim Braide',
    defaultDescription:
      'Software engineering, open source, community leadership, and technical writing by Ibim Braide.',
    defaultOgImage: '/og/default.png',
  },
  feeds: {
    rss: '/rss.xml',
    atom: '/atom.xml',
  },
  navigation: mainNavigation,
  footerNavigation,
  socialLinks,
}
