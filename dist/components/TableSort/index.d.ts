import React, { TableHTMLAttributes } from "react";
import { NumberColumns } from "../../enums";
import "./styles.css";
import { Column, RowType } from "./types";
export interface TableSortProps<T extends RowType> extends TableHTMLAttributes<HTMLTableElement> {
    className?: string;
    columns?: Column<T>[];
    rows: RowType<T>[];
    sortByNumberColumns?: NumberColumns;
}
export declare const TableSort: React.FC<TableSortProps<any>>;
