import { act, renderHook } from "@testing-library/react"

import { useDebounce } from "./index"

describe("Хук useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.clearAllTimers()
  })

  test("Вызывает callback только после истечения заданной задержки", async () => {
    const mockCallback = jest.fn()
    const delay = 500

    const { result } = renderHook(() => useDebounce(mockCallback, delay))

    result.current("test")

    expect(mockCallback).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(delay)
    })

    expect(mockCallback).toHaveBeenCalledWith("test")
  })

  test("Отменяет предыдущий вызов, если функция вызвана повторно до истечения задержки", async () => {
    const mockCallback = jest.fn()
    const delay = 500

    const { result } = renderHook(() => useDebounce(mockCallback, delay))

    result.current("first")
    result.current("second")

    act(() => {
      jest.advanceTimersByTime(delay)
    })

    expect(mockCallback).toHaveBeenCalledWith("second")
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  test("Обновляет задержку при изменении параметра delay", async () => {
    const mockCallback = jest.fn()
    const initialDelay = 500
    const newDelay = 1000

    const { rerender, result } = renderHook(
      ({ delay }) => useDebounce(mockCallback, delay),
      { initialProps: { delay: initialDelay } }
    )

    result.current("test")

    rerender({ delay: newDelay })

    result.current("updated")

    act(() => {
      jest.advanceTimersByTime(initialDelay)
    })

    expect(mockCallback).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(newDelay)
    })

    expect(mockCallback).toHaveBeenCalledWith("updated")
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
