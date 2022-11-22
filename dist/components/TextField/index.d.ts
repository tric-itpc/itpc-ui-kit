import React from 'react';
import { InputState, InputType, ValidationState } from "../types";
export interface Props {
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
    className?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string) => void;
    onClickIcon?: () => void;
}
export declare const TextField: React.FC<Props>;
