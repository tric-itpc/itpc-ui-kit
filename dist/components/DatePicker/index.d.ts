import React, { HTMLAttributes } from "react";
import { IInfo, ValidationState } from "../types";
import "./styles.css";
export interface FormattedValues {
    value: string;
    formattedValue: string;
}
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    id?: string;
    name?: string;
    value?: string;
    activeDates?: string[];
    disabledDates?: string[];
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDaysOfWeek?: number[];
    disabled?: boolean;
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    placeholder?: string;
    validationState?: ValidationState;
    errorMessage?: string;
    className?: string;
    isIconClickable?: boolean;
    offsetYear?: number;
    withTime?: boolean;
    isShowIcon?: boolean;
    scrollToYear?: number;
    yearsFromTo?: [number, number];
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (values: FormattedValues, event: React.SyntheticEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement> | React.SyntheticEvent<HTMLTableDataCellElement>, info: IInfo) => void;
}
export declare const DatePicker: React.FC<Props>;
