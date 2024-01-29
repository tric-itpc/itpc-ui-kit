import React, { HTMLAttributes } from "react";
import { ValidationState } from "../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    id: string;
    maxHeight?: number;
    name: string;
    onBlur?: () => void;
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: () => void;
    placeholder?: string;
    validationState?: ValidationState;
    value?: string;
}
export declare const TextAreaField: React.FC<Props>;
