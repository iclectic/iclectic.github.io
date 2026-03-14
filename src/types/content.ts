export type ContentStatus = 'draft' | 'published' | 'archived'
export type LinkKind = 'internal' | 'external'
export type ProjectType =
  | 'client'
  | 'product'
  | 'concept'
  | 'open-source'
  | 'experiment'
  | 'data'
export type TalkFormat = 'talk' | 'workshop' | 'panel' | 'fireside-chat'
export type InitiativeType = 'meetup' | 'programme' | 'community-series' | 'volunteering'
export type EndorsementType = 'testimonial' | 'recommendation'

export interface LinkItem {
  label: string
  href: string
  kind?: LinkKind
}

export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface SEOFields {
  title?: string
  description?: string
  ogImage?: string
  noindex?: boolean
}

export interface BaseContentRecord {
  id: string
  slug: string
  title: string
  summary: string
  status: ContentStatus
  featured?: boolean
  publishedAt?: string
  updatedAt?: string
  tags?: string[]
  seo?: SEOFields
}

export interface ProjectRecord extends BaseContentRecord {
  type: ProjectType
  category: 'frontend' | 'mobile' | 'full-stack' | 'backend' | 'data' | 'machine-learning'
  role: string
  scope: string
  outcome: string
  stack: string[]
  team?: string
  organisation?: string
  location?: string
  images?: ImageAsset[]
  links: {
    caseStudy?: LinkItem
    live?: LinkItem
    repository?: LinkItem
  }
}

export interface OpenSourceContributionRecord extends BaseContentRecord {
  contributionType:
    | 'repository'
    | 'pull-request'
    | 'issue'
    | 'discussion'
    | 'documentation'
    | 'article'
  project: string
  contributionScope: string
  impact?: string
  links: {
    primary: LinkItem
    repository?: LinkItem
  }
}

export interface ArticleRecord extends BaseContentRecord {
  path: string
  category:
    | 'ai-ethics'
    | 'software-engineering'
    | 'open-source'
    | 'community'
    | 'developer-education'
    | 'flutter'
    | 'go'
    | 'career-growth'
  readingTime?: string
  series?: string
  image?: ImageAsset
  canonicalUrl?: string
}

export interface TalkRecord extends BaseContentRecord {
  format: TalkFormat
  audience: string
  bestFor: string
  takeaways: string[]
  event?: string
  deliveredAt?: string
  slides?: LinkItem
  recording?: LinkItem
  eventLink?: LinkItem
}

export interface CommunityInitiativeRecord extends BaseContentRecord {
  type: InitiativeType
  role: string
  organisation: string
  description: string
  impactSummary: string
  links: LinkItem[]
  evidence?: LinkItem[]
  events?: Array<{
    title: string
    date: string
    location?: string
    format?: string
    summary: string
    link?: string
  }>
}

export interface TimelineMilestoneRecord {
  id: string
  date: string
  title: string
  summary: string
  category: 'education' | 'career' | 'community' | 'writing' | 'open-source' | 'speaking'
  link?: LinkItem
}

export interface TestimonialRecord {
  id: string
  type: EndorsementType
  quote: string
  name: string
  role: string
  organisation?: string
  image?: ImageAsset
  link?: LinkItem
  featured?: boolean
}

export interface ContentDetailItem {
  title: string
  description: string
}

export interface OrganiserExpectationRecord {
  title: string
  description: string
}

export interface CommunityMetricRecord {
  label: string
  value: string
  description: string
}

export interface CommunityMilestoneDetailRecord {
  title: string
  date: string
  description: string
}

export interface CommunityGalleryRecord {
  title: string
  description: string
  type: 'Photo' | 'Poster'
  image: string
}

export interface CommunityReferenceRecord {
  type: string
  title: string
  date: string
  description: string
  link: string
  cta: string
  external?: boolean
}

// Existing lightweight summary shapes used by the current UI.
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
