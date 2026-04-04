# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Dev server on port 4000 (Turbo enabled)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint
```

## Environment Variables

Create `.env.local` with:
```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

## Architecture

**Next.js 14 App Router** personal portfolio/blog. Uses React Server Components by default; client components are explicitly marked with `"use client"`.

### Key directories

- `app/` — Pages and layouts (App Router). Root layout in `app/layout.tsx` wraps all pages with a 760px max-width container.
- `components/` — Reusable UI components. Each component lives in its own subdirectory.
- `components/Content/` — Static data (projects and work experience) defined as TypeScript arrays — edit these to update portfolio content.
- `posts/` — Blog content as MDX files. Processed by Contentlayer; each post needs `title`, `date`, `description`, and `tags` frontmatter.
- `utils/spotify.ts` — Spotify Web API calls for NowPlaying and TopTracks features.
- `types/shared.ts` — Shared TypeScript types.

### Path aliases (tsconfig)

```
@components/*  →  components/*
@styles/*      →  styles/*
@utils/*       →  utils/*
@types/*       →  types/*
@icons/*       →  assets/icons/*
```

### Styling

Tailwind CSS + SCSS. Global styles in `styles/globals.scss`, mixins in `styles/mixins.scss`. Custom Tailwind config defines dark theme colors (`dark-primary`, `dark-secondary`), orange accent variants, and animations (`fadeInDown`, `fadeInUp`, `float`, `gradient`).

**Custom responsive breakpoints** (not standard Tailwind):
- `mobile:` — max-width 1024px (targets mobile/tablet, applied downward)
- `desktop:` — 1024px and up

**Staggered entrance animations:** Wrap a container with `slide-enter-content` class; children automatically receive increasing animation delays via CSS custom properties (`--stagger`, `--delay: 120ms`). Used on every main page.

### Blog posts

Adding a new post: create `posts/<slug>.mdx` with the required frontmatter. Contentlayer auto-generates the URL and slug. Syntax highlighting uses `github-dark` theme via `rehype-pretty-code`. Reading time is computed automatically.

### Content generation

Contentlayer generates types and data into `.contentlayer/generated/` — don't edit these files directly. Run `pnpm dev` or `pnpm build` to regenerate after adding/editing posts.

### Client vs Server components

Only two components are client-side by necessity:
- `app/nav.tsx` — needs `usePathname()` for active route detection
- `components/ClientWrapper.tsx` — wraps Vercel Analytics, Speed Insights, and the progress bar

Spotify data fetching (`getNowPlaying`, `getTopTracks`) is done server-side with ISR revalidation (10s and 1h respectively). Blog post pages use `dynamic = "force-static"`.
