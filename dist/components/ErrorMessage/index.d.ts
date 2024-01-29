import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode;
    className?: string;
}
export declare const ErrorMessage: React.FC<Props>;
