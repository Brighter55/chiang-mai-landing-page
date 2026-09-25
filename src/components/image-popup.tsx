import { useEffect, useRef, useState } from 'react'
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
  // Track *which* src finished rather than a boolean, so a different image
  // (or a re-open) starts out not-ready without needing a reset effect.
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const ready = loadedSrc === src
  const failed = failedSrc === src

  // Held in a ref so the effects below don't re-run on every parent render.
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return

    let cancelled = false
    const image = new Image()
    image.onload = () => {
      if (!cancelled) setLoadedSrc(src)
    }
    image.onerror = () => {
      if (!cancelled) setFailedSrc(src)
    }
    image.src = src

    return () => {
      cancelled = true
    }
  }, [open, src])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current()
    }

    // Restore whatever was there before rather than clearing it.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (open && ready) closeButtonRef.current?.focus()
  }, [open, ready])

  if (!open || !ready || failed) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="image-popup fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => onCloseRef.current()}
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close popup"
        onClick={() => onCloseRef.current()}
        className={cn(
          'absolute right-4 top-4 flex h-11 w-11 items-center justify-center',
          'rounded-full bg-black/70 text-white ring-1 ring-white/50',
          'transition-colors hover:bg-black/90',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        )}
      >
        <X className="h-5 w-5" />
      </button>

      <img
        src={src}
        alt={alt}
        className="image-popup__img rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  )
}
