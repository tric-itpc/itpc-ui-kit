import React, { HTMLAttributes } from "react"
import cn from "classnames"
import { Column, KeysSort, SortType, UseType } from "../../types"
import { renderIcon } from "../../utils"
import "./styles.css"

interface TableSortHeaderProps extends HTMLAttributes<HTMLTableCellElement> {
  columns?: Column<UseType>[]
  saveKeys?: KeysSort<UseType>
  setKeySort?: (key: Column<UseType>) => void
}

export const TableSortHeader: React.FC<TableSortHeaderProps> = ({
  columns,
  saveKeys,
  setKeySort,
}: TableSortHeaderProps) => (
  <thead className="itpc-table-sort__head">
    <tr>
      {columns?.length &&
        Object.entries(columns).map(([key, values]) => (
          <th
            className={cn(
              "itpc-table-sort__head",
              Boolean(values?.isSortable)
                ? "itpc-table-sort_clickable"
                : "itpc-table-sort_pointer-none",
              saveKeys?.name === values?.name &&
                saveKeys?.order !== SortType.NONE
                ? "itpc-table-sort__head_background-active"
                : "itpc-table-sort__head_background"
            )}
            key={key}
            id={key}
            data-column-key={values.name}
            onClick={() => setKeySort?.(values)}
          >
            <div className="itpc-table-sort__wrap-cell">
              {values.title}
              <div className="itpc-table-sort__wrap-icon">
                {values && renderIcon(values, saveKeys)}
              </div>
            </div>
          </th>
        ))}
    </tr>
  </thead>
)
