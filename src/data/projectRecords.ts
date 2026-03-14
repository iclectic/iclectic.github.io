import type { ProjectRecord } from '@/types/content'

export const projectRecords: ProjectRecord[] = [
  {
    id: 'flutter-meetup-checkin-system',
    slug: 'flutter-meetup-checkin-system',
    title: 'Flutter Meetup Check In System',
    summary:
      'Offline friendly Flutter app for faster meetup check ins, manual attendance capture, and simpler organiser workflows.',
    status: 'published',
    featured: true,
    publishedAt: '2026-03-10',
    type: 'product',
    category: 'mobile',
    role: 'Concept, product design, and Flutter implementation',
    scope: 'Mobile workflow for QR scanning, manual check ins, and attendance export',
    outcome: 'Turned meetup attendance into a faster, more repeatable organiser workflow.',
    stack: ['Flutter', 'Dart', 'QR scanning'],
    organisation: 'Flutter Birmingham',
    tags: ['Flutter', 'Mobile', 'Community Tools'],
    images: [
      {
        src: '/images/projects/placeholder-1.svg',
        alt: 'Placeholder preview for the Flutter Meetup Check In System',
      },
    ],
    links: {
      caseStudy: {
        label: 'Read project page',
        href: '/projects/flutter-meetup-checkin-system',
        kind: 'internal',
      },
      repository: {
        label: 'View repository',
        href: 'https://github.com/iclectic/checkin-qr',
        kind: 'external',
      },
    },
  },
  {
    id: 'cumulative-expense-tracker',
    slug: 'expense-tracking-application',
    title: 'Cumulative Expense Tracker',
    summary:
      'Flutter based expense tracker that visualises cumulative spending through simple input flows and charts.',
    status: 'published',
    featured: true,
    publishedAt: '2026-03-10',
    type: 'product',
    category: 'mobile',
    role: 'Design and Flutter development',
    scope: 'Mobile expense tracking, charting, and cumulative visualisation',
    outcome: 'Turned cumulative spend into an easier visual signal for day to day budgeting.',
    stack: ['Flutter', 'Dart', 'Charts'],
    tags: ['Flutter', 'Data Visualisation', 'Mobile'],
    images: [
      {
        src: '/images/projects/placeholder-3.svg',
        alt: 'Placeholder preview for the Cumulative Expense Tracker',
      },
    ],
    links: {
      caseStudy: {
        label: 'Read project page',
        href: '/projects/expense-tracking-application',
        kind: 'internal',
      },
    },
  },
  {
    id: 'school-portal-system-concept',
    slug: 'school-portal-system-concept',
    title: 'School Portal System Concept',
    summary:
      'Full stack concept for a portal that connects students, teachers, and parents through one system.',
    status: 'published',
    publishedAt: '2026-03-10',
    type: 'concept',
    category: 'full-stack',
    role: 'Product concept and system design',
    scope: 'Portal model covering dashboards, communication, assignments, and result workflows',
    outcome: 'Defined a single portal model for communication, assignments, and academic records.',
    stack: ['Full Stack Architecture', 'Authentication', 'Portal UX'],
    tags: ['Education', 'Full Stack', 'Product Concept'],
    images: [
      {
        src: '/images/projects/placeholder-4.svg',
        alt: 'Placeholder preview for the School Portal System Concept',
      },
    ],
    links: {
      caseStudy: {
        label: 'Read project page',
        href: '/projects/school-portal-system-concept',
        kind: 'internal',
      },
    },
  },
]
