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
- **UI primitives:** Radix UI (`@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`) + `class-variance-authority` — following shadcn/ui patterns in `src/components/ui/`
- **Icons:** `lucide-react`

## Project Structure

```
src/
├── main.tsx                       # Entry point: BrowserRouter + StrictMode
├── App.tsx                        # Route definitions (<Routes> with / and /gallery)
├── index.css                      # Tailwind import, CSS custom properties theme, keyframe animations
├── App.css                        # Legacy (unused by current pages)
├── pages/
│   ├── HomePage.tsx               # Landing page — hero, review carousel, testimonials, menu sections
│   └── GalleryPage.tsx            # 3D carousel gallery with category filter tabs
├── components/
│   ├── site-header.tsx            # Sticky top nav with logo, links, primary action slot
│   ├── site-footer.tsx            # Map, address, hours, contact, social links
│   ├── order-now-dropdown.tsx     # "Order Now" button → Radix dropdown with delivery links
│   ├── logo-carousel.tsx          # Infinite-marquee review logos with ratings
│   └── ui/                        # shadcn-ui-style primitives
│       ├── button.tsx
│       ├── card.tsx
│       └── dropdown-menu.tsx
└── lib/
    └── utils.ts                   # cn() helper (clsx + tailwind-merge)

stitch_landing_page/               # Original static HTML/CSS design mockup (reference)
stitch_gallery_page/               # Original gallery page static design mockup (reference)
```

## Architecture & Routing

- **Flat routing:** `"/"` → HomePage, `"/gallery"` → GalleryPage, `"*"` redirects to `"/"`.
- Both pages share `SiteHeader` + `SiteFooter` + `OrderNowDropdown` directly (no layout component).
- Navigation links have `href` pointing to `#menu`, `#footer`, and `/gallery`.

## Styling & Theming

- **Class-based theme switch**: the `.stitch-theme` class on the root `<div>` activates a dark/warm CSS variable palette (brown-gray background, beige/peach primary, orange accent).
- **Tailwind v4** uses `@import "tailwindcss"` (no config file). Custom theme tokens defined via `@theme inline` in `index.css`.
- All color references use CSS variable names (`bg-background`, `text-foreground`, `bg-primary`, etc.).
- Custom CSS animations: `.logo-marquee__track` (infinite scroll), `.rotating-text` (10s SVG text rotation), `.floating-card` (hover scale), carousel transitions via `transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1)`. Respects `prefers-reduced-motion`.
- **Gallery carousel**: CSS 3D transform-based with perspective container, circular offset math, blur/depth on side items.

## Assets

- Static files live in `public/`. Organized as `public/assets/` (food images, icons) and `public/stitch/` (hero/background images from the Stitch design).
- Image paths are hardcoded as string constants at the top of each page component (e.g., `assetImages`, `stitchImages`, `reviewLogos`).

## Component Conventions

- **shadcn-first**: prefer existing `src/components/ui/*` primitives before building custom components — see `.github/instructions/shadcn-first.instructions.md`.
- Utility-first with `cn()` for class merging; avoid inline `style` props unless needed for CSS custom properties or 3D transforms.
- Components are plain function exports (`export function ...`), not `export default`.

## Branch Workflow

- `master` — production branch, deployable state
- Feature branches (`testimonial`, `vid`, etc.) — PR into `master` via merge commits
- The `.claude/` directory is gitignored (no per-instance config)
