import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const ErrorMessage: React.FC<Props>;
