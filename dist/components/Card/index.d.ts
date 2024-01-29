import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    bodyAttr?: HTMLAttributes<HTMLDivElement>;
    children?: React.ReactNode;
    className?: string;
    isBordered?: boolean;
    title?: React.ReactNode;
    titleAttr?: HTMLAttributes<HTMLParagraphElement>;
}
export declare const Card: React.FC<Props>;
