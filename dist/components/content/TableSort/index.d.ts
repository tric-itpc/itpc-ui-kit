import React, { TableHTMLAttributes } from "react";
import { NumberColumns } from "../../../enums";
import "./styles.css";
import { Column, RowType } from "./types";
export interface TableSortProps<T extends RowType> extends TableHTMLAttributes<HTMLTableElement> {
    /** Дополнительный класс */
    className?: string;
    /** Колонки */
    columns?: Column<T>[];
    /** Строки */
    rows: RowType<T>[];
    /** Вариант сортировки по столбцам */
    sortByNumberColumns?: NumberColumns;
}
export declare const TableSort: React.FC<TableSortProps<any>>;
