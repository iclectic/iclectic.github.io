import type { StaticImageData } from 'next/image'

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

export interface Project {
  title: string
  description: string
  image: StaticImageData
  tags: string[]
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Data' | 'Machine Learning' | 'Open Source'
  link: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
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
    description: 'Responsive website designed and built with ReactJS.',
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
