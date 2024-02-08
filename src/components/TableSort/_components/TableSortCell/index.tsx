import React from "react"
import cn from "classnames"
import "./styles.css"

interface TableSortCellProps {
  value: string
  isMainColumSort: boolean
}

export const TableSortCell: React.FC<TableSortCellProps> = ({
  value,
  isMainColumSort,
  ...rest
}: TableSortCellProps) => (
  <td
    className={cn(
      "itpc-table-sort__cell",
      isMainColumSort && "itpc-table-sort__cell_back"
    )}
    {...rest}
  >
    {value}
  </td>
)
