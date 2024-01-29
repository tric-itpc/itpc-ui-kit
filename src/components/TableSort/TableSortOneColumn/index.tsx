import React, { Key, TableHTMLAttributes, useState } from "react"
import cn from "classnames"

import { TableSortBody } from "../_components/TableSortBody"
import { TableSortHeader } from "../_components/TableSortHeader"
import { Column, SortType, KeysSort, UseType, SaveOrder } from "../types"
import {
  getKeysNamesColumns,
  updateParametersKeys,
  doSaveOrder,
  byKey,
  doRestoreOrder,
} from "../utils"
import "./styles.css"

export interface TableSortOneColumnProps<T extends UseType>
  extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column<T>[]
  rows: UseType<T>[]
  className?: string
}

export const TableSortOneColumn: React.FC<TableSortOneColumnProps<any>> = ({
  columns,
  rows,
  className = "",
  ...rest
}: TableSortOneColumnProps<any>) => {
  const [currentKeys, setCurrentKeys] = useState<KeysSort>()
  const [data, setData] = useState(rows)
  const [arrKeysNameTitle, setArrKeysNameTitle] = useState<string[]>(
    getKeysNamesColumns(columns)
  )
  const [orderOriginal, setOrderOriginal] = useState<SaveOrder[] | undefined>(
    []
  )

  const setKeysSort = (keys: Column<UseType>) => {
    if (orderOriginal?.length !== rows.length && rows) {
      setOrderOriginal(doSaveOrder(rows))
    }
    if (Boolean(keys) && keys.name !== currentKeys?.name) {
      const currentKeysUpdate = updateParametersKeys(keys)
      setCurrentKeys(currentKeysUpdate)
      return doSort(currentKeysUpdate)
    } else {
      if (currentKeys) {
        const currentKeysUpdate = updateParametersKeys(currentKeys)
        setCurrentKeys(currentKeysUpdate)
        return doSort(currentKeysUpdate)
      }
    }
  }

  const doSort = (keys: KeysSort) => {
    const copy = [...data]
    switch (keys.order) {
      case SortType.ASCENDING:
        const sortData = copy.sort(byKey(keys))
        setData(sortData)
        break
      case SortType.DESCENDING:
        setData(copy?.reverse())
        break
      default:
        let dataRestore
        if (orderOriginal) {
          dataRestore = doRestoreOrder(orderOriginal, copy)
        }
        if (dataRestore && dataRestore?.length) {
          setData(dataRestore as UseType[])
        }
    }
  }

  return (
    <table className={cn("itpc-table-sort", className)} {...rest}>
      {columns?.length && (
        <TableSortHeader
          columns={columns}
          currentKeys={currentKeys}
          setKeySort={setKeysSort}
        />
      )}
      {data && (
        <TableSortBody rows={data} arrKeysNameTitle={arrKeysNameTitle} />
      )}
    </table>
  )
}
