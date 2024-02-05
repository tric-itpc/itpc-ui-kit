import React, { TableHTMLAttributes, useState } from "react"
import cn from "classnames"

import { TableSortHeaderTwoColumn, TableSortBody } from "../_components"
import { Column, SortType, UseType, SaveOrder, SaveKeys } from "../types"
import {
  getKeysNamesColumns,
  updateParametersKeysTwoColumns,
  doSaveOrder,
  byKeys,
  doRestoreOrder,
} from "../utils"
import "./styles.css"

export interface TableSortTwoColumnsProps<T extends UseType>
  extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column<T>[]
  rows: UseType<T>[]
  className?: string
}

export const TableSortTwoColumns: React.FC<TableSortTwoColumnsProps<any>> = ({
  columns,
  rows,
  className = "",
  ...rest
}: TableSortTwoColumnsProps<any>) => {
  const [saveKeys, setSaveKeys] = useState<SaveKeys<UseType>>({})
  const [data, setData] = useState(rows)
  const [arrKeysNameHeader, setArrKeysNameHeader] = useState<string[]>(
    getKeysNamesColumns(columns)
  )
  const [orderOriginal, setOrderOriginal] = useState<SaveOrder[] | undefined>(
    []
  )
  const [orderMainSorting, setOrderMainSorting] = useState<
    SaveOrder[] | undefined
  >([])

  const setKeysSort = (keys: Column<UseType>) => {
    const updateKeysSort = updateParametersKeysTwoColumns(keys, saveKeys)

    if (updateKeysSort) {
      setSaveKeys(updateKeysSort)
      return doSort(updateKeysSort, keys)
    }
  }

  const doSort = (updateKeysSort: SaveKeys<UseType>, keys: Column<UseType>) => {
    const copy = [...data]
    if (Object.keys(updateKeysSort).length === 0 && orderOriginal?.length) {
      setSaveKeys({})
      const dataRestore = doRestoreOrder(orderOriginal, copy)
      if (dataRestore && dataRestore?.length) {
        setData(dataRestore as UseType[])
      }
    }

    const mainKey = updateKeysSort?.mainKey
    const secondKey = updateKeysSort?.secondKey

    if (keys.name === mainKey?.name) {
      if (mainKey.order === SortType.ASCENDING) {
        const sortData = copy.sort(byKeys(updateKeysSort))

        setOrderOriginal(doSaveOrder(rows))
        setData(sortData)
      }
      if (
        mainKey.order === SortType.DESCENDING &&
        secondKey?.order === SortType.NONE
      ) {
        setData(copy.reverse())
      }
      if (
        mainKey.order === SortType.DESCENDING &&
        secondKey?.order !== SortType.NONE
      ) {
        const sortData = copy.sort(byKeys(updateKeysSort))
        setData(sortData)
      }
    }
    if (keys.name === secondKey?.name) {
      if (
        secondKey?.order !== SortType.NONE &&
        mainKey?.order === SortType.ASCENDING
      ) {
        setOrderMainSorting(doSaveOrder(data))
        const sortData = copy.sort(byKeys(updateKeysSort))

        setData(sortData)
      }
      if (
        secondKey?.order !== SortType.NONE &&
        mainKey?.order === SortType.DESCENDING
      ) {
        const sortData = copy.sort(byKeys(updateKeysSort))

        setOrderMainSorting(doSaveOrder(data))
        setData(sortData)
      }

      if (secondKey?.order === SortType.NONE && orderMainSorting) {
        const dataRestore = doRestoreOrder(orderMainSorting, copy)
        if (dataRestore?.length) {
          setData(dataRestore as UseType[])
        }
      }
    }
  }

  return (
    <table className={cn("itpc-table-sort", className)} {...rest}>
      {columns?.length && (
        <TableSortHeaderTwoColumn
          columns={columns}
          saveKeys={saveKeys}
          setKeySort={setKeysSort}
        />
      )}
      {data && (
        <TableSortBody
          rows={data}
          arrKeysNameHeader={arrKeysNameHeader}
          nameMainColumnSort={saveKeys?.mainKey?.name}
        />
      )}
    </table>
  )
}
