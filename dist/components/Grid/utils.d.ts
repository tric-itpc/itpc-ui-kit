import React from "react";
import { ColProps, RowProps } from "./index";
export declare const generateColClassList: (props: ColProps) => string;
export declare const generateColStyle: (props: ColProps, gap?: [
    number,
    number
] | number) => React.CSSProperties;
export declare const generateRowClassList: (props: RowProps) => string;
export declare const generateRowStyle: (props: RowProps) => React.CSSProperties;
