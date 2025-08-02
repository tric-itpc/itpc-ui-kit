import { Theme } from "../../enums"

export interface ThemeContext {
  libClass: string
  setTheme: (theme: Theme) => void
  theme: Theme
}
