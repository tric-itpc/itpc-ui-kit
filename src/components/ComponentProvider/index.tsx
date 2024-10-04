import React, { useMemo, useState } from "react"

import { ComponentContext } from "../../lab/ComponentContext"
import {
  type ComponentContextProps,
  type ComponentProviderProps,
  Theme,
} from "../types"

export const ComponentProvider: React.FC<ComponentProviderProps> = (props) => {
  const { children } = props
  const [theme, setTheme] = useState<Theme>(Theme.DEFAULT)

  const themeClass = Theme.DEFAULT === theme ? "" : `itpc-theme-${theme}`
  const defaultProps: ComponentContextProps = useMemo(
    () => ({
      themeComponent: {
        setTheme,
        theme,
        themeClass,
      },
    }),
    [theme]
  )

  return (
    <ComponentContext.Provider value={defaultProps}>
      {children}
    </ComponentContext.Provider>
  )
}
