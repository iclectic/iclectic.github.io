import type {
  CommunityGalleryRecord,
  CommunityInitiativeRecord,
  CommunityMetricRecord,
  CommunityMilestoneDetailRecord,
  CommunityReferenceRecord,
  ContentDetailItem,
} from '@/types/content'

export const communityMetrics: CommunityMetricRecord[] = [
  {
    label: 'Communities',
    value: '2',
    description: 'Flutter Birmingham (organiser) and Golang Birmingham (organising team).',
  },
  {
    label: 'Sessions delivered',
    value: '10+',
    description: 'Recurring meetup sessions planned, programmed, and delivered since 2024.',
  },
  {
    label: 'First-time speakers supported',
    value: '6',
    description: 'New speakers guided through abstracts, rehearsal, and delivery.',
  },
  {
    label: 'Public repositories',
    value: '4',
    description: 'Community tools and teaching repos shipped in the open.',
  },
]

export const communityWorkstreams: ContentDetailItem[] = [
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

export const communityOperations: ContentDetailItem[] = [
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

export const communityHighlights: ContentDetailItem[] = [
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

export const communityMilestones: CommunityMilestoneDetailRecord[] = [
  {
    title: 'Flutter Birmingham launched',
    date: '2024',
    description: 'Established a recurring Flutter meetup in Birmingham focused on hands-on learning and speaker development.',
  },
  {
    title: 'First talk delivered',
    date: '2025',
    description: 'Presented "Avoiding headaches in state management" at Flutter Birmingham, turning delivery lessons into a reusable session.',
  },
  {
    title: 'Joined Golang Birmingham organising team',
    date: '2025',
    description: 'Took on programming, speaker coordination, and community direction alongside the existing organisers.',
  },
]

export const communityGallery: CommunityGalleryRecord[] = []

export const communityReferences: CommunityReferenceRecord[] = [
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

export const communityInitiativeRecords: CommunityInitiativeRecord[] = [
  {
    id: 'flutter-birmingham',
    slug: 'flutter-birmingham',
    title: 'Flutter Birmingham',
    summary: 'Developer meetup focused on practical Flutter learning and community growth.',
    status: 'published',
    featured: true,
    type: 'meetup',
    role: 'Organiser',
    organisation: 'Flutter Birmingham',
    description:
      'Lead programming, speaker outreach, and event delivery with a focus on practical Flutter development and repeatable community operations.',
    impactSummary:
      'Built a practical learning space for Flutter developers in Birmingham and connected community work to technical delivery.',
    tags: ['Community', 'Flutter', 'Leadership'],
    links: [
      {
        label: 'Visit meetup page',
        href: 'https://www.meetup.com/flutter-birmingham/',
        kind: 'external',
      },
    ],
    evidence: [
      {
        label: 'Read the community operations article',
        href: '/writing/running-developer-communities-like-engineering-projects',
        kind: 'internal',
      },
    ],
    events: [
      {
        title: 'Avoiding headaches in state management',
        date: '2025',
        location: 'Birmingham, United Kingdom',
        format: 'Talk',
        summary: 'A practical Flutter session on state decisions that stay maintainable as an app grows.',
        link: 'https://www.meetup.com/flutter-birmingham/',
      },
    ],
  },
  {
    id: 'golang-birmingham',
    slug: 'golang-birmingham',
    title: 'Golang Birmingham',
    summary: 'Local Go meetup focused on backend engineering, infrastructure, and systems thinking.',
    status: 'published',
    featured: true,
    type: 'meetup',
    role: 'Organising team',
    organisation: 'Golang Birmingham',
    description:
      'Work with the organising team on programming, speaker coordination, and community direction in a collaborative leadership role.',
    impactSummary:
      'Helped support a local Go community centred on real engineering practice and shared learning.',
    tags: ['Community', 'Go', 'Leadership'],
    links: [
      {
        label: 'Visit meetup page',
        href: 'https://www.meetup.com/birminghamgodevs/',
        kind: 'external',
      },
    ],
  },
]
