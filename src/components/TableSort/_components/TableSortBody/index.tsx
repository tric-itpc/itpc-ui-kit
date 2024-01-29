import React, { Key } from "react"
import { UseType } from "../../types"
import { TableSortRow } from "../TableSortRow"
import "./styles.css"

interface TableSortBodyProps {
  rows: UseType[]
  arrKeysNameTitle: string[]
}

export const TableSortBody: React.FC<TableSortBodyProps> = ({
  rows,
  arrKeysNameTitle,
  ...rest
}: TableSortBodyProps) => (
  <tbody className="itpc-table-sort__body" {...rest}>
    {rows.length &&
      rows.map((row: UseType, index: number) => (
        <TableSortRow
          id={row.id}
          key={row.id}
          rowData={row}
          arrKeysNameTitle={arrKeysNameTitle}
          data-index={index + 1}
        />
      ))}
  </tbody>
)
