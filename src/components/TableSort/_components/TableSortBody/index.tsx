import React, { Key } from "react"
import { UseType } from "../../types"
import { TableSortRow } from "../TableSortRow"
import "./styles.css"

interface TableSortBodyProps {
  rows: UseType[]
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
    {rows.length &&
      rows.map((row: UseType, index: number) => (
        <TableSortRow
          id={row.id}
          key={row.id}
          rowData={row}
          arrKeysNameHeader={arrKeysNameHeader}
          nameMainColumnSort={nameMainColumnSort}
          data-index={index + 1}
        />
      ))}
  </tbody>
)
