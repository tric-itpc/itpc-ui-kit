import React from "react"

import { act, renderHook } from "@testing-library/react"

import { ConfigContext } from "../../../context/ConfigContext"
import { Theme } from "../../../enums"

import { useTheme } from "./index"

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ConfigContext.Provider
    value={{
      theme: {
        disabled: false,
        setType: jest.fn(),
        themeClass: "",
        type: Theme.DEFAULT,
      },
    }}
  >
    {children}
  </ConfigContext.Provider>
)

describe("Хук useTheme", () => {
  test("Возвращает дефолтные значения, если контекст не предоставлен", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>
      ),
    })

    expect(result.current.theme).toBe(Theme.DEFAULT)
    expect(result.current.themeClass).toBe("")
    expect(typeof result.current.toggleTheme).toBe("function")
  })

  test("Инициализируется с дефолтной темой", () => {
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe(Theme.DEFAULT)
    expect(result.current.themeClass).toBe("")
  })

  test("Инициализируется темной темой", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ConfigContext.Provider
          value={{
            theme: {
              disabled: false,
              setType: jest.fn(),
              themeClass: "",
              type: Theme.DARK,
            },
          }}
        >
          {children}
        </ConfigContext.Provider>
      ),
    })

    expect(result.current.theme).toBe(Theme.DARK)
  })

  test("Переключает тему при вызове toggleTheme", async () => {
    const { rerender, result } = renderHook(() => useTheme(), {
      wrapper,
    })

    act(() => {
      result.current.toggleTheme()
    })

    rerender()

    expect(result.current.theme).toBe(Theme.DARK)
    expect(result.current.themeClass).toBe("itpc-theme-dark")

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe(Theme.DEFAULT)
    expect(result.current.themeClass).toBe("")
  })
})
