import React, { HTMLAttributes } from "react"
import cn from "classnames"
import { renderIconTwoColumns } from "../../utils"
import { Column, SaveKeys, SortType, UseType } from "../../types"
import "./styles.css"

interface TableSortHeaderTwoColumnProps
  extends HTMLAttributes<HTMLTableCellElement> {
  columns?: Column<UseType>[]
  saveKeys?: SaveKeys<UseType>
  setKeySort?: (key: Column<UseType>) => void
}

export const TableSortHeaderTwoColumn: React.FC<
  TableSortHeaderTwoColumnProps
> = ({ columns, saveKeys, setKeySort }: TableSortHeaderTwoColumnProps) => (
  <thead className="itpc-table-sort__head">
    <tr>
      {columns?.length &&
        Object.entries(columns).map(([key, values]) => {
          if (saveKeys) {
            const mainKey = saveKeys.mainKey
            return (
              <th
                className={cn(
                  "itpc-table-sort__head",
                  Boolean(values?.isSortable)
                    ? "itpc-table-sort_clickable"
                    : "itpc-table-sort_pointer-none",
                  mainKey?.name === values?.name &&
                    mainKey?.order !== SortType.NONE
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
                    {values && renderIconTwoColumns(values, saveKeys)}
                  </div>
                </div>
              </th>
            )
          }
        })}
    </tr>
  </thead>
)
