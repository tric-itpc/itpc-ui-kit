import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    children?: React.ReactNode;
    className?: string;
}
export declare const Text: React.FC<Props>;
