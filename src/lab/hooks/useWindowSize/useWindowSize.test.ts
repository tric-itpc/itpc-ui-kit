import { act, renderHook } from "@testing-library/react"

import { useWindowSize } from "./index"

describe("Хук useWindowSize", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 1024,
      writable: true,
    })
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 768,
      writable: true,
    })
  })

  test("Возвращает начальные размеры окна", () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.windowWidth).toBe(1024)
    expect(result.current.windowHeight).toBe(768)
  })

  test("Обновляет размеры окна при изменении ширины", () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        configurable: true,
        value: 800,
        writable: true,
      })
      window.dispatchEvent(new Event("resize"))
    })

    expect(result.current.windowWidth).toBe(800)
    expect(result.current.windowHeight).toBe(768)
  })

  test("Обновляет размеры окна при изменении высоты", () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      Object.defineProperty(window, "innerHeight", {
        configurable: true,
        value: 600,
        writable: true,
      })
      window.dispatchEvent(new Event("resize"))
    })

    expect(result.current.windowWidth).toBe(1024)
    expect(result.current.windowHeight).toBe(600)
  })

  test("Удаляет обработчик события resize при размонтировании", () => {
    const { unmount } = renderHook(() => useWindowSize())

    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener")

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    )
  })
})
