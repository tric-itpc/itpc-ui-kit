import React, { HTMLAttributes } from "react"
import cn from "classnames"

import { Column, KeySort, SortType, RowType } from "../../types"
import { renderIcon } from "../../utils"
import "./styles.css"

interface TableSortHeaderProps extends HTMLAttributes<HTMLTableCellElement> {
  columns?: Column<RowType>[]
  currentKey?: KeySort<RowType>
  setKeySort?: (key: Column<RowType>) => void
}

export const TableSortHeader: React.FC<TableSortHeaderProps> = ({
  columns,
  currentKey,
  setKeySort,
}: TableSortHeaderProps) => (
  <thead className="itpc-table-sort__head">
    <tr>
      {columns &&
        columns.map((column: Column<RowType>, index: number) => (
          <th
            className={cn(
              "itpc-table-sort__head",
              Boolean(column?.isSortable)
                ? "itpc-table-sort_clickable"
                : "itpc-table-sort_pointer-none",
              currentKey?.name === column?.name &&
                currentKey?.order !== SortType.NONE
                ? "itpc-table-sort__head_background-active"
                : "itpc-table-sort__head_background"
            )}
            key={index}
            data-column-key={column.name}
            onClick={() => setKeySort?.(column)}
          >
            <div className="itpc-table-sort__wrap-cell">
              {column.title}
              <div className="itpc-table-sort__wrap-icon">
                {renderIcon(column, currentKey)}
              </div>
            </div>
          </th>
        ))}
    </tr>
  </thead>
)
