import React from "react"

import cn from "classnames"

import { RowType } from "../../types"
import { TableSortCell } from "../TableSortCell"

import "./styles.css"

interface TableSortRowProps {
  arrKeysNameHeader: (keyof RowType)[]
  nameMainColumnSort?: string
  rowData: RowType
}

export const TableSortRow: React.FC<TableSortRowProps> = ({
  arrKeysNameHeader,
  nameMainColumnSort,
  rowData,
  ...rest
}: TableSortRowProps) => (
  <tr className={cn("itpc-table-sort__row")} {...rest}>
    {rowData &&
      arrKeysNameHeader &&
      arrKeysNameHeader.map((colName: keyof RowType) => (
        <TableSortCell
          key={colName}
          value={rowData[colName]}
          isMainColumSort={nameMainColumnSort === colName}
        />
      ))}
  </tr>
)
