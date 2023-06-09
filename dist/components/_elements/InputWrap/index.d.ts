import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface InputWrapProps {
    focused?: boolean;
    validationState: ValidationState;
    height?: number;
    maxHeight?: number;
    children?: React.ReactNode;
}
export declare const InputWrap: React.FC<InputWrapProps>;
export {};
