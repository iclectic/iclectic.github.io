export interface CommunityRole {
  name: string
  role: string
  link: string
  summary: string
}

export interface CommunityMetric {
  label: string
  value: string
  description: string
}

export interface CommunityItem {
  title: string
  description: string
}

export interface CommunityMilestone {
  title: string
  date: string
  description: string
}

export interface CommunityGalleryItem {
  title: string
  description: string
  type: 'Photo' | 'Poster'
  image: string
}

export interface CommunityEvent {
  title: string
  date: string
  location: string
  format: string
  focus: string
  group: string
  link: string
}

export interface CommunitySpeaker {
  name: string
  topic: string
  date: string
  group: string
  format: string
  note: string
}

export interface CommunityReference {
  type: string
  title: string
  date: string
  description: string
  link: string
  cta: string
  external?: boolean
}

export const communityRoles: CommunityRole[] = [
  {
    name: 'Flutter Birmingham',
    role: 'Organiser',
    link: 'https://www.meetup.com/flutter-birmingham/',
    summary:
      'Lead programming, speaker outreach, and event delivery with a focus on practical Flutter development.',
  },
  {
    name: 'Golang Birmingham',
    role: 'Organising team',
    link: 'https://www.meetup.com/birminghamgodevs/',
    summary:
      'Work with the organising team to shape programming, speaker coordination, and community direction.',
  },
]

// Add only real metrics here. Leave empty until you have confirmed numbers.
export const communityMetrics: CommunityMetric[] = []

export const communityWorkstreams: CommunityItem[] = [
  {
    title: 'Programming strategy',
    description:
      'Shape themes and session formats that balance technical depth with clarity and real developer needs.',
  },
  {
    title: 'Speaker outreach',
    description:
      'Invite engineers and community members who can share practical lessons and credible delivery experience.',
  },
  {
    title: 'First time speaker support',
    description:
      'Help new speakers with abstracts, rehearsal, and confidence building so more people can contribute publicly.',
  },
  {
    title: 'Community partnerships',
    description:
      'Coordinate with venues, sponsors, and local groups to keep events accessible and sustainable.',
  },
]

export const communityOperations: CommunityItem[] = [
  {
    title: 'Event logistics',
    description:
      'Venue planning, scheduling, and coordination so sessions run smoothly and attendees can focus on learning.',
  },
  {
    title: 'Session formats',
    description:
      'Talks, panels, workshops, and open Q and A with time for practical questions and discussion.',
  },
  {
    title: 'Feedback loop',
    description:
      'Post event reflection and iteration so each session improves the next one.',
  },
]

export const communityHighlights: CommunityItem[] = [
  {
    title: 'Event delivery',
    description:
      'Consistent meetups that keep developer learning practical, relevant, and welcoming.',
  },
  {
    title: 'Speaker pipeline',
    description:
      'A steady mix of first time and experienced speakers supported through clear guidance.',
  },
  {
    title: 'Community growth',
    description:
      'Focused on inclusive meetups with strong technical value and clear learning outcomes.',
  },
  {
    title: 'Collaborative leadership',
    description:
      'Shared ownership with other organisers to keep momentum steady and decisions transparent.',
  },
]

// Add dated public evidence here only when each entry is real and verifiable.
export const communityMilestones: CommunityMilestone[] = []

// Add real event photos or posters here when available.
export const communityGallery: CommunityGalleryItem[] = []

export const communityEvents: CommunityEvent[] = [
  {
    title: 'Avoiding headaches in state management',
    date: '2025',
    location: 'Birmingham, United Kingdom',
    format: 'Talk',
    focus: 'Practical approaches to state management in Flutter applications.',
    group: 'Flutter Birmingham',
    link: 'https://www.meetup.com/flutter-birmingham/',
  },
]

export const communitySpeakers: CommunitySpeaker[] = [
  {
    name: 'Ibim Braide',
    topic: 'Avoiding headaches in state management',
    date: '2025',
    group: 'Flutter Birmingham',
    format: 'Talk',
    note: 'A practical session on state management challenges, architectural patterns, and maintainable Flutter codebases.',
  },
]

export const communityReferences: CommunityReference[] = [
  {
    type: 'Writing',
    title: 'Running developer communities like engineering projects',
    date: '2026-03-05',
    description:
      'A public write-up of the principles behind programming strategy, delivery discipline, and trust in technical communities.',
    link: '/writing/running-developer-communities-like-engineering-projects',
    cta: 'Read article',
  },
  {
    type: 'Speaking',
    title: 'Avoiding headaches in state management',
    date: '2025',
    description:
      'A Flutter Birmingham session that turned engineering delivery lessons into a practical meetup talk on maintainable state decisions.',
    link: '/speaking',
    cta: 'View speaking work',
  },
  {
    type: 'Meetup',
    title: 'Flutter Birmingham',
    date: 'Current',
    description:
      'Public meetup page for the community where I lead programming, speaker outreach, and event delivery.',
    link: 'https://www.meetup.com/flutter-birmingham/',
    cta: 'Visit meetup page',
    external: true,
  },
  {
    type: 'Meetup',
    title: 'Golang Birmingham',
    date: 'Current',
    description:
      'Public meetup page for the Go community where I work with the organising team on programming and community direction.',
    link: 'https://www.meetup.com/birminghamgodevs/',
    cta: 'Visit meetup page',
    external: true,
  },
]
