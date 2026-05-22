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
  { label: 'GrabFood', href: 'https://food.grab.com/th/en/' },
  { label: 'foodpanda', href: 'https://www.foodpanda.co.th/en/' },
  { label: 'LINE MAN', href: 'https://lineman.line.me/en/' },
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