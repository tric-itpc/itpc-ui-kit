import { Theme } from "../../enums";
export interface ThemeContext {
    disabled: boolean;
    setType: (type: Theme) => void;
    themeClass: string;
    type: Theme;
}
export interface ConfigContextProps {
    theme?: ThemeContext;
}
