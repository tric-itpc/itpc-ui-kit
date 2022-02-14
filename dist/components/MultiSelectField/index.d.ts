import React from "react";
import { Item } from "../types";
export interface MultiSelectFieldProps {
    items: Item[];
    selectedItems?: string[];
    placeholder: string;
    disabled?: boolean;
    onChange(values: string[]): void;
}
export declare const MultiSelectField: React.FC<MultiSelectFieldProps>;
