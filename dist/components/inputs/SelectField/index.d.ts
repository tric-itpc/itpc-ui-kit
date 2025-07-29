import React, { HTMLAttributes } from "react";
import { ALLOWED_POSITIONS } from "../../../lab/CalculateStyle/types";
import { type DurationAnimation, Item } from "../../types";
import "./styles.css";
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Дополнительный класс */
    className?: string;
    /** Отключить */
    disabled?: boolean;
    /** Задержка анимации */
    durationAnimation?: DurationAnimation;
    /** Список элементов */
    items: Item[];
    /** Обработчик изменения значения */
    onChange(value: string): void;
    /** Подпись */
    placeholder: string;
    /** Позиционирование выпадающего списка */
    position?: ALLOWED_POSITIONS;
    /** Обязательность поля */
    required?: boolean;
    /** Id выбранного элемента */
    selectedItemId?: string;
}
export declare const SelectField: React.FC<Props>;
