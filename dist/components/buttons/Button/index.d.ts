import React, { HTMLAttributes } from "react";
import { ButtonType, ButtonVariant } from "../../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Отключение кнопки */
    disabled?: boolean;
    /** Обработчик клика */
    onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** Тип кнопки */
    type?: ButtonType;
    /** Вариант кнопки */
    variant?: ButtonVariant;
}
export declare const Button: React.FC<Props>;
