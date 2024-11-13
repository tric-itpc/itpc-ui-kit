import React from "react";
import { NumberColumns } from "../../../../../enums";
import "./styles.css";
interface TableSortCellProps {
    isMainColumSort?: boolean;
    sortByNumberColumns?: NumberColumns;
    value: string;
}
export declare const TableSortCell: React.FC<TableSortCellProps>;
export {};
