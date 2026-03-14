import type { LinkKind } from './content'
import type { NavItem, SocialLink } from './navigation'

export interface SocialLinkRecord extends SocialLink {
  id: string
  kind?: LinkKind
  featured?: boolean
}

export interface SiteAuthor {
  name: string
  shortName?: string
  role: string
  location: string
  email: string
  github: string
  linkedin: string
  twitter?: string
}

export interface SiteSeoSettings {
  defaultTitle: string
  titleTemplate: string
  defaultDescription: string
  defaultOgImage: string
}

export interface SiteSettings {
  name: string
  url: string
  title: string
  description: string
  locale: string
  author: SiteAuthor
  seo: SiteSeoSettings
  feeds: {
    rss: string
    atom: string
  }
  navigation: NavItem[]
  footerNavigation: NavItem[]
  socialLinks: SocialLinkRecord[]
}
