import React from "react";
import { NumberColumns } from "../../../../enums";
import { RowType } from "../../types";
interface TableSortBodyProps {
    arrKeysNameColumns?: (keyof RowType)[];
    nameMainColumnSort?: string;
    rows: RowType[];
    sortByNumberColumns?: NumberColumns;
}
export declare const TableSortBody: React.FC<TableSortBodyProps>;
export {};
