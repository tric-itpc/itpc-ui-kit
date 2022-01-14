import { ButtonStyles } from "../styles";
import { ButtonVariant } from "../types";
interface Props extends ButtonStyles {
    variant?: ButtonVariant;
}
export declare const Button: import("styled-components").StyledComponent<"button", any, Props, never>;
export {};
