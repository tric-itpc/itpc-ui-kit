import React, { CSSProperties, HTMLAttributes } from "react";
import { TextTag } from "../../../../enums";
import { BaseClassListProps } from "../types";
import "./styles.css";
export interface TextProps extends BaseClassListProps, HTMLAttributes<HTMLElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Обработчик клика */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    /** Дополнительные стили */
    style?: CSSProperties;
    /** Тег */
    tag?: TextTag;
}
export declare const Text: React.FC<TextProps>;
