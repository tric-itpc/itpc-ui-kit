import React, { HTMLAttributes } from "react";
import { InputType, ValidationState } from "../../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Дополнительный класс */
    className?: string;
    /** Отключение */
    disabled?: boolean;
    /** Текст ошибки */
    errorMessage?: string;
    /** Иконка */
    icon?: React.ReactNode;
    /** Идентификатор */
    id: string;
    /** Максимальная длина */
    maxLength?: number;
    /** Название */
    name: string;
    /** Обработчик потери фокуса */
    onBlur?: () => void;
    /** Обработчик изменения значения */
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Обработчик получения фокуса */
    onFocus?: () => void;
    /** Подпись */
    placeholder?: string;
    /** Тип инпута */
    type?: InputType;
    /** Состояние валидации */
    validationState?: ValidationState;
    /** Значение */
    value?: string;
}
export declare const TextField: React.FC<Props>;
