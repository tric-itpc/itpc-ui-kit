import React from "react";
import "./styles.css";
interface Props {
    activeIndex?: number;
    children?: React.ReactNode;
    disabled?: boolean;
    id: string;
    isActive?: boolean;
    itemIndex: number;
    onChange?(id: string): void;
    onMouseEnter?(index: number): void;
}
export declare const SelectItem: React.FC<Props>;
export {};
