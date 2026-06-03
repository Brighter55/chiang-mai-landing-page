import type { CSSProperties } from 'react'

type LogoCarouselItem = {
  src: string
  alt: string
  label: string
  rating?: string
  stars?: string
  reviewCount?: string
}

type LogoCarouselProps = {
  items: LogoCarouselItem[]
  durationSeconds?: number
  pauseOnHover?: boolean
}

export function LogoCarousel({
  items,
  durationSeconds = 28,
  pauseOnHover = true,
}: LogoCarouselProps) {
  const doubledItems = [...items, ...items]
  const marqueeStyle = {
    ['--marquee-duration' as string]: `${durationSeconds}s`,
  } as CSSProperties

  return (
    <div
      className={`logo-marquee ${pauseOnHover ? 'logo-marquee--pause' : ''}`}
      style={marqueeStyle}
      aria-label="Ratings carousel"
    >
      <div className="logo-marquee__track" role="list">
        {doubledItems.map((item, index) => {
          const isDuplicate = index >= items.length

          return (
            <div
              key={`${item.label}-${index}`}
              className="logo-marquee__item"
              role="listitem"
              aria-hidden={isDuplicate}
            >
              <div className="logo-marquee__card">
                {(item.rating || item.stars) && (
                  <div className="logo-marquee__rating">
                    {item.rating && <span className="logo-marquee__score">{item.rating}</span>}
                    {item.stars && <span className="logo-marquee__stars">{item.stars}</span>}
                  </div>
                )}
                {item.reviewCount && <div className="logo-marquee__meta">{item.reviewCount}</div>}
                <div className="logo-marquee__brand">
                  <img src={item.src} alt={item.alt} className="logo-marquee__logo" />
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
