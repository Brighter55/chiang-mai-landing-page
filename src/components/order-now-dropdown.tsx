import { ArrowUpRight, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const orderLinks = [
  { label: 'Official Website', href: 'https://online.skytab.com/dce841a4ec3f0964b126ce32a7387525' },
  { label: 'Doordash', href: 'https://www.doordash.com/store/chiang-mai-(webster-groves)-webster-groves-150533/51182348/?pickup=true&rwg_token=AFd1xnHMjjVcOQIU-rEkdljFIOlAVQiPXipYbtDRf7JneuPBYo07xB3HwbxZn8q_cJAEGj_qkXWF8Q1HfDZE_iWfA2S1VtFOuQ==&utm_campaign=gpa' },
  { label: 'Uber Eats', href: 'https://www.ubereats.com/store/chiang-mai/pouTPR4JUVCN6zukpm1Xig?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnG1sPO49-568HUYxXuBANO36MUWI7aRrI7M7fSVQFbqXOQIZppOx2BxWXl6YLC2Ac2NGOwIUZo8Vbs6pu5yCb3cwgDOcw%3D%3D' },
  { label: 'Grubhub', href: 'https://www.grubhub.com/restaurant/chiang-mai-8158-big-bend-blvd-saint-louis/6055360?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnHAJMTUixti9guW0BygEU-hCOaETffCjBt5i5AlXGd0EedHn43Qi89viuLX2RV7m4cvDlTX-OL1xY1jblIdSpGTv1ybaA%3D%3D' },
]

type OrderNowDropdownProps = {
  align?: 'start' | 'center' | 'end'
  contentClassName?: string
  triggerClassName?: string
  label?: string
}

export function OrderNowDropdown({
  align = 'end',
  contentClassName,
  triggerClassName,
  label = 'Order Now',
}: OrderNowDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn('group', triggerClassName)} variant="default">
          {label}
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className={cn(
          'mt-4 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-[#d8ad97] bg-[#efcdbb] p-2 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.28)]',
          contentClassName,
        )}
      >
        {orderLinks.map((link) => (
          <DropdownMenuItem key={link.label} asChild className="overflow-hidden rounded-3xl p-0 focus:bg-transparent">
            <a
              className="flex w-full items-center justify-between rounded-3xl px-5 py-4 text-base font-semibold text-foreground transition-colors hover:bg-[#d8ad97] hover:text-foreground data-highlighted:bg-[#d8ad97] data-highlighted:text-foreground"
              href={link.href}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="h-4 w-4 opacity-60" />
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}