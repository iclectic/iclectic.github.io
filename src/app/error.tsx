'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-body text-muted dark:text-muted-dark">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-accent px-5 py-2.5 text-body-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-lg border border-border px-5 py-2.5 text-body-sm font-medium text-foreground transition-colors hover:bg-foreground/5 dark:border-border-dark dark:text-foreground-dark"
        >
          Go home
        </a>
      </div>
    </div>
  )
}
