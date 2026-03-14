import {
  communityGallery,
  communityHighlights,
  communityInitiativeRecords,
  communityMetrics,
  communityMilestones,
  communityOperations,
  communityReferences,
  communityWorkstreams,
} from '@/data/communityInitiatives'
import {
  openSourceContributionRecords,
  openSourceFocusAreas,
  openSourceHighlights,
  openSourcePrinciples,
} from '@/data/openSourceRecords'
import { projects as legacyProjects } from '@/data/projects'
import { projectRecords } from '@/data/projectRecords'
import { siteSettings } from '@/data/site'
import { organiserExpectations, talkRecords } from '@/data/talks'
import type { ProjectType } from '@/types/content'

export interface ProjectCardData {
  title: string
  description: string
  outcome: string
  projectType: string
  role: string
  scope: string
  image: string
  tags: string[]
  category: string
  link: string
  github?: string
  featured?: boolean
}

export interface ContributionCardData {
  type: string
  project: string
  title: string
  summary: string
  date: string
  link: string
  impact?: string
}

export interface RepoCardData {
  name: string
  description: string
  why: string
  link: string
  tags: string[]
}

export interface SpeakingTopicCardData {
  title: string
  description: string
  audience: string
  format: string
  bestFor: string
  takeaways: string[]
}

export interface SpeakingEngagementCardData {
  title: string
  event: string
  date: string
  description: string
  audience: string
  format: string
  takeaways: string[]
  link?: string
}

export interface CommunityRoleCardData {
  name: string
  role: string
  link: string
  summary: string
}

export interface CommunityEventCardData {
  title: string
  date: string
  location: string
  format: string
  focus: string
  group: string
  link: string
}

export interface CommunitySpeakerCardData {
  name: string
  topic: string
  date: string
  group: string
  format: string
  note: string
}

const projectTypeLabels: Record<ProjectType, string> = {
  client: 'Client delivery',
  product: 'Product build',
  concept: 'Concept',
  'open-source': 'Open source',
  experiment: 'Learning build',
  data: 'Data project',
}

const categoryLabels: Record<ProjectCardData['category'], string> = {
  Frontend: 'Frontend',
  Mobile: 'Mobile',
  'Full Stack': 'Full Stack',
  Backend: 'Backend',
  Data: 'Data',
  'Machine Learning': 'Machine Learning',
  'Open Source': 'Open Source',
}

function mapProjectCategory(category: string): ProjectCardData['category'] {
  switch (category) {
    case 'frontend':
      return categoryLabels.Frontend
    case 'mobile':
      return categoryLabels.Mobile
    case 'full-stack':
      return categoryLabels['Full Stack']
    case 'backend':
      return categoryLabels.Backend
    case 'data':
      return categoryLabels.Data
    case 'machine-learning':
      return categoryLabels['Machine Learning']
    default:
      return categoryLabels['Open Source']
  }
}

function mapProjectRecordToCard(project: typeof projectRecords[number]): ProjectCardData {
  return {
    title: project.title,
    description: project.summary,
    outcome: project.outcome,
    projectType: projectTypeLabels[project.type],
    role: project.role,
    scope: project.scope,
    image: project.images?.[0]?.src ?? '/images/projects/placeholder-1.svg',
    tags: project.tags ?? [],
    category: mapProjectCategory(project.category),
    link: project.links.caseStudy?.href ?? project.links.live?.href ?? project.links.repository?.href ?? '#',
    github: project.links.repository?.href,
    featured: project.featured,
  }
}

function mapLegacyProjectToCard(project: typeof legacyProjects[number]): ProjectCardData {
  return {
    title: project.title,
    description: project.description,
    outcome: project.outcome,
    projectType: project.projectType,
    role: project.role,
    scope: project.scope,
    image: typeof project.image === 'string' ? project.image : project.image.src,
    tags: project.tags,
    category: project.category,
    link: project.link,
    github: project.github,
    featured: project.featured,
  }
}

export function getProjectCards(): ProjectCardData[] {
  const mappedRecords = projectRecords.map(mapProjectRecordToCard)
  const existingTitles = new Set(mappedRecords.map((project) => project.title))
  const supplementalLegacyProjects = legacyProjects
    .filter((project) => !existingTitles.has(project.title))
    .map(mapLegacyProjectToCard)

  return [
    ...mappedRecords,
    ...supplementalLegacyProjects,
  ]
}

export function getFeaturedProjectCards() {
  return getProjectCards().filter((project) => project.featured)
}

export function getProjectCardBySlug(slug: string) {
  return getProjectCards().find((project) => project.link === `/projects/${slug}`)
}

export function getOpenSourcePublicWork(): ContributionCardData[] {
  return openSourceContributionRecords.map((item) => ({
    type: item.contributionType === 'repository' ? 'Public repository' : item.contributionType,
    project: item.project,
    title: item.title,
    summary: item.summary,
    date: item.publishedAt ?? '',
    link: item.links.primary.href,
    impact: item.impact,
  }))
}

export function getOpenSourceFocusAreas() {
  return openSourceFocusAreas
}

export function getOpenSourceHighlights() {
  return openSourceHighlights
}

export function getOpenSourcePrinciples() {
  return openSourcePrinciples
}

export function getOpenSourceExternalContributions(): ContributionCardData[] {
  return openSourceContributionRecords
    .filter((item) => item.contributionType !== 'repository')
    .map((item) => ({
      type: item.contributionType,
      project: item.project,
      title: item.title,
      summary: item.summary,
      date: item.publishedAt ?? '',
      link: item.links.primary.href,
      impact: item.impact,
    }))
}

export function getOpenSourceRepositoryCards(): RepoCardData[] {
  return openSourceContributionRecords
    .filter((item) => item.contributionType === 'repository')
    .map((item) => ({
      name: item.project.split('/').pop() ?? item.slug,
      description: item.summary,
      why: item.impact ?? item.summary,
      link: item.links.repository?.href ?? item.links.primary.href,
      tags: item.tags ?? [],
    }))
}

export function getSpeakingTopics(): SpeakingTopicCardData[] {
  return talkRecords.map((item) => ({
    title: item.title,
    description: item.summary,
    audience: item.audience,
    format: item.format,
    bestFor: item.bestFor,
    takeaways: item.takeaways,
  }))
}

export function getSpeakingEngagements(): SpeakingEngagementCardData[] {
  return talkRecords
    .filter((item) => item.event && item.deliveredAt)
    .map((item) => ({
      title: item.title,
      event: item.event ?? '',
      date: item.deliveredAt ?? '',
      description: item.summary,
      audience: item.audience,
      format: item.format,
      takeaways: item.takeaways,
      link: item.eventLink?.href,
    }))
}

export function getOrganiserExpectations() {
  return organiserExpectations
}

export function getCommunityRoles(): CommunityRoleCardData[] {
  return communityInitiativeRecords.map((item) => ({
    name: item.title,
    role: item.role,
    link: item.links[0]?.href ?? '#',
    summary: item.description,
  }))
}

export function getCommunityMetrics() {
  return communityMetrics
}

export function getCommunityWorkstreams() {
  return communityWorkstreams
}

export function getCommunityOperations() {
  return communityOperations
}

export function getCommunityHighlights() {
  return communityHighlights
}

export function getCommunityEvents(): CommunityEventCardData[] {
  return communityInitiativeRecords.flatMap((item) =>
    (item.events ?? []).map((event) => ({
      title: event.title,
      date: event.date,
      location: event.location ?? 'Location to be confirmed',
      format: event.format ?? 'Event',
      focus: event.summary,
      group: item.title,
      link: event.link ?? item.links[0]?.href ?? '#',
    }))
  )
}

export function getCommunitySpeakers(): CommunitySpeakerCardData[] {
  return talkRecords
    .filter((item) => item.event && item.deliveredAt)
    .map((item) => ({
      name: siteSettings.author.name,
      topic: item.title,
      date: item.deliveredAt ?? '',
      group: item.event ?? '',
      format: item.format,
      note: item.summary,
    }))
}

export function getCommunityMilestones() {
  return communityMilestones
}

export function getCommunityGallery() {
  return communityGallery
}

export function getCommunityReferences() {
  return communityReferences
}
