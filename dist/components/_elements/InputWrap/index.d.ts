import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface InputWrapProps {
    children?: React.ReactNode;
    focused?: boolean;
    height?: number;
    maxHeight?: number;
    validationState: ValidationState;
}
export declare const InputWrap: React.FC<InputWrapProps>;
export {};
