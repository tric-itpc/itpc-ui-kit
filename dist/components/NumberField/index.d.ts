import React from 'react';
import { FormattedValues, ValidationState } from '../types';
export interface NumberFieldProps {
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    format?: string;
    mask?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (values: FormattedValues) => void;
}
export declare const NumberField: React.FC<NumberFieldProps>;
