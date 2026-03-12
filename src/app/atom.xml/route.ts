import { siteConfig } from '@/lib/siteConfig'
import { getAllWriting } from '@/lib/mdx'

export const revalidate = 3600

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const articles = getAllWriting()
  const updated = articles[0]?.frontMatter.date ?? new Date().toISOString()

  const entries = articles
    .map((article) => {
      const url = `${siteConfig.url}/writing/${article.slug}`
      return `  <entry>
    <title>${escapeXml(article.frontMatter.title)}</title>
    <link href="${url}" />
    <id>${url}</id>
    <updated>${new Date(article.frontMatter.date).toISOString()}</updated>
    <summary>${escapeXml(article.frontMatter.description)}</summary>
  </entry>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(siteConfig.name)}</title>
  <subtitle>${escapeXml(siteConfig.description)}</subtitle>
  <link href="${siteConfig.url}" />
  <link href="${siteConfig.url}/atom.xml" rel="self" />
  <updated>${new Date(updated).toISOString()}</updated>
  <id>${siteConfig.url}</id>
${entries}
</feed>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
