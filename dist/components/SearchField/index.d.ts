import React from "react";
import { Item } from "../types";
import './styles.css';
export interface Props {
    defaultItem?: string;
    items: Item[];
    placeholder?: string;
    isLoading: boolean;
    isClear?: boolean;
    className?: boolean;
    handleClear?: () => void;
    fetchData?: (value: string) => Promise<void>;
    onChange(id: string): void;
}
export declare const SearchField: React.FC<Props>;
