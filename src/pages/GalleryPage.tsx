import { useState } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrderNowDropdown } from '@/components/order-now-dropdown'

const assetImages = {
  logo: '/assets/logo-white.png',
}

const dietaryIcons = {
  vegan: '/assets/vegan.png',
  glutenFree: '/assets/gluten-free.png',
}

type GalleryItem = {
  label: string
  image: string
  category: string
  cardSize: string
  tags?: ('vegan' | 'gluten-free')[]
  description?: string
}

const categoryFilters = ['All', 'Small Plates', 'Entrees']

const galleryItems: GalleryItem[] = [
  {
    label: 'Dumplings',
    image: '/assets/small_plates/Dumplings.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'Thin-skinned dumplings filled with a seasoned mixture of chicken and vegetables, served with a housemade dumpling sauce that has sweet, sour, and mildly salty taste.',
  },
  {
    label: 'Gai Todd',
    image: '/assets/small_plates/Gai Todd.png',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'Golden, crunchy fried chicken marinated in Thai herbs and spices, delivering a satisfying crisp exterior with juicy, tender meat inside. Served with a sweet chili dipping sauce.',
  },
  {
    label: 'Nua Sawaan',
    image: '/assets/small_plates/Nua Sawaan.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'Beef strips marinated in a sweet and savory blend of coriander, sea salt, and palm sugar, then fried for a deeply caramelized bite.',
  },
  {
    label: 'Poh Piah',
    image: '/assets/small_plates/Poh Piah.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan'],
    description: 'Crispy rolls stuffed with vegetables, cheese, pork, or shrimps, fried to a perfect golden crunch. Served with housemade sweet & sour sauce.',
  },
  {
    label: 'Som Tum',
    image: '/assets/small_plates/Som Tum.jpg',
    category: 'Small Plates',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'A salad of shredded green papaya, pounded with tomatoes, carrots, green beans, and chilies in a tangy lime and fish sauce, topped with peanuts.',
  },
  {
    label: 'Chicken Noodle Soup',
    image: '/assets/entrees/Chicken Noodle Soup.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'A soothing, clear broth with tender sliced chicken, rice noodles, and fragrant herbs.',
  },
  {
    label: 'Drunken Noodle',
    image: '/assets/entrees/Drunken Noodle.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan'],
    description: 'Bold and spicy flat rice noodles stir-fried with fresh chilies, garlic, basil, peppers, bean sprouts, and (chicken, shrimps, tofu, or vegetables) in a stir fry sauce.',
  },
  {
    label: 'Eggplant Tofu',
    image: '/assets/entrees/Eggplant Tofu.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan'],
    description: 'Asian eggplant, onions, peppers, and golden deep-fried tofu stir-fried in bean sauce. Served with steamed rice.',
  },
  {
    label: 'Fried Rice',
    image: '/assets/entrees/Fried Rice.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'Classic Thai fried rice wok-tossed with egg, onions, and (chicken, shrimps, tofu, or vegetables).',
  },
  {
    label: 'Gaeng Hung Lay',
    image: '/assets/entrees/Gaeng Hung Lay.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'A slow-braised Northern Thai curry with tender pork simmered in a fragrant blend of garlic, ginger, turmeric, and tamarind until deeply rich and aromatic. Served with steamed rice.',
  },
  {
    label: 'Gra Dook Moo',
    image: '/assets/entrees/Gra Dook Moo.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'Tender pork baby back ribs slow-roasted with a generous crust of garlic, black pepper, and coriander root until caramelized and fragrant. Served with steamed rice.',
  },
  {
    label: 'Kaeng Daeng',
    image: '/assets/entrees/Kaeng Daeng.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan', 'gluten-free'],
    description: 'A classic Thai red curry with coconut milk, bamboo shoots, peppers, and fresh basil. Served with steamed rice.',
  },
  {
    label: 'Kaeng Keaw Waan Gai',
    image: '/assets/entrees/Kaeng Keaw Waan Gai.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan', 'gluten-free'],
    description: 'A coconut milk curry with (chicken, shrimps, tofu, or vegetables), asian eggplant, and fresh basil, simmered in a green curry paste. Served with steamed rice.',
  },
  {
    label: 'Khao Soi',
    image: '/assets/entrees/Khao Soi.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'A rich, coconut-milk curry broth ladled over egg noodles and topped with crispy fried noodles, pickled mustard greens, red onions, and a squeeze of lime.',
  },
  {
    label: 'Larb Khua',
    image: '/assets/entrees/Larb Khua.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'A dry-style Northern Thai minced meat salad toasted in a hot wok with dried chilies, red onions, and aromatic spices. Served with steamed rice.',
  },
  {
    label: 'Massaman Beef',
    image: '/assets/entrees/Massaman Beef.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'A slow-cooked curry with beef, potatoes, and onions in a rich, mildly spiced coconut milk fragrant with cinnamon, and roasted cashew nuts. Served with steamed rice.',
  },
  {
    label: 'Nam Ngiaw',
    image: '/assets/entrees/Nam Ngiaw (1).jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'A Northern Thai rice vermicelli soup with a rich, tangy tomato and dried chili broth, slow-simmered with pork ribs and tofu, topped with red onions, cabbage, pickle, and bean sprouts.',
  },
  {
    label: 'Pad See Ew',
    image: '/assets/entrees/Pad See Ew.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan'],
    description: 'Wide flat rice noodles wok-tossed over high heat with egg, (asian green veggies or broccoli), and (chicken, shrimps, tofu, or vegetables) in a smoky, slightly sweet stir fry sauce.',
  },
  {
    label: 'Pad Thai Shrimp',
    image: '/assets/entrees/Pad Thai Shrimp.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'Rice noodles tossed in a tangy-sweet tamarind-based sauce with eggs, (chicken, shrimps, tofu, or vegetables), crunchy bean sprouts, and green onions, all finished with a handful of crushed peanuts and a squeeze of fresh lime.',
  },
  {
    label: 'Pad Woon Sen',
    image: '/assets/entrees/Pad Woon Sen.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    description: 'Glass noodles stir-fried with egg, vegetables, and (chicken, shrimps, tofu, or vegetables) in a light, savory sauce.',
  },
  {
    label: 'Sai Oua',
    image: '/assets/entrees/Sai Oua.jpg',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'Fragrant grilled pork sausage packed with lemongrass, galangal, kaffir lime leaves, and red curry paste, delivering a smoky bite. Served with steamed rice.',
  },
  {
    label: 'Spicy Basil',
    image: '/assets/entrees/Spicy Basil.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan'],
    description: '(chicken, shrimps, tofu, or vegetables) stir-fried with fresh chilies, garlic, and thai basil in a stir fry sauce. Served with steamed rice.',
  },
  {
    label: 'Suki',
    image: '/assets/entrees/Suki.PNG',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan', 'gluten-free'],
    description: 'Glass noodles, two proteins of choice, eggs, and vegetables, all wok-tossed and generously coated in a sweet, tangy, and spicy red suki sauce.',
  },
  {
    label: 'Veggie Tofu Stir Fry',
    image: '/assets/entrees/Veggie Tofu Stir Fry.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['vegan'],
    description: 'A colorful medley of mixed vegetables and (chicken, shrimps, tofu, or vegetables) wok-tossed in stir fry sauce. Served with steamed rice.',
  },
  {
    label: 'Yellow Curry',
    image: '/assets/entrees/Yellow Curry.png',
    category: 'Entrees',
    cardSize: 'w-[300px] h-[300px] md:h-[500px] md:w-[500px]',
    tags: ['gluten-free'],
    description: 'A mild and comforting curry with a golden turmeric and coconut milk base, simmered with tender chicken thighs, potatoes, and onions for a warming, lightly spiced bowl. Served with steamed rice.',
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
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const visibleItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // Clicking the active (center) card toggles the flip
      setFlippedIndex((prev) => (prev === index ? null : index))
    } else {
      // Clicking a side card brings it to center and clears any flip
      setFlippedIndex(null)
      setActiveIndex(index)
    }
  }

  const scrollCarousel = (direction: -1 | 1) => {
    if (visibleItems.length === 0) return

    setFlippedIndex(null)
    setActiveIndex((currentIndex) => (currentIndex + direction + visibleItems.length) % visibleItems.length)
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setActiveIndex(2)
    setFlippedIndex(null)
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
                    className={`carousel-item group absolute left-1/2 top-1/2 rounded-xl ${item.cardSize} ${itemClassName} ${flippedIndex === index ? 'card-flipped' : ''}`}
                    style={getCarouselItemStyle(offset)}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* ── Inner flip wrapper ── */}
                    <div className="card-inner relative w-full h-full rounded-xl">
                      {/* ── Front face ── */}
                      <div className="card-front">
                        <img
                          src={item.image}
                          alt={item.label}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="absolute inset-0 flex items-end p-4 md:p-5">
                          <div className="flex items-center gap-1 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-primary backdrop-blur-md">
                            <span>{item.label}</span>
                            {item.tags?.map((tag) => (
                              <img
                                key={tag}
                                src={tag === 'vegan' ? dietaryIcons.vegan : dietaryIcons.glutenFree}
                                alt={tag === 'vegan' ? 'Vegan' : 'Gluten Free'}
                                className="h-10 w-10 flex-shrink-0"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* ── Back face ── */}
                      <div className="card-back">
                        <div className="mb-3 flex items-center gap-2">
                          <h3 className="text-xl font-bold text-primary md:text-2xl">
                            {item.label}
                          </h3>
                          {item.tags?.map((tag) => (
                            <img
                              key={tag}
                              src={tag === 'vegan' ? dietaryIcons.vegan : dietaryIcons.glutenFree}
                              alt={tag === 'vegan' ? 'Vegan' : 'Gluten Free'}
                              className="h-8 w-8 flex-shrink-0"
                            />
                          ))}
                        </div>

                        {item.description ? (
                          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base">
                            {item.description}
                          </p>
                        ) : (
                          <p className="text-sm italic text-muted-foreground/50">
                            Description coming soon
                          </p>
                        )}

                        {/* ── Flip-back hint ── */}
                        <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground/40">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 10h10a4 4 0 0 1 4 4v2M3 10l4-4m-4 4 4 4"
                            />
                          </svg>
                          <span>Tap to flip back</span>
                        </div>
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
