import React, { AnchorHTMLAttributes, CSSProperties } from "react";
import { BaseClassListProps } from "../types";
import "./styles.css";
export interface LinkProps extends Omit<BaseClassListProps, "type">, AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Отключение компонента */
    disabled?: boolean;
    /** Обработчик клика */
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Стили */
    style?: CSSProperties;
}
export declare const Link: React.FC<LinkProps>;
