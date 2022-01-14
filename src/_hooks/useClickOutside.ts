import { MutableRefObject, useEffect, useRef } from "react"

export const useClickOutside = <T extends HTMLElement>(handler: () => void): MutableRefObject<T> => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const clickOutside = (event: Event) => {
      if (ref && !ref.current?.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', clickOutside)

    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  })

  return ref as MutableRefObject<T>
}
