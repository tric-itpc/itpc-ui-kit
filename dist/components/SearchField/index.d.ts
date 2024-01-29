import React, { HTMLAttributes } from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "className" | "onChange"> {
    className?: boolean;
    defaultItem?: string;
    fetchData?: (value: string) => Promise<void>;
    handleClear?: () => void;
    icon?: React.ReactNode;
    isClear?: boolean;
    isDisableClickIcon?: boolean;
    items: Item[];
    onChange(id: string): void;
    placeholder?: string;
    textFieldAttr?: Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onFocus" | "onBlur">;
}
export declare const SearchField: React.FC<Props>;
