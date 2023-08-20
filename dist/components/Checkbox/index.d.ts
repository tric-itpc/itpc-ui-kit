import React from "react";
import { InputCheckboxLabelPosition, InputCheckboxType, InputCheckboxVariant } from "../types";
import "./styles.css";
export interface Props {
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
}
export declare const Checkbox: React.FC<Props>;
