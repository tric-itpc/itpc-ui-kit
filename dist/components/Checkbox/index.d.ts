import React from "react";
import { InputCheckboxType } from "../types";
import './styles.css';
export interface Props {
    id: string;
    name: string;
    type?: InputCheckboxType;
    disabled?: boolean;
    label?: string;
    className?: string;
    isChecked?: boolean;
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: React.FC<Props>;
