import React from "react";
import { NumberColumns } from "../../../../../enums";
import { RowType } from "../../types";
import "./styles.css";
interface TableSortRowProps {
    arrKeysNameColumns?: (keyof RowType)[];
    nameMainColumnSort?: string;
    rowData: RowType;
    sortByNumberColumns?: NumberColumns;
}
export declare const TableSortRow: React.FC<TableSortRowProps>;
export {};
