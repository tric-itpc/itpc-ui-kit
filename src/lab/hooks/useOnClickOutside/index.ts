import { RefObject, useEffect } from "react"

type Event = MouseEvent | TouchEvent

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  show: boolean = true,
  handlerRef?: RefObject<T>
): void => {
  const listener = (event: Event) => {
    const target = ref.current
    const handlerTarget = handlerRef?.current

    if (
      target &&
      !target.contains(event.target as HTMLElement) &&
      !handlerTarget?.contains(event.target as HTMLElement)
    ) {
      handler(event)
    }
  }

  useEffect(() => {
    if (show) {
      document.addEventListener("mouseup", listener)
      document.addEventListener("touchend", listener)
    } else {
      document.removeEventListener("mouseup", listener)
      document.removeEventListener("touchend", listener)
    }
    return () => {
      document.removeEventListener("mouseup", listener)
      document.removeEventListener("touchend", listener)
    }
  }, [ref, handler, show])
}
