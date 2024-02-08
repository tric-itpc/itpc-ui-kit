import React from "react"

import { IconSortDown, IconSortUp } from "../_elements"

import { Column, KeySort, RowType, SorterFn, SortType } from "./types"

export const toggleSort = (orderSort: SortType): SortType => {
  switch (orderSort) {
    case SortType.NONE:
      return SortType.ASCENDING
    case SortType.ASCENDING:
      return SortType.DESCENDING
    case SortType.DESCENDING:
      return SortType.NONE
    default:
      return SortType.NONE
  }
}

export const getKeysNamesColumns = (column: Column<RowType>[]): string[] =>
  column?.map((item: Column<RowType>) => item.name)

export const sorterFn =
  (currentKey: Column<RowType>): SorterFn<RowType> =>
  (a: RowType, b: RowType): number =>
    Number(a[currentKey?.name] > b[currentKey?.name]) -
    Number(a[currentKey?.name] < b[currentKey?.name])

export const setKey = (
  key: Column<RowType>,
  columnKey?: KeySort<RowType>
): KeySort<RowType> => {
  if (Boolean(key) && key.name === columnKey?.name) {
    return updateParametersKey(columnKey)
  } else {
    return updateParametersKey(key)
  }
}

const updateParametersKey = (
  key: KeySort<RowType> | Column<RowType>
): KeySort<RowType> => {
  if ("order" in key) {
    return {
      ...key,
      order: key.order && toggleSort(key?.order),
    }
  } else {
    return {
      ...key,
      order: SortType.ASCENDING,
      sorter: !key.sorter ? sorterFn(key as Column<RowType>) : key.sorter,
    }
  }
}

export const byKey =
  (key: KeySort<RowType>) =>
  (a: RowType, b: RowType): number => {
    if (key && key.sorter) {
      return key.sorter(a, b)
    }

    return 0
  }

export const renderIcon = (
  column: Column<RowType>,
  columnKey?: KeySort<RowType>
): React.ReactNode => {
  if (column?.isSortable) {
    if (column.name === columnKey?.name) {
      switch (columnKey?.order) {
        case SortType.ASCENDING:
          return <IconSortUp isActiveIcon />

        case SortType.DESCENDING:
          return <IconSortDown isActiveIcon />

        default:
          return <IconSortUp />
      }
    } else {
      return <IconSortUp />
    }
  }

  return null
}
