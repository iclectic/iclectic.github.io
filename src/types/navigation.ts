export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email' | 'rss' | 'atom' | 'x'
  display?: 'icon' | 'text'
  external?: boolean
  className?: string
  ariaLabel?: string
}
