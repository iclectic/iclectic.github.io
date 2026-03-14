import type { OrganiserExpectationRecord, TalkRecord } from '@/types/content'

export const organiserExpectations: OrganiserExpectationRecord[] = [
  {
    title: 'Clear session scope',
    description:
      'I aim to give organisers a concise talk outline, audience fit, and practical learning outcomes early in the process.',
  },
  {
    title: 'Practical delivery',
    description:
      'My preference is for sessions that leave attendees with concrete decisions, patterns, or questions they can apply in real engineering work.',
  },
  {
    title: 'Collaborative preparation',
    description:
      'If needed, I can adapt a talk for meetups, internal engineering sessions, or community programmes with different levels of technical depth.',
  },
]

export const talkRecords: TalkRecord[] = [
  {
    id: 'avoiding-headaches-in-state-management',
    slug: 'avoiding-headaches-in-state-management',
    title: 'Avoiding headaches in state management',
    summary:
      'A practical Flutter session on choosing the right state boundaries, keeping complexity under control, and avoiding architecture drift.',
    status: 'published',
    featured: true,
    format: 'talk',
    audience: 'Flutter engineers, mobile teams, meetup audiences',
    bestFor: 'Meetups, engineering teams, and community events',
    takeaways: [
      'How to separate local, shared, and app-level state',
      'Where common Flutter state mistakes begin',
      'How to choose patterns that stay maintainable under delivery pressure',
    ],
    event: 'Flutter Birmingham',
    deliveredAt: '2025',
    eventLink: {
      label: 'Visit Flutter Birmingham',
      href: 'https://www.meetup.com/flutter-birmingham/',
      kind: 'external',
    },
    tags: ['Flutter', 'State Management', 'Speaking'],
  },
  {
    id: 'engineering-with-clarity',
    slug: 'engineering-with-clarity',
    title: 'Engineering with clarity',
    summary:
      'How to turn ambiguous requirements into buildable scope using clear trade offs, delivery structure, and better technical communication.',
    status: 'published',
    format: 'talk',
    audience: 'Software engineers, engineering managers, startup teams',
    bestFor: 'Team offsites, internal engineering sessions, and founder-led product teams',
    takeaways: [
      'How to reduce ambiguity before implementation starts',
      'How to define scope without losing momentum',
      'How clear technical communication improves delivery quality',
    ],
    tags: ['Delivery', 'Engineering Practice', 'Communication'],
  },
  {
    id: 'community-driven-engineering',
    slug: 'community-driven-engineering',
    title: 'Community driven engineering',
    summary:
      'Lessons from organising developer meetups and building technical communities that create stronger learning loops and more confident engineers.',
    status: 'published',
    format: 'panel',
    audience: 'Developer advocates, community organisers, engineering leaders',
    bestFor: 'Community events, developer relations programmes, and leadership discussions',
    takeaways: [
      'What makes a technical community useful rather than noisy',
      'How to support first-time speakers and practical sessions',
      'Why community work can strengthen engineering culture and individual growth',
    ],
    tags: ['Community', 'Leadership', 'Developer Education'],
  },
]
