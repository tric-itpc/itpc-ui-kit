import React, { TableHTMLAttributes, useState } from "react"
import cn from "classnames"

import { TableSortBody, TableSortHeader } from "../_components"
import { Column, SortType, RowType, KeySort } from "../types"
import { getKeysNamesColumns, byKey, setKey } from "../utils"
import "./styles.css"

export interface TableSortOneColumnProps<T extends RowType>
  extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column<T>[]
  rows: RowType<T>[]
  className?: string
}

export const TableSortOneColumn: React.FC<TableSortOneColumnProps<any>> = ({
  columns,
  rows,
  className = "",
  ...rest
}: TableSortOneColumnProps<any>) => {
  const [currentKey, setCurrentKey] = useState<KeySort<RowType>>()
  const [data, setData] = useState<RowType[]>(rows)

  const setKeySort = (key: Column<RowType>): void =>
    sort(setKey(key, currentKey))

  const sort = (key: KeySort<RowType>): void => {
    setCurrentKey(key)

    switch (key.order) {
      case SortType.ASCENDING:
        setData([...data].sort(byKey(key)))
        break
      case SortType.DESCENDING:
        setData([...data].reverse())
        break
      default:
        setData(rows)
    }
  }

  return (
    <table className={cn("itpc-table-sort", className)} {...rest}>
      {columns?.length && (
        <TableSortHeader
          columns={columns}
          currentKey={currentKey}
          setKeySort={setKeySort}
        />
      )}
      {data && (
        <TableSortBody
          rows={data}
          arrKeysNameHeader={getKeysNamesColumns(columns)}
        />
      )}
    </table>
  )
}
