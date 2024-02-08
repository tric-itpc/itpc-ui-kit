import React, { TableHTMLAttributes, useState } from "react"
import cn from "classnames"

import { TableSortHeaderTwoColumns, TableSortBody } from "../_components"
import {
  Column,
  RowType,
  SaveOrder,
  KeysSort,
  KeySort,
  SortType,
} from "../types"
import {
  byKeys,
  restoreOrder,
  order,
  getKeysNamesColumns,
  updateParametersKeys,
} from "../utils"
import "./styles.css"

export interface TableSortTwoColumnsProps<T extends RowType>
  extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column<T>[]
  rows: RowType<T>[]
  className?: string
}

export const TableSortTwoColumns: React.FC<TableSortTwoColumnsProps<any>> = ({
  columns,
  rows,
  className = "",
  ...rest
}: TableSortTwoColumnsProps<any>) => {
  const [currentKeys, setCurrentKeys] = useState<KeysSort<RowType>>({})
  const [data, setData] = useState<RowType[]>(rows)
  const [orderAscending, setOrderAscending] = useState<SaveOrder[]>([])
  const [orderDescending, setOrderDescending] = useState<SaveOrder[]>([])

  const setKeySort = (key: Column<RowType>): void => {
    const updateKeys = updateParametersKeys(key, currentKeys)
    return sort(updateKeys, key)
  }

  const sort = (
    updateKeysSort: KeysSort<RowType>,
    key: Column<RowType>
  ): void => {
    setCurrentKeys(updateKeysSort)
    if (Object.keys(updateKeysSort).length === 0) {
      setData(rows)
    }

    const mainKey: KeySort<RowType> | undefined = updateKeysSort?.mainKey
    const secondKey: KeySort<RowType> | undefined = updateKeysSort?.secondKey

    if (key.name === mainKey?.name) {
      if (mainKey.order === SortType.ASCENDING) {
        setData([...data].sort(byKeys(updateKeysSort)))
      }
      if (
        mainKey.order === SortType.DESCENDING &&
        secondKey?.order === SortType.NONE
      ) {
        setData([...data].sort(byKeys(updateKeysSort)))
      }
      if (
        mainKey.order === SortType.DESCENDING &&
        secondKey?.order !== SortType.NONE
      ) {
        setData([...data].sort(byKeys(updateKeysSort)))
      }
    }
    if (key.name === secondKey?.name) {
      if (
        secondKey?.order !== SortType.NONE &&
        mainKey?.order === SortType.ASCENDING
      ) {
        setData([...data].sort(byKeys(updateKeysSort)))
        if (!orderAscending.length) {
          setOrderAscending(order(data))
        }
      }
      if (
        secondKey?.order !== SortType.NONE &&
        mainKey?.order === SortType.DESCENDING
      ) {
        setData([...data].sort(byKeys(updateKeysSort)))
        if (!orderDescending.length) {
          setOrderDescending(order(data))
        }
      }

      if (secondKey?.order === SortType.NONE) {
        if (mainKey?.order === SortType.ASCENDING) {
          const dataRestore = restoreOrder(orderAscending, [...data])
          if (dataRestore?.length) {
            setData(dataRestore)
            setOrderAscending([])
          }
        } else {
          const dataRestore = restoreOrder(orderDescending, [...data])
          setData(dataRestore)
          setOrderDescending([])
        }
      }
    }
  }

  return (
    <table className={cn("itpc-table-sort", className)} {...rest}>
      {columns?.length && (
        <TableSortHeaderTwoColumns
          columns={columns}
          saveKeys={currentKeys}
          setKeySort={setKeySort}
        />
      )}
      {data && (
        <TableSortBody
          rows={data}
          arrKeysNameHeader={getKeysNamesColumns(columns)}
          nameMainColumnSort={currentKeys?.mainKey?.name}
        />
      )}
    </table>
  )
}
