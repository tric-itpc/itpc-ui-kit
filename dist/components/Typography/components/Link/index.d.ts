import React, { AnchorHTMLAttributes, CSSProperties } from "react";
import { BaseClassListProps } from "../types";
import "./styles.css";
export interface LinkProps extends Omit<BaseClassListProps, "type">, AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    style?: CSSProperties;
}
export declare const Link: React.FC<LinkProps>;
