import type { ReactNode } from "react"

import { Theme } from "../../enums"

export interface ConfigProviderProps {
  children: ReactNode
  theme?: Theme
  themeClass?: string
}