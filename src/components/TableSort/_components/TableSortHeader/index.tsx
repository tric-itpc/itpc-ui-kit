import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Column, KeySort, KeysSort, RowType, SortType } from "../../types"
import { renderIcon, renderIconTwoColumns } from "../../utils"

import "./styles.css"

interface TableSortHeaderProps extends HTMLAttributes<HTMLTableCellElement> {
  columns?: Column<RowType>[]
  currentKey?: KeySort<RowType>
  currentKeys?: KeysSort<RowType>
  setKeySort?: (key: Column<RowType>) => void
}

export const TableSortHeader: React.FC<TableSortHeaderProps> = ({
  columns,
  currentKey,
  currentKeys,
  setKeySort,
}: TableSortHeaderProps) => (
  <thead className="itpc-table-sort__head">
    <tr>
      {columns &&
        columns.map((column: Column<RowType>, index: number) => {
          return (
            <th
              className={cn(
                "itpc-table-sort__head",
                Boolean(column?.isSortable)
                  ? "itpc-table-sort_clickable"
                  : "itpc-table-sort_pointer-none",
                currentKeys?.mainKey?.name === column?.name &&
                  currentKeys.mainKey?.order !== SortType.NONE
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
                  {renderIconTwoColumns(column, currentKeys)}
                </div>
              </div>
            </th>
          )
        })}
    </tr>
  </thead>
)
