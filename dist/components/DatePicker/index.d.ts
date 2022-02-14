import React from "react";
import { FormattedValues, ValidationState } from "../types";
export interface DatePickerProps {
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
    isIconClicable?: boolean;
    offsetYear?: number;
}
export declare const DatePicker: React.FC<DatePickerProps>;
