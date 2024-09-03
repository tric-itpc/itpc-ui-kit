import React, { HTMLAttributes } from "react";
import { NumberColumns } from "../../../../enums";
import { Column, KeySort, KeysSort, RowType } from "../../types";
import "./styles.css";
interface TableSortHeaderProps extends HTMLAttributes<HTMLTableCellElement> {
    columns?: Column<RowType>[];
    currentKey?: KeySort<RowType>;
    currentKeys?: KeysSort<RowType>;
    setKeySort?: (key: Column<RowType>) => void;
    sortByNumberColumns?: NumberColumns;
}
export declare const TableSortHeader: React.FC<TableSortHeaderProps>;
export {};
