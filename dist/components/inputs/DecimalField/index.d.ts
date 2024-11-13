import React, { HTMLAttributes } from "react";
import { ValidationState } from "../../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onBlur" | "onChange" | "onFocus"> {
    /** Количество знаков после запятой */
    accuracy?: number;
    /** Разрешено пустое значение */
    canEmptyString?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** Отключение компонента */
    disabled?: boolean;
    /** Сообщение об ошибке */
    errorMessage?: string;
    /** Иконка */
    icon?: React.ReactNode;
    /** Идентификатор */
    id: string;
    /** Максимальная длина */
    maxLength?: number;
    /** Название */
    name: string;
    /** Функция обработки потери фокуса */
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    /** Функция обработки изменения значения */
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    /** Функция обработки фокуса */
    onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    /** Подпись */
    placeholder?: string;
    /** Состояние валидации */
    validationState?: ValidationState;
    /** Значение */
    value?: string;
}
export declare const DecimalField: React.FC<Props>;
