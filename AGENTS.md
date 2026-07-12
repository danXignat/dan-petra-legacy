# AGENTS.md

Single-page wedding invitation site (Romanian, couple "Dan & Petra"). TanStack Start (SSR) + React 19 + Tailwind v4, scaffolded from a Lovable template.

## Commands

Package manager is **Bun** (`bun.lock` is committed; `package-lock.json` is an untracked local artifact — ignore it).

- `bun install` — install
- `bun dev` — dev server (`vite dev`)
- `bun run build` — production build (Nitro, Cloudflare target by default)
- `bun run lint` — ESLint (also enforces Prettier via `eslint-plugin-prettier`)
- `bun run format` — Prettier write

No test suite exists. There is no separate typecheck script; `tsc` runs with `noEmit` via the build/editor only.

## Build config — do NOT break

- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which **already bundles** TanStack Start, viteReact, Tailwind, tsconfig-paths, Nitro, env injection, and the `@` alias. Do not add these plugins manually or the app breaks with duplicate plugins.
- `bunfig.toml` sets a 24h supply-chain guard (`minimumReleaseAge`). Adding a package newer than 24h requires an entry in `minimumReleaseAgeExcludes` — confirm with the user before adding one.

## Routing (TanStack Start, file-based)

- Routes live in `src/routes/`. Every `.tsx` is a route; see `src/routes/README.md` for the full filename→URL convention table.
- The only app shell is `src/routes/__root.tsx` (owns `<html>`, head meta, error/404 boundaries). Do NOT create `src/pages/`, `app/layout.tsx`, or other Next/Remix conventions.
- `src/routeTree.gen.ts` is auto-generated — never edit by hand.
- Dynamic segments use bare `$` (`$id.tsx`), splats read `_splat` (never `*`).
- API routes: `createFileRoute` with a `server.handlers` block (see `src/routes/api/rsvp.ts`).

## SSR error handling (custom, keep intact)

- `src/server.ts` wraps the Start server entry to catch errors h3 silently swallows into `{"unhandled":true,"message":"HTTPError"}` 500s, rendering `renderErrorPage()` instead.
- `src/start.ts` adds a request middleware doing the same for thrown non-status errors.
- `server-only` (the Next.js package) is banned by ESLint. Use `*.server.ts` or `@tanstack/react-start/server-only` instead.

## Content & conventions

- **All site content lives in `src/lib/wedding-config.ts`** (`weddingConfig`). Change copy, dates, venues, SEO there — not scattered in components. UI text is Romanian.
- Calendar times are pre-computed UTC strings in the config (Romania is EEST/UTC+3 on the event date). `src/lib/ics.ts` builds calendar files.
- Presentational components are in `src/components/wedding/`; `src/components/ui/` is shadcn/ui (new-york style, `slate` base, aliases in `components.json`).
- Colors & fonts live in one place: `weddingConfig.theme` (`src/lib/wedding-config.ts`). They are turned into a `:root` block by `src/lib/theme.ts` and injected in `__root.tsx`'s `<head>`. Components consume them as CSS vars — `var(--color-olive)` (main), `--color-burgundy` (accent), `--color-gold`, `--color-ivory`, `--color-parchment`, `--color-charcoal`. `src/styles.css` only maps/consumes these variables (via `@theme inline`); do NOT hard-code hex there. Editing a color is enough — nothing else to touch.
- Fonts: `weddingConfig.theme.fonts` exposes `display`, `decorative` (Cinzel Decorative — hero names, monogram, drop-cap), and `serif`, consumed as `--font-display` / `--font-decorative` / `--font-serif`. Changing a font *family* also requires updating the Google Fonts `<link>` in `__root.tsx` so the webfont actually loads.
- The medieval/illuminated look is intentional: page-framing gilt border and illuminated drop-cap live in `src/styles.css`; the seal-style `Monogram` (with cross finial) and vine `Ornament`/`Divider` are in `src/components/wedding/`.
- Prettier: 100 col, semicolons, double quotes, trailing commas (`all`).

USE SKILLS ABOUT WEDDING and FRONTEND DEVELOPMENT to answer questions about this project.
