declare module 'react-intersection-observer' {
  export interface IntersectionOptions {
    threshold?: number | number[]
    root?: Element | null
    rootMargin?: string
    triggerOnce?: boolean
    skip?: boolean
    initialInView?: boolean
    fallbackInView?: boolean
    trackVisibility?: boolean
    delay?: number
  }

  export function useInView(
    options?: IntersectionOptions
  ): [React.RefCallback<Element>, boolean, IntersectionObserverEntry | undefined]
}
