export interface RelatedLinkItem {
  title: string
  description: string
  href: string
}

export const relatedWritingLinks: Record<string, RelatedLinkItem[]> = {
  'responsible-ai-starts-in-the-backlog': [
    {
      title: 'AI Supplier Matching Platform case study',
      description: 'A related product concept where structured decisions and responsible implementation matter.',
      href: '/case-studies/ai-supplier-matching-platform',
    },
    {
      title: 'Impact',
      description: 'See the wider body of engineering, community, and public work that informs this perspective.',
      href: '/impact',
    },
    {
      title: 'About',
      description: 'Background on how I approach engineering judgement, public contribution, and responsible technology.',
      href: '/about',
    },
  ],
  'running-developer-communities-like-engineering-projects': [
    {
      title: 'Community',
      description: 'See the communities I organise, the public documentation trail, and recent sessions.',
      href: '/community',
    },
    {
      title: 'Speaking',
      description: 'See talks and workshop topics shaped by this community work.',
      href: '/speaking',
    },
    {
      title: 'Flutter Meetup Check In System',
      description: 'A project shaped directly by the operational realities of running community events.',
      href: '/projects/flutter-meetup-checkin-system',
    },
  ],
  'small-open-source-contributions-that-compound': [
    {
      title: 'Open Source',
      description: 'See the public repositories and contribution philosophy that support this article.',
      href: '/open-source',
    },
    {
      title: 'Community',
      description: 'A related example of how public contribution and developer education reinforce one another.',
      href: '/community',
    },
    {
      title: 'About',
      description: 'More context on the way I think about contribution, clarity, and long-term engineering growth.',
      href: '/about',
    },
  ],
  'python-virtual-environments': [
    {
      title: 'Open Source',
      description: 'Public work where repeatable setup and maintainable developer workflows matter.',
      href: '/open-source',
    },
    {
      title: 'Projects',
      description: 'See the software and data work that benefits from clear tooling and dependable setup.',
      href: '/projects',
    },
    {
      title: 'About',
      description: 'Context on the practical engineering mindset behind this kind of article.',
      href: '/about',
    },
  ],
  'react-hooks-practical-guide': [
    {
      title: 'Projects',
      description: 'See front-end and product work where implementation clarity matters in practice.',
      href: '/projects',
    },
    {
      title: 'Open Source',
      description: 'Public repositories where I turn engineering ideas into reusable code and teaching material.',
      href: '/open-source',
    },
    {
      title: 'About',
      description: 'Background on how I think about maintainability, delivery, and public technical work.',
      href: '/about',
    },
  ],
}

export const relatedProjectLinks: Record<string, RelatedLinkItem[]> = {
  'flutter-meetup-checkin-system': [
    {
      title: 'Community',
      description: 'The organising context that shaped the operational needs behind this tool.',
      href: '/community',
    },
    {
      title: 'Speaking',
      description: 'Related talks and workshop topics grounded in practical Flutter and community delivery.',
      href: '/speaking',
    },
    {
      title: 'Open Source',
      description: 'Public repository work and tooling philosophy connected to this kind of community-facing product.',
      href: '/open-source',
    },
  ],
  'ai-supplier-matching-platform': [
    {
      title: 'AI Supplier Matching Platform case study',
      description: 'A deeper write-up covering the context, trade offs, and intended workflow behind the platform.',
      href: '/case-studies/ai-supplier-matching-platform',
    },
    {
      title: 'Responsible AI starts in the backlog',
      description: 'A related article on how product and engineering decisions should handle responsibility early.',
      href: '/writing/responsible-ai-starts-in-the-backlog',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss product delivery or a related engineering problem.',
      href: '/contact',
    },
  ],
  'expense-tracking-application': [
    {
      title: 'Cumulative Expense Tracker case study',
      description: 'A deeper look at the goals, implementation choices, and lessons behind this app.',
      href: '/case-studies/cumulative-expense-tracker',
    },
    {
      title: 'Projects',
      description: 'See the wider mix of mobile, full stack, and data work across the site.',
      href: '/projects',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss mobile product delivery or a related build.',
      href: '/contact',
    },
  ],
  'school-portal-system-concept': [
    {
      title: 'Projects',
      description: 'See the broader set of product concepts, builds, and delivery work.',
      href: '/projects',
    },
    {
      title: 'About',
      description: 'More context on the engineering and systems thinking behind concept work like this.',
      href: '/about',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss a related platform idea or delivery scope.',
      href: '/contact',
    },
  ],
}

export const relatedCaseStudyLinks: Record<string, RelatedLinkItem[]> = {
  'ai-supplier-matching-platform': [
    {
      title: 'AI Supplier Matching Platform project',
      description: 'The corresponding project entry with a concise summary, role, scope, and outcome.',
      href: '/projects/ai-supplier-matching-platform',
    },
    {
      title: 'Responsible AI starts in the backlog',
      description: 'A related article on how responsible decision-making belongs inside delivery work.',
      href: '/writing/responsible-ai-starts-in-the-backlog',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss similar procurement or matching workflows.',
      href: '/contact',
    },
  ],
  'coca-cola-stock-analysis': [
    {
      title: 'Projects',
      description: 'See the wider set of data, dashboard, and product work on the site.',
      href: '/projects',
    },
    {
      title: 'About',
      description: 'Background on the practical and analytical mindset that informs this kind of work.',
      href: '/about',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss data analysis, prototyping, or exploratory work.',
      href: '/contact',
    },
  ],
  'cumulative-expense-tracker': [
    {
      title: 'Cumulative Expense Tracker project',
      description: 'The corresponding project entry with a quicker summary of role, scope, and outcome.',
      href: '/projects/expense-tracking-application',
    },
    {
      title: 'Projects',
      description: 'See the broader mix of mobile and full stack work across the site.',
      href: '/projects',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss mobile delivery or product prototypes.',
      href: '/contact',
    },
  ],
  'retail-sales-analysis': [
    {
      title: 'Projects',
      description: 'See the broader mix of data analysis, dashboards, and engineering work.',
      href: '/projects',
    },
    {
      title: 'About',
      description: 'Background on the analytical and engineering approach behind projects like this.',
      href: '/about',
    },
    {
      title: 'Contact',
      description: 'Get in touch if you want to discuss reporting, dashboarding, or data-focused delivery.',
      href: '/contact',
    },
  ],
}
