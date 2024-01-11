import React, { HTMLAttributes } from "react";
import "./styles.css";
interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const Field: React.FC<Props>;
export {};
