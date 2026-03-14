# Performance, Accessibility, and Deployment Strategy

## Ibim Braide Portfolio — ibimbraide.com

**Audience**: This document defines engineering-grade quality targets for the portfolio website and audits the current architecture against them. It is written for a senior engineer building a site that must itself demonstrate technical credibility.

**Current stack**: Next.js 13.5.7 (App Router), TypeScript, Tailwind CSS 3.3, MDX via next-mdx-remote/rsc, Shiki for syntax highlighting, IBM Plex Sans + Fraunces + IBM Plex Mono via next/font/google.

---

## 1. Performance Goals

| Metric | Target | Rationale |
|--------|--------|-----------|
| Time to First Byte (TTFB) | < 200ms | Static/ISR pages served from edge CDN |
| First Contentful Paint (FCP) | < 1.0s | Text-heavy site with no heavy client JS |
| Largest Contentful Paint (LCP) | < 1.5s | Hero text or profile image must paint fast |
| Time to Interactive (TTI) | < 1.5s | Minimal client-side JS required |
| Total Blocking Time (TBT) | < 50ms | No heavy hydration or client computation |
| Cumulative Layout Shift (CLS) | < 0.05 | Font swap strategy + sized images prevent shifts |
| Speed Index | < 1.5s | Above-the-fold content is all text and one image |
| Total page weight (homepage) | < 300 KB transferred | Target for gzipped HTML + CSS + JS + critical images |
| JavaScript budget (per route) | < 80 KB gzipped | Enforced by keeping client components minimal |

### Why these numbers matter
A portfolio site for a senior engineer must load faster than most commercial sites. Visitors (recruiters, engineering managers, conference organisers) form judgements within seconds. A slow site contradicts the credibility the content is trying to establish.

---

## 2. Lighthouse Goals

| Category | Target Score |
|----------|-------------|
| Performance | 98-100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Non-negotiable audit items
- Zero console errors or warnings
- All images have explicit width/height or aspect-ratio
- All interactive elements have accessible names
- Document has a valid `<html lang>` attribute (currently `en-GB`, correct)
- No render-blocking resources
- Proper heading hierarchy (h1 > h2 > h3, no skipped levels)
- Meta description present on every page
- Canonical URL present on every page
- robots.txt and sitemap.xml valid and reachable

---

## 3. Accessibility Goals

### Standard
WCAG 2.2 Level AA compliance across all pages.

### Specific targets

| Requirement | Status | Notes |
|-------------|--------|-------|
| Skip-to-content link | Done | `SkipToContent.tsx` exists |
| Keyboard navigation | Partial | Mobile menu needs focus trap |
| Focus indicators | Done | `:focus-visible` styled globally |
| Colour contrast (AA) | Needs audit | Muted text on light bg must be verified |
| ARIA landmarks | Done | `<header>`, `<main>`, `<nav>`, `<footer>` present |
| `aria-current="page"` on nav | Done | Header implements this |
| Reduced motion respect | Missing | No `prefers-reduced-motion` media query |
| Screen reader testing | Not done | Manual test with VoiceOver required |
| Alt text on all images | Partial | Profile image has alt, project images need review |
| Form labels and errors | Needs audit | Contact form accessibility not verified |

### Key refinements needed
1. **Focus trap on mobile menu**: When the mobile drawer opens, focus should be trapped inside it. Tab should not escape to content behind the overlay.
2. **`prefers-reduced-motion`**: Add a global CSS rule to disable `transition` and `animation` when the user has requested reduced motion.
3. **Colour contrast audit**: Run every text/background combination through a contrast checker. The `muted` colour (`#516070`) on `background` (`#F7F7FB`) must meet 4.5:1 for body text.
4. **Announce route changes**: In App Router, route changes are not announced to screen readers by default. Consider a live region or a focus-management strategy on navigation.

---

## 4. Core Web Vitals Goals

| Vital | Target | Current risk |
|-------|--------|-------------|
| LCP | < 1.5s | **Medium**: Homepage hero image (profile photo) is the LCP element. It has `priority` set, which is correct. But the GitHub API fetch on the homepage server component could delay the entire response. |
| INP (Interaction to Next Paint) | < 100ms | **Low**: Almost no client interactivity. Theme toggle and mobile menu are the only interactive elements. |
| CLS | < 0.05 | **Medium**: Three Google Fonts with `display: 'swap'` will cause a text reflow when fonts load. Font file sizes and swap timing need monitoring. |

### LCP strategy
- Hero section is text + one image. Text paints immediately from server HTML. Image uses `priority` and explicit `sizes`.
- **Risk**: The `await getGitHubActivity()` call in `page.tsx` (homepage) is an async server component that fetches from the GitHub API at request time. If the API is slow (or rate-limited), the entire page response is delayed, pushing LCP out.
- **Fix**: Move GitHub data to ISR with a long revalidation period, or fetch it client-side after initial paint, or cache it at build time.

### CLS strategy
- All images use `fill` with explicit `sizes` or explicit `width`/`height`. Good.
- Font swap: `display: 'swap'` causes a flash of unstyled text (FOUT). The fallback system font has different metrics than IBM Plex Sans and Fraunces.
- **Fix**: Use `next/font`'s `adjustFontFallback` option (enabled by default for Google Fonts) to generate size-adjusted fallback fonts. Verify this is working by checking for `size-adjust` in the generated CSS.

### INP strategy
- No heavy client-side logic. Theme toggle and mobile menu are lightweight.
- Ensure no layout thrashing on theme toggle (class toggle on `<html>` is fine).

---

## 5. Image Optimisation Strategy

### Current state — critical finding

| Issue | Severity |
|-------|----------|
| **53 MB total** in `/public/images` | Critical |
| `fashion-studio-website.png` is **17 MB** | Critical |
| `golang-birmingham-session.png` is **17 MB** | Critical |
| `devdreaming.png` is **5.7 MB** | High |
| Multiple images over 1 MB | High |
| Several images are unused (old articles, old profile pics) | Medium |
| `MDXImage` component has `unoptimized` prop | High |
| SVG placeholders for featured projects (no real images yet) | Low |

### Targets

| Metric | Target |
|--------|--------|
| Maximum source image file size | 500 KB |
| Preferred format served | AVIF > WebP > PNG (already configured in `next.config.js`) |
| Hero/profile image transferred size | < 30 KB |
| Project card image transferred size | < 50 KB each |
| Total images transferred per page | < 200 KB |

### Action plan

1. **Compress all images immediately**: Run every PNG and JPG through a tool like `sharp`, `squoosh`, or `imageoptim`. Target:
   - Profile photo: 400x400px, WebP, < 30 KB
   - Project screenshots: 800x500px, WebP, < 80 KB each
   - Community photos: 800x450px, WebP, < 80 KB each
   - Article featured images: 1200x630px (OG size), WebP, < 100 KB each

2. **Delete unused images**: Remove `developer-pic-1.png`, `developer-pic-2.jpg`, `epiphany.png`, `photo-moi.png`, `devdreaming.png`, `crypto-screener-cover-image.png`, `portfolio-cover-image.png`, and all old article images that are no longer referenced.

3. **Remove `unoptimized` from MDXImage**: The `unoptimized` prop in `MDXComponents.tsx` bypasses Next.js image optimisation entirely. Remove it so that Next.js can serve AVIF/WebP at the correct dimensions.

4. **Add blur placeholders for remote/public images**: For images referenced by path string (not static imports), generate blur data URLs at build time or use `placeholder="empty"` with explicit dimensions to prevent CLS.

5. **Consider a script**: Add an `optimise-images` npm script that runs sharp over `/public/images` to enforce size limits as a pre-commit or CI step.

6. **Lazy load below-fold images**: Only the hero profile image should have `priority`. All project cards, article images, and community photos should lazy load (default behaviour with `next/image`).

---

## 6. Font Loading Strategy

### Current setup
Three Google Fonts loaded via `next/font/google` in `layout.tsx`:
- **IBM Plex Sans** (400, 500, 600) — body text
- **Fraunces** (500, 600, 700) — display/headings
- **IBM Plex Mono** (400, 500) — code blocks

All use `display: 'swap'` and CSS variables.

### Assessment
This is a solid foundation. `next/font/google` self-hosts the fonts (no external requests to Google), subsets to Latin, and generates optimised `@font-face` declarations with `font-display: swap`.

### Refinements

1. **Audit weight usage**: Do you actually use Fraunces 500? If only 600 and 700 are used, remove 500 to save one font file download. Same for IBM Plex Sans: if 400 and 600 cover all uses, remove 500. Each unused weight is an extra font file (~15-30 KB woff2).

2. **Verify `adjustFontFallback`**: `next/font/google` generates size-adjusted fallback metrics by default. Confirm by inspecting the generated CSS for `size-adjust`, `ascent-override`, `descent-override`. This minimises CLS during font swap.

3. **Preload critical fonts only**: `next/font` handles preloading automatically for the first font. Verify that only the body font (IBM Plex Sans Regular 400) is preloaded, not all weights.

4. **Consider reducing to two fonts**: IBM Plex Mono is only used in code blocks within MDX articles. If code blocks are rare or below the fold, consider loading Plex Mono only on pages that need it (writing/[slug] and case-studies/[slug]), not globally. This saves ~30 KB on non-article pages.

5. **Font file size budget**: Total font files transferred on first visit should be < 120 KB. Measure with DevTools Network tab filtered to `font`.

---

## 7. Animation Performance Strategy

### Current state
- **No Framer Motion** in dependencies — excellent. Removed during the revamp.
- CSS transitions for hover states (`transition-colors`, `transition-transform duration-300`).
- CSS keyframe animations defined in Tailwind config (`fadeIn`, `slideUp`).
- `scroll-behavior: smooth` in globals.css.
- No JavaScript-driven animations.

### Assessment
This is nearly ideal for a content-focused portfolio. CSS-only animations are GPU-accelerated and do not block the main thread.

### Refinements

1. **Respect `prefers-reduced-motion`**: Add to `globals.css`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

2. **Avoid animating layout properties**: Current animations only use `opacity` and `transform` — correct. These are compositor-only properties and do not trigger layout or paint.

3. **Image hover scale**: The `group-hover:scale-[1.03]` on project card images triggers a composite layer. This is fine, but ensure the parent has `overflow-hidden` (it does) to prevent paint overflow.

4. **Backdrop blur on header**: `backdrop-blur-md` on the sticky header triggers a compositor layer on every scroll frame. This is acceptable on modern hardware but can cause jank on low-end devices. Monitor with DevTools Performance panel. If problematic, consider a solid background with opacity instead.

5. **No intersection observer animations needed**: For a portfolio of this size, CSS-only entrance animations (via Tailwind's `animate-fade-in` or `animate-slide-up`) are sufficient. Do not add a JavaScript animation library.

---

## 8. Bundle Size Considerations

### Current dependency audit

| Package | Purpose | Size concern |
|---------|---------|-------------|
| `next` (13.5.7) | Framework | Fixed cost, well-optimised |
| `react` + `react-dom` (18.2.0) | UI library | ~42 KB gzipped (shared chunk) |
| `next-mdx-remote` (6.0.0) | MDX rendering | Server-only, does not ship to client |
| `gray-matter` (4.0.3) | Frontmatter parsing | Server-only |
| `reading-time` (1.5.0) | Read time calc | Server-only, tiny |
| `rehype-pretty-code` (0.14.3) | Syntax highlighting | Server-only |
| `shiki` (4.0.2) | Syntax highlighter engine | **Large** (~2-5 MB on disk). Server-only but increases build time and serverless function size. |
| `tailwindcss` (3.3.1) | Styling | Dev-only, CSS purged at build |

### Client bundle analysis

The site has very few client components:
- `Header.tsx` (`'use client'`) — theme toggle, mobile menu, `usePathname`, `useState`, `useEffect`
- `ContactForm.tsx` (likely `'use client'`) — form state
- `WritingLibrary.tsx` (likely `'use client'`) — filtering/search

Everything else is server components — excellent.

### Targets

| Metric | Target |
|--------|--------|
| First Load JS (shared) | < 90 KB gzipped |
| Per-route JS | < 15 KB gzipped |
| Total CSS | < 10 KB gzipped |
| No client component on pages without interactivity | Enforced |

### Refinements

1. **Audit Shiki bundle**: Shiki 4.x ships all language grammars by default. Configure it to load only the languages you actually use in your MDX content (likely: `typescript`, `javascript`, `python`, `sql`, `go`, `dart`, `bash`, `css`, `html`, `json`, `yaml`, `markdown`). This dramatically reduces the serverless function size.

2. **Verify no accidental client bundling**: Run `npx next build` and check the route sizes in the output. Any route over 20 KB of JS (excluding shared chunks) needs investigation.

3. **Tree-shake siteConfig**: The `siteConfig` object is imported in both server and client components. Ensure the client-side import only pulls what the Header needs (nav items), not the full config.

4. **Move `@types/*` to devDependencies**: Currently `@types/node`, `@types/react`, `@types/react-dom` are in `dependencies`. They should be in `devDependencies` since they are not needed at runtime. Same for `eslint` and `eslint-config-next`.

5. **Consider `next/dynamic` for heavy client components**: If `WritingLibrary.tsx` includes search/filter logic with a library, lazy-load it.

6. **Add `@next/bundle-analyzer`**: Install and configure the bundle analyser as a dev dependency. Run it periodically to catch size regressions.

---

## 9. Caching Strategy

### Static assets (fonts, images, JS, CSS)

Next.js automatically sets immutable cache headers on hashed static assets in `/_next/static/`:
```
Cache-Control: public, max-age=31536000, immutable
```
This is correct and requires no changes.

### HTML pages

| Page type | Caching approach | `Cache-Control` |
|-----------|-----------------|-----------------|
| Static pages (about, community, speaking, etc.) | Build-time generation | `s-maxage=86400, stale-while-revalidate=3600` |
| Homepage | ISR with revalidation | `s-maxage=3600, stale-while-revalidate=600` |
| MDX article/case study pages | Build-time generation | `s-maxage=86400, stale-while-revalidate=3600` |
| Sitemap, RSS, Atom | Server-rendered | `s-maxage=3600, stale-while-revalidate=600` |
| Contact page | Static | `s-maxage=86400` |

### Refinements

1. **Homepage GitHub API call**: The `getGitHubActivity()` call currently runs on every request (no explicit caching beyond `next: { revalidate: 3600 }` on the fetch). This is reasonable but means the homepage is not fully static. Consider:
   - Option A: Set `export const revalidate = 3600` on the homepage to enable ISR at the page level.
   - Option B: Move GitHub data fetching to a separate API route and fetch client-side after paint.
   - Option C: Cache the GitHub response to a JSON file at build time and read it statically.

2. **Add `Cache-Control` headers in `next.config.js`**:
   ```js
   async headers() {
     return [
       {
         source: '/images/:path*',
         headers: [
           { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
         ],
       },
       {
         source: '/fonts/:path*',
         headers: [
           { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
         ],
       },
     ]
   }
   ```

3. **CDN considerations**: If deploying to Vercel, the Edge Network handles caching automatically. If deploying to GitHub Pages with static export, all pages are static and cached at the CDN level.

4. **Service worker**: Not recommended for a portfolio site of this size. The complexity outweighs the benefit. Rely on HTTP caching and CDN.

---

## 10. Deployment Optimisation Strategy

### Recommended platform: Vercel

| Feature | Benefit |
|---------|---------|
| Edge Network | Global CDN with automatic cache invalidation |
| ISR support | Incremental static regeneration for the homepage GitHub data |
| Image Optimisation | Automatic AVIF/WebP conversion at the edge |
| Analytics | Core Web Vitals monitoring built in |
| Preview deployments | PR previews for content changes |
| Serverless functions | Handles RSS, sitemap, and GitHub API routes |

### If deploying to GitHub Pages (static export)

You would need `output: 'export'` in `next.config.js`. This means:
- No ISR, no server-side routes (RSS, sitemap become static files)
- No `next/image` optimisation at runtime (must use `unoptimized: true` or pre-optimise)
- No GitHub API fetching at request time (must be build-time only)
- All pages become static HTML
- Caching is handled by GitHub's CDN (limited control)

### Build optimisation

1. **Enable static generation where possible**: Most pages are already static. Verify with `next build` output — look for `○` (static) vs `λ` (server) markers.

2. **Minimise serverless function cold starts**: Keep the function bundle small. The Shiki grammar trimming mentioned in Section 8 directly impacts cold start time.

3. **Environment variables**: Ensure `GITHUB_TOKEN` is set in the deployment environment for the GitHub API calls. Without it, you hit rate limits (60 requests/hour unauthenticated vs 5000 authenticated).

4. **Build cache**: Vercel caches `node_modules` and `.next/cache` between builds. No action needed.

5. **Output file tracing**: Next.js 13+ automatically traces dependencies for serverless functions. Verify the homepage function size is under 50 MB (the Vercel limit). Shiki grammars are the main risk.

### Pre-deploy checklist

- [ ] Run `next build` and verify all routes
- [ ] Run Lighthouse CI on the build output
- [ ] Verify no console errors in production mode
- [ ] Check all OG images resolve correctly
- [ ] Verify sitemap.xml and robots.txt are valid
- [ ] Test dark mode flash (should be none)
- [ ] Test on a throttled 3G connection
- [ ] Test with a screen reader (VoiceOver on macOS)
- [ ] Verify `GITHUB_TOKEN` environment variable is set

---

## Architecture Audit — Findings and Refinements

### Critical issues (fix before launch)

#### C1: Homepage blocks on GitHub API

**File**: `src/app/page.tsx:45`
```typescript
const githubActivity = githubUsername ? await getGitHubActivity(githubUsername, 3) : []
```

The homepage is an `async` server component that awaits a GitHub API call. If the API is slow, rate-limited, or down, the entire homepage response is delayed or fails.

**Fix**: Add `export const revalidate = 3600` to the homepage to enable ISR. This means the page is statically generated and revalidated every hour. The GitHub API call only runs during revalidation, not on every request.

Alternatively, extract the GitHub section into a separate client component that fetches after paint, showing a skeleton state while loading.

#### C2: 53 MB of images in the repository

Two images alone (fashion-studio-website.png, golang-birmingham-session.png) account for 34 MB. This inflates the repository size, slows CI, and slows any static export.

**Fix**: Compress all images to under 500 KB each. Delete unused images. Total /public/images should be under 5 MB.

#### C3: MDXImage bypasses optimisation

**File**: `src/components/mdx/MDXComponents.tsx:85`
```typescript
unoptimized
```

The `unoptimized` prop on the `MDXImage` component means images inside MDX articles are served at their original size and format with no AVIF/WebP conversion.

**Fix**: Remove `unoptimized`. If images are in `/public`, Next.js can optimise them. If they are external URLs, add the domains to `images.remotePatterns` in `next.config.js`.

#### C4: No dark mode flash prevention

The old `_document.tsx` had an inline script to set the dark class before first paint. The current App Router layout (`layout.tsx`) has no equivalent. The `ThemeToggle` component reads from `localStorage` in a `useEffect`, which runs after hydration — causing a flash of light mode on dark-mode users' first visit.

**Fix**: Add an inline `<script>` in the `<head>` section of `layout.tsx` (before `<body>`) that reads `localStorage` and sets the `dark` class on `<html>` synchronously:
```tsx
<head>
  <script dangerouslySetInnerHTML={{ __html: `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (theme === 'dark' || (!theme && prefersDark)) {
          document.documentElement.classList.add('dark');
        }
      } catch(e) {}
    })();
  `}} />
</head>
```

### High priority issues

#### H1: No `prefers-reduced-motion` support

Users who have requested reduced motion in their OS settings still see all CSS transitions and animations.

**Fix**: Add the media query from Section 7 to `globals.css`.

#### H2: Mobile menu lacks focus trap

When the mobile navigation drawer opens, keyboard focus can escape behind the overlay to the main content.

**Fix**: Implement a focus trap using a lightweight approach (trap focus between first and last focusable elements in the drawer, return focus to the hamburger button on close).

#### H3: Shiki loads all language grammars

Shiki 4.x includes grammars for 200+ languages by default. For a portfolio blog, you need maybe 12.

**Fix**: Configure `rehype-pretty-code` to use a custom Shiki instance with only the required languages:
```typescript
import { createHighlighter } from 'shiki'

const highlighter = await createHighlighter({
  themes: ['github-dark', 'github-light'],
  langs: ['typescript', 'javascript', 'python', 'go', 'dart', 'sql', 'bash', 'css', 'html', 'json', 'yaml', 'markdown'],
})
```

#### H4: `@types/*` and `eslint` in production dependencies

**File**: `package.json`

`@types/node`, `@types/react`, `@types/react-dom`, `eslint`, and `eslint-config-next` are listed in `dependencies` instead of `devDependencies`. This does not affect the client bundle but inflates `node_modules` in production and misrepresents the dependency graph.

**Fix**: Move them to `devDependencies`.

### Medium priority issues

#### M1: Colour contrast needs verification

The `muted` text colour (`#516070`) on `background` (`#F7F7FB`) has a contrast ratio of approximately 5.2:1, which passes AA for normal text (4.5:1 minimum). However, this should be verified across all combinations, particularly:
- `muted` on `background` (light mode)
- `muted-dark` (`#8A9AB1`) on `background-dark` (`#0A0D12`) — this is approximately 7.2:1, passes
- `caption` text (0.75rem) needs 4.5:1 because it is under 14pt bold / 18pt regular

#### M2: Font weight audit

Three weights of IBM Plex Sans (400, 500, 600) and three weights of Fraunces (500, 600, 700) are loaded. Audit whether all six weights are actually used. Each unused weight costs ~15-25 KB of font file.

Grep the codebase for:
- `font-medium` (Tailwind 500 weight)
- `font-semibold` (Tailwind 600 weight)
- `font-bold` (Tailwind 700 weight)

If Fraunces 500 is never used, remove it. If IBM Plex Sans 500 is rarely used, consider removing it and using 400 + 600 only.

#### M3: Unused images cleanup

Images from the old site that are no longer referenced:
- `developer-pic-1.png`
- `developer-pic-2.jpg`
- `epiphany.png`
- `photo-moi.png`
- `devdreaming.png`
- `crypto-screener-cover-image.png`
- `portfolio-cover-image.png`
- Old article images (Redux, Higher Order Components, Loading Screen, Modal Component, Pagination, Smooth Scrolling, Todo List App, Form Validation)

Run a grep to confirm these are unreferenced, then delete them.

#### M4: Add page-level `revalidate` exports

For pages that fetch data at request time (homepage with GitHub data), explicitly set the revalidation period:
```typescript
export const revalidate = 3600 // revalidate every hour
```

For purely static pages, Next.js App Router makes them static by default, which is correct.

#### M5: Consider adding `next/font` to MDX code blocks only

IBM Plex Mono is loaded globally but only used in `<code>` and `<pre>` elements within MDX articles. For non-article pages (about, community, speaking, contact, CV), the mono font files are downloaded but never rendered.

**Options**:
- Accept the cost (~30 KB) as a reasonable trade-off for simplicity
- Split the mono font into a separate variable and only include it in the MDX layout — more complex, marginal benefit

### Low priority (future improvements)

#### L1: Open Graph images

Generate per-page OG images using `@vercel/og` or static images. This significantly improves social sharing appearance. Priority pages:
- Homepage
- Each article (dynamic OG with title and date)
- Each case study

#### L2: Analytics

Add a privacy-respecting analytics tool:
- **Vercel Analytics**: Zero-config if deploying to Vercel, includes Core Web Vitals
- **Plausible**: Lightweight (~1 KB), privacy-focused, self-hostable
- **Umami**: Open source, self-hosted

Do not use Google Analytics. It is heavy (~45 KB), raises privacy concerns, and is inconsistent with the site's credibility-first positioning.

#### L3: Content Security Policy

Add a `Content-Security-Policy` header to prevent XSS and restrict resource loading:
```
default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.github.com;
```

#### L4: Prefetching strategy

Next.js App Router prefetches linked routes automatically on viewport intersection. This is fine for most links. For the homepage, consider adding `prefetch={false}` to less critical links (footer nav items) to reduce unnecessary prefetch bandwidth.

#### L5: Error boundary

Add a global `error.tsx` in the app directory and per-route error boundaries for pages that fetch external data (homepage). This prevents a GitHub API failure from showing a raw error page.

---

## Summary: Priority Matrix

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| **Critical** | C1: Fix homepage GitHub API blocking | Small | High |
| **Critical** | C2: Compress images (53 MB to < 5 MB) | Medium | High |
| **Critical** | C3: Remove `unoptimized` from MDXImage | Trivial | Medium |
| **Critical** | C4: Add dark mode flash prevention script | Small | High |
| **High** | H1: Add `prefers-reduced-motion` | Trivial | Medium |
| **High** | H2: Focus trap on mobile menu | Small | Medium |
| **High** | H3: Trim Shiki language grammars | Small | Medium |
| **High** | H4: Move @types to devDependencies | Trivial | Low |
| **Medium** | M1: Colour contrast audit | Small | Medium |
| **Medium** | M2: Font weight audit | Small | Low |
| **Medium** | M3: Delete unused images | Small | Low |
| **Medium** | M4: Add revalidate exports | Trivial | Medium |
| **Medium** | M5: Scope mono font to article pages | Medium | Low |
| **Low** | L1: OG images | Medium | Medium |
| **Low** | L2: Analytics | Small | Medium |
| **Low** | L3: Content Security Policy | Small | Low |
| **Low** | L4: Prefetch tuning | Trivial | Low |
| **Low** | L5: Error boundary | Small | Medium |

---

## Measurement and Monitoring

### Before launch
1. Run `npx next build` and record route sizes
2. Run Lighthouse (Performance, Accessibility, Best Practices, SEO) on homepage, one article page, and one project page
3. Test on Chrome DevTools throttled to "Slow 3G"
4. Test with VoiceOver on macOS Safari
5. Validate HTML with W3C Validator
6. Validate structured data with Google Rich Results Test
7. Run `npx @next/bundle-analyzer` to visualise JS chunks

### After launch
1. Monitor Core Web Vitals via Vercel Analytics or Search Console
2. Run Lighthouse CI on every deploy (via GitHub Action)
3. Set performance budget alerts if any route JS exceeds 80 KB
4. Re-audit quarterly or after any major dependency update

---

*This document is a living reference. Update it as optimisations are implemented and measurements are taken.*
