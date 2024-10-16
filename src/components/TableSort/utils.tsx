import React from "react"

import { IconSortDown, IconSortUp } from "../_elements"
import { SortType } from "../../enums"

import {
  Column,
  KeySort,
  KeysSort,
  RowType,
  SaveOrder,
  SorterFn,
} from "./types"

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

export const getKeysNamesColumns = (
  column: Column<RowType>[]
): (keyof RowType)[] => column?.map((item: Column<RowType>) => item.name)

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

export const updateParametersKeys = (
  key: Column<RowType>,
  currentKeys?: KeysSort<RowType>
): KeysSort<RowType> => {
  let keys: KeysSort<RowType> = {}

  if (
    currentKeys?.mainKey?.name === key.name &&
    currentKeys?.mainKey?.order === SortType.DESCENDING
  ) {
    return keys
  }

  if (
    !Boolean(currentKeys?.mainKey) ||
    key.name === currentKeys?.mainKey?.name
  ) {
    if (!currentKeys?.secondKey) {
      keys = {
        mainKey: {
          ...key,
          order: currentKeys?.mainKey?.order
            ? toggleSort(currentKeys?.mainKey?.order)
            : SortType.ASCENDING,
          sorter: !key?.sorter ? sorterFn(key) : key?.sorter,
        },
      }
    } else {
      keys = {
        mainKey: {
          ...key,
          order: currentKeys?.mainKey?.order
            ? toggleSort(currentKeys?.mainKey?.order)
            : SortType.ASCENDING,
          sorter: !key?.sorter ? sorterFn(key) : key?.sorter,
        },
        secondKey: currentKeys.secondKey,
      }
    }
  } else {
    if (key.name === currentKeys?.secondKey?.name) {
      keys = {
        mainKey: currentKeys?.mainKey,
        secondKey: {
          ...key,
          order: currentKeys?.secondKey?.order
            ? toggleSort(currentKeys?.secondKey?.order)
            : SortType.ASCENDING,
          sorter: !key?.sorter ? sorterFn(key) : key?.sorter,
        },
      }
    } else {
      keys = {
        mainKey: currentKeys?.mainKey,
        secondKey: {
          ...key,
          order: SortType.ASCENDING,
          sorter: !key?.sorter ? sorterFn(key) : key?.sorter,
        },
      }
    }
  }

  return keys
}

export const renderIconTwoColumns = (
  column: Column<RowType>,
  currentKeys?: KeysSort<RowType>
): React.ReactNode => {
  if (column?.isSortable) {
    const mainKey = currentKeys?.mainKey
    const secondKey = currentKeys?.secondKey

    if (column.name === mainKey?.name) {
      return renderIcon(column, mainKey)
    }
    if (column.name === secondKey?.name) {
      return renderIcon(column, secondKey)
    }

    if (column.name !== secondKey?.name || mainKey?.name) {
      return <IconSortUp />
    }
  }
}

export const byKeys =
  (currentKeys: KeysSort<RowType>) =>
  (a: RowType, b: RowType): number => {
    const main = currentKeys?.mainKey
    const second = currentKeys?.secondKey
    if (main?.sorter?.(a, b) === 0) {
      if (second?.sorter && second.order === SortType.ASCENDING) {
        return second.sorter(a, b)
      }

      if (second?.sorter && second.order === SortType.DESCENDING) {
        return second.sorter(a, b) * -1
      }
    } else {
      if (main?.sorter) {
        if (main.order === SortType.DESCENDING) {
          return main.sorter(a, b) * -1
        }
        return main.sorter(a, b)
      }
    }
    return 0
  }

export const order = (rows: RowType[]): SaveOrder[] =>
  rows?.map((el: RowType, i: number) => ({
    _id: el.id,
    index: i,
  }))

export const restoreOrder = (
  saveOrder: SaveOrder[],
  rows: RowType[]
): RowType[] =>
  saveOrder.map((el: SaveOrder) => {
    const index: number = rows?.findIndex((row: RowType) => row?.id === el?._id)
    return rows[index]
  })
