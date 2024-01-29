import React, { HTMLAttributes } from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    className?: string;
    disabled?: boolean;
    items: Item[];
    onChange(values: string[]): void;
    placeholder?: string;
    selectedItems?: string[];
}
export declare const MultiSelectField: React.FC<Props>;
