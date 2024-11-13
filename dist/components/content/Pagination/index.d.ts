import { FC, HTMLAttributes } from "react";
import { PaginationResult } from "../../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** Результат пагинации */
    callback: (pagination: PaginationResult) => void;
    /** Дополнительный класс */
    className?: string;
    /** Длина массива, данные которого необходимо разделить */
    dataLength: number;
    /** Количество элементов на странице */
    step?: number;
}
export declare const Pagination: FC<Props>;
