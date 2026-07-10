import * as React from 'react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

import RPNInput, {
  type Country,
  type Value,
} from 'react-phone-number-input'

// ── Phone input wrapper ─────────────────────────────────────────

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'defaultValue'> {
  value?: Value
  onChange?: (value: Value) => void
}

function PhoneInput({ className, onChange, ...props }: PhoneInputProps) {
  return (
    <RPNInput
      defaultCountry="US"
      international={false}
      countrySelectComponent={NoCountrySelect}
      className={cn('flex', className)}
      inputComponent={InputComponent}
      smartCaret={false}
      onChange={(value) => onChange?.(value || ('' as Value))}
      {...props}
    />
  )
}

function NoCountrySelect() {
  return null
}

// ── Styled input ────────────────────────────────────────────────

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <Input
    className={cn('rounded-xl', className)}
    ref={ref}
    {...props}
  />
))

InputComponent.displayName = 'InputComponent'

export { PhoneInput }
export { type Country, type Value }
