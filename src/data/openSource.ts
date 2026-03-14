export interface OpenSourceHighlight {
  title: string
  description: string
}

export interface OpenSourceContribution {
  type: string
  project: string
  title: string
  summary: string
  date: string
  link: string
  impact?: string
}

export interface OpenSourceRepository {
  name: string
  description: string
  why: string
  link: string
  tags: string[]
}

export const openSourceFocusAreas = [
  'Public Flutter repositories and product experiments',
  'Community tooling and event infrastructure',
  'Developer education through teaching demos and examples',
  'Documentation clarity and onboarding',
]

export const openSourceHighlights: OpenSourceHighlight[] = [
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

export const openSourcePublicWork: OpenSourceContribution[] = [
  {
    type: 'Public repository',
    project: 'iclectic/TEXTARA',
    title: 'Built an offline EPUB and PDF reader in Flutter',
    summary:
      'Public Flutter repository for a DRM free reader focused on offline use, accessibility, and a polished reading experience.',
    date: '2026-03-05',
    link: 'https://github.com/iclectic/TEXTARA',
    impact:
      'Shows product level Flutter work in the open, with a clear focus on offline reliability and user experience.',
  },
  {
    type: 'Public repository',
    project: 'iclectic/State-Layers-Demo',
    title: 'Built a Flutter demo for teaching layered state management',
    summary:
      'Small conference-ready demo that explains local, shared, and app-level state in one practical teaching example.',
    date: '2026-02-27',
    link: 'https://github.com/iclectic/State-Layers-Demo',
    impact:
      'Turns a talk topic into a reusable learning asset for Flutter developers and community sessions.',
  },
  {
    type: 'Public repository',
    project: 'iclectic/checkin-qr',
    title: 'Built an offline friendly QR check in workflow for meetups',
    summary:
      'Community operations tool that creates events, scans QR codes, supports manual check ins, and exports attendance data.',
    date: '2026-02-01',
    link: 'https://github.com/iclectic/checkin-qr',
    impact:
      'Converts meetup administration into maintainable software instead of a repeated spreadsheet process.',
  },
  {
    type: 'Public repository',
    project: 'iclectic/flutter-birmingham-hub',
    title: 'Created a community hub for event management and impact tracking',
    summary:
      'Public repository for organiser workflows, event management, and community reporting around Flutter Birmingham.',
    date: '2026-01-26',
    link: 'https://github.com/iclectic/flutter-birmingham-hub',
    impact:
      'Connects community leadership with measurable organiser workflows and a clearer operational record.',
  },
]

export const openSourceExternalContributions: OpenSourceContribution[] = []

export const openSourceRepositories: OpenSourceRepository[] = [
  {
    name: 'State-Layers-Demo',
    description:
      'Flutter demo application that illustrates local widget state, shared state with Provider, and app-level state in one clear teaching example.',
    why: 'Useful as a practical reference for talks, workshops, and onboarding around Flutter state management.',
    link: 'https://github.com/iclectic/State-Layers-Demo',
    tags: ['Flutter', 'State Management', 'Developer Education'],
  },
  {
    name: 'checkin-qr',
    description:
      'Offline friendly Flutter check in tool for community events with QR scanning, manual check ins, and attendance export.',
    why: 'Shows how community operations can be turned into focused software rather than handled manually each time.',
    link: 'https://github.com/iclectic/checkin-qr',
    tags: ['Flutter', 'Community Tools', 'QR'],
  },
  {
    name: 'flutter-birmingham-hub',
    description:
      'Community hub repository focused on event workflows, programme support, and data-informed community operations.',
    why: 'Connects organising work with product thinking and measurable community delivery.',
    link: 'https://github.com/iclectic/flutter-birmingham-hub',
    tags: ['Flutter', 'Community', 'Firebase'],
  },
  {
    name: 'TEXTARA',
    description:
      'Flutter reading application for EPUB and PDF files with offline access, accessibility concerns, and a premium product feel.',
    why: 'Demonstrates product quality, offline handling, and user experience work in a public codebase.',
    link: 'https://github.com/iclectic/TEXTARA',
    tags: ['Flutter', 'Offline', 'Product'],
  },
]

export const openSourcePrinciples = [
  'Clear reproduction steps and minimal test cases',
  'Small, focused changes that are easy to review',
  'Respect for maintainers time and project direction',
  'Documentation that helps the next contributor succeed',
]
