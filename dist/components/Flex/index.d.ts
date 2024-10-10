import React, { CSSProperties, HTMLAttributes } from "react";
import "./styles.css";
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    align?: CSSProperties["alignItems"];
    children?: React.ReactNode;
    className?: string;
    gap?: number;
    justify?: CSSProperties["justifyContent"];
    style?: React.CSSProperties;
    vertical?: boolean;
    wrap?: CSSProperties["flexWrap"];
}
export declare const Flex: React.FC<FlexProps>;
