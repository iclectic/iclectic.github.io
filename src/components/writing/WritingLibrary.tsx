'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import ArticleCard from '@/components/ui/ArticleCard'

export interface WritingSummary {
  slug: string
  title: string
  description: string
  date: string
  readingTime?: string
  tags?: string[]
  series?: string
  image?: string
}

interface WritingLibraryProps {
  articles: WritingSummary[]
}

function uniqueValues(values: Array<string | undefined>) {
  const filtered = values.filter((value): value is string => Boolean(value))
  return Array.from(new Set(filtered)).sort((a, b) => a.localeCompare(b))
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-caption font-semibold transition-colors border ${
        active
          ? 'border-accent bg-accent/10 text-accent'
          : 'border-border text-muted hover:text-foreground dark:border-border-dark dark:text-muted-dark dark:hover:text-foreground-dark'
      }`}
    >
      {label}
    </button>
  )
}

export default function WritingLibrary({ articles }: WritingLibraryProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSeries, setActiveSeries] = useState('All')
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const isMac = navigator.platform.toLowerCase().includes('mac')
      const modifier = isMac ? event.metaKey : event.ctrlKey
      const isShortcut = modifier && event.key.toLowerCase() === 'k'

      if (!isShortcut) {
        return
      }

      event.preventDefault()
      searchRef.current?.focus()
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  const categories = useMemo(
    () => uniqueValues(articles.flatMap((article) => article.tags ?? [])),
    [articles]
  )
  const series = useMemo(
    () => uniqueValues(articles.map((article) => article.series)),
    [articles]
  )

  const filtered = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase()
    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === 'All' || article.tags?.includes(activeCategory)
      const seriesMatch = activeSeries === 'All' || article.series === activeSeries
      const queryMatch = normalisedQuery.length === 0
        ? true
        : [
            article.title,
            article.description,
            article.series,
            ...(article.tags ?? []),
          ]
            .filter(Boolean)
            .some((value) => value.toLowerCase().includes(normalisedQuery))
      return categoryMatch && seriesMatch && queryMatch
    })
  }, [articles, activeCategory, activeSeries, query])

  return (
    <div className="space-y-6">
      <div>
        <label className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark" htmlFor="writing-search">
          Search the library
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div className="relative flex-1">
            <input
              id="writing-search"
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by topic, tag, or series"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-body-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none dark:border-border-dark dark:bg-background-dark dark:text-foreground-dark dark:placeholder:text-muted-dark"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md border border-border px-2 py-1 text-caption text-muted dark:border-border-dark dark:text-muted-dark md:inline-flex">
              {typeof navigator !== 'undefined' && navigator.platform.toLowerCase().includes('mac') ? '⌘K' : 'Ctrl+K'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setQuery('')}
            disabled={query.length === 0}
            className="rounded-lg border border-border px-4 py-2 text-caption font-semibold text-muted transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:text-muted/60 dark:border-border-dark dark:text-muted-dark dark:hover:text-foreground-dark"
          >
            Clear search
          </button>
        </div>
      </div>
      <div>
        <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
          Filter by category
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterButton
            label="All"
            active={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          />
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>

      {series.length > 0 ? (
        <div>
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Filter by series
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterButton
              label="All"
              active={activeSeries === 'All'}
              onClick={() => setActiveSeries('All')}
            />
            {series.map((item) => (
              <FilterButton
                key={item}
                label={item}
                active={activeSeries === item}
                onClick={() => setActiveSeries(item)}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              description={article.description}
              href={`/writing/${article.slug}`}
              date={article.date}
              readingTime={article.readingTime}
              tags={article.tags}
              image={article.image}
            />
          ))
        ) : (
          <p className="text-body-sm text-muted dark:text-muted-dark">
            No articles match the selected filters yet.
          </p>
        )}
      </div>
    </div>
  )
}
