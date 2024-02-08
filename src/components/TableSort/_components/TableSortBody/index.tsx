import React from "react"

import { RowType } from "../../types"
import { TableSortRow } from "../TableSortRow"

import "./styles.css"

interface TableSortBodyProps {
  arrKeysNameHeader: string[]
  rows: RowType[]
}

export const TableSortBody: React.FC<TableSortBodyProps> = ({
  arrKeysNameHeader,
  rows,
  ...rest
}: TableSortBodyProps) => (
  <tbody className="itpc-table-sort__body" {...rest}>
    {rows &&
      rows.map((row: RowType) => (
        <TableSortRow
          arrKeysNameHeader={arrKeysNameHeader}
          key={row.id}
          rowData={row}
        />
      ))}
  </tbody>
)
