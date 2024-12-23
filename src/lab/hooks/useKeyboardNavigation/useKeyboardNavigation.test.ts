import React from "react"

import { act, renderHook } from "@testing-library/react"

import { Item } from "../../../components"
import { KeyCode } from "../../../enums"

import { useKeyboardNavigation } from "./index"

describe("Хук useKeyboardNavigation", () => {
  const items: Item[] = [
    { id: "1", value: "Item 1" },
    { disabled: true, id: "2", value: "Item 2" },
    { id: "3", value: "Item 3" },
    { id: "4", value: "Item 4" },
  ]

  test("Инициализируется с activeIndex = -1", () => {
    const { result } = renderHook(() => useKeyboardNavigation(items))
    expect(result.current.activeIndex).toBe(-1)
  })

  test("Обрабатывает нажатие ArrowDown и выбирает следующий активный элемент", () => {
    const { result } = renderHook(() => useKeyboardNavigation(items))

    const event = {
      key: KeyCode.ARROW_DOWN,
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>

    act(() => {
      result.current.handleKeyUpAndDown(event)
    })

    expect(result.current.activeIndex).toBe(0)
  })

  test("Пропускает отключенные элементы при нажатии ArrowDown", () => {
    const { result } = renderHook(() => useKeyboardNavigation(items))

    act(() => {
      result.current.setActiveIndex(0)
    })

    const event = {
      key: KeyCode.ARROW_DOWN,
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>

    act(() => {
      result.current.handleKeyUpAndDown(event)
    })

    expect(result.current.activeIndex).toBe(2)
  })

  test("Обрабатывает нажатие ArrowUp и выбирает предыдущий активный элемент", () => {
    const { result } = renderHook(() => useKeyboardNavigation(items))

    act(() => {
      result.current.setActiveIndex(3)
    })

    const event = {
      key: KeyCode.ARROW_UP,
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>

    act(() => {
      result.current.handleKeyUpAndDown(event)
    })

    expect(result.current.activeIndex).toBe(2)
    expect(event.preventDefault).toHaveBeenCalled()
  })

  test("Пропускает отключенные элементы при нажатии ArrowUp", () => {
    const { result } = renderHook(() => useKeyboardNavigation(items))

    act(() => {
      result.current.setActiveIndex(3)
    })

    const event = {
      key: KeyCode.ARROW_UP,
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>

    act(() => {
      result.current.handleKeyUpAndDown(event)
    })
    act(() => {
      result.current.handleKeyUpAndDown(event)
    })

    expect(result.current.activeIndex).toBe(0)
    expect(event.preventDefault).toHaveBeenCalledTimes(2)
  })

  test("Циклическая навигация при достижении конца списка", () => {
    const { result } = renderHook(() => useKeyboardNavigation(items))

    act(() => {
      result.current.setActiveIndex(3)
    })

    const eventDown = {
      key: KeyCode.ARROW_DOWN,
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>

    act(() => {
      result.current.handleKeyUpAndDown(eventDown)
    })

    expect(result.current.activeIndex).toBe(0)
    expect(eventDown.preventDefault).toHaveBeenCalled()

    const eventUp = {
      key: KeyCode.ARROW_UP,
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>

    act(() => {
      result.current.handleKeyUpAndDown(eventUp)
    })

    expect(result.current.activeIndex).toBe(3)
    expect(eventUp.preventDefault).toHaveBeenCalled()
  })
})
