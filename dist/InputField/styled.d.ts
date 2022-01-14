import { InputType } from "../types";
interface Props {
    focused: boolean;
    disabled: boolean;
}
export interface InputProps {
    type: InputType;
    focused: boolean;
    valueLength: number;
}
export declare const InputField: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const Placeholder: import("styled-components").StyledComponent<"label", any, Props, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export {};
