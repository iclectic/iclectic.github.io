import Image from 'next/image'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { motion } from 'framer-motion'

const experience = [
  {
    role: 'Information Technology Support Specialist',
    company: 'Frannberry School',
    companyUrl: 'https://www.frannberryschool.org',
    period: '2022',
    location: 'Lagos, Nigeria',
    description:
      'Set up and deployed computer hardware and peripherals. Diagnosed and resolved software-related issues across school systems. Provided technical support to staff and installed software updates.',
  },
  {
    role: 'Technical Support Engineer',
    company: 'Tek Experts',
    companyUrl: 'https://www.tek-experts.com',
    period: '2021 - 2022',
    location: 'Lagos, Nigeria',
    description:
      'Provided remote technical support for Microsoft 365 customers across NOAM and EMEA. Resolved Microsoft Entra ID issues, managed identity synchronisation, and assisted with user and group management.',
  },
  {
    role: 'Mechanical Maintenance Technician (Trainee)',
    company: 'Prime Atlantic Cegelec',
    companyUrl: 'https://www.pacenigeria.com',
    period: '2019 - 2021',
    location: 'Lagos, Nigeria',
    description:
      'Maintained and installed pneumatic, hydraulic, and electrical actuators. Handled transmission systems, performed metal fabrication, and serviced prime movers.',
  },
  {
    role: 'Information Technology Support Specialist',
    company: 'Frannberry School',
    companyUrl: 'https://www.frannberryschool.org',
    period: '2017 - 2019',
    location: 'Lagos, Nigeria',
    description:
      'Set up and deployed computer hardware, resolved software issues, and provided technical support to staff including installing and updating software across school systems.',
  },
  {
    role: 'Corps Member',
    company: 'National Youth Service Corps (NYSC)',
    companyUrl: 'https://www.nysc.gov.ng',
    period: '2016 - 2017',
    location: 'Niger State, Nigeria',
    description:
      'Worked on agricultural projects in Lafiaji and Raba under VSO supervision, aimed at improving maize and millet productivity.',
  },
]

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Birmingham City University',
    period: '2022 - 2023',
    description:
      'Modules included Software Development, Software Analysis and Design, AI Fundamentals, and Research Methods. Completed an Individual Masters Project applying skills to real-world research.',
  },
  {
    degree: 'British Computer Society Certificate in IT',
    institution: 'Compunet Limited',
    period: '2021',
    description:
      'Studied computer and network technology, data management, requirements analysis, database design, programming fundamentals, algorithm design, and testing principles.',
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'University of Benin',
    period: '2009 - 2015',
    description:
      'Gained expertise in analysing, planning, and designing computer systems encompassing hardware, software, networks, and multimedia. Included practical lab work and SIWES industrial experience.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Software engineer, community organiser, and open source contributor. Learn about my background, experience, and what drives my work."
        url="/about"
      />

      {/* Intro */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="max-w-xl lg:max-w-2xl">
              <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
                About me
              </h1>
              <div className="mt-8 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  I am a software engineer based in the United Kingdom with a background
                  that spans frontend, backend, mobile, and data engineering. I build
                  with TypeScript, Python, Go, Dart, React, Flutter, and Next.js, and I
                  care deeply about writing software that is well-architected, accessible,
                  and maintainable.
                </p>
                <p>
                  Beyond engineering, I organise developer communities. I run Flutter
                  Birmingham and Golang Birmingham, two meetup groups in the West Midlands
                  focused on growing local developer ecosystems. I believe that strong
                  communities make stronger engineers.
                </p>
                <p>
                  I contribute to open source and write publicly about AI ethics,
                  engineering culture, and developer education. I hold a Master of Science
                  in Computer Science from Birmingham City University and a Bachelor of
                  Engineering in Computer Engineering from the University of Benin.
                </p>
              </div>

              <h2 className="mt-12 font-display text-h2 text-foreground dark:text-foreground-dark">
                Values and approach
              </h2>
              <div className="mt-4 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  I think the best software comes from teams that communicate well, ship
                  incrementally, and care about the people using what they build. I value
                  clarity in code and in conversation. I prefer simple solutions to clever
                  ones, and I believe that documentation is a feature.
                </p>
                <p>
                  I approach every project by first understanding the problem before
                  reaching for a solution. I favour composability over complexity, and I
                  think the best engineers are the ones who ask good questions.
                </p>
              </div>

              <h2 className="mt-12 font-display text-h2 text-foreground dark:text-foreground-dark">
                On a personal note
              </h2>
              <div className="mt-4 space-y-5 text-body text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  My interests extend well beyond the screen. I have a deep passion for
                  culinary exploration and I am constantly experimenting with different
                  cuisines. I love reading, particularly social and historical genres,
                  and I have a fascination with numbers that borders on obsession.
                </p>
                <p>
                  As the son of a diplomat, I have lived in two different countries during
                  my formative years, apart from my home country of Nigeria. I currently
                  reside in England, and that international perspective shapes how I
                  think about building software for a global audience.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border dark:border-border-dark lg:h-80 lg:w-80">
                <Image
                  src="/images/profile/ibim_photo.jpg"
                  alt="Ibim Braide"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Experience
          </h2>
          <div className="mt-10 space-y-0">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group relative border-b border-border dark:border-border-dark py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-body-sm">
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-2"
                      >
                        {item.company}
                      </a>
                      <span className="text-muted dark:text-muted-dark"> · {item.location}</span>
                    </p>
                  </div>
                  <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70 max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-16 border-t border-border dark:border-border-dark">
        <Container>
          <h2 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Education
          </h2>
          <div className="mt-10 space-y-0">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="border-b border-border dark:border-border-dark py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-body-sm text-muted dark:text-muted-dark">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-body-sm text-muted dark:text-muted-dark whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-body-sm text-foreground/70 dark:text-foreground-dark/70 max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
