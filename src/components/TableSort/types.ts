export enum SortType {
  NONE = "none",
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export type RowType<T = object> = {
  [key in keyof T]: T[key]
} & {
  id: string
}

export type SorterFn<T> = (a: T, b: T) => number

export interface Column<T> {
  name: keyof T
  title: string
  isSortable: boolean
  sorter?: SorterFn<T>
}

export interface KeySort<T> {
  name: string
  isSortable: boolean
  order: SortType
  sorter: SorterFn<T>
}

export interface KeysSort<T> {
  mainKey?: KeySort<T>
  secondKey?: KeySort<T>
}

export interface SaveOrder {
  index: number
  _id: string
}
