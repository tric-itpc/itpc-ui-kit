import React, { HTMLAttributes } from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    items: Item[];
    selectedItems?: string[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    onChange(values: string[]): void;
}
export declare const MultiSelectField: React.FC<Props>;
