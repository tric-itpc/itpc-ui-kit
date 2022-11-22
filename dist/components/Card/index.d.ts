import React from "react";
import './styles.css';
export interface Props {
    title?: string;
    isBordered?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare const Card: React.FC<Props>;
