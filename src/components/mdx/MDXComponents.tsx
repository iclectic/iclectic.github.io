import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

function Anchor({ href = '', className, ...props }: ComponentPropsWithoutRef<'a'>) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a href={href} className={className} {...props} />
  }

  return (
    <a
      href={href}
      className={className}
      target={props.target ?? '_blank'}
      rel={props.rel ?? 'noopener noreferrer'}
      {...props}
    />
  )
}

function InlineCode(props: ComponentPropsWithoutRef<'code'>) {
  return <code {...props} />
}

function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return <pre {...props} />
}

function Blockquote(props: ComponentPropsWithoutRef<'blockquote'>) {
  return <blockquote {...props} />
}

function UnorderedList(props: ComponentPropsWithoutRef<'ul'>) {
  return <ul {...props} />
}

function OrderedList(props: ComponentPropsWithoutRef<'ol'>) {
  return <ol {...props} />
}

function ListItem(props: ComponentPropsWithoutRef<'li'>) {
  return <li {...props} />
}

function Heading2(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 {...props} />
}

function Heading3(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 {...props} />
}

function Image(props: ComponentPropsWithoutRef<'img'>) {
  return <img loading="lazy" {...props} />
}

export const mdxComponents = {
  a: Anchor,
  h2: Heading2,
  h3: Heading3,
  pre: Pre,
  code: InlineCode,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  img: Image,
}
