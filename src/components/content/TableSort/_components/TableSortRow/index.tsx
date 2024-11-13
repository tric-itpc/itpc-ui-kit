import React from "react"

import cn from "classnames"

import { NumberColumns } from "../../../../../enums"
import { RowType } from "../../types"
import { TableSortCell } from "../TableSortCell"

import "./styles.css"

interface TableSortRowProps {
  arrKeysNameColumns?: (keyof RowType)[]
  nameMainColumnSort?: string
  rowData: RowType
  sortByNumberColumns?: NumberColumns
}

export const TableSortRow: React.FC<TableSortRowProps> = ({
  arrKeysNameColumns,
  nameMainColumnSort,
  rowData,
  sortByNumberColumns,
  ...rest
}: TableSortRowProps) => (
  <tr className={cn("itpc-table-sort__row")} {...rest}>
    {rowData &&
      arrKeysNameColumns &&
      arrKeysNameColumns.map((colName: keyof RowType) => (
        <TableSortCell
          isMainColumSort={nameMainColumnSort === colName}
          key={colName}
          sortByNumberColumns={sortByNumberColumns}
          value={rowData[colName]}
        />
      ))}
  </tr>
)
