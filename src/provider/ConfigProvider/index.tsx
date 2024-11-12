import React, { useEffect, useMemo, useState } from "react"

import { ConfigContext, ConfigContextProps } from "../../context/ConfigContext"
import { Theme } from "../../enums"

import { ConfigProviderProps } from "./types"

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children } = props
  const [theme, setTheme] = useState<Theme>(props.theme ?? Theme.DEFAULT)

  const themeClass = Theme.DEFAULT === theme ? "" : `itpc-theme-${theme}`

  const defaultProps: ConfigContextProps = useMemo(
    () => ({
      themeComponent: {
        setTheme,
        theme,
        themeClass,
      },
    }),
    [theme]
  )

  useEffect(() => {
    const className = document.body.className.replace(/^itpc-theme-\w+/, "")

    document.body.className = `${className}`
  }, [themeClass])

  return (
    <ConfigContext.Provider value={defaultProps}>
      {children}
    </ConfigContext.Provider>
  )
}
