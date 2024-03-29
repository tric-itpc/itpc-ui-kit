import React, { HTMLAttributes } from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "className"> {
    defaultItem?: string;
    items: Item[];
    placeholder?: string;
    isClear?: boolean;
    className?: boolean;
    icon?: React.ReactNode;
    isDisableClickIcon?: boolean;
    handleClear?: () => void;
    fetchData?: (value: string) => Promise<void>;
    onChange(id: string): void;
    textFieldAttr?: Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onFocus" | "onBlur">;
}
export declare const SearchField: React.FC<Props>;
