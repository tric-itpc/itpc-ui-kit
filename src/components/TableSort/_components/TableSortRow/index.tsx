import React from "react"

import cn from "classnames"

import { RowType } from "../../types"
import { TableSortCell } from "../TableSortCell"

import "./styles.css"

interface TableSortRowProps {
  arrKeysNameHeader: string[]
  rowData: RowType
}

export const TableSortRow: React.FC<TableSortRowProps> = ({
  arrKeysNameHeader,
  rowData,
  ...rest
}: TableSortRowProps) => (
  <tr className={cn("itpc-table-sort__row")} {...rest}>
    {rowData &&
      Object.entries(rowData).map(([key, value]) => {
        if (arrKeysNameHeader.includes(key)) {
          return <TableSortCell key={key} value={value} />
        }
      })}
  </tr>
)
