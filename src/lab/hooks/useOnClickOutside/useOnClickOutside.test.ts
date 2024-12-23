import { RefObject } from "react"

import { act, renderHook } from "@testing-library/react"

import { useOnClickOutside } from "./index"

describe("Хук useOnClickOutside", () => {
  test("Вызывает handler при клике вне элемента", () => {
    const mockHandler = jest.fn()
    const ref = {
      current: document.createElement("div"),
    } as RefObject<HTMLDivElement>
    document.body.appendChild(ref.current as HTMLElement)

    renderHook(() => useOnClickOutside(ref, mockHandler))

    act(() => {
      const clickEvent = new MouseEvent("mouseup", { bubbles: true })
      document.dispatchEvent(clickEvent)
    })

    expect(mockHandler).toHaveBeenCalled()
  })

  test("Не вызывает handler при клике внутри элемента", () => {
    const mockHandler = jest.fn()
    const ref = {
      current: document.createElement("div"),
    } as RefObject<HTMLDivElement>
    document.body.appendChild(ref.current as HTMLElement)

    renderHook(() => useOnClickOutside(ref, mockHandler))

    act(() => {
      const clickEvent = new MouseEvent("mouseup", { bubbles: true })
      ref.current?.dispatchEvent(clickEvent)
    })

    expect(mockHandler).not.toHaveBeenCalled()
  })

  test("Не добавляет слушатели, если show = false", () => {
    const mockHandler = jest.fn()
    const ref = { current: null } as RefObject<HTMLElement>
    const addEventListenerSpy = jest.spyOn(document, "addEventListener")
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener")

    renderHook(() => useOnClickOutside(ref, mockHandler, false))

    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      "mouseup",
      expect.any(Function)
    )
    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      "touchend",
      expect.any(Function)
    )

    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })

  test("Удаляет слушатели при отмене подписки", () => {
    const mockHandler = jest.fn()
    const ref = {
      current: document.createElement("div"),
    } as RefObject<HTMLDivElement>
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener")

    const { unmount } = renderHook(() => useOnClickOutside(ref, mockHandler))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "mouseup",
      expect.any(Function)
    )
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "touchend",
      expect.any(Function)
    )

    removeEventListenerSpy.mockRestore()
  })

  test("Поддерживает дополнительный handlerRef", () => {
    const mockHandler = jest.fn()
    const ref = {
      current: document.createElement("div"),
    } as RefObject<HTMLDivElement>
    const handlerRef = {
      current: document.createElement("div"),
    } as RefObject<HTMLDivElement>
    document.body.appendChild(ref.current as HTMLElement)
    document.body.appendChild(handlerRef.current as HTMLElement)

    renderHook(() => useOnClickOutside(ref, mockHandler, true, handlerRef))

    act(() => {
      const clickEvent = new MouseEvent("mouseup", { bubbles: true })
      handlerRef.current?.dispatchEvent(clickEvent)
    })

    expect(mockHandler).not.toHaveBeenCalled()

    act(() => {
      const clickEvent = new MouseEvent("mouseup", { bubbles: true })
      document.dispatchEvent(clickEvent)
    })

    expect(mockHandler).toHaveBeenCalled()
  })
})
