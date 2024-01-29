import React, { TableHTMLAttributes, useCallback, useState } from "react"

import cn from "classnames"

import { NumberColumns, SortType } from "../types"

import { TableSortBody, TableSortHeader } from "./_components"
import "./styles.css"
import { Column, KeySort, KeysSort, RowType, SaveOrder } from "./types"
import {
  addColumn,
  addParameterInRows,
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
  className?: string
  columns?: Column<T>[]
  nameColumnIndex?: string
  rows: RowType<T>[]
  sortByNumberColumns?: NumberColumns
}

export const TableSort: React.FC<TableSortProps<any>> = ({
  className = "",
  columns,
  nameColumnIndex,
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

  const dataColumns = useCallback(
    (
      columns: Column<RowType>[],
      nameColumnIndex?: string
    ): Column<RowType>[] => {
      if (nameColumnIndex !== undefined) {
        return addColumn(columns, nameColumnIndex)
      } else {
        return columns
      }
    },
    [columns, nameColumnIndex]
  )

  const dataRows = useCallback(
    (rows: RowType[], nameColumnIndex?: string): RowType[] => {
      if (nameColumnIndex !== undefined) {
        return addParameterInRows(rows)
      } else {
        return rows
      }
    },
    [rows, nameColumnIndex]
  )

  const arrKeysNameColumns = useCallback(
    (columns: Column<RowType>[], nameColumnIndex?: string): (keyof RowType)[] =>
      getKeysNamesColumns(columns, nameColumnIndex),
    [columns, nameColumnIndex]
  )

  return (
    <table className={cn("itpc-table-sort", className)} {...rest}>
      {columns?.length && (
        <TableSortHeader
          columns={dataColumns(columns, nameColumnIndex)}
          currentKey={currentKey}
          currentKeys={currentKeys}
          setKeySort={setKeySort}
          sortByNumberColumns={sortByNumberColumns}
        />
      )}

      {data && (
        <TableSortBody
          arrKeysNameColumns={
            columns && arrKeysNameColumns(columns, nameColumnIndex)
          }
          nameMainColumnSort={currentKeys?.mainKey?.name}
          rows={dataRows(data, nameColumnIndex)}
          sortByNumberColumns={sortByNumberColumns}
        />
      )}
    </table>
  )
}
