import { useState } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const assetImages = {
  logo: '/assets/logo-white.png',
}

const categoryFilters = ['All', 'Small Plates', 'Entree', 'Beverages']

const carouselItems = [
  {
    label: 'Ceviche Royale',
    image: '/stitch/stitch-image-04.jpg',
    className: 'hidden-peak',
    cardSize: 'w-64 h-80',
  },
  {
    label: 'The Lounge',
    image: '/stitch/stitch-image-08.jpg',
    className: 'side side-left',
    cardSize: 'w-72 h-96',
  },
  {
    label: 'Dinner Service',
    image: '/stitch/stitch-image-13.jpg',
    className: 'active',
    cardSize: 'w-80 h-[450px] md:w-[400px]',
  },
  {
    label: 'Artisanal Bake',
    image: '/stitch/stitch-image-10.jpg',
    className: 'side side-right',
    cardSize: 'w-72 h-96',
  },
  {
    label: 'City Nights',
    image: '/stitch/stitch-image-05.jpg',
    className: 'hidden-peak',
    cardSize: 'w-64 h-80',
  },
]

const getCircularOffset = (index: number, activeIndex: number) => {
  const rawOffset = index - activeIndex
  const halfwayPoint = Math.floor(carouselItems.length / 2)

  if (rawOffset > halfwayPoint) return rawOffset - carouselItems.length
  if (rawOffset < -halfwayPoint) return rawOffset + carouselItems.length
  return rawOffset
}

const getCarouselItemStyle = (offset: number) => {
  const distance = Math.abs(offset)
  const translateX = offset * 17
  const scale = distance === 0 ? 1.08 : distance === 1 ? 0.86 : 0.72
  const rotateY = offset === 0 ? 0 : offset < 0 ? 14 : -14
  const translateZ = distance === 0 ? 110 : distance === 1 ? 40 : 0

  return {
    opacity: distance > 2 ? 0 : distance === 0 ? 1 : distance === 1 ? 0.6 : 0.3,
    pointerEvents: distance > 2 ? ('none' as const) : ('auto' as const),
    transform: `translate3d(calc(-50% + ${translateX}rem), -50%, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
    zIndex: distance === 0 ? 30 : distance === 1 ? 20 : 10,
    filter: distance === 0 ? 'blur(0)' : distance === 1 ? 'blur(1px)' : 'blur(4px)',
  }
}

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(2)

  const scrollCarousel = (direction: -1 | 1) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="stitch-theme min-h-screen bg-background text-foreground" id="top">
      <SiteHeader
        logoSrc={assetImages.logo}
        logoAlt="Chiang Mai logo"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
          { label: 'Contact', href: '/#footer' },
        ]}
        primaryAction={
          <a
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            href="/"
          >
            Book a Table
          </a>
        }
      />

      <main className="grow pb-24 pt-16 md:pb-28 md:pt-20">
        <section className="px-4 text-center md:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Gallery
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            My Visual Diary
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A glimpse into the soul of Chiang Mai - our flavors, our space, and our stories.
          </p>
        </section>

        <section className="mt-10 flex flex-wrap justify-center gap-3 px-4 md:mt-12 md:px-12">
          {categoryFilters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={
                index === 0
                  ? 'rounded-full bg-surface-container-highest px-6 py-3 text-sm font-semibold text-on-surface shadow-sm'
                  : 'rounded-full border border-outline/70 px-6 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary'
              }
            >
              {filter}
            </button>
          ))}
        </section>

        <section className="perspective-container relative mt-12 flex h-115 items-center justify-center overflow-hidden px-4 md:mt-16 md:h-135 md:px-12">
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-2 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:left-8"
            onClick={() => scrollCarousel(-1)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
          </button>

          <div className="carousel-track w-full overflow-hidden px-10 py-8 md:px-16" aria-label="Gallery carousel">
            {carouselItems.map((item, index) => (
              <article
                key={item.label}
                className={`carousel-item group absolute left-1/2 top-1/2 overflow-hidden rounded-xl ${item.cardSize} ${item.className}`}
                style={getCarouselItemStyle(getCircularOffset(index, activeIndex))}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-end p-4 md:p-5">
                  <div className="rounded-full bg-black/45 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-primary backdrop-blur-md">
                    {item.label}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-2 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:right-8"
            onClick={() => scrollCarousel(1)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
          </button>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}