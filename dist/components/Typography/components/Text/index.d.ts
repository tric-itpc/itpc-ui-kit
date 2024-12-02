import React, { CSSProperties, HTMLAttributes } from "react";
import { TextTag } from "../../../../enums";
import { BaseClassListProps } from "../types";
import "./styles.css";
export interface TextProps extends BaseClassListProps, HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: CSSProperties;
    tag?: TextTag;
}
export declare const Text: React.FC<TextProps>;
