import type { ReactNode } from "react"

import { Theme } from "../../enums"

export interface ConfigProviderProps {
  children: ReactNode
  theme?: {
    disabled?: boolean
    themeClass?: string
    type: Theme
  }
}
