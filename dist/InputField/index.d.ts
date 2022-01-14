import React from 'react';
import { InputType } from "../types";
export interface InputFieldProps {
    id: string;
    name: string;
    type?: InputType;
    value?: string;
    loading?: boolean;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string) => void;
}
export declare const InputField: React.FC<InputFieldProps>;
