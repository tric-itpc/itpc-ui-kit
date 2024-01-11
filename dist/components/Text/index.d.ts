import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const Text: React.FC<Props>;
