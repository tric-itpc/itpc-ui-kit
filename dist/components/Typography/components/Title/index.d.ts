import React, { CSSProperties, HTMLAttributes } from "react";
import { BaseClassListProps } from "../types";
import "./styles.css";
export interface TitleProps extends BaseClassListProps, HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    onClick?: (e: React.MouseEvent<HTMLHeadingElement>) => void;
    style?: CSSProperties;
}
export declare const Title: React.FC<TitleProps>;
