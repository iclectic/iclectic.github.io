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

  const files = fs.readdirSync(fullPath).filter((file) => file.endsWith('.mdx'))

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
  return getContentFromDirectory('work')
}

export function getAllWriting(): ContentItem[] {
  return getContentFromDirectory('writing')
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
    .map((file) => file.replace(/\.mdx$/, ''))
}
