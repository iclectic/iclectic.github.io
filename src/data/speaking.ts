export interface SpeakingTopic {
  title: string
  description: string
  audience: string
  format: string
  bestFor: string
  takeaways: string[]
}

export interface SpeakingEngagement {
  title: string
  event: string
  date: string
  description: string
  audience: string
  format: string
  takeaways: string[]
  link?: string
}

export interface OrganiserExpectation {
  title: string
  description: string
}

export const speakingTopics: SpeakingTopic[] = [
  {
    title: 'Avoiding headaches in state management',
    description:
      'A practical Flutter session on choosing the right state boundaries, keeping complexity under control, and avoiding architecture drift as an app grows.',
    audience: 'Flutter engineers, mobile teams, meetup audiences',
    format: 'Talk or workshop',
    bestFor: 'Meetups, engineering teams, community events',
    takeaways: [
      'How to separate local, shared, and app-level state',
      'Where common Flutter state management mistakes begin',
      'How to choose patterns that stay maintainable under real delivery pressure',
    ],
  },
  {
    title: 'Engineering with clarity',
    description:
      'A session on turning ambiguous requirements into buildable scope, using clear trade offs, delivery structure, and communication that keeps teams aligned.',
    audience: 'Software engineers, engineering managers, startup teams',
    format: 'Talk',
    bestFor: 'Team offsites, internal engineering sessions, founder-led product teams',
    takeaways: [
      'How to reduce ambiguity before implementation starts',
      'How to define scope without losing momentum',
      'How clear technical communication improves delivery quality',
    ],
  },
  {
    title: 'Community driven engineering',
    description:
      'Lessons from organising developer meetups and building technical communities that create stronger learning loops, better speaking opportunities, and more confident engineers.',
    audience: 'Developer advocates, community organisers, engineering leaders',
    format: 'Talk or panel',
    bestFor: 'Community events, developer relations programmes, leadership discussions',
    takeaways: [
      'What makes a technical community useful rather than noisy',
      'How to support first-time speakers and practical sessions',
      'Why community work can strengthen engineering culture and individual growth',
    ],
  },
]

export const speakingEngagements: SpeakingEngagement[] = [
  {
    title: 'Avoiding headaches in state management',
    event: 'Flutter Birmingham',
    date: '2025',
    description:
      'A practical session on Flutter state management that focused on common failure points, architectural trade offs, and patterns that remain workable as an application grows.',
    audience: 'Flutter developers and mobile engineers',
    format: 'Meetup talk',
    takeaways: [
      'How to identify when local state is no longer enough',
      'How to keep state decisions proportional to app complexity',
      'How to design teaching examples that help engineers reason about architecture',
    ],
    link: 'https://www.meetup.com/flutter-birmingham/',
  },
]

export const organiserExpectations: OrganiserExpectation[] = [
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
