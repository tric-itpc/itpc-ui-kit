import React, { HTMLAttributes } from "react"
import cn from "classnames"

import { renderIconTwoColumns } from "../../utils"
import { Column, KeysSort, SortType, RowType } from "../../types"
import "./styles.css"

interface TableSortHeaderTwoColumnsProps
  extends HTMLAttributes<HTMLTableCellElement> {
  columns?: Column<RowType>[]
  saveKeys?: KeysSort<RowType>
  setKeySort?: (key: Column<RowType>) => void
}

export const TableSortHeaderTwoColumns: React.FC<
  TableSortHeaderTwoColumnsProps
> = ({ columns, saveKeys, setKeySort }: TableSortHeaderTwoColumnsProps) => (
  <thead className="itpc-table-sort__head">
    <tr>
      {columns &&
        columns.map((column: Column<RowType>, index: number) => {
          if (saveKeys) {
            const mainKey = saveKeys.mainKey
            return (
              <th
                className={cn(
                  "itpc-table-sort__head",
                  Boolean(column?.isSortable)
                    ? "itpc-table-sort_clickable"
                    : "itpc-table-sort_pointer-none",
                  mainKey?.name === column?.name &&
                    mainKey?.order !== SortType.NONE
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
                    {renderIconTwoColumns(column, saveKeys)}
                  </div>
                </div>
              </th>
            )
          }
        })}
    </tr>
  </thead>
)
