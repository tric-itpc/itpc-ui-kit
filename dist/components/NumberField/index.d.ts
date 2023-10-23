import React, { HTMLAttributes } from "react";
import { FormattedValues, ValidationState } from "../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    format?: string;
    mask?: string;
    prefix?: string;
    suffix?: string;
    allowEmptyFormatting?: boolean;
    allowNegative?: boolean;
    icon?: React.ReactNode;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (values: FormattedValues, event?: React.SyntheticEvent<HTMLInputElement>) => void;
    getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
    className?: string;
}
export declare const NumberField: React.FC<Props>;
