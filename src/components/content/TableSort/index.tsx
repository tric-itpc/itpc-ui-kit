import React, { TableHTMLAttributes, useState } from "react"

import cn from "classnames"

import { NumberColumns, SortType } from "../../../enums"

import { TableSortBody, TableSortHeader } from "./_components"
import "./styles.css"
import { Column, KeySort, KeysSort, RowType, SaveOrder } from "./types"
import {
  byKey,
  byKeys,
  getKeysNamesColumns,
  order,
  restoreOrder,
  setKey,
  updateParametersKeys,
} from "./utils"

export interface TableSortProps<T extends RowType>
  extends TableHTMLAttributes<HTMLTableElement> {
  /** Дополнительный класс */
  className?: string
  /** Колонки */
  columns?: Column<T>[]
  /** Строки */
  rows: RowType<T>[]
  /** Вариант сортировки по столбцам */
  sortByNumberColumns?: NumberColumns
}

export const TableSort: React.FC<TableSortProps<any>> = ({
  className = "",
  columns,
  rows,
  sortByNumberColumns = NumberColumns.ZERO,
  ...rest
}: TableSortProps<any>) => {
  const [currentKey, setCurrentKey] = useState<KeySort<RowType>>()
  const [currentKeys, setCurrentKeys] = useState<KeysSort<RowType>>({})
  const [data, setData] = useState<RowType[]>(rows)
  const [orderAscending, setOrderAscending] = useState<SaveOrder[]>([])
  const [orderDescending, setOrderDescending] = useState<SaveOrder[]>([])

  const sortByOneColumn = (key: KeySort<RowType>): void => {
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

  const sortByTwoColumns = (
    key: Column<RowType>,
    updateKeysSort: KeysSort<RowType>
  ): void => {
    setCurrentKeys(updateKeysSort)
    if (Object.keys(updateKeysSort).length === 0) {
      setData(rows)
    }

    const mainKey: KeySort<RowType> | undefined = updateKeysSort?.mainKey
    const secondKey: KeySort<RowType> | undefined = updateKeysSort?.secondKey

    if (key.name === mainKey?.name) {
      {
        setData([...data].sort(byKeys(updateKeysSort)))
      }
    }

    if (key.name === secondKey?.name) {
      if (
        secondKey?.order !== SortType.NONE &&
        mainKey?.order !== SortType.NONE
      ) {
        setData([...data].sort(byKeys(updateKeysSort)))
        if (!orderAscending.length && mainKey?.order === SortType.ASCENDING) {
          setOrderAscending(order([...data]))
        }
        if (!orderDescending.length && mainKey?.order === SortType.DESCENDING) {
          setOrderDescending(order([...data]))
        }
      }

      if (secondKey?.order === SortType.NONE) {
        if (mainKey?.order === SortType.ASCENDING) {
          setData(restoreOrder(orderAscending, [...data]))
          setOrderAscending([])
        } else {
          setData(restoreOrder(orderDescending, [...data]))
          setOrderDescending([])
        }
      }
    }
  }

  const setKeySort = (key: Column<RowType>): void => {
    if (sortByNumberColumns === NumberColumns.ONE) {
      return sortByOneColumn(setKey(key, currentKey))
    }
    if (sortByNumberColumns === NumberColumns.TWO) {
      const updateKeys = updateParametersKeys(key, currentKeys)
      return sortByTwoColumns(key, updateKeys)
    }
  }

  return (
    <table {...rest} className={cn("itpc-table-sort", className)}>
      {columns?.length && (
        <TableSortHeader
          columns={columns}
          currentKey={currentKey}
          currentKeys={currentKeys}
          setKeySort={setKeySort}
          sortByNumberColumns={sortByNumberColumns}
        />
      )}

      {data && (
        <TableSortBody
          arrKeysNameColumns={columns && getKeysNamesColumns(columns)}
          nameMainColumnSort={currentKeys?.mainKey?.name}
          rows={data}
          sortByNumberColumns={sortByNumberColumns}
        />
      )}
    </table>
  )
}
