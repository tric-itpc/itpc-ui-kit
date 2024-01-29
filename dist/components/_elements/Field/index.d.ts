import React, { HTMLAttributes } from "react";
import "./styles.css";
interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}
export declare const Field: React.FC<Props>;
export {};
