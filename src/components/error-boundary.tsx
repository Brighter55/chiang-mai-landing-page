import { Component, type ErrorInfo, type ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  error: Error | null
}

/**
 * Catches render errors so a crash shows a readable message instead of the blank
 * page (which is what an unmounted React tree looks like on a phone).
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled error while rendering:', error, info.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="stitch-theme flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center text-foreground">
        <h1 className="text-2xl font-bold">Sorry — something went wrong</h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          The page could not finish loading. Please reload, or call us at (314) 961-8889.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Reload the page
        </button>
      </div>
    )
  }
}
