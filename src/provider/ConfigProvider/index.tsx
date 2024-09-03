import React, { useEffect, useMemo, useState } from "react"

import { ConfigContext, ConfigContextProps } from "../../context/ConfigContext"
import { Theme } from "../../enums"

import { ConfigProviderProps } from "./types"

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children } = props
  const [type, setType] = useState<Theme>(props.theme?.type ?? Theme.DEFAULT)

  const themeClass = Theme.DEFAULT === type ? "" : `itpc-theme-${type}`
  const defaultProps: ConfigContextProps = useMemo(
    () => ({
      theme: {
        disabled: props.theme?.disabled ?? false,
        setType,
        themeClass,
        type,
      },
    }),
    [type]
  )

  useEffect(() => {
    const className = document.body.className
      .replace(/itpc-theme-\w+/, "")
      .trim()

    document.body.className = `${className} ${themeClass}`.trim()
  }, [themeClass])

  return (
    <ConfigContext.Provider value={defaultProps}>
      {children}
    </ConfigContext.Provider>
  )
}
