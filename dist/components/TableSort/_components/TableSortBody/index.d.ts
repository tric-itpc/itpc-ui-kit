import React from "react";
import { NumberColumns } from "../../../types";
import { RowType } from "../../types";
import "./styles.css";
interface TableSortBodyProps {
    arrKeysNameColumns?: (keyof RowType)[];
    nameMainColumnSort?: string;
    rows: RowType[];
    sortByNumberColumns?: NumberColumns;
}
export declare const TableSortBody: React.FC<TableSortBodyProps>;
export {};
