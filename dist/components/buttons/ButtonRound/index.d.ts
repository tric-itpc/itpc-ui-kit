import React, { HTMLAttributes } from "react";
import { ButtonType } from "../../types";
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
    /** Подсказка */
    tooltip?: string;
    /** Атрибуты подсказки */
    tooltipAttr?: HTMLAttributes<HTMLSpanElement> & {
        "data-testid"?: string;
    };
    /** Тип кнопки */
    type?: ButtonType;
}
export declare const ButtonRound: React.FC<Props>;
