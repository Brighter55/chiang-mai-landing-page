# Chiang Mai Thai Restaurant — Landing Site

Landing site for [Chiang Mai Thai Restaurant](https://chiangmaistl.com/) (BEST THAI STL LLC), Webster Groves, MO. Built with React 19 + Vite + Tailwind CSS v4. A fast, mobile-first marketing and ordering site with hero video, menu, review highlights, photo gallery, SMS opt-in form, and SEO.

<video src="public/assets/github-vid.mp4" autoplay muted loop playsinline preload="metadata"></video>

## Impact

Organic search performance over the first 12 months — no paid ads:

- **814 organic clicks / 63K+ impressions**
- **#1** average ranking for primary branded/local search terms
- Top-10 rankings for **71%** of tracked search queries
- Balanced mobile/desktop performance — **401 vs 398 clicks** — proves the responsive design works.

## Tech Stack

- **Framework:** React 19 with TypeScript 6
- **Bundler:** Vite 8 + `@vitejs/plugin-react` (Oxc-based)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin + `tw-animate-css`
- **Routing:** `react-router-dom` v7 with `<BrowserRouter>` — simple flat route tree (no nested layouts)
- **UI primitives:** Radix UI + `class-variance-authority`, following shadcn/ui patterns in `src/components/ui/`
- **Forms:** `react-phone-number-input` (phone/SMS opt-in), `cmdk`
- **Icons:** `lucide-react`

## Pages & Routing

| Route      | Page          | Notes                                       |
| ---------- | ------------- | ------------------------------------------- |
| `/`        | `HomePage`    | Hero video, review-logo marquee, testimonials, menu sections, SMS opt-in |
| `/gallery` | `GalleryPage` | Filterable 3D photo carousel                 |
| `/privacy` | `PrivacyPage` | Legal page — robots `noindex`                |
| `/terms`   | `TermsPage`   | Legal page — robots `noindex`                |

Any other path redirects to `/`.

## Project Structure

```
src/
├── main.tsx                       # Entry point: BrowserRouter + StrictMode
├── App.tsx                        # Route definitions
├── index.css                      # Tailwind import, theme tokens, keyframe animations
├── hooks/
│   └── use-page-meta.ts           # Per-page <title> + meta description, optional noindex
├── pages/
│   ├── HomePage.tsx               # Landing page
│   ├── GalleryPage.tsx            # 3D carousel gallery with category filters
│   ├── PrivacyPage.tsx            # Legal (noindex)
│   └── TermsPage.tsx              # Legal (noindex)
├── components/
│   ├── site-header.tsx            # Sticky nav with logo, links, primary action slot
│   ├── site-footer.tsx            # Map, address, hours, contact, social links
│   ├── order-now-dropdown.tsx     # "Order Now" → dropdown with delivery links
│   ├── logo-carousel.tsx          # Infinite-marquee review logos
│   ├── image-popup.tsx            # Lightbox for full-size dish photos
│   ├── sms-opt-in-form.tsx        # Phone opt-in for SMS updates
│   └── ui/                        # shadcn-ui-style primitives
└── lib/
    └── utils.ts                   # cn() helper (clsx + tailwind-merge)
```

## Getting Started

```bash
npm install
npm run dev       # Start Vite dev server (port 5173 default)
npm run build     # TypeScript type-check + Vite production build → dist/
npm run lint      # ESLint (flat config)
npm run preview   # Preview production build locally
```

The dev server proxies `/api` → `http://127.0.0.1:8000` (see `vite.config.ts`).

## Search / SEO

- Restaurant JSON-LD (`schema.org/Restaurant`) structured data in `index.html`.
- Per-page titles/descriptions set via `src/hooks/use-page-meta.ts`.
- `public/robots.txt` references `public/sitemap.xml`, which lists only the indexable pages (`/` and `/gallery`); legal pages are `noindex`.

---

© 2026 BEST THAI STL LLC. All rights reserved.
