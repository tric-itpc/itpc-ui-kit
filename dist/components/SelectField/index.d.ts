import React from "react";
import { Item } from "../types";
export interface SelectFieldProps {
    items: Item[];
    defaultItemId?: string;
    placeholder: string;
    disabled?: boolean;
    onChange(value: string): void;
}
export declare const SelectField: React.FC<SelectFieldProps>;
