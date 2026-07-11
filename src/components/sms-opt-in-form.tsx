import { type FormEvent, useState } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { PhoneInput, type Value } from '@/components/ui/phone-input'

export function SmsOptInForm() {
  const [phone, setPhone] = useState<Value>('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    const phoneStr = (phone ?? '').toString().trim()

    // Require consent when a phone number is provided
    if (phoneStr && !consent) {
      setError('You must agree to receive SMS messages if you provide a phone number.')
      return
    }

    // Validate phone if provided
    if (phoneStr && !isValidPhoneNumber(phoneStr)) {
      setError('Please enter a valid phone number.')
      return
    }

    setSubmitting(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      const res = await fetch(`${apiUrl}/opt-in/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneStr }),
      })

      if (!res.ok) {
        let message = 'Something went wrong. Please try again.'
        try {
          const data = await res.json()
          // DRF field-level errors come as { "phone": ["..."] }
          if (data?.phone?.[0]) {
            message = data.phone[0]
          } else if (data?.detail) {
            message = data.detail
          }
        } catch {
          // couldn't parse JSON — use default message
        }
        throw new Error(message)
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
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
          You&apos;ll receive a text when your pickup order is ready.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border/30 bg-card p-8 shadow-xl">
      <h3 className="mb-2 text-xl font-bold text-foreground">Get SMS Updates</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        Get notified by text message when your pickup order is ready.
      </p>

      <div className="mb-4">
        <label htmlFor="sms-phone" className="mb-1.5 block text-sm font-medium text-foreground">
          Phone Number <span className="text-muted-foreground">(optional)</span>
        </label>
        <PhoneInput
          id="sms-phone"
          value={phone}
          onChange={(value) => { setPhone(value); setError('') }}
          placeholder="(314) 961-8889"
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
            By checking this box, I agree to receive text messages from Chiang Mai for order-ready pickup notifications. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not required to make a purchase.{' '}
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
