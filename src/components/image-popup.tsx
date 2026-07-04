import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ImagePopupProps {
  src: string
  alt: string
  open: boolean
  onClose: () => void
}

export function ImagePopup({ src, alt, open, onClose }: ImagePopupProps) {
  useEffect(() => {
    if (!open) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Relative wrapper to anchor the close button */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={src}
          alt={alt}
          className={cn(
            'max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl',
          )}
        />

        <button
          type="button"
          aria-label="Close popup"
          onClick={onClose}
          className={cn(
            'absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center',
            'rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md',
            'transition-all hover:scale-110 hover:bg-white/30',
          )}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>,
    document.body,
  )
}
