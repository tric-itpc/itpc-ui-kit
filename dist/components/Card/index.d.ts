import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    isBordered?: boolean;
    className?: string;
    children?: React.ReactNode;
    titleAttr?: HTMLAttributes<HTMLParagraphElement>;
    bodyAttr?: HTMLAttributes<HTMLDivElement>;
}
export declare const Card: React.FC<Props>;
