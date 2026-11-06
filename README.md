# Ibim Braide Portfolio

This is my personal website and portfolio. I built it to present my work as a freelance engineer and community organiser based in the United Kingdom, with a focus on mobile and full stack delivery and clear outcomes. I want it to feel calm, credible, and human. It should communicate technical depth, leadership, and impact without losing warmth.

It is also a living home for my writing. I care about AI ethics, software engineering, community building, and developer education. This site is where I publish, reflect, and show my work in public.



## What you will find
- Projects and case studies with clear outcomes and lessons
- Open source contributions and tooling work
- Community leadership, including Flutter Birmingham and Golang Birmingham
- Writing, speaking, and media appearances
- A living Now page and a practical Uses page
- A timeline that shows growth and direction
- Impact evidence, framed professionally

## Tech stack
- Next.js
- TypeScript
- Tailwind CSS
- MDX for long form content

## Content structure
- Content lives in `content/` as MDX
- Pages and routing live in `src/pages/`
- Shared UI and layout live in `src/components/`
- Static assets live in `public/`

## Local development
```bash
npm install
npm run dev
```

## Deployment
The live domain is [ibimbraide.com](https://ibimbraide.com). GitHub Pages must use **GitHub Actions** as the source, not the branch itself. A branch deploy publishes this README through Jekyll, which is why the domain was showing the repository notes instead of the site.

Pushes to `main` run `.github/workflows/nextjs.yml`. That workflow builds a static export (`NEXT_OUTPUT=export`) and deploys the `out` directory, including the `CNAME` file.

## Why this exists
I want a portfolio that feels elite and trustworthy. It should be easy to scan, but rewarding to read slowly. It should speak to recruiters, engineering managers, conference organisers, open source maintainers, and reviewers who care about impact and credibility.
