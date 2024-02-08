import React, { ReactElement } from "react"

import { IconSortDown, IconSortUp } from "../_elements"
import {
  RowType,
  SortType,
  Column,
  KeySort,
  SorterFn,
  KeysSort,
  SaveOrder,
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
  let updateKey
  if (Boolean(key) && key.name === columnKey?.name) {
    updateKey = updateParametersKey(columnKey)
  } else {
    updateKey = updateParametersKey(key)
  }
  return updateKey
}

const updateParametersKey = (
  key: Column<RowType> | KeySort<RowType>
): KeySort<RowType> => {
  if ("order" in key) {
    const updateKey = {
      ...key,
      order: key.order && toggleSort(key?.order),
    }
    return updateKey
  } else {
    const updateKey = {
      ...key,
      order: SortType.ASCENDING,
      sorter: !key.sorter ? sorterFn(key as Column<RowType>) : key.sorter,
    }
    return updateKey
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
): ReactElement | undefined => {
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
  return
}

export const updateParametersKeys = (
  key: Column<RowType>,
  currentKeys?: KeysSort<RowType>
): KeysSort<RowType> => {
  let keys: KeysSort<RowType>

  if (
    currentKeys?.mainKey?.name === key.name &&
    currentKeys?.mainKey?.order === SortType.DESCENDING
  ) {
    return {}
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
    return keys
  } else {
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
    return keys
  }
}

export const renderIconTwoColumns = (
  values: Column<RowType>,
  currentKeys?: KeysSort<RowType>
): ReactElement | undefined => {
  if (values?.isSortable) {
    const mainKey = currentKeys?.mainKey
    const secondKey = currentKeys?.secondKey

    if (values.name === mainKey?.name) {
      return renderIcon(values, mainKey)
    }
    if (values.name === secondKey?.name) {
      return renderIcon(values, secondKey)
    }
    if (values.name !== secondKey?.name || mainKey?.name) {
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
    index: i,
    _id: el.id,
  }))

export const restoreOrder = (
  saveOrder: SaveOrder[],
  rows: RowType[]
): RowType[] => {
  const restoreRows: RowType[] = saveOrder.map((el: SaveOrder) => {
    const index: number = rows?.findIndex((row: RowType) => row?.id === el?._id)
    return rows[index]
  })
  return restoreRows
}
