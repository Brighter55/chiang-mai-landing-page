const assets = {
  map: '/assets/map.png',
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/20 bg-card px-4 py-16 md:px-12" id="footer">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-h-[200px] overflow-hidden rounded-xl border border-border/30 shadow-lg">
            <img
              src={assets.map}
              alt="Map location"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="mb-6 text-xl font-bold text-primary">Address</h4>
            <p className="leading-relaxed text-muted-foreground">
              8158 Big Bend Blvd Webster Groves, MO 63119
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-bold text-primary">Hours</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Tues—Thurs 11:30AM-8PM</li>
              <li>Fri—Sat 11:30AM-9PM</li>
              <li>Sun-Mon Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-bold text-primary">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium text-foreground">(314) 961-8889</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 border-t border-border/20 pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary"
              href="#"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}