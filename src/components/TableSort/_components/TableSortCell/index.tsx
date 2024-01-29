import React from "react"
import cn from "classnames"
import "./styles.css"

interface TableSortCellProps {
  value: string
}

export const TableSortCell: React.FC<TableSortCellProps> = ({
  value,
  ...rest
}: TableSortCellProps) => (
  <td className={cn("itpc-table-sort__cell")} {...rest}>
    {value}
  </td>
)
