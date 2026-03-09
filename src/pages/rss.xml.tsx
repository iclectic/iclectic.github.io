import { GetServerSideProps } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { getAllWriting } from '@/lib/mdx'

function RSS() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const articles = getAllWriting()

  const items = articles
    .map(
      (article) => `    <item>
      <title><![CDATA[${article.frontMatter.title}]]></title>
      <description><![CDATA[${article.frontMatter.description}]]></description>
      <link>${siteConfig.url}/writing/${article.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/writing/${article.slug}</guid>
      <pubDate>${new Date(article.frontMatter.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.url}</link>
    <language>${siteConfig.locale}</language>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  res.write(feed)
  res.end()

  return { props: {} }
}

export default RSS
