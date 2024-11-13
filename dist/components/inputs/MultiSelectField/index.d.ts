import React, { HTMLAttributes } from "react";
import { type DurationAnimation, Item } from "../../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Дополнительный класс */
    className?: string;
    /** Отключение компонента */
    disabled?: boolean;
    /** Задержка анимации */
    durationAnimation?: DurationAnimation;
    /** Список элементов */
    items: Item[];
    /** Обработчик изменения значения */
    onChange(values: string[]): void;
    /** Подпись */
    placeholder?: string;
    /** Выбранные элементы */
    selectedItems?: string[];
}
export declare const MultiSelectField: React.FC<Props>;
