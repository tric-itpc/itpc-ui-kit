import React from "react"

import { act, renderHook } from "@testing-library/react"

import { ConfigContext } from "../../../context/ConfigContext"
import { Theme } from "../../../enums"

import { useTheme } from "./index"

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ConfigContext.Provider
    value={{
      libClass: "",
      setTheme: jest.fn(),
      theme: Theme.DEFAULT,
    }}
  >
    {children}
  </ConfigContext.Provider>
)

describe("Хук useTheme", () => {
  test("Должен выбрасывать ошибку при использовании вне провайдера", () => {
    const originalError = console.error
    console.error = jest.fn()

    expect(() => {
      renderHook(() => useTheme())
    }).toThrow("useTheme должен использоваться внутри <ConfigContext>")

    console.error = originalError
  })

  test("Инициализируется с дефолтной темой", () => {
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe(Theme.DEFAULT)
    expect(result.current.libClass).toBe("")
  })
  test("Инициализируется темной темой", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ConfigContext.Provider
          value={{
            libClass: "itpc-theme-dark",
            setTheme: jest.fn(),
            theme: Theme.DARK,
          }}
        >
          {children}
        </ConfigContext.Provider>
      ),
    })

    expect(result.current.theme).toBe(Theme.DARK)
    expect(result.current.libClass).toBe("itpc-theme-dark")
  })

  test("Переключает тему при вызове toggleTheme", () => {
    let theme = Theme.DEFAULT
    const setTheme = (newTheme: Theme) => {
      theme = newTheme
    }
    const { rerender, result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ConfigContext.Provider
          value={{
            libClass: theme === Theme.DARK ? "itpc-theme-dark" : "",
            setTheme,
            theme,
          }}
        >
          {children}
        </ConfigContext.Provider>
      ),
    })

    expect(result.current.theme).toBe(Theme.DEFAULT)

    act(() => {
      result.current.toggleTheme()
    })

    rerender()

    expect(result.current.theme).toBe(Theme.DARK)
    expect(result.current.libClass).toBe("itpc-theme-dark")

    act(() => {
      result.current.toggleTheme()
    })

    rerender()

    expect(result.current.theme).toBe(Theme.DEFAULT)
    expect(result.current.libClass).toBe("")
  })
})
