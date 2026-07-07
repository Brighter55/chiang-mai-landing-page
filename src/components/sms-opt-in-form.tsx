import { type FormEvent, useState } from 'react'

export function SmsOptInForm() {
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (phone.trim() && !consent) {
      setError('You must agree to receive SMS messages if you provide a phone number.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/opt-in/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone.trim() || '' }),
      })
      if (!res.ok && res.status !== 201) {
        throw new Error('Request failed')
      }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-border/30 bg-card p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
          <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">You&apos;re In!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for subscribing to SMS updates from Chiang Mai.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border/30 bg-card p-8 shadow-xl">
      <h3 className="mb-2 text-xl font-bold text-foreground">Get SMS Updates</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        Be the first to know about specials, events, and new menu items — and get notified when your order is ready for pickup.
      </p>

      <div className="mb-4">
        <label htmlFor="sms-phone" className="mb-1.5 block text-sm font-medium text-foreground">
          Phone Number <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="sms-phone"
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setError('') }}
          placeholder="(314) 555-0123"
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); setError('') }}
            className="mt-1 h-4 w-4 rounded border-border/50 accent-primary flex-shrink-0"
          />
          <span className="text-xs leading-relaxed text-muted-foreground">
            By checking this box, I agree to receive text messages from Chiang Mai, including order-ready pickup notifications and recurring marketing communications such as specials, events, and new menu items. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not required to make a purchase.{' '}
            <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>
            {' '}&middot;{' '}
            <a href="/terms" className="underline hover:text-primary">Terms of Service</a>
          </span>
        </label>
      </div>

      {error && (
        <p className="mb-4 text-sm font-medium text-destructive">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50"
      >
        {submitting ? 'Signing Up...' : 'Sign Up for SMS'}
      </button>
    </form>
  )
}
