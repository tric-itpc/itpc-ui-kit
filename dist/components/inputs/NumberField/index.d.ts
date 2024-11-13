import React, { HTMLAttributes } from "react";
import { FormattedValues, ValidationState } from "../../types";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Разрешить пустое значение */
    allowEmptyFormatting?: boolean;
    /** Разрешить отрицательные значения */
    allowNegative?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** Отключить поле */
    disabled?: boolean;
    /** Сообщение об ошибке */
    errorMessage?: string;
    /** Форматирование */
    format?: string;
    /** Ссылка на инпут */
    getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
    /** Иконка */
    icon?: React.ReactNode;
    /** Идентификатор */
    id: string;
    /** Маска */
    mask?: string;
    /** Название */
    name: string;
    /** Событие при потере фокуса */
    onBlur?: () => void;
    /** Событие при изменении значения */
    onChange?: (values: FormattedValues, event?: React.SyntheticEvent<HTMLInputElement>) => void;
    /** Событие при получении фокуса */
    onFocus?: () => void;
    /** Подпись */
    placeholder?: string;
    /** Префикс */
    prefix?: string;
    /** Замена значения */
    replaceValue?: (value: string) => string;
    /** Состояние валидации */
    validationState?: ValidationState;
    /** Значение */
    value?: string;
}
export declare const NumberField: React.FC<Props>;
