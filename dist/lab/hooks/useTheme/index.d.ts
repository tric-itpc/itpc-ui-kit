import { Theme } from "../../../enums";
interface UseTheme {
    theme: Theme;
    themeClass: string;
    toggleTheme: () => void;
}
export declare const useTheme: () => UseTheme;
export {};
