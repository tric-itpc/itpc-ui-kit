import { ValidationState } from "../../types";
export interface InputWrapProps {
    height?: number;
    maxHeight?: number;
    validationState: ValidationState;
    focused: boolean;
    disabled: boolean;
}
export interface InputProps {
    focused: boolean;
    valueLength: number;
}
export declare const InputWrap: import("styled-components").StyledComponent<"div", any, InputWrapProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
