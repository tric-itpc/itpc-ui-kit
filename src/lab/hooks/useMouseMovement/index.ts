import { type RefObject, useEffect, useState } from "react"

/**
 * Хук, который позволяет отслеживать движение мыши внутри контейнера
 * @param ref - ссылка на контейнер
 */

type Event = MouseEvent

export const useMouseMovement = <T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T>
) => {
  const [isMouseMoved, setIsMouseMoved] = useState(false)
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref?.current || window
    const handleMouseMove = (event: Event) => {
      const { clientX, clientY } = event

      if (initialPosition.x === 0 && initialPosition.y === 0) {
        setInitialPosition({ x: clientX, y: clientY })
      } else {
        if (clientX !== initialPosition.x || clientY !== initialPosition.y) {
          setIsMouseMoved(true)
        }
      }
    }

    element.addEventListener("mousemove", handleMouseMove as EventListener)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener)
    }
  }, [ref, initialPosition])

  return { isMouseMoved, setIsMouseMoved }
}
