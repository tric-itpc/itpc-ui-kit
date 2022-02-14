import React from 'react';
import { InputState, InputType, ValidationState } from "../types";
export interface TextFieldProps {
    id: string;
    name: string;
    type?: InputType;
    value?: string;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    state?: InputState;
    validationState?: ValidationState;
    errorMessage?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string) => void;
}
export declare const TextField: React.FC<TextFieldProps>;
