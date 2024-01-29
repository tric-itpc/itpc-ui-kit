import React, { HTMLAttributes } from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    className?: string;
    defaultItemId?: string;
    disabled?: boolean;
    items: Item[];
    onChange(value: string): void;
    placeholder: string;
}
export declare const SelectField: React.FC<Props>;
