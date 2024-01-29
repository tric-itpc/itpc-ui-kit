import React, { HTMLAttributes } from "react";
import { FormattedValues, ValidationState } from "../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    allowEmptyFormatting?: boolean;
    allowNegative?: boolean;
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    format?: string;
    getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
    icon?: React.ReactNode;
    id: string;
    mask?: string;
    name: string;
    onBlur?: () => void;
    onChange?: (values: FormattedValues, event?: React.SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    placeholder?: string;
    prefix?: string;
    replaceValue?: (value: string) => string;
    suffix?: string;
    validationState?: ValidationState;
    value?: string;
}
export declare const NumberField: React.FC<Props>;
