import React from "react";
import { Item } from "../types";
import "./styles.css";
export interface Props {
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
}
export declare const SearchField: React.FC<Props>;
