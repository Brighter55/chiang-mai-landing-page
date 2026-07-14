import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrderNowDropdown } from '@/components/order-now-dropdown'

const assetImages = {
  logo: '/assets/logo-white.png',
}

export function PrivacyPage() {
  return (
    <div className="stitch-theme min-h-screen bg-background text-foreground" id="top">
      <SiteHeader
        logoSrc={assetImages.logo}
        logoAlt="Chiang Mai logo"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Menu', href: '/#menu' },
          { label: 'Gallery', href: '/gallery' },
        ]}
        primaryAction={
          <OrderNowDropdown
            align="end"
            triggerClassName="h-12 rounded-full px-6 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:scale-105"
          />
        }
      />

      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="mb-2 text-4xl font-extrabold text-foreground md:text-5xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-muted-foreground"><strong>Last Updated: July 10, 2026</strong></p>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Chiang Mai – SMS Privacy Policy</h2>
            <p>
              BEST THAI STL LLC, doing business as Chiang Mai (&ldquo;Chiang Mai,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is committed to protecting your privacy.
              This policy describes how we collect and use your information in connection with our SMS program.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Information We Collect</h3>
            <p>
              When you submit your phone number via our website opt-in form, you voluntarily provide your phone number
              to receive SMS communications from us.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">How We Use Your Information</h3>
            <p>Your phone number may be used to send you:</p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>A single SMS notification when your pickup order is ready</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Information Sharing</h3>
            <p>
              We will not share, sell, rent, or trade your mobile phone number or SMS consent with any third party
              for their marketing purposes.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Message Frequency</h3>
            <p>
              Message frequency: You will receive one (1) SMS per order for order-ready notifications.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Message &amp; Data Rates</h3>
            <p>Message and data rates may apply depending on your mobile carrier and plan.</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Opt-Out</h3>
            <p>
              You may opt out of receiving SMS messages at any time by replying STOP to any message you receive from us.
              After opting out you will receive no further messages.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Help</h3>
            <p>
              Reply HELP to any message for assistance, or contact us at{' '}
              <a href="mailto:bestthaistl@gmail.com" className="text-primary underline hover:opacity-80">bestthaistl@gmail.com</a>.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Contact Us</h3>
            <p>Chiang Mai (BEST THAI STL LLC)</p>
            <p>
              <a href="mailto:bestthaistl@gmail.com" className="text-primary underline hover:opacity-80">bestthaistl@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
