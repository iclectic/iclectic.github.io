import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs } from '@/lib/mdx'

export default function WorkCaseStudyRedirect() {
  return null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs('case-studies')
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  return {
    redirect: {
      destination: `/case-studies/${slug}`,
      permanent: true,
    },
  }
}
