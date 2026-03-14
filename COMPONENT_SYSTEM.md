# Component System

This is the target component system for `ibimbraide.com`.

The goal is to keep page files thin, keep primitives generic, and keep domain components data-driven.

## Folder Map

```text
src/
  components/
    primitives/
      Button.tsx
      Card.tsx
      Container.tsx
      IconButton.tsx
      Section.tsx
      Tag.tsx
      TagList.tsx

    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
      PageHero.tsx
      SectionHeader.tsx
      SocialLinks.tsx
      SkipToContent.tsx

    blocks/
      CTABlock.tsx
      ContactPanel.tsx
      ProofStrip.tsx
      RelatedLinks.tsx
      StatsBlock.tsx
      Timeline.tsx
      TestimonialBlock.tsx

    cards/
      ArticleCard.tsx
      CaseStudyCard.tsx
      CommunityEventCard.tsx
      ContributionCard.tsx
      ProjectCard.tsx
      RepoCard.tsx
      SpeakerArchiveCard.tsx
      SpeakingCard.tsx

    forms/
      ContactForm.tsx
      FilterBar.tsx
      SearchInput.tsx

    mdx/
      ArticleMetaBar.tsx
      CodeBlock.tsx
      Figure.tsx
      MDXComponents.tsx
      MDXContent.tsx
      Note.tsx
      TableWrapper.tsx

    support/
      StructuredData.tsx
      ThemeToggle.tsx

  types/
    components.ts
    content.ts
    navigation.ts
```

## Design Rules

1. `primitives/` must never know about projects, writing, speaking, or community.
2. `cards/` receive plain data props and no page-specific fetch logic.
3. `blocks/` assemble primitives and cards into reusable page sections.
4. `mdx/` is the only place where prose rendering rules should live.
5. Page files should compose these components, not duplicate structure.

## Shared Types

Create `src/types/navigation.ts`:

```ts
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email' | 'rss' | 'x'
}
```

Create `src/types/components.ts`:

```ts
import type { ReactNode } from 'react'

export interface ActionLink {
  label: string
  href: string
  external?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
}

export interface MetaItem {
  label: string
  value: string
}

export interface TagItem {
  label: string
  href?: string
}

export interface StatItem {
  value: string
  label: string
  detail?: string
}

export interface RelatedLinkItem {
  title: string
  description: string
  href: string
}

export interface TimelineEntry {
  date: string
  title: string
  description: string
  href?: string
  meta?: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  organisation?: string
  image?: string
}

export interface FilterOption {
  label: string
  value: string
}

export interface CodeHighlightLine {
  line: number
}
```

Create `src/types/content.ts`:

```ts
export interface ProjectSummary {
  slug: string
  title: string
  description: string
  image?: string
  tags: string[]
  projectType: 'client' | 'product' | 'concept' | 'open-source' | 'experiment'
  role: string
  scope: string
  outcome: string
  href: string
  featured?: boolean
}

export interface ArticleSummary {
  slug: string
  title: string
  description: string
  date: string
  readingTime?: string
  image?: string
  tags: string[]
  series?: string
  featured?: boolean
  href: string
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
  location?: string
  summary: string
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
```

## Component Interfaces

### Primitives

```ts
export interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  ariaLabel?: string
  className?: string
  children: React.ReactNode
}

export interface CardProps {
  as?: 'div' | 'article' | 'li'
  interactive?: boolean
  className?: string
  children: React.ReactNode
}

export interface ContainerProps {
  as?: 'div' | 'section' | 'article' | 'main'
  size?: 'content' | 'wide' | 'narrow'
  className?: string
  children: React.ReactNode
}

export interface SectionProps {
  as?: 'section' | 'div' | 'article'
  tone?: 'default' | 'subtle'
  border?: 'none' | 'top'
  density?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export interface TagProps {
  tone?: 'accent' | 'neutral'
  size?: 'sm' | 'md'
  children: React.ReactNode
}

export interface TagListProps {
  items: Array<string | { label: string; href?: string }>
  tone?: 'accent' | 'neutral'
  max?: number
}
```

### Layout

```ts
import type { ActionLink, MetaItem } from '@/types/components'
import type { NavItem, SocialLink } from '@/types/navigation'

export interface HeaderProps {
  navItems: NavItem[]
  socialLinks: SocialLink[]
  showThemeToggle?: boolean
}

export interface FooterProps {
  summary: string
  navItems: NavItem[]
  socialLinks: SocialLink[]
}

export interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
  actions?: ActionLink[]
  meta?: MetaItem[]
  variant?: 'default' | 'compact' | 'split' | 'with-proof'
  align?: 'left' | 'center'
  media?: React.ReactNode
}

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
}

export interface SocialLinksProps {
  items: SocialLink[]
  variant?: 'header' | 'footer' | 'inline'
  showLabels?: boolean
}
```

### Blocks

```ts
import type { ActionLink, RelatedLinkItem, StatItem, Testimonial, TimelineEntry } from '@/types/components'

export interface CTABlockProps {
  title: string
  description: string
  primaryAction: ActionLink
  secondaryAction?: ActionLink
  tone?: 'default' | 'subtle' | 'inverse'
}

export interface StatsBlockProps {
  items: StatItem[]
  columns?: 2 | 3 | 4
  tone?: 'default' | 'subtle'
}

export interface ProofStripProps {
  items: StatItem[]
}

export interface ContactPanelProps {
  title: string
  description: string
  channels: ActionLink[]
  responseTime?: string
  availability?: string
}

export interface RelatedLinksProps {
  title: string
  description: string
  links: RelatedLinkItem[]
}

export interface TimelineProps {
  items: TimelineEntry[]
  variant?: 'line' | 'stack'
}

export interface TestimonialBlockProps {
  items: Testimonial[]
  variant?: 'single' | 'grid'
}
```

### Cards

```ts
import type {
  ArticleSummary,
  CommunityEventSummary,
  ContributionSummary,
  ProjectSummary,
  SpeakerArchiveSummary,
  SpeakingSummary,
} from '@/types/content'

export interface ProjectCardProps extends ProjectSummary {
  layout?: 'default' | 'compact'
}

export interface CaseStudyCardProps {
  title: string
  summary: string
  problem: string
  outcome: string
  href: string
  tags: string[]
}

export interface ArticleCardProps extends ArticleSummary {
  layout?: 'default' | 'featured'
}

export interface ContributionCardProps extends ContributionSummary {}

export interface RepoCardProps {
  name: string
  description: string
  why: string
  link: string
  tags: string[]
}

export interface SpeakingCardProps extends SpeakingSummary {}

export interface CommunityEventCardProps extends CommunityEventSummary {}

export interface SpeakerArchiveCardProps extends SpeakerArchiveSummary {}
```

### Forms

```ts
import type { FilterOption } from '@/types/components'

export interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  shortcutHint?: string
}

export interface FilterBarProps {
  query: string
  onQueryChange: (value: string) => void
  categories?: FilterOption[]
  activeCategory?: string
  onCategoryChange?: (value: string) => void
  series?: FilterOption[]
  activeSeries?: string
  onSeriesChange?: (value: string) => void
  onClear?: () => void
}

export interface ContactFormProps {
  endpoint?: string
  successMessage?: string
  submitLabel?: string
}
```

### MDX

```ts
import type { ReactNode } from 'react'
import type { CodeHighlightLine, TagItem } from '@/types/components'

export interface MDXContentProps {
  code: string
}

export interface ArticleMetaBarProps {
  date: string
  readingTime?: string
  tags?: TagItem[]
  series?: string
}

export interface FigureProps {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

export interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  highlightedLines?: CodeHighlightLine[]
}

export interface NoteProps {
  tone?: 'info' | 'warning' | 'success' | 'neutral'
  title?: string
  children: ReactNode
}

export interface TableWrapperProps {
  children: ReactNode
}
```

## Migration Status

The component-system migration is now past the wrapper stage for the core layers.

### Current source-of-truth paths

- `src/components/primitives/Container.tsx`
- `src/components/primitives/Button.tsx`
- `src/components/primitives/Card.tsx`
- `src/components/primitives/Section.tsx`
- `src/components/primitives/Tag.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/SkipToContent.tsx`
- `src/components/layout/SectionHeader.tsx`
- `src/components/layout/PageHero.tsx`
- `src/components/layout/SocialLinks.tsx`
- `src/components/blocks/RelatedLinks.tsx`
- `src/components/forms/ContactForm.tsx`
- `src/components/mdx/MDXContent.tsx`
- `src/components/cards/ArticleCard.tsx`
- `src/components/cards/ContributionCard.tsx`
- `src/components/cards/RepoCard.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/cards/SpeakingCard.tsx`
- `src/components/cards/CommunityEventCard.tsx`
- `src/components/cards/SpeakerArchiveCard.tsx`

### Legacy files already removed

- `src/components/Container.tsx`
- `src/components/Header.tsx`
- `src/components/FooterNew.tsx`
- `src/components/SkipToContent.tsx`
- `src/components/ContactForm.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/components/ui/Tag.tsx`
- `src/components/ui/ArticleCard.tsx`
- `src/components/ui/ContributionCard.tsx`
- `src/components/ui/RepoCard.tsx`
- `src/components/ui/RelatedLinks.tsx`
- `src/components/mdx/RenderedMdx.tsx`
- `src/components/StructuredData.tsx`
- `src/components/support/StructuredData.tsx`

### Remaining extraction work

- move `ThemeToggle` out of `src/components/layout/Header.tsx` if it needs reuse
- add missing planned components such as `CTABlock`, `ProofStrip`, `StatsBlock`, `FilterBar`, `ArticleMetaBar`, and `Note`
- decide whether `MobileMenu` should stay private to `Header` or become `src/components/layout/MobileMenu.tsx`

## Extraction Priority

Build these next, in order:

1. `PageHero`
2. `SocialLinks`
3. `ProjectCard`
4. `SpeakingCard`
5. `CommunityEventCard`
6. `StatsBlock`
7. `CTABlock`
8. `FilterBar`
9. `ArticleMetaBar`
10. `Note`

## Practical Rule

If a pattern appears on two pages, it should be a component.

If a component needs content-specific fetch logic, it is too high-level and should be split.
