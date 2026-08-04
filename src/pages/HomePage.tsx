import { useState } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrderNowDropdown } from '@/components/order-now-dropdown'
import { LogoCarousel } from '@/components/logo-carousel'
import { ImagePopup } from '@/components/image-popup'
import { SmsOptInForm } from '@/components/sms-opt-in-form'
import { usePageMeta } from '@/hooks/use-page-meta'

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

const smallPlatesImages = {
  gaiTodd: '/assets/small_plates/Gai Todd.png',
  somTum: '/assets/small_plates/Som Tum.jpg',
  dumplings: '/assets/small_plates/Dumplings.jpg',
  pohPiah: '/assets/small_plates/Poh Piah.jpg',
  nuaSawaan: '/assets/small_plates/Nua Sawaan.jpg',
}

const dietaryIcons = {
  vegan: '/assets/vegan.png',
  glutenFree: '/assets/gluten-free.png',
}

type FoodItem = {
  title: string
  image: string
  tags?: ('vegan' | 'gluten-free')[]
  description?: string
}

const craveWorthy: FoodItem[] = [
  {
    title: 'Gai Todd\n(Crispy Fried Chicken)',
    image: smallPlatesImages.gaiTodd,
    tags: ['gluten-free'],
    description: 'Golden, crunchy fried chicken marinated in Thai herbs and spices, delivering a satisfying crisp exterior with juicy, tender meat inside. Served with a sweet chili dipping sauce.',
  },
  {
    title: 'Som Tum\n(Green Papaya Salad)',
    image: smallPlatesImages.somTum,
    description: 'A salad of shredded green papaya, pounded with tomatoes, carrots, green beans, and chilies in a tangy lime and fish sauce, topped with peanuts.',
  },
  {
    title: 'Steamed\nDumplings',
    image: smallPlatesImages.dumplings,
    description: 'Thin-skinned dumplings filled with a seasoned mixture of chicken and vegetables, served with a housemade dumpling sauce that has sweet, sour, and mildly salty taste.',
  },
  {
    title: 'Poh Piah\n(Spring Rolls)',
    image: smallPlatesImages.pohPiah,
    tags: ['vegan'],
    description: 'Crispy rolls stuffed with vegetables, cheese, pork, or shrimps, fried to a perfect golden crunch. Served with housemade sweet & sour sauce.',
  },
  {
    title: 'Nua Sawaan\n(Beef Jerky)',
    image: smallPlatesImages.nuaSawaan,
    tags: ['gluten-free'],
    description: 'Beef strips marinated in a sweet and savory blend of coriander, sea salt, and palm sugar, then fried for a deeply caramelized bite.',
  },
]

const entreeImages = {
  khaoSoi: '/assets/entrees/Khao Soi 2.jpg',
  gaengHungLay: '/assets/entrees/Gaeng Hung Lay.jpg',
  kaengKeawWaanGai: '/assets/entrees/Kaeng Keaw Waan Gai.jpg',
  padThaiShrimp: '/assets/entrees/Pad Thai Shrimp.png',
  massamanBeef: '/assets/entrees/Massaman Beef.jpg',
  padSeeEw: '/assets/entrees/Pad See Ew.png',
  spicyBasil: '/assets/entrees/Spicy Basil.png',
  namNgiaw: '/assets/entrees/Nam Ngiaw (1).jpg',
  saiOua: '/assets/entrees/Sai Oua 2.jpg',
  drunkenNoodle: '/assets/entrees/Drunken Noodle.png',
  yellowCurry: '/assets/entrees/Yellow Curry.png',
  larbKhua: '/assets/entrees/Larb Khua.jpg',
  chickenNoodleSoup: '/assets/entrees/Chicken Noodle Soup.png',
  eggplantTofu: '/assets/entrees/Eggplant Tofu.jpg',
  friedRice: '/assets/entrees/Fried Rice.png',
  graDookMoo: '/assets/entrees/Gra Dook Moo.jpg',
  kaengDaeng: '/assets/entrees/Kaeng Daeng.png',
  padWoonSen: '/assets/entrees/Pad Woon Sen.jpg',
  suki: '/assets/entrees/Suki.PNG',
  veggieTofuStirFry: '/assets/entrees/Veggie Tofu Stir Fry.png',
}

const entrees: FoodItem[] = [
  {
    title: 'Khao Soi',
    image: entreeImages.khaoSoi,
    description: 'A rich, coconut-milk curry broth ladled over egg noodles and topped with crispy fried noodles, pickled mustard greens, red onions, and a squeeze of lime.',
  },
  {
    title: 'Gaeng Hung Lay\n(Braised Curry Pork)',
    image: entreeImages.gaengHungLay,
    description: 'A slow-braised Northern Thai curry with tender pork simmered in a fragrant blend of garlic, ginger, turmeric, and tamarind until deeply rich and aromatic. Served with steamed rice.',
  },
  {
    title: 'Kaeng Keaw Waan Gai\n(Green Curry)',
    image: entreeImages.kaengKeawWaanGai,
    tags: ['vegan', 'gluten-free'],
    description: 'A coconut milk curry with (chicken, shrimps, tofu, or vegetables), asian eggplant, and fresh basil, simmered in a green curry paste. Served with steamed rice.',
  },
  {
    title: 'Pad Thai\nShrimp',
    image: entreeImages.padThaiShrimp,
    tags: ['gluten-free'],
    description: 'Rice noodles tossed in a tangy-sweet tamarind-based sauce with eggs, (chicken, shrimps, tofu, or vegetables), crunchy bean sprouts, and green onions, all finished with a handful of crushed peanuts and a squeeze of fresh lime.',
  },
  {
    title: 'Massaman\nBeef',
    image: entreeImages.massamanBeef,
    tags: ['gluten-free'],
    description: 'A slow-cooked curry with beef, potatoes, and onions in a rich, mildly spiced coconut milk fragrant with cinnamon, and roasted cashew nuts. Served with steamed rice.',
  },
  {
    title: 'Pad See Ew',
    image: entreeImages.padSeeEw,
    tags: ['vegan'],
    description: 'Wide flat rice noodles wok-tossed over high heat with egg, (asian green veggies or broccoli), and (chicken, shrimps, tofu, or vegetables) in a smoky, slightly sweet stir fry sauce.',
  },
  {
    title: 'Spicy Basil',
    image: entreeImages.spicyBasil,
    tags: ['vegan'],
    description: '(chicken, shrimps, tofu, or vegetables) stir-fried with fresh chilies, garlic, and thai basil in a stir fry sauce. Served with steamed rice.',
  },
  {
    title: 'Nam Ngiaw',
    image: entreeImages.namNgiaw,
    tags: ['gluten-free'],
    description: 'A Northern Thai rice vermicelli soup with a rich, tangy tomato and dried chili broth, slow-simmered with pork ribs and tofu, topped with red onions, cabbage, pickle, and bean sprouts.',
  },
  {
    title: 'Sai Oua\n(Northern Thai Sausage)',
    image: entreeImages.saiOua,
    tags: ['gluten-free'],
    description: 'Fragrant grilled pork sausage packed with lemongrass, galangal, kaffir lime leaves, and red curry paste, delivering a smoky bite. Served with steamed rice.',
  },
  {
    title: 'Drunken Noodle',
    image: entreeImages.drunkenNoodle,
    tags: ['vegan'],
    description: 'Bold and spicy flat rice noodles stir-fried with fresh chilies, garlic, basil, peppers, bean sprouts, and (chicken, shrimps, tofu, or vegetables) in a stir fry sauce.',
  },
  {
    title: 'Yellow Curry',
    image: entreeImages.yellowCurry,
    tags: ['gluten-free'],
    description: 'A mild and comforting curry with a golden turmeric and coconut milk base, simmered with tender chicken thighs, potatoes, and onions for a warming, lightly spiced bowl. Served with steamed rice.',
  },
  {
    title: 'Larb Khua',
    image: entreeImages.larbKhua,
    description: 'A dry-style Northern Thai minced meat salad toasted in a hot wok with dried chilies, red onions, and aromatic spices. Served with steamed rice.',
  },
  {
    title: 'Chicken Noodle\nSoup',
    image: entreeImages.chickenNoodleSoup,
    tags: ['gluten-free'],
    description: 'A soothing, clear broth with tender sliced chicken, rice noodles, and fragrant herbs.',
  },
  {
    title: 'Eggplant\nTofu',
    image: entreeImages.eggplantTofu,
    tags: ['vegan'],
    description: 'Asian eggplant, onions, peppers, and golden deep-fried tofu stir-fried in bean sauce. Served with steamed rice.',
  },
  {
    title: 'Fried\nRice',
    image: entreeImages.friedRice,
    description: 'Classic Thai fried rice wok-tossed with egg, onions, and (chicken, shrimps, tofu, or vegetables).',
  },
  {
    title: 'Gra Dook Moo\n(Pork Ribs)',
    image: entreeImages.graDookMoo,
    description: 'Tender pork baby back ribs slow-roasted with a generous crust of garlic, black pepper, and coriander root until caramelized and fragrant. Served with steamed rice.',
  },
  {
    title: 'Kaeng Daeng\n(Red Curry)',
    image: entreeImages.kaengDaeng,
    tags: ['vegan', 'gluten-free'],
    description: 'A classic Thai red curry with coconut milk, bamboo shoots, peppers, and fresh basil. Served with steamed rice.',
  },
  {
    title: 'Pad Woon Sen',
    image: entreeImages.padWoonSen,
    description: 'Glass noodles stir-fried with egg, vegetables, and (chicken, shrimps, tofu, or vegetables) in a light, savory sauce.',
  },
  {
    title: 'Suki',
    image: entreeImages.suki,
    tags: ['vegan', 'gluten-free'],
    description: 'Glass noodles, two proteins of choice, eggs, and vegetables, all wok-tossed and generously coated in a sweet, tangy, and spicy red suki sauce.',
  },
  {
    title: 'Veggie Tofu\nStir Fry',
    image: entreeImages.veggieTofuStirFry,
    tags: ['vegan'],
    description: 'A colorful medley of mixed vegetables and (chicken, shrimps, tofu, or vegetables) wok-tossed in stir fry sauce. Served with steamed rice.',
  },
]

const beverages = [
  {
    category: 'Sake',
    items: [
      { name: 'Rihaku - Wandering Poet (300 mL)' },
      { name: 'Dreamy Clouds (300 mL)' },
      { name: 'Tozai Living Jewel (300 mL)' },
      { name: 'Tozai Snow Maiden (Nigori) (300 mL)' },
      { name: 'Tozai Night Swim' },
    ],
  },
  {
    category: 'Beer',
    items: [
      { name: 'Singha' },
      { name: 'Tsingtao' },
      { name: 'Sapporo' },
      { name: 'Blue Moon' },
    ],
  },
  {
    category: 'Wine',
    items: [
      { name: 'Crane Lake Pinot Grigio (750 mL)' },
      { name: 'Lucky Star Chardonnay (750 mL)' },
      { name: 'Chasing Lions Cabernet (750 mL)' },
      { name: "Pareto's Pinot Noir (750 mL)" },
      { name: 'Crane Lake Pinot Grigio (175 mL)' },
      { name: 'Crane Lake Chardonnay (175 mL)' },
      { name: 'Crane Lake Cabernet (175 mL)' },
      { name: 'Underwood Pinot Noir (250 mL)' },
    ],
  },
  {
    category: 'NA Beverages',
    items: [
      { name: 'Perrier' },
      { name: 'Thai Iced Tea' },
      { name: 'Thai Iced Coffee' },
      { name: 'Coconut Juice' },
      { name: 'Green tea (hot)' },
      { name: 'Iced tea' },
      { name: 'Soda' },
      { name: 'Bottle water' },
    ],
  },
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

const testimonials = [
  {
    name: 'Harper G',
    location: 'Google Review',
    logoSrc: reviewLogos.googleLogo,
    logoAlt: 'Google logo',
    quote:
      'Chiang Mai is an absolute must-go if you like Thai food. I got the Khao Soi and it was the perfect flavor and it comes with 2 chicken legs that were tender and delicious. Highly highly recommend, if I could give more stars I would.',
  },
  {
    name: 'Julie R',
    location: 'Uber Eats',
    logoSrc: reviewLogos.uberEatsLogo,
    logoAlt: 'uber eats logo',
    quote:
      'Well packed, hot when it arrived.....oh so tasty',
  },
  {
    name: 'Emily C',
    location: 'Doordash',
    logoSrc: reviewLogos.doordashLogo,
    logoAlt: 'doordash logo',
    quote:
      "The food is always excellent! Packed with flavor, so fresh and delicious. We've tried many different dishes and everything has been a hit. Highly recommend. Be sure to get an order of the jerky.",
  },
  {
    name: 'Teagen',
    location: 'Grubhub',
    logoSrc: reviewLogos.grubhubLogo,
    logoAlt: 'grubhub logo',
    quote:
      'The food was the best I have had in a while! Thanks!',
  },
  {
    name: 'Francesco P',
    location: 'Yelp',
    logoSrc: reviewLogos.yelpLogo,
    logoAlt: 'yelp logo',
    quote:
      "Hands down the best coconut curry in the St. Louis area. I've been trying to find a place that has great coconut curry for many months to no avail. In fact, I went as far as driving to Columbia Illinois. The Kaeng Daeng here was fire and honestly nothing else was even close.\n\nExcited to try more dishes soon",
  },
  {
    name: 'Lucy V',
    location: 'Google Review',
    logoSrc: reviewLogos.googleLogo,
    logoAlt: 'Google logo',
    quote:
      "I've taken out and eaten in. Both times have been phenomenal. Khao soi and pad see ew are the way to go. Khao soi is my absolute favorite, this is the best one I've found in stl (second favorite fork & stix).\n\nLove supporting local, would absolutely recommend checking out!",
  },
]

export function HomePage() {
  usePageMeta({
    title: 'Chiang Mai Thai Restaurant | Thai Food in St. Louis',
    description: 'Chiang Mai serves authentic Thai cuisine in St. Louis. Dine in, takeout, or delivery',
  })

  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [platesIndex, setPlatesIndex] = useState(0)
  const [entreesIndex, setEntreesIndex] = useState(0)
  const [flippedPlate, setFlippedPlate] = useState<string | null>(null)
  const [flippedEntree, setFlippedEntree] = useState<string | null>(null)
  const [showSpecialPopup, setShowSpecialPopup] = useState(true)

  const testimonialPageSize = 3
  const platesPageSize = 3
  const entreesPageSize = 6

  const visibleTestimonials = Array.from({ length: testimonialPageSize }, (_, offset) => {
    if (testimonials.length === 0) return undefined
    return testimonials[(testimonialIndex + offset) % testimonials.length]
  }).filter((item): item is (typeof testimonials)[number] => Boolean(item))

  const visiblePlates = craveWorthy.slice(platesIndex, platesIndex + platesPageSize)

  const visibleEntrees = entrees.slice(entreesIndex, entreesIndex + entreesPageSize)

  const scrollTestimonials = (direction: -1 | 1) => {
    if (testimonials.length === 0) return

    setTestimonialIndex(
      (currentIndex) => (currentIndex + direction * testimonialPageSize + testimonials.length) % testimonials.length,
    )
  }

  const scrollPlates = (direction: -1 | 1) => {
    if (craveWorthy.length === 0) return
    setFlippedPlate(null)
    setPlatesIndex((currentIndex) => {
      const pageSize = platesPageSize
      const totalPages = Math.ceil(craveWorthy.length / pageSize)
      const currentPage = Math.floor(currentIndex / pageSize)
      const nextPage = (currentPage + direction + totalPages) % totalPages
      return nextPage * pageSize
    })
  }

  const scrollEntrees = (direction: -1 | 1) => {
    if (entrees.length === 0) return
    setFlippedEntree(null)
    setEntreesIndex((currentIndex) => {
      const pageSize = entreesPageSize
      const totalPages = Math.ceil(entrees.length / pageSize)
      const currentPage = Math.floor(currentIndex / pageSize)
      const nextPage = (currentPage + direction + totalPages) % totalPages
      return nextPage * pageSize
    })
  }

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
            Crafted fresh, dish by dish, with traditional recipes and bold Thai flavors.
          </p>
          <OrderNowDropdown
            align="center"
            contentClassName="mt-5"
            triggerClassName="h-14 px-10 text-lg font-bold shadow-lg transition-all hover:scale-105"
          />
        </div>

        <section className="mx-auto mt-20 max-w-6xl px-4" id="gallery">
          <div className="overflow-hidden rounded-[2rem] border-4 border-border shadow-2xl">
            <video
              src="/assets/chiang-mai-hero-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              className="aspect-video w-full object-cover"
              style={{ pointerEvents: 'none' }}
            />
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
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl text-center md:text-left">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-destructive">
                Testimonial
              </span>
              <h2 className="text-5xl font-bold text-foreground md:text-6xl">
                What Our Customers Say
              </h2>
            </div>
            {/* Navigation buttons moved outside the card grid */}
          </div>
          <div className="relative mb-16">
            <button
              type="button"
              aria-label="Previous testimonials"
              className="absolute -left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:-left-16"
              onClick={() => scrollTestimonials(-1)}
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {visibleTestimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-border/30 bg-card p-10 shadow-xl"
                >
                  <div className="mb-6 flex gap-1 text-xl text-destructive">★★★★★</div>
                  <p className="mb-10 leading-relaxed text-muted-foreground">{item.quote}</p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-bold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                    <img
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      className="h-6 w-6 shrink-0 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonials"
              className="absolute -right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:-right-16"
              onClick={() => scrollTestimonials(1)}
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
          </div>
        </section>

        <section className="mx-auto mb-32 mt-24 max-w-6xl px-4" id="menu">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Small Plates
              </h2>
            </div>
            {/* Navigation buttons inside carousel wrapper */}
          </div>
          <div className="relative">
            <button
              type="button"
              aria-label="Previous small plates"
              className="absolute -left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:-left-16"
              onClick={() => scrollPlates(-1)}
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {visiblePlates.map((item) => (
              <div
                key={item.title}
                className={`relative cursor-pointer rounded-[2rem] border border-border/30 bg-muted shadow-xl transition-shadow hover:shadow-2xl ${flippedPlate === item.title ? 'card-flipped' : ''}`}
                style={{ perspective: '1200px' }}
                onClick={() => item.description && setFlippedPlate(flippedPlate === item.title ? null : item.title)}
              >
                <div className="card-inner relative" style={{ aspectRatio: '4 / 3' }}>
                  {/* ── Front ── */}
                  <div className="card-front" style={{ borderRadius: '2rem' }}>
                    <img
                      src={item.image}
                      alt={item.title.replace('\n', ' ')}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="whitespace-pre-line text-xl font-bold leading-tight text-white">
                        {item.title}
                        {item.tags?.map((tag) => (
                          <img
                            key={tag}
                            src={tag === 'vegan' ? dietaryIcons.vegan : dietaryIcons.glutenFree}
                            alt={tag === 'vegan' ? 'Vegan' : 'Gluten Free'}
                            className="ml-1.5 inline-block h-10 w-10 align-middle"
                          />
                        ))}
                      </h3>
                    </div>
                  </div>

                  {/* ── Back ── */}
                  <div className="card-back" style={{ borderRadius: '2rem' }}>
                    <div className="mb-3 flex items-center gap-2">
                      <h3 className="whitespace-pre-line text-xl font-bold text-primary md:text-2xl">
                        {item.title}
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

                    <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground/40">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a4 4 0 0 1 4 4v2M3 10l4-4m-4 4 4 4" />
                      </svg>
                      <span>Tap to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <button
              type="button"
              aria-label="Next small plates"
              className="absolute -right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:-right-16"
              onClick={() => scrollPlates(1)}
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
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-6xl px-4">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                Entrees
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-accent" />
            </div>
            {/* Navigation buttons inside carousel wrapper */}
          </div>
          <div className="relative">
            <button
              type="button"
              aria-label="Previous entrees"
              className="absolute -left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:-left-16"
              onClick={() => scrollEntrees(-1)}
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleEntrees.map((item) => (
              <div
                key={item.title}
                className={`relative cursor-pointer rounded-[2rem] border border-border/30 bg-muted shadow-xl transition-shadow hover:shadow-2xl ${flippedEntree === item.title ? 'card-flipped' : ''}`}
                style={{ perspective: '1200px' }}
                onClick={() => item.description && setFlippedEntree(flippedEntree === item.title ? null : item.title)}
              >
                <div className="card-inner relative" style={{ aspectRatio: '4 / 3' }}>
                  {/* ── Front ── */}
                  <div className="card-front" style={{ borderRadius: '2rem' }}>
                    <img
                      src={item.image}
                      alt={item.title.replace('\n', ' ')}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="whitespace-pre-line text-xl font-bold leading-tight text-white">
                        {item.title}
                        {item.tags?.map((tag) => (
                          <img
                            key={tag}
                            src={tag === 'vegan' ? dietaryIcons.vegan : dietaryIcons.glutenFree}
                            alt={tag === 'vegan' ? 'Vegan' : 'Gluten Free'}
                            className="ml-1.5 inline-block h-10 w-10 align-middle"
                          />
                        ))}
                      </h3>
                    </div>
                  </div>

                  {/* ── Back ── */}
                  <div className="card-back" style={{ borderRadius: '2rem' }}>
                    <div className="mb-3 flex items-center gap-2">
                      <h3 className="whitespace-pre-line text-xl font-bold text-primary md:text-2xl">
                        {item.title}
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

                    <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground/40">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a4 4 0 0 1 4 4v2M3 10l4-4m-4 4 4 4" />
                      </svg>
                      <span>Tap to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <button
              type="button"
              aria-label="Next entrees"
              className="absolute -right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-outline/60 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:-right-16"
              onClick={() => scrollEntrees(1)}
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
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-6xl px-4">
          <div className="mb-12">
            <div className="max-w-2xl">
              <h2 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                Beverages
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-accent" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {beverages.map((cat) => (
              <div key={cat.category}>
                <h3 className="mb-4 border-b border-border/40 pb-2 text-xl font-bold text-foreground">
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-md px-4">
          <SmsOptInForm />
        </section>
      </main>

      <SiteFooter />

      <ImagePopup
        src="/assets/special_days/mango_sticky_rice.png"
        alt="Mango Sticky Rice - Thai Dessert Special"
        open={showSpecialPopup}
        onClose={() => setShowSpecialPopup(false)}
      />
    </div>
  )
}