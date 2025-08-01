import React, { useEffect, useMemo, useState } from "react"

import { ConfigContext } from "../../context/ConfigContext"
import { Theme } from "../../enums"

import { ConfigProviderProps } from "./types"

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, defaultTheme = Theme.DEFAULT } = props

  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const libClass = theme === Theme.DEFAULT ? "" : `$itpc-theme-${theme}`

  useEffect(() => {
    const currentThemeClasses = Array.from(document.body.classList).filter(
      (className) => className.startsWith("itpc-theme-")
    )
    currentThemeClasses.forEach((className) => {
      document.body.classList.remove(className)
    })

    if (libClass) {
      document.body.classList.add(`itpc-theme-${theme}`)
    }
  }, [libClass])

  const value = useMemo(
    () => ({
      libClass,
      setTheme,
      theme,
    }),
    [theme, libClass]
  )

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  )
}
