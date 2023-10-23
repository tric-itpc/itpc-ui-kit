import React, { HTMLAttributes } from "react";
import { InputCheckboxLabelPosition, InputCheckboxType, InputCheckboxVariant } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLLabelElement>, "onClick"> {
    id: string;
    name: string;
    type?: InputCheckboxType;
    variant?: InputCheckboxVariant;
    labelPosition?: InputCheckboxLabelPosition;
    disabled?: boolean;
    labelLeft?: string;
    label?: string;
    isBlurLabelLeft?: boolean;
    isBlurLabelRight?: boolean;
    isBlurCheckbox?: boolean;
    className?: string;
    isChecked?: boolean;
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputAttr?: HTMLAttributes<HTMLInputElement>;
    labelAttr?: HTMLAttributes<HTMLSpanElement>;
}
export declare const Checkbox: React.FC<Props>;
