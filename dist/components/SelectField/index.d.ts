import React, { HTMLAttributes } from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    items: Item[];
    defaultItemId?: string;
    placeholder: string;
    disabled?: boolean;
    className?: string;
    onChange(value: string): void;
}
export declare const SelectField: React.FC<Props>;
