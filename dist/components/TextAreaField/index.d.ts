import React from "react";
import { ValidationState } from "../types";
export interface Props {
    id: string;
    name: string;
    value?: string;
    maxHeight?: number;
    disabled?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    className?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare const TextAreaField: React.FC<Props>;
