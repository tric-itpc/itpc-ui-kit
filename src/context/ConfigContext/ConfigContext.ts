import React, { createContext } from "react"

import { ConfigContextProps } from "./types"

export const ConfigContext: React.Context<ConfigContextProps> =
  createContext<ConfigContextProps>({})
