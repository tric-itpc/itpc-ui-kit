import React from "react";
import { ValidationState } from "../types";
export interface TextAreaFieldProps {
    id: string;
    name: string;
    value?: string;
    maxHeight?: number;
    disabled?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string) => void;
}
export declare const TextAreaField: React.FC<TextAreaFieldProps>;
