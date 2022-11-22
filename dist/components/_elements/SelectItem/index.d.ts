import React from "react";
import './styles.css';
interface Props {
    id: string;
    isActive?: boolean;
    onChange(id: string): void;
    children?: React.ReactNode;
}
export declare const SelectItem: React.FC<Props>;
export {};
