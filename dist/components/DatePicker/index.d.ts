import React, { HTMLAttributes } from "react";
import { IInfo, ValidationState } from "../types";
import "./styles.css";
import { type PositionType } from "./types";
export interface FormattedValues {
    formattedValue: string;
    value: string;
}
export interface Props<T extends PositionType> extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    activeDates?: string[];
    className?: string;
    disabled?: boolean;
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDates?: string[];
    disabledDaysOfWeek?: number[];
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    errorMessage?: string;
    id?: string;
    isIconClickable?: boolean;
    isShowIcon?: boolean;
    name?: string;
    offsetYear?: number;
    onBlur?: () => void;
    onChange?: (values: FormattedValues, event: React.SyntheticEvent<HTMLTableDataCellElement> | React.SyntheticEvent<HTMLButtonElement> | React.SyntheticEvent<HTMLInputElement>, info: IInfo) => void;
    onFocus?: () => void;
    placeholder?: string;
    position?: T;
    scrollToYear?: number;
    validationState?: ValidationState;
    value?: string;
    withTime?: boolean;
    yearsFromTo?: [number, number];
}
export declare const DatePicker: React.FC<Props<PositionType>>;
