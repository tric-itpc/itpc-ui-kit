import React, { HTMLAttributes } from "react";
import type { AutoComplete } from "../../../enums";
import { InputType, ValidationState } from "../../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Параметры autoComplete */
    autoComplete?: AutoComplete;
    /** Дополнительный класс */
    className?: string;
    /** Строка поиска по умолчанию */
    defaultItem?: string;
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
    /** Обработчик клика по полю ввода */
    onClickInput?: () => void;
    /** Обработчик установки фокуса */
    onFocus?: () => void;
    /** Обработчик нажатия на клавишу */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
