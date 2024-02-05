import React from "react"
import cn from "classnames"
import { UseType } from "../../types"
import { TableSortCell } from "../TableSortCell"
import "./styles.css"

interface TableSortRowProps {
  id: string
  rowData: UseType
  arrKeysNameHeader: string[]
}

export const TableSortRow: React.FC<TableSortRowProps> = ({
  id,
  rowData,
  arrKeysNameHeader,
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
