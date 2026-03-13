const GITHUB_API_BASE = 'https://api.github.com'
const DEFAULT_REVALIDATE_SECONDS = 60 * 60

export interface GitHubContribution {
  type: string
  project: string
  title: string
  summary: string
  date: string
  link: string
  impact?: string
}

export interface GitHubRepository {
  name: string
  description: string
  why: string
  link: string
  tags: string[]
}

interface GitHubEvent {
  type?: string
  repo?: {
    name?: string
  }
  payload?: Record<string, unknown>
  created_at?: string
}

function getAuthHeaders() {
  const token = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'ibimbraide.com',
    'X-GitHub-Api-Version': '2022-11-28',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

function truncate(text: string | null | undefined, maxLength: number) {
  if (!text) {
    return ''
  }

  const cleaned = text.replace(/\s+/g, ' ').trim()
  if (cleaned.length <= maxLength) {
    return cleaned
  }

  return `${cleaned.slice(0, maxLength - 3)}...`
}

function toISODate(dateString: string | undefined) {
  if (!dateString) {
    return ''
  }

  return new Date(dateString).toISOString().slice(0, 10)
}

function actionLabel(action: string | undefined) {
  switch (action) {
    case 'opened':
      return 'Opened'
    case 'closed':
      return 'Closed'
    case 'reopened':
      return 'Reopened'
    case 'edited':
      return 'Edited'
    case 'created':
      return 'Created'
    case 'commented':
      return 'Commented'
    case 'submitted':
      return 'Submitted'
    default:
      return 'Updated'
  }
}

function buildSummary(body: string | null | undefined, fallback: string) {
  const trimmed = truncate(body, 140)
  if (trimmed) {
    return trimmed
  }
  return fallback
}

async function githubFetch<T>(endpoint: string, params?: Record<string, string>) {
  const url = new URL(`${GITHUB_API_BASE}${endpoint}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
  }

  const response = await fetch(url.toString(), {
    headers: getAuthHeaders(),
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
  })

  if (!response.ok) {
    return null
  }

  return response.json() as Promise<T>
}

export function getGitHubUsername(profileUrl: string) {
  try {
    const url = new URL(profileUrl)
    const segments = url.pathname.split('/').filter(Boolean)
    return segments[0] ?? null
  } catch {
    return null
  }
}

function mapPullRequestEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    action?: string
    pull_request?: {
      title?: string
      html_url?: string
      body?: string
    }
  }

  const pullRequest = payload?.pull_request
  if (!pullRequest?.html_url) {
    return null
  }

  const title = pullRequest.title || 'Pull request update'
  const summary = buildSummary(
    pullRequest.body,
    `${actionLabel(payload.action)} pull request in ${repoName}.`
  )

  return {
    type: 'Pull request',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: pullRequest.html_url,
  }
}

function mapIssueEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    action?: string
    issue?: {
      title?: string
      html_url?: string
      body?: string
    }
  }

  const issue = payload?.issue
  if (!issue?.html_url) {
    return null
  }

  const title = issue.title || 'Issue update'
  const summary = buildSummary(
    issue.body,
    `${actionLabel(payload.action)} issue in ${repoName}.`
  )

  return {
    type: 'Issue',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: issue.html_url,
  }
}

function mapIssueCommentEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    issue?: {
      title?: string
      html_url?: string
    }
    comment?: {
      body?: string
      html_url?: string
    }
  }

  const issue = payload?.issue
  const comment = payload?.comment
  if (!issue?.html_url) {
    return null
  }

  const title = issue.title ? `Commented on: ${issue.title}` : 'Issue comment'
  const summary = buildSummary(
    comment?.body,
    `Commented on an issue in ${repoName}.`
  )

  return {
    type: 'Issue comment',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: comment?.html_url || issue.html_url,
  }
}

function mapDiscussionEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    action?: string
    discussion?: {
      title?: string
      html_url?: string
      body?: string
    }
  }

  const discussion = payload?.discussion
  if (!discussion?.html_url) {
    return null
  }

  const title = discussion.title || 'Discussion update'
  const summary = buildSummary(
    discussion.body,
    `${actionLabel(payload.action)} discussion in ${repoName}.`
  )

  return {
    type: 'Discussion',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: discussion.html_url,
  }
}

function mapDiscussionCommentEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    discussion?: {
      title?: string
      html_url?: string
    }
    comment?: {
      body?: string
      html_url?: string
    }
  }

  const discussion = payload?.discussion
  if (!discussion?.html_url) {
    return null
  }

  const title = discussion.title ? `Commented on: ${discussion.title}` : 'Discussion comment'
  const summary = buildSummary(
    payload?.comment?.body,
    `Commented on a discussion in ${repoName}.`
  )

  return {
    type: 'Discussion comment',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: payload?.comment?.html_url || discussion.html_url,
  }
}

function mapPullRequestReviewEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    review?: {
      body?: string
      html_url?: string
    }
    pull_request?: {
      title?: string
      html_url?: string
    }
  }

  const review = payload?.review
  const pullRequest = payload?.pull_request
  if (!pullRequest?.html_url) {
    return null
  }

  const title = pullRequest.title ? `Reviewed: ${pullRequest.title}` : 'Pull request review'
  const summary = buildSummary(
    review?.body,
    `Reviewed a pull request in ${repoName}.`
  )

  return {
    type: 'Pull request review',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: review?.html_url || pullRequest.html_url,
  }
}

function mapPullRequestReviewCommentEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    comment?: {
      body?: string
      html_url?: string
    }
    pull_request?: {
      title?: string
      html_url?: string
    }
  }

  const pullRequest = payload?.pull_request
  if (!pullRequest?.html_url) {
    return null
  }

  const title = pullRequest.title ? `Reviewed: ${pullRequest.title}` : 'Pull request review comment'
  const summary = buildSummary(
    payload?.comment?.body,
    `Reviewed a pull request in ${repoName}.`
  )

  return {
    type: 'Pull request review',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link: payload?.comment?.html_url || pullRequest.html_url,
  }
}

function mapPushEvent(event: GitHubEvent, repoName: string): GitHubContribution | null {
  const payload = event.payload as {
    commits?: Array<{ message?: string; sha?: string }>
  }

  const commits = payload?.commits ?? []
  if (commits.length === 0) {
    return null
  }

  const firstCommit = commits[0]
  const title = truncate(firstCommit.message?.split('\n')[0], 80) || 'Code update'
  const commitCount = commits.length
  const summary = `${commitCount} commit${commitCount > 1 ? 's' : ''} pushed to ${repoName}.`
  const link = firstCommit.sha
    ? `https://github.com/${repoName}/commit/${firstCommit.sha}`
    : `https://github.com/${repoName}`

  return {
    type: 'Code update',
    project: repoName,
    title,
    summary,
    date: toISODate(event.created_at),
    link,
  }
}

function mapEventToContribution(event: GitHubEvent): GitHubContribution | null {
  const repoName = event.repo?.name
  if (!repoName) {
    return null
  }

  switch (event.type) {
    case 'PullRequestEvent':
      return mapPullRequestEvent(event, repoName)
    case 'IssuesEvent':
      return mapIssueEvent(event, repoName)
    case 'IssueCommentEvent':
      return mapIssueCommentEvent(event, repoName)
    case 'DiscussionEvent':
      return mapDiscussionEvent(event, repoName)
    case 'DiscussionCommentEvent':
      return mapDiscussionCommentEvent(event, repoName)
    case 'PullRequestReviewEvent':
      return mapPullRequestReviewEvent(event, repoName)
    case 'PullRequestReviewCommentEvent':
      return mapPullRequestReviewCommentEvent(event, repoName)
    case 'PushEvent':
      return mapPushEvent(event, repoName)
    default:
      return null
  }
}

export async function getGitHubActivity(username: string, limit = 6): Promise<GitHubContribution[]> {
  const events = await githubFetch<GitHubEvent[]>(`/users/${username}/events/public`, {
    per_page: '50',
  })

  if (!events) {
    return []
  }

  const contributions: GitHubContribution[] = []
  const seenLinks = new Set<string>()

  for (const event of events) {
    const mapped = mapEventToContribution(event)
    if (!mapped || !mapped.link || seenLinks.has(mapped.link)) {
      continue
    }

    seenLinks.add(mapped.link)
    contributions.push(mapped)

    if (contributions.length >= limit) {
      break
    }
  }

  return contributions
}

export async function getGitHubRepos(username: string, limit = 6): Promise<GitHubRepository[]> {
  const repos = await githubFetch<Array<{
    name: string
    description: string | null
    html_url: string
    topics?: string[]
    language?: string | null
    fork?: boolean
    archived?: boolean
    disabled?: boolean
    pushed_at?: string
  }>>(`/users/${username}/repos`, {
    per_page: '100',
    sort: 'pushed',
  })

  if (!repos) {
    return []
  }

  const filtered = repos
    .filter((repo) => !repo.archived && !repo.disabled)
    .sort((a, b) => new Date(b.pushed_at || 0).getTime() - new Date(a.pushed_at || 0).getTime())
    .slice(0, limit)

  return filtered.map((repo) => {
    const topicTags = repo.topics?.slice(0, 3) ?? []
    const tags = topicTags.length > 0
      ? topicTags
      : repo.language
        ? [repo.language]
        : ['Open Source']

    const why = repo.fork
      ? 'Fork used to explore changes or support contributions.'
      : 'Repository on my GitHub profile with code and experiments.'

    return {
      name: repo.name,
      description: repo.description || 'No description provided on GitHub yet.',
      why,
      link: repo.html_url,
      tags,
    }
  })
}
