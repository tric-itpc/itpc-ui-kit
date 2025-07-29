import React from "react";
import { Rule } from "./types";
interface Props {
    /** Компонент формы (Checkbox, TextField и т.д.) */
    children: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Пропсы передаваемого компонента */
    componentProps?: Record<string, any>;
    /** Метод получения значения из компонента. Пример: const getValue = (v) => v.value */
    getValueFromEvent?: (...args: any[]) => any;
    /** Название поля формы */
    name: string;
    /** Подпись поля */
    placeholder?: string;
    /** Флаг обязательности поля */
    required?: boolean;
    /** Список правил валидации */
    rules?: Rule[];
    /** Стили */
    style?: React.CSSProperties;
    /** Название значения поля. Например, для чекбокса - checked, а для инпута - value */
    valuePropName?: string;
}
export declare const FormItem: React.FC<Props>;
export {};
