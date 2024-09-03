import React, { HTMLAttributes } from "react";
import { RowAlign, RowJustify } from "../../enums";
import "./styles.css";
export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    col?: number;
    flex?: string | number;
    order?: number;
    style?: React.CSSProperties;
}
export declare const Col: React.FC<ColProps>;
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    align?: RowAlign;
    className?: string;
    gap?: [number, number] | number;
    justify?: RowJustify;
    style?: React.CSSProperties;
    wrap?: boolean;
}
export declare const Row: React.FC<RowProps>;
export { RowAlign, RowJustify };
