import { TextSize, TextType, TextWeight } from "../../../enums";
export type AllowedClassListProps = "className" | "size" | "through" | "type" | "underline" | "weight";
export interface BaseClassListProps {
    /** Дополнительный класс */
    className?: string;
    /** Размер */
    size?: TextSize;
    /** Зачеркивание */
    through?: boolean;
    /** Тип */
    type?: TextType;
    /** Подчеркивание */
    underline?: boolean;
    /** Толщина */
    weight?: TextWeight;
}
