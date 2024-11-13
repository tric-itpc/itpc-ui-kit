import React, { HTMLAttributes } from "react";
import { PopupPosition, PopupSize, PopupVariant } from "../../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Иконка закрытия */
    iconClose?: React.ReactNode;
    /** Открыт ли попап */
    isOpen: boolean;
    /** Позиция попапа */
    position?: PopupPosition;
    /** Размер попапа */
    size?: PopupSize;
    /** Заголовок */
    title: string;
    /** Вариант попапа */
    variant?: PopupVariant;
}
export declare const Popup: React.FC<Props>;
