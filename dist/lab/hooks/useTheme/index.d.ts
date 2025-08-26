import { Theme } from "../../../enums";
interface UseTheme {
    libClass: string;
    setTheme: (theme: Theme) => void;
    theme: Theme;
    toggleTheme: () => void;
}
export declare const useTheme: () => UseTheme;
export {};
