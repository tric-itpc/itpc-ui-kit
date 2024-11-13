import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** Атрибуты тела карточки */
    bodyAttr?: HTMLAttributes<HTMLDivElement>;
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Флаг наличия рамки */
    isBordered?: boolean;
    /** Заголовок карточки */
    title?: React.ReactNode;
    /** Атрибуты заголовка карточки */
    titleAttr?: HTMLAttributes<HTMLParagraphElement>;
}
export declare const Card: React.FC<Props>;
