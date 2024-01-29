export enum SortType {
  NONE = "none",
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export type UseType<T = object> = {
  [key in keyof T]: T[key]
} & {
  id: string
}

export type SorterFn<T extends UseType = UseType> = (a: T, b: T) => number

export interface Column<T> {
  name: keyof T
  title: string
  isSortable: boolean
  sorter?: (a: T, b: T) => number
}

export interface KeysSort {
  name: string
  isSortable: boolean
  order?: SortType
  sorter?: SorterFn
}

export interface SaveOrder {
  index: number
  _id: string
}
