import React from "react"

import cn from "classnames"

import { NumberColumns } from "../../../types"

import "./styles.css"

interface TableSortCellProps {
  isMainColumSort?: boolean
  sortByNumberColumns?: NumberColumns
  value?: string
}

export const TableSortCell: React.FC<TableSortCellProps> = ({
  isMainColumSort,
  sortByNumberColumns,
  value,
  ...rest
}: TableSortCellProps) => (
  <td
    className={cn(
      "itpc-table-sort__cell",
      isMainColumSort &&
        sortByNumberColumns === NumberColumns.TWO &&
        "itpc-table-sort__cell_back"
    )}
    {...rest}
  >
    {value}
  </td>
)
