import fs from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { getAllCaseStudies, getAllContent, getAllWriting } from '@/lib/mdx'

const appDirectory = path.join(process.cwd(), 'src', 'app')

function getFileLastModified(filePath: string) {
  return fs.statSync(filePath).mtime
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { route: '', file: path.join(appDirectory, 'page.tsx'), priority: 1, changeFrequency: 'weekly' as const },
    { route: '/about', file: path.join(appDirectory, 'about', 'page.tsx'), priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/projects', file: path.join(appDirectory, 'projects', 'page.tsx'), priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/case-studies', file: path.join(appDirectory, 'case-studies', 'page.tsx'), priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/open-source', file: path.join(appDirectory, 'open-source', 'page.tsx'), priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/community', file: path.join(appDirectory, 'community', 'page.tsx'), priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/writing', file: path.join(appDirectory, 'writing', 'page.tsx'), priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/writing/series', file: path.join(appDirectory, 'writing', 'series', 'page.tsx'), priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/speaking', file: path.join(appDirectory, 'speaking', 'page.tsx'), priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', file: path.join(appDirectory, 'contact', 'page.tsx'), priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/cv', file: path.join(appDirectory, 'cv', 'page.tsx'), priority: 0.75, changeFrequency: 'monthly' as const },
    { route: '/now', file: path.join(appDirectory, 'now', 'page.tsx'), priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/impact', file: path.join(appDirectory, 'impact', 'page.tsx'), priority: 0.65, changeFrequency: 'monthly' as const },
    { route: '/media', file: path.join(appDirectory, 'media', 'page.tsx'), priority: 0.55, changeFrequency: 'monthly' as const },
    { route: '/timeline', file: path.join(appDirectory, 'timeline', 'page.tsx'), priority: 0.55, changeFrequency: 'monthly' as const },
    { route: '/uses', file: path.join(appDirectory, 'uses', 'page.tsx'), priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteConfig.url}${page.route}`,
    lastModified: getFileLastModified(page.file),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const writingRoutes: MetadataRoute.Sitemap = getAllWriting().map((article) => ({
    url: `${siteConfig.url}/writing/${article.slug}`,
    lastModified: new Date(article.frontMatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((study) => ({
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    lastModified: new Date(study.frontMatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const projectRoutes: MetadataRoute.Sitemap = getAllContent('projects').map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(project.frontMatter.date),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticRoutes, ...writingRoutes, ...caseStudyRoutes, ...projectRoutes]
}
