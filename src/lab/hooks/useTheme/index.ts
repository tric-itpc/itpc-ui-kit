import { useCallback, useContext } from "react"

import { ConfigContext } from "../../../context/ConfigContext"
import { Theme } from "../../../enums"

interface UseTheme {
  libClass: string
  setTheme: (theme: Theme) => void
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
  const context = useContext(ConfigContext)

  if (!context) {
    throw new Error("useTheme должен использоваться внутри <ConfigContext>")
  }

  const { setTheme, theme } = context

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK
    setTheme?.(newTheme)
  }, [theme, setTheme])

  return {
    ...context,
    toggleTheme,
  }
}
