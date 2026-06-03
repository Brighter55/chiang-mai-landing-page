import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrderNowDropdown } from '@/components/order-now-dropdown'
import { LogoCarousel } from '@/components/logo-carousel'

const assetImages = {
  logo: '/assets/logo-white.png',
  khaoSoi: "/assets/entrees/Khao Soi 2.jpg",
  saiOua: "/assets/entrees/Sai Oua 2.jpg",
}

const reviewLogos = {
  socialSauce: '/assets/review logos/sauce logo.jpg',
  socialPost: '/assets/review logos/st louis post (1).jpg',
  socialRiver: '/assets/review logos/riverfront times logo.png',
  socialTop: '/assets/review logos/ian froeb logo.webp',
  googleLogo: '/assets/review logos/google.svg',
  yelpLogo: '/assets/review logos/yelp.svg',
  uberEatsLogo: '/assets/review logos/uber eats logo.png',
  doordashLogo: '/assets/review logos/doordash logo.png',
  grubhubLogo: '/assets/review logos/grubhub logo.jpeg',
}

const stitchImages = {
  heroLeft: '/stitch/stitch-image-01.jpg',
  heroRight: '/stitch/stitch-image-08.jpg',
  heroMain: '/stitch/stitch-image-13.jpg',
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

const reviewCarouselItems = [
  {
    src: reviewLogos.socialSauce,
    alt: 'Sauce Magazine logo',
    label: 'Sauce Magazine',
  },
  {
    src: reviewLogos.socialPost,
    alt: 'St. Louis Post-Dispatch logo',
    label: 'St. Louis Post-Dispatch',
  },
  {
    src: reviewLogos.socialRiver,
    alt: 'Riverfront Times logo',
    label: 'Riverfront Times',
  },
  {
    src: reviewLogos.socialTop,
    alt: 'Ian Froeb Top 100 logo',
    label: "Ian Froeb's Top 100",
  },
  {
    src: reviewLogos.googleLogo,
    alt: 'Google logo',
    label: 'Google Reviews',
    rating: '4.4',
    stars: '★★★★☆',
    reviewCount: '252 reviews',
  },
  {
    src: reviewLogos.uberEatsLogo,
    alt: 'Uber Eats logo',
    label: 'Uber Eats Reviews',
    rating: '4.8',
    stars: '★★★★★',
    reviewCount: '320+ reviews',
  },
  {
    src: reviewLogos.doordashLogo,
    alt: 'DoorDash logo',
    label: 'DoorDash Reviews',
    rating: '4.7',
    stars: '★★★★☆',
    reviewCount: '500+ reviews',
  },
  {
    src: reviewLogos.grubhubLogo,
    alt: 'Grubhub logo',
    label: 'Grubhub Reviews',
    rating: '4.8',
    stars: '★★★★★',
    reviewCount: '169 reviews',
  },
  {
    src: reviewLogos.yelpLogo,
    alt: 'Yelp logo',
    label: 'Yelp Reviews',
    rating: '4.3',
    stars: '★★★★☆',
    reviewCount: '132 reviews',
  },
]

export function HomePage() {
  return (
    <div className="stitch-theme min-h-screen bg-background text-foreground" id="top">
      <SiteHeader
        logoSrc={assetImages.logo}
        logoAlt="Chiang Mai logo"
        links={[
          { label: 'Menu', href: '#menu' },
          { label: 'Gallery', href: '/gallery' },
          { label: 'Contact', href: '#footer' },
        ]}
        primaryAction={
          <OrderNowDropdown
            align="end"
            triggerClassName="h-12 rounded-full px-6 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:scale-105"
          />
        }
      />

      <main className="relative overflow-hidden px-4 pb-24 pt-16">
        <div className="absolute left-0 top-20 hidden lg:block">
          <div className="floating-card origin-center -rotate-12">
            <div className="relative">
              <img
                src={assetImages.khaoSoi}
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
                src={assetImages.saiOua}
                alt="Healthy dish"
                className="h-48 w-48 rounded-[2rem] border-8 border-border object-cover shadow-xl"
              />
              <div className="absolute -left-6 -top-6">
                <div className="-rotate-12 rounded-full border-2 border-border bg-secondary px-4 py-2 text-xl font-black text-secondary-foreground shadow-lg">
                  😎
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            Experience Thai Cuisine
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Crafted with fresh ingredients, traditional recipes, and bold flavors that bring the taste of Thailand to every dish.
          </p>
          <OrderNowDropdown
            align="center"
            contentClassName="mt-5"
            triggerClassName="h-14 px-10 text-lg font-bold shadow-lg transition-all hover:scale-105"
          />
        </div>

        <section className="mx-auto mt-20 max-w-6xl px-4" id="gallery">
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
            Rated Highly Across Google, Yelp & More
          </h2>
          <div className="mt-6 opacity-90">
            <LogoCarousel items={reviewCarouselItems} durationSeconds={28} pauseOnHover />
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

        <section className="mx-auto mb-32 mt-24 max-w-6xl px-4" id="menu">
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

      <SiteFooter />
    </div>
  )
}