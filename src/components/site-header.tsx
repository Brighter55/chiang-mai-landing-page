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
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/90 px-4 py-6 backdrop-blur-sm md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
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
    </header>
  )
}