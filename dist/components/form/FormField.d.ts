import React from "react";
import { Rule } from "./types";
interface Props {
    [key: string]: any;
    /** Дополнительный класс */
    className?: string;
    /** Компонент формы (Checkbox, TextField и т.д.) */
    component: React.ElementType;
    /** Пропсы передаваемого компонента */
    componentProps?: Record<string, any>;
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
}
export declare const FormField: React.FC<Props>;
export {};
