import React, { TableHTMLAttributes, useState } from "react"

import cn from "classnames"

import { TableSortBody, TableSortHeader } from "../_components"
import {
  Column,
  KeySort,
  KeysSort,
  RowType,
  SaveOrder,
  SortType,
} from "../types"
import {
  byKeys,
  getKeysNamesColumns,
  order,
  restoreOrder,
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
  className = "",
  rows,
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
      {
        setData([...data].sort(byKeys(updateKeysSort)))
      }
    }

    if (key.name === secondKey?.name) {
      if (secondKey?.order !== SortType.NONE) {
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
        <TableSortHeader
          columns={columns}
          currentKeys={currentKeys}
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
