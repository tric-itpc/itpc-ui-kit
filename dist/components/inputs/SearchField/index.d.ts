import React, { HTMLAttributes } from "react";
import { AutoComplete } from "../../../enums";
import { type DurationAnimation, Item } from "../../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "className" | "onChange"> {
    /** Параметры autoComplete */
    autoComplete?: AutoComplete;
    /** Дополнительный класс */
    className?: boolean;
    /** Значение по умолчанию */
    defaultItem?: string;
    /** Время задержки запроса ?*/
    delayFetch?: number;
    /** Отключить поле */
    disabled?: boolean;
    /** Задержка анимации */
    durationAnimation?: DurationAnimation;
    /** Функция для получения данных */
    fetchData?: (value: string) => Promise<void>;
    /** Функция для очистки */
    handleClear?: () => void;
    /** Иконка */
    icon?: React.ReactNode;
    /** Флаг очистки данных */
    isClear?: boolean;
    /** Отключить клик по иконке */
    isDisableClickIcon?: boolean;
    /** Вставить текущее выбранное значение в поле ввода */
    isInsertCurrentlySelected?: boolean;
    /** Список элементов */
    items: Item[];
    /** Обработчик изменения значения */
    onChange(id: string): void;
    /** Подпись */
    placeholder?: string;
    /** Дополнительные атрибуты */
    textFieldAttr?: Omit<HTMLAttributes<HTMLDivElement>, "onBlur" | "onChange" | "onFocus">;
}
export declare const SearchField: React.FC<Props>;
