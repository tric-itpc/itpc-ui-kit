import React, { HTMLAttributes } from "react";
import { ErrorPlacement } from "../../../enums";
import { type DurationAnimation, IInfo, ValidationState } from "../../types";
import "./styles.css";
import { type PositionType } from "./types";
export interface FormattedValues {
    formattedValue: string;
    value: string;
}
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Активные даты в формате YYYY-MM-DD */
    activeDates?: string[];
    /** Дополнительный класс */
    className?: string;
    /** Отключение компонента */
    disabled?: boolean;
    /** Отключение дат после даты в формате YYYY-MM-DD */
    disabledAfterDate?: string;
    /** Отключение дат до даты в формате YYYY-MM-DD */
    disabledBeforeDate?: string;
    /** Отключение определенных дат в формате YYYY-MM-DD */
    disabledDates?: string[];
    /** Отключение определенных дней недели в формате 1-7 */
    disabledDaysOfWeek?: number[];
    /** Отключение выбора месяца */
    disabledSelectMonth?: boolean;
    /** Отключение выбора года */
    disabledSelectYear?: boolean;
    /** Задержка анимации */
    durationAnimation?: DurationAnimation;
    /** Сообщение об ошибке */
    errorMessage?: string;
    /** Положение текста ошибки */
    errorPlacement?: ErrorPlacement;
    /** Идентификатор */
    id?: string;
    /** Флаг кликабельности иконки календаря */
    isIconClickable?: boolean;
    /** Флаг отображения иконки календаря */
    isShowIcon?: boolean;
    /** Задать ограничение по ширине */
    isWidthMaxContent?: boolean;
    /** Имя */
    name?: string;
    /** Период отображения календаря */
    offsetYear?: number;
    /** Функция обработки потери фокуса */
    onBlur?: () => void;
    /** Функция обработки изменения значения */
    onChange?: (values: FormattedValues, event: React.SyntheticEvent<HTMLButtonElement> | React.SyntheticEvent<HTMLInputElement> | React.SyntheticEvent<HTMLTableDataCellElement>, info: IInfo) => void;
    /** Функция обработки получения фокуса */
    onFocus?: () => void;
    /** Подпись */
    placeholder?: string;
    /** Позиция календаря */
    position?: PositionType;
    /** Скролл к году */
    scrollToYear?: number;
    /** Состояние валидации */
    validationState?: ValidationState;
    /** Значение в формате DDMMYYYY (дата 01.01.2000 в формате 01012000) */
    value?: string;
    /** Флаг отображения времени */
    withTime?: boolean;
    /** Период отображения года */
    yearsFromTo?: [number, number];
}
export declare const DatePicker: React.FC<Props>;
