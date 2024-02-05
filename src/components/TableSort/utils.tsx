import { UseType, SaveOrder, SortType, Column, KeysSort } from "./types"
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

export const sorterFn = (currentKeys: Column<UseType>) => {
  if (Object.keys(currentKeys.name).length !== 0) {
    return (a: UseType, b: UseType): number =>
      Number(a[currentKeys?.name] > b[currentKeys?.name]) -
      Number(a[currentKeys?.name] < b[currentKeys?.name])
  }
}

export const updateParametersKeys = (
  keys: Column<UseType> | KeysSort<UseType>
) => {
  if ("order" in keys) {
    const updateKeys = {
      ...keys,
      order: keys.order && toggleSort(keys?.order),
    }
    return updateKeys as KeysSort<UseType>
  } else {
    const updateKeys = {
      ...keys,
      order: SortType.ASCENDING,
      sorter: !keys.sorter ? sorterFn(keys as Column<UseType>) : keys.sorter,
    }
    return updateKeys as KeysSort<UseType>
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

export const renderIcon = (
  values: Column<UseType>,
  currentKeys?: KeysSort<UseType>
) => {
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

export const byKey = (keys: KeysSort<UseType>) => (a: UseType, b: UseType) => {
  if (keys && keys.sorter) {
    return keys.sorter(a, b)
  }
  return 0
}
