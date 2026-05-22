const stitchImages = {
  map: '/stitch/stitch-image-07.jpg',
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/20 bg-card px-4 py-16 md:px-12" id="footer">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-h-[200px] overflow-hidden rounded-xl border border-border/30 shadow-lg">
            <img
              src={stitchImages.map}
              alt="Map location"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="mb-6 text-xl font-bold text-primary">Address</h4>
            <p className="leading-relaxed text-muted-foreground">
              96 East Central Park Road,<br />
              New York, USA
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
              <li className="font-medium text-foreground">+198-0183792</li>
              <li>
                <a className="transition-colors hover:text-primary" href="mailto:Oliva@Contact.Com">
                  Oliva@Contact.Com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border/20 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© Copyright 2020 Powered By WPDEVELOPER</p>
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
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary"
              href="#"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary"
              href="#"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <circle cx="4" cy="4" r="2" />
                <path d="M2 9h4v12H2z" />
              </svg>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary"
              href="#"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}