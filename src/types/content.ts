export interface ProjectSummary {
  slug: string
  title: string
  description: string
  href: string
  tags: string[]
  projectType: 'client' | 'product' | 'concept' | 'open-source' | 'experiment'
  role: string
  scope: string
  outcome: string
  image?: string
  featured?: boolean
}

export interface ArticleSummary {
  slug: string
  title: string
  description: string
  date: string
  href: string
  tags: string[]
  readingTime?: string
  image?: string
  series?: string
  featured?: boolean
}

export interface ContributionSummary {
  type: 'pull-request' | 'issue' | 'discussion' | 'repository' | 'article'
  project: string
  title: string
  summary: string
  date: string
  link: string
  impact?: string
}

export interface SpeakingSummary {
  title: string
  summary: string
  audience: string
  format: string
  bestFor: string
  takeaways: string[]
  href?: string
}

export interface CommunityEventSummary {
  title: string
  date: string
  group: string
  summary: string
  location?: string
  href?: string
  status?: 'upcoming' | 'past' | 'archived'
}

export interface SpeakerArchiveSummary {
  speaker: string
  topic: string
  event: string
  date: string
  href?: string
}
