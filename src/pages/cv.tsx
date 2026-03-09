import Link from 'next/link'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { motion } from 'framer-motion'

const timeline = [
  {
    type: 'work' as const,
    title: 'Community Organiser',
    org: 'Flutter Birmingham',
    period: 'Present',
    description:
      'Lead programming, speaker curation, and community operations for the Flutter developer community in Birmingham.',
  },
  {
    type: 'work' as const,
    title: 'Community Organiser and Steering Support',
    org: 'Golang Birmingham',
    period: 'Present',
    description:
      'Support strategic direction, programming, and partnerships with the organising team for the Go community in Birmingham.',
  },
  {
    type: 'education' as const,
    title: 'MSc Computer Science',
    org: 'Birmingham City University',
    period: '2022 - 2023',
    description:
      'Software Development, AI Fundamentals, Software Analysis and Design, Research Methods, Individual Masters Project.',
  },
  {
    type: 'work' as const,
    title: 'IT Support Specialist',
    org: 'Frannberry School',
    period: '2022',
    description:
      'Deployed hardware and peripherals, diagnosed software issues, provided technical support, installed updates.',
  },
  {
    type: 'work' as const,
    title: 'Technical Support Engineer',
    org: 'Tek Experts',
    period: '2021 - 2022',
    description:
      'Remote Microsoft 365 support for NOAM and EMEA. Resolved Entra ID issues, managed identity synchronisation.',
  },
  {
    type: 'education' as const,
    title: 'BCS Certificate in IT',
    org: 'Compunet Limited',
    period: '2021',
    description:
      'Computer and network technology, data management, requirements analysis, programming fundamentals.',
  },
  {
    type: 'work' as const,
    title: 'Mechanical Maintenance Technician (Trainee)',
    org: 'Prime Atlantic Cegelec',
    period: '2019 - 2021',
    description:
      'Maintained pneumatic, hydraulic, and electrical actuators. Transmission systems and metal fabrication.',
  },
  {
    type: 'work' as const,
    title: 'IT Support Specialist',
    org: 'Frannberry School',
    period: '2017 - 2019',
    description:
      'Computer hardware deployment, software troubleshooting, staff technical support.',
  },
  {
    type: 'work' as const,
    title: 'Corps Member',
    org: 'National Youth Service Corps (NYSC)',
    period: '2016 - 2017',
    description:
      'Agricultural projects in Niger State under VSO supervision.',
  },
  {
    type: 'education' as const,
    title: 'BEng Computer Engineering',
    org: 'University of Benin',
    period: '2009 - 2015',
    description:
      'Hardware, software, networks, multimedia systems. Practical lab work and SIWES industrial experience.',
  },
]

const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Go', 'Dart'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML', 'CSS'],
  Mobile: ['Flutter'],
  Backend: ['Node.js', 'PostgreSQL', 'Firebase'],
  Data: ['pandas', 'scikit-learn', 'Tableau'],
  Tools: ['Git', 'Figma', 'VS Code', 'CI/CD'],
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
}

export default function CV() {
  return (
    <>
      <SEO
        title="CV"
        description="Career overview for Ibim Braide. Software engineer, community organiser, and open source contributor based in the UK."
        url="/cv"
      />

      <section className="pt-20 pb-8 md:pt-28">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
                Curriculum Vitae
              </h1>
              <p className="mt-2 text-body text-muted dark:text-muted-dark">
                A structured overview of my career, education, and skills.
              </p>
            </div>
            <Link
              href="/IBIM_BRAIDE_CURRICULUM_VITAE.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-2 self-start rounded-lg bg-foreground px-5 py-2.5 text-body-sm font-semibold text-background transition-colors hover:bg-foreground/80 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-8">
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-body-sm font-semibold text-foreground dark:text-foreground-dark mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-foreground/5 dark:bg-foreground-dark/10 px-3 py-1 text-caption font-medium text-muted dark:text-muted-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h2 text-foreground dark:text-foreground-dark mb-10">
            Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border dark:bg-border-dark sm:left-4" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={fadeUp}
                  className="relative pl-10 sm:pl-12 py-6 border-b border-border/50 dark:border-border-dark/50 last:border-b-0"
                >
                  <div
                    className={`absolute left-1.5 top-8 h-3 w-3 rounded-full border-2 sm:left-2.5 ${
                      item.type === 'education'
                        ? 'border-accent bg-accent/20'
                        : 'border-foreground/30 bg-background dark:border-foreground-dark/30 dark:bg-background-dark'
                    }`}
                  />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                          {item.title}
                        </h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-caption font-medium ${
                            item.type === 'education'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-foreground/5 text-muted dark:bg-foreground-dark/10 dark:text-muted-dark'
                          }`}
                        >
                          {item.type === 'education' ? 'Education' : 'Work'}
                        </span>
                      </div>
                      <p className="mt-1 text-body-sm text-muted dark:text-muted-dark">
                        {item.org}
                      </p>
                    </div>
                    <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-body-sm text-foreground/70 dark:text-foreground-dark/70 max-w-2xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
