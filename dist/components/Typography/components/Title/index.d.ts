import React, { CSSProperties, HTMLAttributes } from "react";
import { BaseClassListProps } from "../types";
import "./styles.css";
export interface TitleProps extends BaseClassListProps, HTMLAttributes<HTMLHeadingElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Уровень заголовка */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Обработчик клика */
    onClick?: (e: React.MouseEvent<HTMLHeadingElement>) => void;
    /** Дополнительные стили */
    style?: CSSProperties;
}
export declare const Title: React.FC<TitleProps>;
