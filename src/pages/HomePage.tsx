const stitchImages = {
  logo: '/stitch/stitch-image-03.jpg',
  heroLeft: '/stitch/stitch-image-01.jpg',
  heroRight: '/stitch/stitch-image-08.jpg',
  heroMain: '/stitch/stitch-image-13.jpg',
  socialSauce: '/stitch/stitch-image-04.jpg',
  socialPost: '/stitch/stitch-image-12.jpg',
  socialRiver: '/stitch/stitch-image-06.jpg',
  socialTop: '/stitch/stitch-image-14.jpg',
  craveChicken: '/stitch/stitch-image-05.jpg',
  craveToast: '/stitch/stitch-image-02.jpg',
  craveSalad: '/stitch/stitch-image-11.jpg',
  entrees: '/stitch/stitch-image-10.jpg',
  drinks: '/stitch/stitch-image-09.jpg',
  map: '/stitch/stitch-image-07.jpg',
}

const craveWorthy = [
  {
    title: 'Easy Chicken Dinners,\nDeliciously Quick',
    image: stitchImages.craveChicken,
  },
  {
    title: 'Sweet, Golden French\nToast Favorites!',
    image: stitchImages.craveToast,
  },
  {
    title: 'Fresh, Flavorful Salads\nwith Power!',
    image: stitchImages.craveSalad,
  },
]

const entrees = [
  { name: 'Braised Lamb Shank', price: '$34.00' },
  { name: 'Grilled Salmon', price: '$28.00' },
  { name: 'Truffle Risotto', price: '$26.00' },
  { name: 'Prime Ribeye', price: '$42.00' },
  { name: 'Cherry Roast Duck', price: '$32.00' },
  { name: 'Butter Lobster', price: '$48.00' },
]

const drinks = [
  { name: 'Old Fashioned', price: '$16.00' },
  { name: 'Sparkling Paloma', price: '$15.00' },
  { name: 'Espresso Martini', price: '$18.00' },
  { name: 'Classic Mojito', price: '$14.00' },
]

export function HomePage() {
  return (
    <div className="stitch-theme min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/90 px-4 py-6 backdrop-blur-sm md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2">
              <img
                src={stitchImages.logo}
                alt="Unidine logo"
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Unidine
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {['Gallery', 'Menu', 'Contact'].map((label) => (
              <a
                key={label}
                className="text-foreground transition-colors hover:text-primary"
                href="#"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Cart"
              className="rounded-full border border-border bg-popover p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 6h2l2.5 11h10.5l2-8H7.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="20" r="1" fill="currentColor" />
                <circle cx="17" cy="20" r="1" fill="currentColor" />
              </svg>
            </button>
            <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Order Now
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden px-4 pb-24 pt-16">
        <div className="absolute left-0 top-20 hidden lg:block">
          <div className="floating-card origin-center -rotate-12">
            <div className="relative">
              <img
                src={stitchImages.heroLeft}
                alt="Delicious food"
                className="h-48 w-48 rounded-[2rem] border-8 border-border object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4">
                <div className="rotate-12 rounded-lg border-2 border-border bg-primary p-2 text-primary-foreground shadow-lg">
                  <span role="img" aria-label="thumbs up" className="text-lg">
                    👍
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-24 hidden lg:block">
          <div className="floating-card origin-center rotate-12">
            <div className="relative">
              <img
                src={stitchImages.heroRight}
                alt="Healthy dish"
                className="h-48 w-48 rounded-[2rem] border-8 border-border object-cover shadow-xl"
              />
              <div className="absolute -left-6 -top-6">
                <div className="-rotate-12 rounded-full border-2 border-border bg-secondary px-4 py-2 text-xl font-black text-secondary-foreground shadow-lg">
                  MEH!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="text-primary">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24">
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            Savor the Taste of <br /> Perfection.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Fresh ingredients, mouth-watering recipes, and a passion for good food delivered to your
            door or ready for pick-up.
          </p>
          <a
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
            href="#"
          >
            Order Now
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24">
              <path
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          </a>
        </div>

        <section className="mx-auto mt-20 max-w-6xl px-4">
          <div className="group relative cursor-pointer">
            <div className="overflow-hidden rounded-[2rem] border-4 border-border shadow-2xl">
              <img
                src={stitchImages.heroMain}
                alt="Grilled chicken wrap with fresh ingredients"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center md:h-48 md:w-48">
                <svg className="rotating-text absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-white text-[8px] font-bold tracking-[0.2em] drop-shadow-lg">
                    <textPath xlinkHref="#circlePath">
                      Watch the film • Watch the film • Watch the film •
                    </textPath>
                  </text>
                </svg>
                <div className="rounded-full bg-muted p-6 shadow-2xl transition-transform group-hover:scale-110">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 20.03c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-4 text-center">
          <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground opacity-70">
            Recognized by St. Louis&apos; Finest
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 md:gap-16">
            <img
              src={stitchImages.socialSauce}
              alt="Sauce Magazine"
              className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy"
            />
            <img
              src={stitchImages.socialPost}
              alt="St. Louis Post-Dispatch"
              className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy"
            />
            <img
              src={stitchImages.socialRiver}
              alt="Riverfront Times"
              className="h-8 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy"
            />
            <img
              src={stitchImages.socialTop}
              alt="Ian Froeb's Top 100"
              className="h-16 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mx-auto mb-32 mt-24 max-w-6xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-destructive">
              Testimonial
            </span>
            <h2 className="text-5xl font-bold text-foreground md:text-6xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: 'Elizabeth',
                location: 'Chicago',
                quote:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
              },
              {
                name: 'Catherine',
                location: 'New York',
                quote:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                name: 'Victoria',
                location: 'Los Angeles',
                quote:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-border/30 bg-card p-10 shadow-xl"
              >
                <div className="mb-6 flex gap-1 text-xl text-destructive">★★★★★</div>
                <p className="mb-10 leading-relaxed text-muted-foreground">{item.quote}</p>
                <div>
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <a
              className="group flex items-center gap-1 font-semibold text-primary transition-colors hover:text-primary/80"
              href="#"
            >
              Read more
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24">
                <path
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="mx-auto mb-32 mt-24 max-w-6xl px-4">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Iconic must-try dishes
              </h2>
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Previous"
                className="rounded-xl border border-border bg-popover p-4 transition-colors hover:bg-card"
              >
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                aria-label="Next"
                className="rounded-xl bg-accent p-4 text-accent-foreground shadow-lg shadow-black/20 transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {craveWorthy.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-border/30 bg-muted shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title.replace('\n', ' ')}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-8">
                  <h3 className="whitespace-pre-line text-xl font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                  <button className="rounded-xl bg-accent p-3 text-accent-foreground shadow-lg transition-transform hover:scale-110">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-6xl px-4">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                Main Courses
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-accent" />
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Previous"
                className="rounded-xl border border-border bg-popover p-4 transition-colors hover:bg-card"
              >
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                aria-label="Next"
                className="rounded-xl bg-accent p-4 text-accent-foreground shadow-lg shadow-black/20 transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {entrees.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-[2rem] border border-border/30 bg-muted shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={stitchImages.entrees}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-8">
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-white">{item.name}</h3>
                    <p className="mt-1 font-bold text-accent">{item.price}</p>
                  </div>
                  <button className="rounded-xl bg-accent p-3 text-accent-foreground shadow-lg transition-transform hover:scale-110">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-6xl px-4">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                Craft Cocktails &amp; Beverages
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-accent" />
            </div>
            <div className="flex gap-4">
              <button
                aria-label="Previous"
                className="rounded-xl border border-border bg-popover p-4 transition-colors hover:bg-card"
              >
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                aria-label="Next"
                className="rounded-xl bg-accent p-4 text-accent-foreground shadow-lg shadow-black/20 transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {drinks.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-[2rem] border border-border/30 bg-muted shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={stitchImages.drinks}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-8">
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-white">{item.name}</h3>
                    <p className="mt-1 font-bold text-accent">{item.price}</p>
                  </div>
                  <button className="rounded-xl bg-accent p-3 text-accent-foreground shadow-lg transition-transform hover:scale-110">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/20 bg-card px-4 py-16 md:px-12">
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
            <p className="text-sm text-muted-foreground">
              © Copyright 2020 Powered By WPDEVELOPER
            </p>
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
    </div>
  )
}