import React, { HTMLAttributes } from "react";
import { ValidationState } from "../../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Дополнительный класс */
    className?: string;
    /** Отключение */
    disabled?: boolean;
    /** Текст ошибки */
    errorMessage?: string;
    /** Идентификатор */
    id: string;
    /** Максимальная высота */
    maxHeight?: number;
    /** Название поля */
    name: string;
    /** Обработчик потери фокуса */
    onBlur?: () => void;
    /** Обработчик изменения значения */
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** Обработчик получения фокуса */
    onFocus?: () => void;
    /** Подпись */
    placeholder?: string;
    /** Состояние валидации */
    validationState?: ValidationState;
    /** Значение */
    value?: string;
}
export declare const TextAreaField: React.FC<Props>;
