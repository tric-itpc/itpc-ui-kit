import React from "react";
import { Item } from "../types";
import './styles.css';
export interface Props {
    items: Item[];
    defaultItemId?: string;
    placeholder: string;
    disabled?: boolean;
    className?: boolean;
    onChange(value: string): void;
}
export declare const SelectField: React.FC<Props>;
