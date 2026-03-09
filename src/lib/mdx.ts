import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface FrontMatter {
  title: string
  description: string
  date: string
  tags?: string[]
  featured?: boolean
  image?: string
  published?: boolean
  [key: string]: unknown
}

export interface ContentItem {
  slug: string
  frontMatter: FrontMatter
  content: string
  readingTime: string
}

function getContentFromDirectory(directory: string): ContentItem[] {
  const fullPath = path.join(contentDirectory, directory)

  if (!fs.existsSync(fullPath)) {
    return []
  }

  const files = fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith('.mdx'))
    .filter((file) => !file.startsWith('_'))

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const filePath = path.join(fullPath, file)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        frontMatter: data as FrontMatter,
        content,
        readingTime: readingTime(content).text,
      }
    })
    .filter((item) => item.frontMatter.published !== false)
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
}

export function getAllWork(): ContentItem[] {
  return getContentFromDirectory('case-studies')
}

export function getAllWriting(): ContentItem[] {
  return getContentFromDirectory('writing')
}

export function getAllCaseStudies(): ContentItem[] {
  return getContentFromDirectory('case-studies')
}

export function getAllContent(directory: string): ContentItem[] {
  return getContentFromDirectory(directory)
}

export function getContentBySlug(directory: string, slug: string): ContentItem | null {
  const filePath = path.join(contentDirectory, directory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontMatter: data as FrontMatter,
    content,
    readingTime: readingTime(content).text,
  }
}

export function getAllSlugs(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory)

  if (!fs.existsSync(fullPath)) {
    return []
  }

  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith('.mdx'))
    .filter((file) => !file.startsWith('_'))
    .filter((file) => {
      const filePath = path.join(fullPath, file)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContents)
      return data.published !== false
    })
    .map((file) => file.replace(/\.mdx$/, ''))
}
