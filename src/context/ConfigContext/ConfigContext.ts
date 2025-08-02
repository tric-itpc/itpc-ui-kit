import { createContext } from "react"

import type { ThemeContext } from "./types"

export const ConfigContext = createContext<ThemeContext | undefined>(undefined)
