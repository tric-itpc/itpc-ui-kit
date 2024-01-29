import React from "react"

import { NumberColumns } from "../../../types"
import { RowType } from "../../types"
import { TableSortRow } from "../TableSortRow"

import "./styles.css"

interface TableSortBodyProps {
  arrKeysNameColumns?: (keyof RowType)[]
  nameMainColumnSort?: string
  rows: RowType[]
  sortByNumberColumns?: NumberColumns
}

export const TableSortBody: React.FC<TableSortBodyProps> = ({
  arrKeysNameColumns,
  nameMainColumnSort,
  rows,
  sortByNumberColumns,
  ...rest
}: TableSortBodyProps) => (
  <tbody className="itpc-table-sort__body" {...rest}>
    {rows &&
      rows.map((row: RowType) => (
        <TableSortRow
          arrKeysNameColumns={arrKeysNameColumns}
          key={row.id}
          nameMainColumnSort={nameMainColumnSort}
          rowData={row}
          sortByNumberColumns={sortByNumberColumns}
        />
      ))}
  </tbody>
)
