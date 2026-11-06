export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:outline-none dark:focus:bg-foreground-dark dark:focus:text-background-dark"
    >
      Skip to content
    </a>
  )
}
