import { useState } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrderNowDropdown } from '@/components/order-now-dropdown'

const assetImages = {
  logo: '/assets/logo-white.png',
}

const categoryFilters = ['All', 'Small Plates', 'Entrees']

const galleryItems = [
  {
    label: 'Dumplings',
    image: '/assets/small_plates/Dumplings.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Gai Todd',
    image: '/assets/small_plates/Gai Todd.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Nua Sawaan',
    image: '/assets/small_plates/Nua Sawaan.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Poh Piah',
    image: '/assets/small_plates/Poh Piah.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Som Tum',
    image: '/assets/small_plates/Som Tum.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Chicken Noodle Soup',
    image: '/assets/entrees/Chicken Noodle Soup.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Drunken Noodle',
    image: '/assets/entrees/Drunken Noodle.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Eggplant Tofu',
    image: '/assets/entrees/Eggplant Tofu.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Fried Rice',
    image: '/assets/entrees/Fried Rice.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Gaeng Hung Lay',
    image: '/assets/entrees/Gaeng Hung Lay.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Gra Dook Moo',
    image: '/assets/entrees/Gra Dook Moo.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Kaeng Daeng',
    image: '/assets/entrees/Kaeng Daeng.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Kaeng Keaw Waan Gai',
    image: '/assets/entrees/Kaeng Keaw Waan Gai.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Khao Soi',
    image: '/assets/entrees/Khao Soi.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Larb Khua',
    image: '/assets/entrees/Larb Khua.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Massaman Beef',
    image: '/assets/entrees/Massaman Beef.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Nam Ngiaw',
    image: '/assets/entrees/Nam Ngiaw (1).jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Pad See Ew',
    image: '/assets/entrees/Pad See Ew.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Pad Thai Shrimp',
    image: '/assets/entrees/Pad Thai Shrimp.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Pad Woon Sen',
    image: '/assets/entrees/Pad Woon Sen.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Sai Oua',
    image: '/assets/entrees/Sai Oua.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Spicy Basil',
    image: '/assets/entrees/Spicy Basil.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Suki',
    image: '/assets/entrees/Suki.PNG',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Veggie Tofu Stir Fry',
    image: '/assets/entrees/Veggie Tofu Stir Fry.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
  {
    label: 'Yellow Curry',
    image: '/assets/entrees/Yellow Curry.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
  },
]

const getCircularOffset = (index: number, activeIndex: number, itemCount: number) => {
  const rawOffset = index - activeIndex
  const halfwayPoint = Math.floor(itemCount / 2)

  if (rawOffset > halfwayPoint) return rawOffset - itemCount
  if (rawOffset < -halfwayPoint) return rawOffset + itemCount
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
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(2)

  const visibleItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const scrollCarousel = (direction: -1 | 1) => {
    if (visibleItems.length === 0) return

    setActiveIndex((currentIndex) => (currentIndex + direction + visibleItems.length) % visibleItems.length)
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setActiveIndex(2)
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
          <OrderNowDropdown
            align="end"
            triggerClassName="h-12 rounded-full px-6 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:scale-105"
          />
        }
      />

      <main className="grow pb-24 pt-16 md:pb-28 md:pt-20">
        <section className="px-4 text-center md:px-12">
          <p className="mb-4 text-5xl font-semibold uppercase tracking-[0.35em] text-primary">
            Gallery
          </p>
        </section>

        <section className="mt-10 flex flex-wrap justify-center gap-3 px-4 md:mt-12 md:px-12">
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              className={
                activeFilter === filter
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
            {visibleItems.length > 0 ? (
              visibleItems.map((item, index) => {
                const offset = getCircularOffset(index, activeIndex, visibleItems.length)
                const distance = Math.abs(offset)
                const itemClassName =
                  distance === 0
                    ? 'active'
                    : distance === 1
                      ? offset < 0
                        ? 'side side-left'
                        : 'side side-right'
                      : 'hidden-peak'

                return (
                  <article
                    key={item.label}
                    className={`carousel-item group absolute left-1/2 top-1/2 overflow-hidden rounded-xl ${item.cardSize} ${itemClassName}`}
                    style={getCarouselItemStyle(offset)}
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
                )
              })
            ) : (
              <div className="rounded-2xl border border-outline/40 bg-surface-container-low px-6 py-8 text-center text-sm text-on-surface-variant">
                No images available for this category yet.
              </div>
            )}
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
