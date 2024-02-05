import {
  UseType,
  SaveOrder,
  SortType,
  Column,
  KeysSort,
  SaveKeys,
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

export const updateParametersKeysTwoColumns = (
  currentKeys: Column<UseType>,
  saveKeys: SaveKeys<UseType>
) => {
  let updateKeys: SaveKeys<UseType>
  const saveSecondKey = saveKeys.secondKey
  const saveMainKey = saveKeys.mainKey
  if (Object.keys(currentKeys).length !== 0) {
    if (!Boolean(saveMainKey)) {
      updateKeys = {
        mainKey: {
          ...currentKeys,
          order: SortType.ASCENDING,
          sorter: !currentKeys.sorter
            ? sorterFn(currentKeys)
            : currentKeys.sorter,
        },
      }
      return updateKeys as SaveKeys<UseType>
    }
    if (Boolean(saveMainKey)) {
      if (
        currentKeys.name === saveMainKey?.name &&
        saveMainKey.order !== SortType.DESCENDING
      ) {
        updateKeys = {
          mainKey: {
            ...currentKeys,
            order: saveMainKey.order && toggleSort(saveMainKey.order),
            sorter: !currentKeys.sorter
              ? sorterFn(currentKeys)
              : currentKeys.sorter,
          },
          secondKey: saveSecondKey ?? saveSecondKey,
        }
        return updateKeys as SaveKeys<UseType>
      }
      if (
        currentKeys.name === saveMainKey?.name &&
        saveMainKey.order === SortType.DESCENDING
      ) {
        updateKeys = {}
        return updateKeys as SaveKeys<UseType>
      }

      if (saveSecondKey?.name !== currentKeys.name) {
        updateKeys = {
          mainKey: saveKeys.mainKey,
          secondKey: {
            ...currentKeys,
            order: SortType.ASCENDING,
            sorter: !currentKeys.sorter
              ? sorterFn(currentKeys)
              : currentKeys.sorter,
          },
        }
        return updateKeys as SaveKeys<UseType>
      }

      if (Boolean(saveMainKey) && saveSecondKey?.name === currentKeys.name) {
        updateKeys = {
          mainKey: saveMainKey,
          secondKey: {
            ...currentKeys,
            order: saveSecondKey.order && toggleSort(saveSecondKey.order),
            sorter: !currentKeys.sorter
              ? sorterFn(currentKeys)
              : currentKeys.sorter,
          },
        }
        return updateKeys as SaveKeys<UseType>
      }
    }
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

export const renderIconTwoColumns = (
  values: Column<UseType>,
  currentKeys?: SaveKeys<UseType>
) => {
  if (values?.isSortable) {
    const mainKey = currentKeys?.mainKey as KeysSort<UseType>
    const secondKey = currentKeys?.secondKey as KeysSort<UseType>

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

export const byKey = (keys: KeysSort<UseType>) => (a: UseType, b: UseType) => {
  if (keys && keys.sorter) {
    return keys.sorter(a, b)
  }
  return 0
}

export const byKeys =
  (currentKeys: SaveKeys<UseType>) => (a: UseType, b: UseType) => {
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
