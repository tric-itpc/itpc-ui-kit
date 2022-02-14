import React from "react";
import { FormattedValues, ValidationState } from "../types";
export interface PhoneFieldProps {
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (values: FormattedValues) => void;
}
export declare const PhoneField: React.FC<PhoneFieldProps>;
