# ExtOS.win — Agent Instructions

This repository is the **public site** for ExtOS (extos.win): the product catalogue, positioning, and legal pages for local-first Chrome extensions. It is not an extension source repo. Extensions are built in their own repos and published separately.

**Stack:** Astro 7 · Tailwind CSS v4 · TypeScript 5.9 · MDX · Sharp · Cloudflare Workers (static assets)

## Commands

| Command                  | Purpose                               |
| ------------------------ | ------------------------------------- |
| `npm run dev`            | Dev server at <http://localhost:4321> |
| `npm run build`          | Production build to `./dist/`         |
| `npm run preview`        | Preview the production build          |
| `npm run check:eslint`   | ESLint                                |
| `npm run check:prettier` | Prettier check                        |
| `npm run fix`            | Auto-fix ESLint + Prettier            |

Node 22+. **`npm run check:astro` hangs in this environment — do not use it as a gate.** Verify with build + ESLint + Prettier instead.

## Hard rules

These are not style preferences. A PR that breaks one of them is rejected.

1. **Facts come from code.** Every product claim (name, version, status, price, feature) must match `src/data/products.ts`. Never invent installs, ratings, review counts, user numbers, awards, or "trusted by" claims. If a number is not in the data file, it does not go on the page.
2. **No store links until a listing exists.** While `availability` is `pre-release`, CTAs must stay "Coming soon" / newsletter, never a Chrome Web Store or Gumroad URL.
3. **Human gates.** Never publish to a store, change a price, create a paid account, buy a domain, or spend money. Those require Rachid's explicit approval. This site is copy and code only.
4. **No secrets in the repo.** No API keys, tokens, `.env` files, Cloudflare credentials, or customer data. The site is static; it needs none.
5. **No tracking by default.** Do not add analytics, pixels, chat widgets, or third-party scripts without an explicit request. Partytown stays disabled.
6. **Accessibility is a requirement.** Exactly one `h1` per page, no skipped heading levels, visible focus states on every interactive element, labelled icon-only controls, text contrast at 4.5:1 in light and dark themes.
7. **No fabricated dates or changelog entries.** Use the real date. Do not backdate posts.

## Brand voice

Plain, specific, calm. Say what the extension does and what it does not do. No "revolutionary", "game-changing", "10x", "supercharge". Prefer concrete nouns and short sentences. Local-first and privacy claims must be literally true of the code.

## Architecture

```
src/
  assets/styles/tailwind.css   # Tailwind v4 config (CSS-first)
  components/
    common/    # Image, Metadata, Analytics, ToggleTheme
    ui/        # Button, Form, Headline, Timeline, WidgetWrapper
    widgets/   # Hero, Features, Bento, Pricing, Comparison, FAQs, Header, Footer…
    blog/      # SinglePost, List, Pagination, Tags
    CustomStyles.astro  # colour/font CSS variables (light + dark)
  content.config.ts    # content collections (glob loader)
  data/post/           # articles (.md, .mdx)
  data/products.ts     # single source of truth for the catalogue
  layouts/             # Layout, PageLayout, MarkdownLayout
  pages/               # file-based routes (trailing slash canonical)
  utils/               # blog, images, permalinks, frontmatter
  config.yaml          # site config, loaded as `astrowind:config`
  navigation.ts        # header/footer links
vendor/integration/    # config-loading integration
```

- Path alias `~/` → `src/`. Site config exports `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS` from `astrowind:config`.
- Tailwind is configured in CSS (`@theme`, `@utility`, `@variant dark`), with `@tailwindcss/vite` in `astro.config.ts`. Use `twMerge()` for conditional classes and `class:list` for toggles.
- Content collections use Astro's Content Layer API; posts live in `src/data/post/`.
- Images: local files go through `astro:assets` (Sharp); remote images via Unpic. Hero images use `loading="eager"` + `fetchpriority="high"`.

## Deployment

Push to `main` triggers a Cloudflare Workers build for the `astrowind-extos` service. There is no `wrangler deploy` step and no Cloudflare token in this environment. Do not add one.

- Work on a branch, open a PR, let CI run, then merge. Never push directly to `main` unless Rachid asks.
- Routes are served with a trailing slash; `/path` returns a 307 to `/path/`. Internal links must include the trailing slash to avoid redirects.

## Working with Jules (cloud agent)

Jules clones this repo, reads this file, and opens PRs. Tasks must therefore be self-contained and safe if the plan is auto-approved.

- **One concern per task.** State the goal, the files in scope, the acceptance check, and what not to touch.
- **PR only.** Never merge, never push to `main`, never touch `.github/workflows/` unless the task is explicitly about CI.
- **Report in the final message.** The VM console is not retrievable; if the task is read-only, require the findings in the last agent message.
- **Run `npm run build` and `npm run check:eslint`** before finishing. Do not run `check:astro`.
- **Do not add dependencies** without approval; this site is intentionally small.
- **Do not edit** `src/data/products.ts` availability/price fields unless the task says so; those encode business state.

## Verification checklist

Before calling a change done:

1. `npm run build` succeeds.
2. `npm run check:eslint` and `npm run check:prettier` pass (or run `npm run fix` and re-check).
3. Routes render: `/`, `/extensions/`, each `/extensions/<slug>/`, `/about/`, `/contact/`, `/privacy/`, `/terms/`.
4. Light and dark theme, desktop and mobile nav.
5. No claim on the page contradicts `src/data/products.ts`; no dead store links.
6. New interactive elements have a visible `focus-visible` ring; images have dimensions or aspect ratio.
