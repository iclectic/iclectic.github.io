import { GetServerSideProps } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { getAllWriting, getAllCaseStudies, getAllContent } from '@/lib/mdx'

function Sitemap() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/case-studies',
    '/writing',
    '/community',
    '/open-source',
    '/speaking',
    '/contact',
    '/cv',
    '/now',
    '/uses',
    '/media',
    '/timeline',
    '/impact',
  ]

  const staticEntries = staticPages.map((page) => ({
    page,
    lastmod: new Date().toISOString(),
    changefreq: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? '1.0' : '0.8',
  }))

  const writingEntries = getAllWriting().map((article) => ({
    page: `/writing/${article.slug}`,
    lastmod: new Date(article.frontMatter.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.7',
  }))

  const caseStudyEntries = getAllCaseStudies().map((study) => ({
    page: `/case-studies/${study.slug}`,
    lastmod: new Date(study.frontMatter.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.7',
  }))

  const projectEntries = getAllContent('projects').map((project) => ({
    page: `/projects/${project.slug}`,
    lastmod: new Date(project.frontMatter.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.7',
  }))

  const entries = [
    ...staticEntries,
    ...writingEntries,
    ...projectEntries,
    ...caseStudyEntries,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${siteConfig.url}${entry.page}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default Sitemap
