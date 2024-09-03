import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { NumberColumns, SortType } from "../../../../enums"
import { Column, KeySort, KeysSort, RowType } from "../../types"
import { renderIcon, renderIconTwoColumns } from "../../utils"

import "./styles.css"

interface TableSortHeaderProps extends HTMLAttributes<HTMLTableCellElement> {
  columns?: Column<RowType>[]
  currentKey?: KeySort<RowType>
  currentKeys?: KeysSort<RowType>
  setKeySort?: (key: Column<RowType>) => void
  sortByNumberColumns?: NumberColumns
}

export const TableSortHeader: React.FC<TableSortHeaderProps> = ({
  columns,
  currentKey,
  currentKeys,
  setKeySort,
  sortByNumberColumns,
}: TableSortHeaderProps) => (
  <thead className={cn("itpc-table-sort__head")}>
    <tr>
      {columns &&
        columns.map((column: Column<RowType>, index: number) => {
          if (sortByNumberColumns === NumberColumns.TWO) {
            return (
              <th
                className={cn(
                  "itpc-table-sort__head",
                  Boolean(column?.isSortable)
                    ? "itpc-table-sort_clickable"
                    : "itpc-table-sort_pointer-none",
                  currentKeys?.mainKey?.name === column?.name &&
                    currentKeys?.mainKey?.order !== SortType.NONE
                    ? "itpc-table-sort__head_background-active"
                    : "itpc-table-sort__head_background"
                )}
                key={index}
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
          }

          if (sortByNumberColumns === NumberColumns.ONE) {
            return (
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
                onClick={() => setKeySort?.(column)}
              >
                <div className="itpc-table-sort__wrap-cell">
                  {column.title}
                  <div className="itpc-table-sort__wrap-icon">
                    {renderIcon(column, currentKey)}
                  </div>
                </div>
              </th>
            )
          }

          return (
            <th className={cn("itpc-table-sort__head-no-sort")} key={index}>
              <div className="itpc-table-sort__wrap-cell">{column.title}</div>
            </th>
          )
        })}
    </tr>
  </thead>
)
