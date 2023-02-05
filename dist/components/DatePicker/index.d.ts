import React from "react";
import { ValidationState } from "../types";
import './styles.css';
export interface FormattedValues {
    value: string;
    formattedValue: string;
}
export interface Props {
    id?: string;
    name?: string;
    value?: string;
    activeDates?: string[];
    disabledDates?: string[];
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabled?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (values: FormattedValues, event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableDataCellElement>) => void;
    isIconClickable?: boolean;
    offsetYear?: number;
    withTime?: boolean;
    className?: string;
}
export declare const DatePicker: React.FC<Props>;
