import { useEffect } from 'react'

type PageMeta = {
  title: string
  description: string
  /** When true, emits a robots noindex tag so the page is dropped from search engines (still crawlable). */
  noindex?: boolean
}

export function usePageMeta({ title, description, noindex = false }: PageMeta) {
  useEffect(() => {
    document.title = title

    const setMetaContent = (name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.name = name
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMetaContent('description', description)

    let robotsEl: HTMLMetaElement | null = null
    if (noindex) {
      robotsEl = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
      if (!robotsEl) {
        robotsEl = document.createElement('meta')
        robotsEl.name = 'robots'
        document.head.appendChild(robotsEl)
      }
      robotsEl.content = 'noindex, nofollow'
    }

    return () => {
      // Remove the robots tag we added so a later route isn't accidentally noindexed
      if (noindex && robotsEl) {
        robotsEl.remove()
      }
    }
  }, [title, description, noindex])
}
