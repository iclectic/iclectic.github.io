import type { TimelineMilestoneRecord } from '@/types/content'

export const timelineMilestones: TimelineMilestoneRecord[] = [
  {
    id: 'uniben-bachelor-of-engineering',
    date: '2018',
    title: 'Completed a Bachelor of Engineering degree',
    summary: 'Built a strong engineering foundation at the University of Benin.',
    category: 'education',
  },
  {
    id: 'technical-support-and-problem-solving',
    date: '2019',
    title: 'Deepened technical problem solving through support work',
    summary:
      'Built practical experience diagnosing issues, supporting users, and understanding systems under real operating conditions.',
    category: 'career',
  },
  {
    id: 'bcu-masters-computer-science',
    date: '2024',
    title: 'Completed a Master’s degree in Computer Science',
    summary: 'Deepened software systems and computing knowledge at Birmingham City University.',
    category: 'education',
  },
  {
    id: 'flutter-birmingham-organiser',
    date: '2025',
    title: 'Took on organiser responsibility at Flutter Birmingham',
    summary: 'Began leading programming, speaker outreach, and event delivery for the meetup.',
    category: 'community',
    link: {
      label: 'View community page',
      href: '/community',
      kind: 'internal',
    },
  },
  {
    id: 'state-management-talk',
    date: '2025',
    title: 'Delivered a Flutter community talk on state management',
    summary:
      'Presented a practical session on maintainable state decisions for Flutter developers.',
    category: 'speaking',
    link: {
      label: 'View speaking page',
      href: '/speaking',
      kind: 'internal',
    },
  },
  {
    id: 'responsible-ai-writing',
    date: '2026-03-12',
    title: 'Published writing on responsible AI and delivery practice',
    summary:
      'Strengthened the public writing side of the site with essays on AI ethics, community, and open source.',
    category: 'writing',
    link: {
      label: 'Read the writing',
      href: '/writing',
      kind: 'internal',
    },
  },
]
