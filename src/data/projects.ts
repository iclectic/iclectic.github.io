import type { StaticImageData } from 'next/image'

import project1 from '../../public/images/projects/sales_analysis.png'
import project7 from '../../public/images/projects/imdbdashboard.png'
import project8 from '../../public/images/projects/datasciencejobsalaries.png'
import project9 from '../../public/images/projects/salesdashboard.png'
import project10 from '../../public/images/projects/coca_cola_analysis.png'
import project11 from '../../public/images/projects/stroke_prediction.png'
import project2 from '../../public/images/projects/agency-website-cover-image.jpg'
import project4 from '../../public/images/projects/fashion-studio-website.jpg'
import project5 from '../../public/images/projects/nft-collection-website-cover-image.png'
import project12 from '../../public/images/projects/vuejsquiz.png'

export interface Project {
  title: string
  description: string
  outcome: string
  projectType: 'Client delivery' | 'Product build' | 'Concept' | 'Data project' | 'Learning build'
  role: string
  scope: string
  image: StaticImageData | string
  tags: string[]
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Data' | 'Machine Learning' | 'Open Source' | 'Full Stack'
  link: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Flutter Meetup Check In System',
    description:
      'Lightweight Flutter app that streamlines attendee check ins for community events such as Flutter Birmingham.',
    outcome:
      'Turned meetup attendance into a faster, more repeatable workflow for organisers.',
    projectType: 'Product build',
    role: 'Concept, product design, and Flutter implementation',
    scope: 'Offline friendly mobile tool for meetup check ins and attendance capture',
    image: '/images/projects/placeholder-1.svg',
    tags: ['Flutter', 'Dart', 'Mobile', 'Community Tools'],
    category: 'Mobile',
    link: '/projects/flutter-meetup-checkin-system',
    featured: true,
  },
  {
    title: 'Cumulative Expense Tracker',
    description:
      'Flutter based expense tracker that visualises cumulative spending through simple input flows and charts.',
    outcome:
      'Turned cumulative spend into an easier visual signal for day to day budgeting.',
    projectType: 'Product build',
    role: 'Design and Flutter development',
    scope: 'Mobile expense tracking, charting, and cumulative visualisation',
    image: '/images/projects/placeholder-3.svg',
    tags: ['Flutter', 'Dart', 'Data Visualisation'],
    category: 'Mobile',
    link: '/projects/expense-tracking-application',
    featured: true,
  },
  {
    title: 'School Portal System Concept',
    description:
      'Full stack concept for a school portal that connects students, teachers, and parents through one system.',
    outcome:
      'Defined a single portal model for communication, assignments, and academic records.',
    projectType: 'Concept',
    role: 'Product concept and system design',
    scope: 'Portal model covering dashboards, communication, assignments, and result workflows',
    image: '/images/projects/placeholder-4.svg',
    tags: ['Education', 'Full Stack', 'Product Concept'],
    category: 'Full Stack',
    link: '/projects/school-portal-system-concept',
  },
  {
    title: 'Retail Sales Data Analysis',
    description:
      'Comprehensive retail sales data analysis with SQL querying exercises. Includes schema creation, data exploration, cleaning, and analysis such as identifying total sales and best-selling months.',
    outcome:
      'Produced reusable SQL analysis patterns for identifying revenue trends and best performing periods.',
    projectType: 'Data project',
    role: 'Analysis design and SQL implementation',
    scope: 'Schema design, data cleaning, exploratory queries, and sales trend analysis',
    image: project1,
    tags: ['SQL', 'Data Analysis', 'PostgreSQL'],
    category: 'Data',
    link: 'https://github.com/iclectic/sales-analysis',
    github: 'https://github.com/iclectic/sales-analysis',
  },
  {
    title: 'Coca-Cola Stock Analysis',
    description:
      'Python-based financial analysis tool applying stock market strategies and machine learning to Coca-Cola stock data. Uses yfinance, pandas, and matplotlib for technical indicators and forecasting.',
    outcome:
      'Compared market indicators and forecasting techniques in a single exploratory notebook.',
    projectType: 'Data project',
    role: 'Exploratory analysis and notebook implementation',
    scope: 'Financial data analysis, indicators, visualisation, and forecasting experiments',
    image: project10,
    tags: ['Python', 'Machine Learning', 'pandas', 'matplotlib'],
    category: 'Machine Learning',
    link: 'https://github.com/iclectic/Coca-Cola-Stock-Analysis/blob/main/notebook.ipynb',
    github: 'https://github.com/iclectic/Coca-Cola-Stock-Analysis',
  },
  {
    title: 'Stroke Prediction using ML',
    description:
      'Uses logistic regression and random forests to predict strokes based on health data. Built with pandas and scikit-learn for data handling and model training.',
    outcome:
      'Tested baseline classification approaches on health data and surfaced trade offs in model interpretation.',
    projectType: 'Learning build',
    role: 'Data preparation, modelling, and evaluation',
    scope: 'Health dataset analysis with baseline classification models',
    image: project11,
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    category: 'Machine Learning',
    link: 'https://github.com/iclectic/stroke-prediction-using-machine-learning/blob/main/notebooks/strokeprediction.ipynb',
    github: 'https://github.com/iclectic/stroke-prediction-using-machine-learning',
  },
  {
    title: 'IMDb Film Data Insights Dashboard',
    description:
      'Tableau dashboard providing detailed analysis of IMDb film data including ratings, genres, and trends over time.',
    outcome:
      'Made film trends easier to scan through a single interactive Tableau view.',
    projectType: 'Data project',
    role: 'Dashboard design and visual analysis',
    scope: 'Interactive Tableau dashboard for ratings, genres, and trend exploration',
    image: project7,
    tags: ['Tableau', 'Data Visualisation'],
    category: 'Data',
    link: 'https://public.tableau.com/views/IMDbFilmDataInsightsDashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'Data Science Job Salaries Dashboard',
    description:
      'Interactive Tableau dashboard exploring data scientist salaries across countries, industries, and experience levels.',
    outcome:
      'Turned salary data into a comparative view across geography, experience, and role.',
    projectType: 'Data project',
    role: 'Dashboard design and data storytelling',
    scope: 'Salary comparison dashboard across geography, sector, and experience',
    image: project8,
    tags: ['Tableau', 'Data Visualisation'],
    category: 'Data',
    link: 'https://public.tableau.com/views/DataScienceJobSalariesDashboard_17258314596900/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'Sales Performance Dashboard',
    description:
      'Interactive Tableau dashboard visualising key sales metrics such as total revenue, sales growth, and product performance across regions.',
    outcome:
      'Provided a quick visual read of revenue, growth, and regional performance.',
    projectType: 'Data project',
    role: 'Dashboard design and metric selection',
    scope: 'Interactive sales dashboard for revenue, growth, and product performance',
    image: project9,
    tags: ['Tableau', 'Data Visualisation'],
    category: 'Data',
    link: 'https://public.tableau.com/views/SalesDashboard_17240788415930/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'VueJS Quiz App',
    description:
      'Interactive quiz application built with Vue 3 and Vite featuring three quizzes with unique question sets across various topics.',
    outcome:
      'Built a lightweight multi quiz experience with reusable question flows and clean front end structure.',
    projectType: 'Learning build',
    role: 'Frontend design and implementation',
    scope: 'Vue-based quiz flows, reusable question sets, and lightweight UI logic',
    image: project12,
    tags: ['Vue.js', 'Vite', 'JavaScript'],
    category: 'Frontend',
    link: 'https://queezzz.netlify.app/',
    github: 'https://github.com/iclectic/Vue.js-Quiz-App',
  },
  {
    title: 'Lavish Website',
    description: 'Responsive website designed and built with ReactJS.',
    outcome:
      'Delivered a responsive marketing site with clear visual hierarchy and front end polish.',
    projectType: 'Client delivery',
    role: 'Frontend implementation',
    scope: 'Responsive marketing website built with React',
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
    outcome:
      'Translated a static concept into a clean landing page built with Sass.',
    projectType: 'Learning build',
    role: 'Frontend implementation',
    scope: 'Static landing page with Sass-based component styling',
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
    outcome:
      'Automated flight table updates and reduced manual refresh friction in the interface.',
    projectType: 'Learning build',
    role: 'Frontend implementation',
    scope: 'Real time style widget updates and animated UI states',
    image: project5,
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
    link: 'https://zingy-florentine-2c27b5.netlify.app/',
    github: 'https://github.com/iclectic/flight-widget',
  },
]
