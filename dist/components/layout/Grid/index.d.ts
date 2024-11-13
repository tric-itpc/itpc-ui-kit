import React, { HTMLAttributes } from "react";
import { RowAlign, RowJustify } from "../../../enums";
import "./styles.css";
export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    /** Дополнительный класс */
    className?: string;
    /** Количество колонок */
    col?: number;
    /** Размер колонки */
    flex?: number | string;
    /** Порядковый номер */
    order?: number;
    /** Дополнительные стили */
    style?: React.CSSProperties;
}
export declare const Col: React.FC<ColProps>;
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    /** Вертикальное выравнивание */
    align?: RowAlign;
    /** Дополнительный класс */
    className?: string;
    /** Расстояние между колонками */
    gap?: [number, number] | number;
    /** Горизонтальное выравнивание */
    justify?: RowJustify;
    /** Дополнительные стили */
    style?: React.CSSProperties;
    /** Разрешить перенос */
    wrap?: boolean;
}
export declare const Row: React.FC<RowProps>;
export { RowAlign, RowJustify };
