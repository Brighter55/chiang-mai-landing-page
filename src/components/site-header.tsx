import type { ReactNode } from 'react'

type HeaderLink = {
  label: string
  href: string
}

type SiteHeaderProps = {
  logoSrc: string
  logoAlt: string
  links: HeaderLink[]
  primaryAction: ReactNode
}

export function SiteHeader({ logoSrc, logoAlt, links, primaryAction }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 md:px-12">
        <a className="flex items-center gap-3" href="#top" aria-label={logoAlt}>
          <img src={logoSrc} alt={logoAlt} className="h-[35px] w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className="text-foreground transition-colors hover:text-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">{primaryAction}</div>
      </div>

      <div className="border-t border-border/30 bg-primary px-4 py-2.5 text-primary-foreground">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] md:text-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
          </span>
          <span>
            We&rsquo;re open on thanksgiving day
            <span className="hidden sm:inline"> &middot; Dine in, takeout &amp; delivery</span>
          </span>
        </p>
      </div>
    </header>
  )
}