import React from "react"
import { RowType } from "../../types"
import { TableSortRow } from "../TableSortRow"
import "./styles.css"

interface TableSortBodyProps {
  rows: RowType[]
  arrKeysNameHeader: string[]
  nameMainColumnSort?: string
}

export const TableSortBody: React.FC<TableSortBodyProps> = ({
  rows,
  arrKeysNameHeader,
  nameMainColumnSort,
  ...rest
}: TableSortBodyProps) => (
  <tbody className="itpc-table-sort__body" {...rest}>
    {rows &&
      rows.map((row: RowType) => (
        <TableSortRow
          id={row.id}
          key={row.id}
          rowData={row}
          arrKeysNameHeader={arrKeysNameHeader}
          nameMainColumnSort={nameMainColumnSort}
        />
      ))}
  </tbody>
)
