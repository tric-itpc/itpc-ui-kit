import { useContext, useState } from "react"

import { ConfigContext } from "../../../context/ConfigContext"
import { Theme } from "../../../enums"

interface UseTheme {
  theme: Theme
  themeClass: string
  toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
  const { themeComponent } = useContext(ConfigContext)

  if (!themeComponent) {
    return {
      theme: Theme.DEFAULT,
      themeClass: "",
      toggleTheme: () => {},
    }
  }

  const { setTheme, theme } = themeComponent
  const [currentTheme, setCurrentTheme] = useState(theme)

  const toggleTheme = (): void => {
    const newTheme = currentTheme === Theme.DARK ? Theme.DEFAULT : Theme.DARK
    setTheme?.(newTheme)
    setCurrentTheme(newTheme)
  }

  return {
    theme: currentTheme,
    themeClass:
      Theme.DEFAULT === currentTheme ? "" : `itpc-theme-${currentTheme}`,
    toggleTheme,
  }
}
