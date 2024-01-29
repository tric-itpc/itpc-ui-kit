import React from "react";
import "./styles.css";
interface Props {
    children?: React.ReactNode;
    disabled?: boolean;
    id: string;
    isActive?: boolean;
    onChange(id: string): void;
}
export declare const SelectItem: React.FC<Props>;
export {};
