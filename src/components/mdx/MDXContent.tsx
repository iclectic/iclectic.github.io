import { MDXRemote } from 'next-mdx-remote/rsc'
import type { ReactElement } from 'react'

import { mdxComponents } from './MDXComponents'

interface MDXContentProps {
  source: string
}

type RemoteMdxComponent = (props: {
  source: string
  components: typeof mdxComponents
}) => ReactElement

const RemoteMdx = MDXRemote as unknown as RemoteMdxComponent

export default function MDXContent({ source }: MDXContentProps) {
  return <RemoteMdx source={source} components={mdxComponents} />
}
