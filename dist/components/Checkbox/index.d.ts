import React, { HTMLAttributes } from "react";
import { InputCheckboxLabelPosition, InputCheckboxType, InputCheckboxVariant } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLLabelElement>, "onClick"> {
    className?: string;
    disabled?: boolean;
    id: string;
    inputAttr?: HTMLAttributes<HTMLInputElement>;
    isBlurCheckbox?: boolean;
    isBlurLabelLeft?: boolean;
    isBlurLabelRight?: boolean;
    isChecked?: boolean;
    label?: string;
    labelAttr?: HTMLAttributes<HTMLSpanElement>;
    labelLeft?: string;
    labelPosition?: InputCheckboxLabelPosition;
    name: string;
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: InputCheckboxType;
    variant?: InputCheckboxVariant;
}
export declare const Checkbox: React.FC<Props>;
