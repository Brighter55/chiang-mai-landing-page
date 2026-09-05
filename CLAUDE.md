# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (port 5173 default)
npm run build     # TypeScript type-check + Vite production build
npm run lint      # ESLint (flat config) across src/
npm run preview   # Preview production build locally
```

## Stack

- **Framework:** React 19 with TypeScript 6
- **Bundler:** Vite 8 + `@vitejs/plugin-react` (Oxc-based)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin + `tw-animate-css`
- **Routing:** `react-router-dom` v7 with `<BrowserRouter>` — simple flat route tree (no nested layouts)
- **UI primitives:** Radix UI (`@radix-ui/react-dropdown-menu`, `@radix-ui/react-popover`, `@radix-ui/react-scroll-area`, `@radix-ui/react-slot`) + `class-variance-authority` — following shadcn/ui patterns in `src/components/ui/`
- **Forms:** `react-phone-number-input` (phone/SMS opt-in) + `cmdk` (command menu)
- **Icons:** `lucide-react`
- **Path alias:** `@/*` → `src/*` (defined in `vite.config.ts` and `tsconfig.app.json`)

## Project Structure

```
src/
├── main.tsx                       # Entry point: BrowserRouter + StrictMode
├── App.tsx                        # Route definitions — /, /gallery, /privacy, /terms, * → /
├── index.css                      # Tailwind import, CSS custom property theme tokens, keyframe animations
├── hooks/
│   └── use-page-meta.ts           # Per-page <title> + meta description, optional robots noindex
├── pages/
│   ├── HomePage.tsx               # Landing page — hero video, review-logo marquee, testimonials, menu, SMS opt-in
│   ├── GalleryPage.tsx            # 3D carousel gallery with category filter tabs
│   ├── PrivacyPage.tsx            # Legal page (robots noindex)
│   └── TermsPage.tsx              # Legal page (robots noindex)
├── components/
│   ├── site-header.tsx            # Sticky top nav with logo, links, primary action slot
│   ├── site-footer.tsx            # Map, address, hours, contact, social links
│   ├── order-now-dropdown.tsx     # "Order Now" button → Radix dropdown with delivery links
│   ├── logo-carousel.tsx          # Infinite-marquee review logos
│   ├── image-popup.tsx            # Lightbox modal for full-size dish photos
│   ├── sms-opt-in-form.tsx        # Phone opt-in for SMS updates (react-phone-number-input)
│   └── ui/                        # shadcn-ui-style primitives
│       ├── button.tsx
│       ├── command.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── phone-input.tsx
│       ├── popover.tsx
│       └── scroll-area.tsx
└── lib/
    └── utils.ts                   # cn() helper (clsx + tailwind-merge)
```

## Architecture & Routing

- **Flat routing:** `"/"` → HomePage, `"/gallery"` → GalleryPage, `"/privacy"` → PrivacyPage, `"/terms"` → TermsPage, `"*"` redirects to `"/"`.
- Every page shares `SiteHeader` + `SiteFooter` + `OrderNowDropdown` directly (no layout component).
- Navigation links point to `#menu`, `#footer`, `/gallery`, and the legal pages in the footer.
- The dev server proxies `/api` → `http://127.0.0.1:8000` (see `vite.config.ts`).

## SEO

- Every page calls `usePageMeta` (`src/hooks/use-page-meta.ts`) to set its `<title>` and meta description.
- `/privacy` and `/terms` pass `noindex: true` so legal pages are dropped from Google instead of surfacing as sitelinks (and are intentionally left out of the sitemap).
- Restaurant JSON-LD (`schema.org/Restaurant`) structured data lives in `index.html`.
- `public/robots.txt` references `public/sitemap.xml`, which lists only `/` and `/gallery` — the indexable pages.

## Styling & Theming

- **Class-based theme switch**: the `.stitch-theme` class on the root `<div>` activates a dark/warm CSS variable palette (brown-gray background, beige/peach primary, orange accent).
- **Tailwind v4** uses `@import "tailwindcss"` (no config file). Custom theme tokens defined via `@theme inline` in `index.css`.
- All color references use CSS variable names (`bg-background`, `text-foreground`, `bg-primary`, etc.).
- Custom CSS animations: `.logo-marquee__track` (infinite scroll), `.rotating-text` (10s SVG text rotation), `.floating-card` (hover scale), carousel transitions via `transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1)`. Respects `prefers-reduced-motion`.
- **Gallery carousel**: CSS 3D transform-based with perspective container, circular offset math, blur/depth on side items.

## Assets

- Static files live in `public/`: `public/assets/` (dish photos under `entrees/` and `small_plates/`, `review logos/`, dietary-icon PNGs, hero-video MP4s, logos) plus `public/robots.txt` and `public/sitemap.xml`.
- Image paths are hardcoded as string constants at the top of each page component (e.g., `assetImages`, `entrees`, `smallPlatesImages`, `reviewLogos`).

## Component Conventions

- **shadcn-first**: prefer existing `src/components/ui/*` primitives before building custom components — see `.github/instructions/shadcn-first.instructions.md`.
- Utility-first with `cn()` for class merging; avoid inline `style` props unless needed for CSS custom properties or 3D transforms.
- Components are plain function exports (`export function ...`), not `export default`. (`main.tsx` / `App.tsx` are the entry-point exceptions.)
- Import via the `@/` alias (`@/pages/...`, `@/components/...`, `@/hooks/...`), not relative paths.

## Branch Workflow

- `master` — production branch, deployable state
- Feature branches (`testimonial`, `vid`, etc.) — PR into `master` via merge commits
- The `.claude/` directory is gitignored (no per-instance config)
