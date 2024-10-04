import { useContext, useState } from "react"

import { Theme } from "../../../components"
import { ComponentContext } from "../../ComponentContext"

interface UseTheme {
  theme: Theme
  themeClass: string
  toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
  const { themeComponent } = useContext(ComponentContext)

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
