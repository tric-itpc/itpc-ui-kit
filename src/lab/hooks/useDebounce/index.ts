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
      console.log("Setting timeout with args:", args)
      timer.current = setTimeout(() => {
        console.log("Calling callback with args:", args)
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )
}
