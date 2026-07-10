import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrderNowDropdown } from '@/components/order-now-dropdown'

const assetImages = {
  logo: '/assets/logo-white.png',
}

export function TermsPage() {
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
        <h1 className="mb-2 text-4xl font-extrabold text-foreground md:text-5xl">Terms of Service</h1>
        <p className="mb-10 text-sm text-muted-foreground"><strong>Last Updated: July 10, 2026</strong></p>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Chiang Mai Restaurant – SMS Terms of Service</h2>
            <p>
              By providing your phone number and checking the consent box on our website, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Program Description</h3>
            <p>Chiang Mai Restaurant operates an SMS program that includes:</p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>Order-ready notifications: a single SMS sent when your pickup order is ready for pickup</li>
              <li>Marketing messages: recurring SMS messages including specials, promotions, events, and new menu items</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Consent</h3>
            <p>
              By providing your phone number and checking the opt-in box on our website, you consent to receive both
              transactional and marketing SMS messages from Chiang Mai Restaurant. Consent is not required as a
              condition of purchase.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Message Frequency</h3>
            <p>
              Message frequency varies. You will receive one (1) message per order for order notifications.
              Marketing messages vary based on promotions and events.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Message &amp; Data Rates</h3>
            <p>Message and data rates may apply. Check with your mobile carrier for details.</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Opt-Out</h3>
            <p>
              Reply STOP at any time to opt out of all future messages. After opting out you will receive no further
              messages from us.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Help</h3>
            <p>
              Reply HELP for assistance or contact us at{' '}
              <a href="mailto:bestthaistl@gmail.com" className="text-primary underline hover:opacity-80">bestthaistl@gmail.com</a>.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Eligibility</h3>
            <p>This service is available to customers with a valid U.S. mobile number.</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Changes to These Terms</h3>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the service constitutes
              acceptance of any changes.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Contact Us</h3>
            <p>Chiang Mai Restaurant</p>
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
