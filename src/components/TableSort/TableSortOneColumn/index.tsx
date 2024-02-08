import React, { TableHTMLAttributes, useState } from "react"

import cn from "classnames"

import { TableSortBody, TableSortHeader } from "../_components"
import { Column, KeySort, RowType, SortType } from "../types"
import { byKey, getKeysNamesColumns, setKey } from "../utils"

import "./styles.css"

export interface TableSortOneColumnProps<T extends RowType>
  extends TableHTMLAttributes<HTMLTableElement> {
  className?: string
  columns: Column<T>[]
  rows: RowType<T>[]
}

export const TableSortOneColumn: React.FC<TableSortOneColumnProps<any>> = ({
  className = "",
  columns,
  rows,
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
          arrKeysNameHeader={getKeysNamesColumns(columns)}
          rows={data}
        />
      )}
    </table>
  )
}
