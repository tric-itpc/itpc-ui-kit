import React from "react"

import { RowType } from "../../types"
import { TableSortRow } from "../TableSortRow"

import "./styles.css"

interface TableSortBodyProps {
  arrKeysNameHeader: (keyof RowType)[]
  nameMainColumnSort?: string
  rows: RowType[]
}

export const TableSortBody: React.FC<TableSortBodyProps> = ({
  arrKeysNameHeader,
  nameMainColumnSort,
  rows,
  ...rest
}: TableSortBodyProps) => (
  <tbody className="itpc-table-sort__body" {...rest}>
    {rows &&
      rows.map((row: RowType) => (
        <TableSortRow
          arrKeysNameHeader={arrKeysNameHeader}
          nameMainColumnSort={nameMainColumnSort}
          key={row.id}
          rowData={row}
        />
      ))}
  </tbody>
)
