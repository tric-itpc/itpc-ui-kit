import { Theme } from "../../enums"

export interface ThemeContext {
  setTheme: (theme: Theme) => void
  theme: Theme
  themeClass: string
}

export interface ConfigContextProps {
  themeComponent?: ThemeContext
}
