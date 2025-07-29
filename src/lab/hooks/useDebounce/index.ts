import { MutableRefObject, useCallback, useRef } from "react"

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export const useDebounce = (
  callback: (...args: any[]) => Promise<void>,
  delay: number
) => {
  const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )
}
