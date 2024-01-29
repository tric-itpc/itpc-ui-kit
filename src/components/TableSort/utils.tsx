import {
  UseType,
  SaveOrder,
  SortType,
  SorterFn,
  Column,
  KeysSort,
} from "./types"
import { IconSortDown, IconSortUp } from "../_elements"
import React from "react"

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
  column: Column<UseType>[] | undefined
): string[] => {
  if (column?.length) {
    const result = column.map((item) => item.name)
    return result as string[]
  }
  return []
}

export const sorterFn = (sorter: SorterFn | undefined) => {
  if (!sorter) {
    return (a: UseType, b: UseType): number => Number(a > b) - Number(a < b)
  }
  return sorter
}

export const updateParametersKeys = (keys: Column<UseType> | KeysSort) => {
  if ("order" in keys) {
    const currentKeys = {
      ...keys,
      order: keys.order && toggleSort(keys?.order),
      sorter: sorterFn(keys.sorter),
    }
    return currentKeys as KeysSort
  } else {
    const currentKeys = {
      ...keys,
      order: SortType.ASCENDING,
      sorter: sorterFn(keys.sorter),
    }
    return currentKeys as KeysSort
  }
}

export const doSaveOrder = (rows: UseType[]) => {
  if (rows?.length) {
    const result: SaveOrder[] = rows.map((el: UseType, i: number) => ({
      index: i,
      _id: el.id,
    }))
    return result
  }
}

export const doRestoreOrder = (saveOrder: SaveOrder[], dataBody: UseType[]) =>
  saveOrder.map((el: SaveOrder) =>
    dataBody.find((elBody: UseType) => elBody.id === el._id)
  )

export const renderIcon = (values: Column<UseType>, currentKeys?: KeysSort) => {
  if (values?.isSortable) {
    if (values.name === currentKeys?.name) {
      switch (currentKeys?.order) {
        case SortType.ASCENDING:
          return (
            <IconSortUp
              isActiveIcon={currentKeys?.order === SortType.ASCENDING}
            />
          )
        case SortType.DESCENDING:
          return (
            <IconSortDown
              isActiveIcon={currentKeys?.order === SortType.DESCENDING}
            />
          )
        default:
          return <IconSortUp />
      }
    } else {
      return <IconSortUp />
    }
  }
}

export const byKey = (keys: KeysSort) => (a: UseType, b: UseType) => {
  if (keys && keys.sorter) {
    return keys.sorter(a, b)
  }
  return 0
}
