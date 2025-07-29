import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface InputWrapProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    disabled?: boolean;
    fixedHeight?: number;
    focused?: boolean;
    height?: number;
    maxHeight?: number;
    validationState: ValidationState;
}
export declare const InputWrap: React.FC<InputWrapProps>;
export {};
