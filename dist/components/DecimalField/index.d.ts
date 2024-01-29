import React, { HTMLAttributes } from "react";
import { ValidationState } from "../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onFocus" | "onBlur"> {
    accuracy: number;
    canEmptyString: boolean;
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    icon?: React.ReactNode;
    id: string;
    maxLength?: number;
    name: string;
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    validationState?: ValidationState;
    value?: string;
}
export declare const DecimalField: React.FC<Props>;
