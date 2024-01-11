import React, { HTMLAttributes } from "react";
import { InputType, ValidationState } from "../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    id: string;
    name: string;
    type?: InputType;
    value?: string;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    icon?: React.ReactNode;
    className?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextField: React.FC<Props>;
