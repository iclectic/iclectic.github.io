import type { ContentDetailItem, OpenSourceContributionRecord } from '@/types/content'

export const openSourceFocusAreas: string[] = [
  'Public Flutter repositories and product experiments',
  'Community tooling and event infrastructure',
  'Developer education through teaching demos and examples',
  'Documentation clarity and onboarding',
]

export const openSourceHighlights: ContentDetailItem[] = [
  {
    title: 'Issue reporting and triage',
    description:
      'Documenting clear reproduction steps so maintainers can act quickly and confidently.',
  },
  {
    title: 'Documentation improvements',
    description:
      'Strengthening guides and reference docs to reduce confusion for new contributors.',
  },
  {
    title: 'Technical discussions',
    description:
      'Contributing to design conversations that keep tooling practical for real teams.',
  },
]

export const openSourcePrinciples: string[] = [
  'Clear reproduction steps and minimal test cases',
  'Small, focused changes that are easy to review',
  'Respect for maintainers time and project direction',
  'Documentation that helps the next contributor succeed',
]

export const openSourceContributionRecords: OpenSourceContributionRecord[] = [
  {
    id: 'textara-public-repository',
    slug: 'textara',
    title: 'Built an offline EPUB and PDF reader in Flutter',
    summary:
      'Public Flutter repository for a DRM free reader focused on offline use, accessibility, and a polished reading experience.',
    status: 'published',
    featured: true,
    publishedAt: '2026-03-05',
    contributionType: 'repository',
    project: 'iclectic/TEXTARA',
    contributionScope: 'Public product repository',
    impact:
      'Shows product-level Flutter work in the open, with a clear focus on offline reliability and user experience.',
    tags: ['Flutter', 'Offline', 'Accessibility', 'Product'],
    links: {
      primary: {
        label: 'View repository',
        href: 'https://github.com/iclectic/TEXTARA',
        kind: 'external',
      },
      repository: {
        label: 'GitHub',
        href: 'https://github.com/iclectic/TEXTARA',
        kind: 'external',
      },
    },
  },
  {
    id: 'state-layers-demo',
    slug: 'state-layers-demo',
    title: 'Built a Flutter demo for teaching layered state management',
    summary:
      'Small conference-ready demo that explains local, shared, and app-level state in one practical teaching example.',
    status: 'published',
    featured: true,
    publishedAt: '2026-02-27',
    contributionType: 'repository',
    project: 'iclectic/State-Layers-Demo',
    contributionScope: 'Public educational repository',
    impact:
      'Turns a talk topic into a reusable learning asset for Flutter developers and community sessions.',
    tags: ['Flutter', 'State Management', 'Developer Education'],
    links: {
      primary: {
        label: 'View repository',
        href: 'https://github.com/iclectic/State-Layers-Demo',
        kind: 'external',
      },
      repository: {
        label: 'GitHub',
        href: 'https://github.com/iclectic/State-Layers-Demo',
        kind: 'external',
      },
    },
  },
  {
    id: 'checkin-qr',
    slug: 'checkin-qr',
    title: 'Built an offline friendly QR check in workflow for meetups',
    summary:
      'Community operations tool that creates events, scans QR codes, supports manual check ins, and exports attendance data.',
    status: 'published',
    publishedAt: '2026-02-01',
    contributionType: 'repository',
    project: 'iclectic/checkin-qr',
    contributionScope: 'Public community operations repository',
    impact:
      'Converts meetup administration into maintainable software instead of a repeated spreadsheet process.',
    tags: ['Flutter', 'QR', 'Community Tools'],
    links: {
      primary: {
        label: 'View repository',
        href: 'https://github.com/iclectic/checkin-qr',
        kind: 'external',
      },
      repository: {
        label: 'GitHub',
        href: 'https://github.com/iclectic/checkin-qr',
        kind: 'external',
      },
    },
  },
  {
    id: 'flutter-birmingham-hub',
    slug: 'flutter-birmingham-hub',
    title: 'Created a community hub for event management and impact tracking',
    summary:
      'Public repository for organiser workflows, event management, and community reporting around Flutter Birmingham.',
    status: 'published',
    publishedAt: '2026-01-26',
    contributionType: 'repository',
    project: 'iclectic/flutter-birmingham-hub',
    contributionScope: 'Public community infrastructure repository',
    impact:
      'Connects community leadership with measurable organiser workflows and a clearer operational record.',
    tags: ['Flutter', 'Community', 'Operations'],
    links: {
      primary: {
        label: 'View repository',
        href: 'https://github.com/iclectic/flutter-birmingham-hub',
        kind: 'external',
      },
      repository: {
        label: 'GitHub',
        href: 'https://github.com/iclectic/flutter-birmingham-hub',
        kind: 'external',
      },
    },
  },
]
