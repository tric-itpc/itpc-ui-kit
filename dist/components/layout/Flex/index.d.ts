import React, { CSSProperties, HTMLAttributes } from "react";
import "./styles.css";
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    /** Вертикальное выравнивание */
    align?: CSSProperties["alignItems"];
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Расстояние между элементами */
    gap?: number;
    /** Горизонтальное выравнивание */
    justify?: CSSProperties["justifyContent"];
    /** Дополнительные стили */
    style?: React.CSSProperties;
    /** Вертикальное расположение */
    vertical?: boolean;
    /** Перенос строк */
    wrap?: CSSProperties["flexWrap"];
}
export declare const Flex: React.FC<FlexProps>;
