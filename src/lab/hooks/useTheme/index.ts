import { useContext, useState } from "react"

import { ConfigContext } from "../../../context/ConfigContext"
import { Theme } from "../../../enums"

interface UseTheme {
  theme: Theme
  themeClass: string
  toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
  const { theme } = useContext(ConfigContext)

  if (!theme) {
    return {
      theme: Theme.DEFAULT,
      themeClass: "",
      toggleTheme: () => {},
    }
  }

  const { setType, type } = theme
  const [currentTheme, setCurrentTheme] = useState(type)

  const toggleTheme = (): void => {
    const newTheme = currentTheme === Theme.DARK ? Theme.DEFAULT : Theme.DARK
    setType?.(newTheme)
    setCurrentTheme(newTheme)
  }

  return {
    theme: currentTheme,
    themeClass:
      Theme.DEFAULT === currentTheme ? "" : `itpc-theme-${currentTheme}`,
    toggleTheme,
  }
}
