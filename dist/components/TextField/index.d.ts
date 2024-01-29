import React, { HTMLAttributes } from "react";
import { InputType, ValidationState } from "../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    icon?: React.ReactNode;
    id: string;
    maxLength?: number;
    name: string;
    onBlur?: () => void;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    placeholder?: string;
    type?: InputType;
    validationState?: ValidationState;
    value?: string;
}
export declare const TextField: React.FC<Props>;
