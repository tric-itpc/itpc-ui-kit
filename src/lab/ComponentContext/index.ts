import { createContext } from "react"

import { ComponentContextProps } from "../../components/types"

export const ComponentContext: React.Context<ComponentContextProps> =
  createContext<ComponentContextProps>({})
