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

export interface CopyProps {
  children: ReactNode
}
