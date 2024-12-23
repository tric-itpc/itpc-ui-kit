import { act, renderHook, waitFor } from "@testing-library/react"

import { useAnimation } from "./index"

describe("useAnimation", () => {
  test("должен инициализировать isClosing значением true", () => {
    const { result } = renderHook(() =>
      useAnimation(true, { durationClose: 1000 })
    )

    expect(result.current.isClosing).toBe(true)
  })

  test("должен установить isClosing значение false при изменении isOpen на true", async () => {
    jest.useFakeTimers()

    const { rerender, result } = renderHook(
      (props) => useAnimation(props.isOpen, { durationClose: 1000 }),
      { initialProps: { isOpen: false } }
    )

    rerender({ isOpen: true })
    jest.advanceTimersByTime(1000)

    await waitFor(() => expect(result.current.isClosing).toBe(false))
  })

  test("должен установить isClosing значение true при изменении isOpen на false", async () => {
    jest.useFakeTimers()

    const { rerender, result } = renderHook(
      (props) => useAnimation(props.isOpen, { durationClose: 1000 }),
      { initialProps: { isOpen: true } }
    )

    rerender({ isOpen: false })
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => expect(result.current.isClosing).toBe(true))
  })
})
