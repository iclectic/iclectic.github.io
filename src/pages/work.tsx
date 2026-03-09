import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { motion } from 'framer-motion'

import project1 from '../../public/images/projects/sales_analysis.png'
import project7 from '../../public/images/projects/imdbdashboard.png'
import project8 from '../../public/images/projects/datasciencejobsalaries.png'
import project9 from '../../public/images/projects/salesdashboard.png'
import project10 from '../../public/images/projects/coca_cola_analysis.png'
import project11 from '../../public/images/projects/stroke_prediction.png'
import project2 from '../../public/images/projects/agency-website-cover-image.png'
import project4 from '../../public/images/projects/fashion-studio-website.png'
import project5 from '../../public/images/projects/nft-collection-website-cover-image.png'
import project12 from '../../public/images/projects/vuejsquiz.png'

interface Project {
  title: string
  description: string
  image: StaticImageData
  tags: string[]
  category: string
  link: string
  github?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Retail Sales Data Analysis',
    description:
      'Comprehensive retail sales data analysis with SQL querying exercises. Includes schema creation, data exploration, cleaning, and analysis such as identifying total sales and best-selling months.',
    image: project1,
    tags: ['SQL', 'Data Analysis', 'PostgreSQL'],
    category: 'Data',
    link: 'https://github.com/iclectic/sales-analysis',
    github: 'https://github.com/iclectic/sales-analysis',
    featured: true,
  },
  {
    title: 'Coca-Cola Stock Analysis',
    description:
      'Python-based financial analysis tool applying stock market strategies and machine learning to Coca-Cola stock data. Uses yfinance, pandas, and matplotlib for technical indicators and forecasting.',
    image: project10,
    tags: ['Python', 'Machine Learning', 'pandas', 'matplotlib'],
    category: 'Machine Learning',
    link: 'https://github.com/iclectic/Coca-Cola-Stock-Analysis/blob/main/notebook.ipynb',
    github: 'https://github.com/iclectic/Coca-Cola-Stock-Analysis',
    featured: true,
  },
  {
    title: 'Stroke Prediction using ML',
    description:
      'Uses logistic regression and random forests to predict strokes based on health data. Built with pandas and scikit-learn for data handling and model training.',
    image: project11,
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    category: 'Machine Learning',
    link: 'https://github.com/iclectic/stroke-prediction-using-machine-learning/blob/main/notebooks/strokeprediction.ipynb',
    github: 'https://github.com/iclectic/stroke-prediction-using-machine-learning',
    featured: true,
  },
  {
    title: 'IMDb Film Data Insights Dashboard',
    description:
      'Tableau dashboard providing detailed analysis of IMDb film data including ratings, genres, and trends over time.',
    image: project7,
    tags: ['Tableau', 'Data Visualisation'],
    category: 'Data',
    link: 'https://public.tableau.com/views/IMDbFilmDataInsightsDashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'Data Science Job Salaries Dashboard',
    description:
      'Interactive Tableau dashboard exploring data scientist salaries across countries, industries, and experience levels.',
    image: project8,
    tags: ['Tableau', 'Data Visualisation'],
    category: 'Data',
    link: 'https://public.tableau.com/views/DataScienceJobSalariesDashboard_17258314596900/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'Sales Performance Dashboard',
    description:
      'Interactive Tableau dashboard visualising key sales metrics such as total revenue, sales growth, and product performance across regions.',
    image: project9,
    tags: ['Tableau', 'Data Visualisation'],
    category: 'Data',
    link: 'https://public.tableau.com/views/SalesDashboard_17240788415930/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'VueJS Quiz App',
    description:
      'Interactive quiz application built with Vue 3 and Vite featuring three quizzes with unique question sets across various topics.',
    image: project12,
    tags: ['Vue.js', 'Vite', 'JavaScript'],
    category: 'Frontend',
    link: 'https://queezzz.netlify.app/',
    github: 'https://github.com/iclectic/Vue.js-Quiz-App',
  },
  {
    title: 'Lavish Website',
    description:
      'Responsive website designed and built with ReactJS.',
    image: project2,
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'Frontend',
    link: 'https://howup-transactions.netlify.app/',
    github: 'https://github.com/iclectic/V1.0',
  },
  {
    title: 'Restaurant Website',
    description:
      'Sample HTML and Sass restaurant landing page with a clean, elegant layout including navbar, header, about section, and gallery.',
    image: project4,
    tags: ['HTML', 'Sass', 'CSS'],
    category: 'Frontend',
    link: 'https://github.com/iclectic/Website-for-Restaurant-SASS',
    github: 'https://github.com/iclectic/Website-for-Restaurant-SASS',
  },
  {
    title: 'Automatic Flight Widget',
    description:
      'JavaScript tool displaying a dynamic table of flights with automatic updates every 5 seconds and CSS flip animations.',
    image: project5,
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
    link: 'https://zingy-florentine-2c27b5.netlify.app/',
    github: 'https://github.com/iclectic/flight-widget',
  },
]

const categories = ['All', 'Data', 'Machine Learning', 'Frontend']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Work"
        description="Selected projects across data analysis, machine learning, and frontend development. Each built with care and attention to detail."
        url="/work"
      />

      <section className="pt-20 pb-8 md:pt-28">
        <Container>
          <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
            Work
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted dark:text-muted-dark">
            A selection of projects I have built across data analysis, machine learning,
            and frontend development. Each reflects how I approach problems and the tools
            I reach for.
          </p>
        </Container>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-body-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-foreground text-background dark:bg-foreground-dark dark:text-background-dark'
                    : 'bg-foreground/5 text-muted hover:text-foreground dark:bg-foreground-dark/10 dark:text-muted-dark dark:hover:text-foreground-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured */}
      {activeCategory === 'All' && (
        <section className="pb-16">
          <Container>
            <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
              Featured
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </Container>
        </section>
      )}

      {/* All projects */}
      <section className="pb-20 border-t border-border dark:border-border-dark pt-16">
        <Container>
          <h2 className="mb-8 font-display text-h2 text-foreground dark:text-foreground-dark">
            {activeCategory === 'All' ? 'All Projects' : activeCategory}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted dark:text-muted-dark py-12">
              No projects in this category yet.
            </p>
          )}
        </Container>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-xl border border-border dark:border-border-dark bg-background dark:bg-background-dark hover:border-accent/30 transition-colors"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/10] overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-caption font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover:text-accent transition-colors"
        >
          <h3 className="font-display text-h3 text-foreground dark:text-foreground-dark">
            {project.title}
          </h3>
        </a>
        <p className="mt-2 flex-1 text-body-sm text-muted dark:text-muted-dark line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm font-medium text-accent hover:underline underline-offset-2"
          >
            View project
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
