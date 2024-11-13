import React, { HTMLAttributes } from "react";
import { InputCheckboxLabelPosition, InputCheckboxType, InputCheckboxVariant } from "../../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLLabelElement>, "onClick"> {
    /** Дополнительный класс */
    className?: string;
    /** Отключение кнопки */
    disabled?: boolean;
    /** Атрибут id инпута */
    id: string;
    /** Атрибуты инпута */
    inputAttr?: HTMLAttributes<HTMLInputElement>;
    /** Флаг размытия инпута */
    isBlurCheckbox?: boolean;
    /** Флаг размытия левой подписи */
    isBlurLabelLeft?: boolean;
    /** Флаг размытия правой подписи */
    isBlurLabelRight?: boolean;
    /** Флаг активности */
    isChecked?: boolean;
    /** Подпись справа */
    label?: string;
    /** Атрибуты подписи */
    labelAttr?: HTMLAttributes<HTMLSpanElement>;
    /** Подпись слева */
    labelLeft?: string;
    /** Позиция подписи */
    labelPosition?: InputCheckboxLabelPosition;
    /** Атрибут name инпута */
    name: string;
    /** Обработчик клика */
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Тип */
    type?: InputCheckboxType;
    /** Вариант */
    variant?: InputCheckboxVariant;
}
export declare const Checkbox: React.FC<Props>;
